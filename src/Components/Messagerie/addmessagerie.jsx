import React, { Component } from 'react'
import {connect} from 'react-redux'
import {sendemessages} from '../../action/messagerie'
import Cookies from 'js-cookie' 
 class Addmessagerie extends Component {
state={
    titre : '',
    message :''
}
    onchangetitre(e){
  this.setState({titre : e.target.value})
    }
    onchangemesage(e){
        this.setState({message : e.target.value})
    }
    onclicksend()
    {
        const messages = {
            titre:this.state.titre,
            message : this.state.message,
            from :Cookies.get("_id"),
            to :  this.props.match.params.id,
        }
  this.props.sendemessages(messages)
  this.setState({titre:''})
  this.setState({message:''})
    }
    render() {
        return (
            <div className="container">
                <div className="centre">
                <div class="row">
    <div class="col-sm-4">
    <label>Titre</label>
    </div>
    <div class="col">
    <input type="text"  className="btn-block" onChange={(e) =>this.onchangetitre(e)}></input>
    </div>
  </div>  <br/>
             
  <div class="row">
    <div class="col-sm-4" style={{backgroundColor:"red"}}>
                <label>message</label>
                </div>
                <div class="col " style={{backgroundColor:"blue"}}>       
                <textarea className="btn-block" onChange={(e) =>this.onchangemesage(e) }></textarea>
                </div></div><br/>
                <button onClick={() =>this.onclicksend() } className="btn btn-success">envoyer message</button>
                </div>
            </div>
        )
    }
}
const mapstatetoprops = (state) => ({

   })
   const mapdispatchtoprops = (disptach) => ({
    sendemessages : (message) => disptach(sendemessages(message)),
    
   
   })
export default connect (mapstatetoprops,mapdispatchtoprops) (Addmessagerie);

