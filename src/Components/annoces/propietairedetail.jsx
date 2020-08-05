import React, { Component } from 'react'
import {connect} from 'react-redux'
import Cookies from 'js-cookie'
import {getoneuser} from '../../action/Personne'
import {recupereremail} from '../../action/Email'
import Email from '../compossant/sendmail'

 class propietairedetail extends Component {
    componentDidMount() {
        
         this.props.getoneuser(this.props.iduser)    
         this.props.recupereremail(Cookies.get("_id"))
       
       }
    render() {
        return (
            <div>
  
<h5>Propietaire :</h5> 
{this.props.personne.map ( personne => <>
   <div class="row">
   <div class="col-md-2"> <p className="textalign"> Nom : {personne.Nom }</p></div>
   <div class="col-md-3 offset-md-2">Prenom : {personne.Prenom}</div>
   <div class="col-md-3 offset-md-2"> Nom telephone :{personne.numtelephone}</div>
 </div>


 <h5>Contacter : </h5>
 {/*<button className="btn btn-emailning">Emailing <i class="fa fa-envelope" aria-hidden="true"></i> 

</button> */}
<div style={{width : "50%"}}>
<div className="flex-bettwen">
{this.props.email? <Email toemail = {personne.email}  user={this.props.email}/> : null}


 <a href={"/Addmessagerie/"+personne._id}><button className="btn btn-tchat">TCHAT <i class="fa fa-comments"></i></button> </a>
</div>
</div>
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
   
   getoneuser: (id) =>disptach(getoneuser(id)),
   recupereremail:(id) =>disptach(recupereremail(id))
  
   
   })
export default connect (mapstatetoprops,mapdispatchtoprops) (propietairedetail);