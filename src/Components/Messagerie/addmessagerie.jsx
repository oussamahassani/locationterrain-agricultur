import React, { Component } from 'react'
import {connect} from 'react-redux'
import {sendemessages} from '../../action/messagerie'
import {recupereremail} from '../../action/Email'
import Cookies from 'js-cookie' 
 class Addmessagerie extends Component {
state={
    titre : '',
    message :''
}
componentDidMount()
{
    this.props.recupereremail(Cookies.get("_id"))
}
    onchangetitre(e){
  this.setState({titre : e.target.value})
    }
    onchangemesage(e){
        this.setState({message : e.target.value})
    }
    onclicksend()
    { const nom =  this.props.email.Nom + " " + this.props.email.Prenom;
      console.log(nom)
        const messages = {
        draft : false,
        deleted : false,
        read : false,
        to: this.props.match.params.id, 
        from : nom , 
        fromAddress  : this.props.email.email,
        subject:this.state.titre,
        body:this.state.message,
        fromreplay :"",
        repalymessage : []
        }
  this.props.sendemessages(messages)
  this.setState({titre:''})
  this.setState({message:''})
    }
    render() {
        return (
            <div className="container">
                
                <div className="centre">
                <h4 className="text-center">Contacter l'annonceur</h4>
                <div class="row">
    <div class="col-sm-4">
    <label>Titre</label>
    </div>
    <div class="col">
    <input type="text"  className="btn-block" onChange={(e) =>this.onchangetitre(e)}></input>
    </div>
  </div>  <br/>
             
  <div class="row">
    
    <div class="col-sm-4" >
 
                <label>Message</label>
                </div>
                <div class="col">       
                <textarea className="btn-block" onChange={(e) =>this.onchangemesage(e) } rows="6" cols="50"></textarea>
                </div></div><br/>
                <button onClick={() =>this.onclicksend() } className="btn btn-success">Envoyer message</button>
                </div>
            </div>
        )
    }
}
const mapstatetoprops = (state) => ({
    email : state.email
   })
   const mapdispatchtoprops = (disptach) => ({
    sendemessages : (message) => disptach(sendemessages(message)),
    recupereremail : (id) => disptach(recupereremail(id))
    
   
   })
export default connect (mapstatetoprops,mapdispatchtoprops) (Addmessagerie);

