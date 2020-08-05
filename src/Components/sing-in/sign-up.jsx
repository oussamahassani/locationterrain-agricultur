import React from 'react'
import { signup } from '../../action/Personne'
import {connect} from 'react-redux'
import swal from "sweetalert";
 function Signup(props) {
    const obj = {
        Nom : "",
        Prenom:"",
        password:"",
        confpassword : "",
        email :""

    }
    let proprietaire = {
        numtelephone : "",
        genre :"",
        adress :""
    }
  const   enregisterprorietaire = () => {
      if(obj.confpassword && obj.password &&  obj.email && obj.Nom &&  obj.Prenom)
      {
      if (obj.confpassword === obj.password )
      {
    let objdem = {}
    Object.assign(objdem , {"typeuser":"proprietaire" , "status":"enabel"} )
    Object.assign(objdem , obj )
    Object.assign(objdem ,proprietaire )
    props.signup(objdem)
        alert("clieckd proetaire")
    }
    else
    swal("ERROR", "votre mot de passe n'est pas identique", "error");
}
else
swal("ERROR", "remplire tout les champs obligatoir", "error");
}
  const enregisterdemandeur = () => {
      let objdem = {}
      Object.assign(objdem , {"typeuser":"demandeur","status":"enabel"} )
      Object.assign(objdem,obj)
        props.signup(objdem)
    }
    const onChangeValue = (event) => {
        proprietaire.genre= event.target.value
      }
    return (
        <>
            <section id="tabs">
	
		<div class="container register">
        <h6 class="section-title h1">Cree votre Compte</h6>
                <div class="row">
                    <div class="col-md-2 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                        <h3>bien venu</h3>
                        <p>Pour+ d'information vous pouvez nous contactez sur : mazreetna-aide@mazettna.com</p>
                        <input type="submit" name="" value="Login"/><br/>
                    </div>
                    <div class="col-md-9 register-right">
                        <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Prorietaire</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Demandeur</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading">Prorietaire</h3>
                                <div class="row register-form">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Nom *"  onChange={(e) => obj.Nom = e.target.value}  />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Prenom *"  onChange={(e) => obj.Prenom = e.target.value} />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Mot de passe *" onChange={(e) => obj.password = e.target.value}  />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control"  placeholder="Confirm Mot de passe *"  onChange={(e) => obj.confpassword = e.target.value} />
                                        </div>
                                        <div class="form-group">
                                            <div class="maxl" onChange={onChangeValue}>
                                            <label class="radio inline"> 
                                                    <input type="radio" name="gender" value="homme"  />
                                                    <span>homme </span> 
                                                </label>
                                                <label class="radio inline"> 
                                                    <input type="radio" name="gender" value="female"  />
                                                    <span>Femme </span> 
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="email" class="form-control" placeholder="Your Email *" onChange={(e) => obj.email = e.target.value} />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" minlength="8" maxlength="14" name="txtEmpPhone" class="form-control" placeholder="Your Phone *"   onChange={(e) => proprietaire.numtelephone = e.target.value} />
                                        </div>
                                       
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Adresse *"  onChange={(e) => proprietaire.adress = e.target.value}  />
                                        </div>
                                        <input type="submit" class="btnRegister"  value="Register" onClick={() => enregisterprorietaire()}/>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <h3  class="register-heading">Chercheur de terre </h3>
                                <div class="row register-form">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Nom *" onChange={(e) => obj.Nom = e.target.value} />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Prenom*" onChange={(e) => obj.Prenom = e.target.value} />
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-control" placeholder="Email *" onChange={(e) => obj.email = e.target.value}/>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Mot de passe *"
                                            onChange={(e) => obj.password = e.target.value} />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Confirm Mot de passe *" onChange={(e) => obj.confpassword = e.target.value} />
                                        </div>
                                       
                                        <input type="submit" class="btnRegister"  value="Register" onClick = {() => enregisterdemandeur()}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
		

  
</section>
        </>
    )
}

const mapstatetoprops = (state) => ({
  
   })
   const mapdispatchtoprops = (disptach) => ({
    signup : (obj) => disptach(signup(obj))
   
   })
export default connect(mapstatetoprops,mapdispatchtoprops)(Signup)