import React from "react";
import jquery from "jquery";
import {connect} from 'react-redux'
import {updatemessagesconversation} from '../../action/messagerie'
import {sendemessages} from '../../action/messagerie'
import {recupereremail} from '../../action/Email'
import Cookies from 'js-cookie'
import { TumblrShareButton } from "react-share";
export class ModalCompose extends React.Component {
  constructor(props) {
    super(props);
    this.show = this.show.bind(this);
    this.state = {
      emaill:"",
      subjectt:"",
      messagee:""
    };
  }
componentDidMount(){
 
  this.props.recupereremail(Cookies.get('_id'))
}
  show(idx) {
    /* open message in modal */
    jquery(this.refs.composeModal).modal("show");
  }
  senddraftmessage = () => {
    const messages = {
      draft : true,
      new  : true,
      deleted : false,
      read : false,
      to:  this.state.emaill,
      from : this.props.email.Nom , 
      fromid : Cookies.get("_id"),
      fromAddress  : this.props.email.email,
      subject:this.state.subjectt,
      body:this.state.messagee,
      fromreplay :"",
      repalymessage : []
      }
      this.props.sendemessages(messages)
     
     }
  
  sendmessage = (event) => {
 
    event.preventDefault()
let donner = {fromreplay : this.props.initmessage[0].Nom  + " "+ this.props.initmessage[0].Prenom,
   repalymessage : this.state.messagee
} 
    if ( this.props.subject)
    this.props.updatemessagesconversation(this.props.idcobversation,donner)
     else 
     {
     const messages = {
      draft : false,
      deleted : false,
      new : true,
      read : false,
      to:  this.state.emaill,
      from : this.props.email.Nom , 
      fromid : Cookies.get("_id"),
      fromAddress  : this.props.email.email,
      subject:this.state.subjectt,
      body:this.state.messagee,
      fromreplay :"",
      repalymessage : []
      }
      this.props.sendemessages(messages)
     
     }
  }
  render() {
    return (
      <div
      
        id="composeModal"
        className="modal fade mt-0 mt-md-5"
        tabIndex="10"
        role="dialog"
        aria-hidden="true"
        ref="composeModal"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="text-uppercase text-muted">Compose</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
                <span className="sr-only">Close</span>
              </button>
            </div>
            <div className="modal-body">
              <div>
                <div className="form-row py-2">
                  <label htmlFor="sendTo" className="col-sm-2 mb-0">
                    To
                  </label>
                  <div className="col">
                    <input
                     
                      name="sendTo"
                      id="sendTo"
                      className="form-control"
                      required=""
                      value={this.props.sendTo}
                      onChange = {(e) => this.setState({emaill : e.target.value})}
                      disabled = {this.props.sendTo ? true : false}
                    />
                  </div>
                </div>
                <div className="form-row py-2">
                  <label htmlFor="subject" className="col-sm-2 mb-0">
                    Subject
                  </label>
                  <div className="col">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={this.props.subject}
                      className="form-control"
                      required=""
                      disabled = {this.props.subject ? true : false}
                      onChange = {(e) => this.setState({subjectt : e.target.value})}
                    />
                  </div>
                </div>
                <div className="form-row py-2">
                  <label htmlFor="message2" className="col-sm-2 mb-0">
                    Message
                  </label>
                  <div className="col">
                    <textarea
                      rows="6"
                      name="message2"
                      id="message2"
                      className="form-control"
                      required=""
                      onChange = {(e) => this.setState({messagee : e.target.value})}
                    />
                  </div>
                </div>
                <div className="form-row py-2">
                  <div className="col-sm-auto py-1">
                  { /* 
                    <button
                      type="submit"
                      className="btn btn-outline-secondary btn-block"
                    >
                      Attachments
                      <i className="align-middle icon-paper-clip fa fa-paperclip ml-1" />
                    </button>
                  */}
                  </div>
                  <div className="col py-1">
                    <button
                    
                      className="btn btn-secondary float-right ml-1"
                      onClick = {this.sendmessage} >
                      Send Message
                    </button>
                    {!this.props.subject ?  <button
                      className="btn btn-outline-secondary float-right"
                      onClick = {this.senddraftmessage} 
                    >
                      Save Draft
                    </button> : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapstatetoprops = (state) => ({
  email : state.email
 })
const mapdispatchtoprops = (disptach) => ({
  updatemessagesconversation : (id,donner) => disptach(updatemessagesconversation(id,donner)),
  sendemessages : (message) => disptach(sendemessages(message)),
  recupereremail:(id) => disptach(recupereremail(id))

 
 })
export default  connect (mapstatetoprops,mapdispatchtoprops)(ModalCompose)

{/*
{
    "id": 2,
    "from": "ahmed amir",
    "fromAddress": "test@testdomain.com",
    "subject": "In Late Today",
    "dtSent": "Today, 8:54AM",
    "read": false,
    "body": "Mark,<br>I will be in late today due to an appt.<br>v/r Bob",
    "attachment": false
  },
  {
    "id": 3,
    "from": "mehzez hosnii",
    "fromAddress": "test@testbar.com",
    "subject": "New developer",
    "dtSent": "Yesterday, 4:48PM",
    "read": true,
    "body": "Here is the last resume for the developer position we posted on SO. Please review and let me know your thoughts!",
    "attachment": true
  },
  {
    "id": 4,
    "from": "mohamed ali klay",
    "fromAddress": "test@domain.com",
    "subject": "RE: New developer",
    "dtSent": "Yesterday, 4:40PM",
    "read": false,
    "body": "I looked at the resume, but the guy looks like a moron.",
    "priority": 1
  },
  {
    "id": 4,
    "from": "samir ganem",
    "fromAddress": "test@mail.com",
    "subject": "July Reports",
    "dtSent": "3 Days Ago",
    "read": true,
    "body": "PYC Staff-<br> Our weekly meeting is canceled due to the holiday. Please review and submit your PID report before next week's meeting.<br>Thanks,<br>Beth"
  },
  {
    "id": 6,
    "from": "mohsen ali",
    "fromAddress": "test@domain.com",
    "subject": "New developer",
    "dtSent": "3 Days Ago",
    "read": true,
    "body": "All,<br>I'd like to introduce Joe Canfigliata our new S/W developer. If you see him in the office introduce yourself and make him feel welcome."
  },
  {
    "id": 7,
    "from": "kamal ben ali",
    "fromAddress": "test@test.com",
    "subject": "Tasking request",
    "dtSent": "3 Days Ago",
    "read": true,
    "body": "Ovi lipsu doir. The message body goes here..."
  },
  {
    "id": 8,
    "from": "kaml ben ali",
    "fromAddress": "test@test.com",
    "subject": "Proposal for Avid Consulting",
    "dtSent": "3 Days Ago",
    "read": true,
    "body": "Mark, I reviewed your proposal with Beth and we have a few questions. Let me know when you time to meet."
  },
  {
    "id": 9,
    "from": "salh malh",
    "fromAddress": "test@testdomain.com",
    "subject": "Follow-up Appt.",
    "dtSent": "4 Days Ago",
    "read": true,
    "body": "Hi,<br>Can you please confirm the expense report I submitted for my last trip to SD?<br>Thanks,<br>Tom Grey"
  }




*/}