import React, { Component } from 'react'
import {connect} from 'react-redux'
import Cookies from 'js-cookie'
import {getoneuser} from '../../action/Personne'
import {recupereremail} from '../../action/Email'
import Email from '../compossant/sendmail'
import {addtofavoriteannoce} from '../../action/Annonce'
 class propietairedetail extends Component {
    componentDidMount() {
        
         this.props.getoneuser(this.props.iduser)    
         this.props.recupereremail(Cookies.get("_id"))
       
       }
       sendtofavorite = () =>  {
        if (Cookies.get("typeuser") !== "demandeur")
        alert("vous navez pas autorizer d'ajouter cette annonce ")
        else
   this.props.addtofavoriteannoce(this.props.annonce,this.props.personne)
      }
    render() {
        return (
            <div>
  
<h5>Propietaire :</h5> 
{this.props.personne.map ( personne => <>
   <div class="row">
   <div class="col-md-2"> <p className="textalign"><b> Nom :</b> {personne.Nom }</p></div>
   <div class="col-md-3 offset-md-2"><b>Prenom : </b>{personne.Prenom}</div>
   <div class="col-md-3 offset-md-2"> <b>Nom telephone :</b>{personne.numtelephone}</div>
 </div>


 <h5>Contacter : </h5>
 {/*<button className="btn btn-emailning">Emailing <i class="fa fa-envelope" aria-hidden="true"></i> 

</button> */}
<div style={{width : "50%"}}>
<div className="flex-bettwen">
{this.props.email.email? <Email toemail = {personne.email}  user={this.props.email.email}/> : null}


 <a href={"/Addmessagerie/"+personne._id}><button className="btn btn-tchat"><b>SMS</b> <i class="fa fa-comments"></i></button> </a>
</div>
</div>
<button  onClick={() => this.sendtofavorite()} className="btn btn-emailning float-right"> Ajouter au liste favorite</button>

</>
)}
            </div>
        )
    }
}
const mapstatetoprops = (state) => ({
 
    personne : state.personne ,
    email : state.email
   })
   const mapdispatchtoprops = (disptach) => ({
    addtofavoriteannoce : (annonce ,user) => disptach(addtofavoriteannoce(annonce,user)),
   getoneuser: (id) =>disptach(getoneuser(id)),
   recupereremail:(id) =>disptach(recupereremail(id))
  
   
   })
export default connect (mapstatetoprops,mapdispatchtoprops) (propietairedetail);