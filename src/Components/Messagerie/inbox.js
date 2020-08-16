import React, { Component } from "react";
import { InboxHtml } from "./inboxx";
import ModalCompose from "./modalcompose";
import ModalMessage from "./modelmessage";
import {connect} from 'react-redux'
import {getmessages,updatemessages,delatemessage} from '../../action/messagerie'
import Cookies from 'js-cookie'
import Axios from 'axios'
import {URL} from '../../api/Url'
export class Inbox extends Component {
  constructor(props) {
    super(props);
   /* this.markRead = this.markRead.bind(this);
    this.doShow = this.doShow.bind(this);
    this.doDelete = this.doDelete.bind(this);
    this.toggleMark = this.toggleMark.bind(this);
    this.toggleMarkAll = this.toggleMarkAll.bind(this);
    this.deleteMarked = this.deleteMarked.bind(this);
    this.refreshMessages = this.refreshMessages.bind(this);
    this.deleteMessages = this.deleteMessages.bind(this);*/
    this.ModalMessage = React.createRef();
    this.ModalCompose = React.createRef();
    this.state = {
      initMessages:[] ,
      messages: "",
      selected: {},
      deleted: [],
      draft : []
    };
  }
 componentDidMount(){
Axios.get(URL + `app/getcurentemail/${Cookies.get("_id")}`)
  .then(res => {console.log(res.data)
  this.setState({initMessages : [res.data]})}
  )
  this.props.getmessages(this.props.id)
 }
 static getDerivedStateFromProps(nextProps, prevState) {
  if(nextProps.message!== prevState.messages ){
    //Perform some operation
   
    return { messages: nextProps.message.filter(el => el.deleted ==false && el.draft ==false)  ,deleted: nextProps.message.filter(el => el.deleted ==true) ,draft: nextProps.message.filter(el => el.draft ==true &&  el.deleted ==false)   };
  }
  else return null; // Triggers no change in the state
}
  markRead = (idx)  => {
    /* mark this message as read */
    let messages = [...this.state.messages];
    this.props.updatemessages(this.state.messages[idx]._id)
    messages[idx].read = true;
    this.setState({ messages });
  }

  doShow = (idx)  =>{
    this.markRead(idx)
    this.setState({
      selected: this.state.messages[idx]
    });
   }
   doDeletedraft= (idx) => {

    this.props.delatemessage(this.state.draft[idx]._id)
    let messages =this.state.draft.splice(idx, 1);
    this.setState({ deleted : [...this.state.deleted,messages] });

   }
   markReaddraft = (idx)  => {
    /* mark this message as read */
    let deleted = [...this.state.draft];
    console.log("delated" , deleted)
  console.log("message" , deleted[idx])
  
  }
   doShowdraft = (idx) => {
    this.markReaddraft(idx)
     console.log(idx)
    this.setState({
      selected: this.state.draft[idx]
    });
   }
    /* open message in modal */

  doCompose = () => {
    /* open compose modal */
    this.ModalCompose.current.show();
  }

  toggleMark = (idx) => {
    let messages = [...this.state.messages];
    messages[idx].marked = messages[idx].marked ? 0 : 1;
    this.setState({ messages });
  }

  doDelete = (idx) =>  {
    /* append it to deleted */
   let xelement = this.state.messages[idx]._id
    let detlated = this.state.messages.filter(el => el._id !== xelement)
    /* remove the message at idx */
    /*update base */
    this.props.delatemessage(this.state.messages[idx]._id)
    let messages =this.state.messages.splice(idx, 1);
    this.setState({ deleted : [...this.state.deleted,messages] });
 
  }

  toggleMarkAll = ()  => {
    let messages = [...this.state.messages];
    messages.map((v, k) => {
      return (v.marked = v.marked ? 0 : 1);
    });
    this.setState({ messages });
  }

  deleteMarked = ()  => {
    let messages = [...this.state.messages];
    for (let i = 0;  i< messages.length; i++) {
      if (messages[i].marked === 1) {
        this.props.delatemessage(messages[i]._id)
       console.log("marked",messages[i]._id)
      }
    }

  
  }

  
  deleteMessages =(arr)  => {
    let messages = [...this.state.messages];
    let deleted = [...this.state.deleted];
    for (var i = arr.length - 1; i >= 0; i--) {
      deleted.push(messages[i]);
      messages.splice(arr[i], 1);
    }
    this.setState({ messages, deleted });
  }

  render() {
    return (

      <div> {this.state.messages ? <>
        <InboxHtml parent={this} />
        <ModalCompose sendTo={this.state.selected.fromAddress} subject = {this.state.selected.subject } idcobversation={this.state.selected._id} initmessage = {this.state.initMessages} /></>
     : null }
      </div>
    );
  }
}
const mapstatetoprops = (state) => ({
  message : state.message
  
 })
 const mapdispatchtoprops = (disptach) => ({
  getmessages : (id) => disptach(getmessages(id)),
  updatemessages : (id) => disptach(updatemessages(id)),
  delatemessage : (id) => disptach(delatemessage(id))

 
 })
export default connect (mapstatetoprops,mapdispatchtoprops)(Inbox);