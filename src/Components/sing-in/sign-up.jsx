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
    let regx = /^[a-zA-Z0-9_.+-]+@[a-zA-Z.]+$/
      if(obj.confpassword && obj.password &&  regx.test(obj.email) && obj.Nom &&  obj.Prenom && proprietaire.numtelephone)
      {
      if (obj.confpassword === obj.password )
      {
    let objdem = {}
    Object.assign(objdem , {"typeuser":"proprietaire" , "status":"enabel"} )
    Object.assign(objdem , obj )
    Object.assign(objdem ,proprietaire )
    props.signup(objdem)

    }
    else
    swal("ERROR", "votre mot de passe n'est pas identique", "error");
}
else
swal("ERROR", "remplire tout les champs obligatoir", "error");
}
  const enregisterdemandeur = () => {
      let regx = /^[a-zA-Z0-9_.+-]+@[a-zA-Z]+\.[a-zA-Z]+$/
    if(obj.confpassword && obj.password &&  regx.test(obj.email) && obj.Nom &&  obj.Prenom)
    {
    if (obj.confpassword === obj.password )
    {
      let objdem = {}
      Object.assign(objdem , {"typeuser":"demandeur","status":"enabel"} )
      Object.assign(objdem,obj)
        props.signup(objdem)
    }
        else
        swal("ERROR", "votre mot de passe n'est pas identique", "error");
    }
    else
    swal("ERROR", "remplire tout les champs obligatoir", "error");
}
    const onChangeValue = (event) => {
        proprietaire.genre= event.target.value
      }
      const submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
      };
    return (
        <>
            <section id="tabs">
	
		<div className="container register">
        <h6 className="section-title h1 text-white">Cree votre Compte</h6>
                <div className="row">
                    <div className="col-md-2 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
               <h3>Bienvenue</h3>
               <p>vous pouvez nous contactez sur</p>
                <p style={{fontSize:"14px"}}>mazreetna-aide@mazettna.com</p>
                     
                    </div>
                    <div className="col-md-9 register-right">
                        <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Prorietaire</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Demandeur</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 className="register-heading">Prorietaire</h3>
                                <form onSubmit={submitHandler} className="row register-form" noValidate>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Nom *"  onChange={(e) => obj.Nom = e.target.value}  required />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Prenom *"  onChange={(e) => obj.Prenom = e.target.value} required />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" placeholder="Mot de passe *" onChange={(e) => obj.password = e.target.value} required  />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control"  placeholder="Confirm Mot de passe *"  onChange={(e) => obj.confpassword = e.target.value}  required/>
                                        </div>
                                        <div className="form-group">
                                            <div className="maxl" onChange={onChangeValue}>
                                            <label className="radio inline"> 
                                                    <input type="radio" name="gender" value="homme"  />
                                                    <span>homme </span> 
                                                </label>
                                                <label className="radio inline"> 
                                                    <input type="radio" name="gender" value="female"  />
                                                    <span>Femme </span> 
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Your Email *" onChange={(e) => obj.email = e.target.value} required />
                                            <div class="invalid-feedback">
                                           Merci de choisir un email valide.
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="number" minlength="8" maxlength="14" name="txtEmpPhone" className="form-control" placeholder="Your Phone *"   onChange={(e) => proprietaire.numtelephone = e.target.value} required/>
                                            <div class="invalid-feedback">
                                           Merci de choisir un numero valide.
                                            </div>
                                        </div>
                                       
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Adresse "  onChange={(e) => proprietaire.adress = e.target.value}  />
                                        </div>
                                        <input type="submit" className="btnRegister"  value="Register" onClick={() => enregisterprorietaire()}/>
                                    </div>
                                </form>
                            </div>
                            <div className="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <h3  className="register-heading">Chercheur de terre </h3>
                                <form form onSubmit={submitHandler} noValidate  className="row register-form">
                                    <div className="col-md-6">
                                        <div  className="form-group">
                                            <input type="text" className="form-control" placeholder="Nom *" onChange={(e) => obj.Nom = e.target.value} required/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Prenom*" onChange={(e) => obj.Prenom = e.target.value} required />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email *" onChange={(e) => obj.email = e.target.value} required />
                                            <div class="invalid-feedback">
                                           Merci de choisir un email valide.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="password" className="form-control" placeholder="Mot de passe *"
                                            onChange={(e) => obj.password = e.target.value}  required/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" placeholder="Confirm Mot de passe *" onChange={(e) => obj.confpassword = e.target.value}  required />
                                        </div>
                                       
                                        <input type="submit" className="btnRegister"  value="Register" onClick = {() => enregisterdemandeur()}  />
                                    </div>
                                </form>
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