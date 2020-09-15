import React ,{Component} from 'react'
import { NavLink} from 'react-router-dom';

import MessengerCustomerChat from 'react-messenger-customer-chat'
export default class Footer extends  Component{



   render(){

    return (
      <>


    
      
       

      <div>
    
    {/* <MessengerCustomerChat
    pageId="115817856920881"
    appId="1427384250787818"
 
  /> */}
    
  </div>
      
    
        <div className=" fixedfooter bagroundvavbar" style={{background:"#eee"}}>
            <footer className="d-flex justify-content-around align-items-center">
     
        <div class="col-md-4">
      <h3 className="colorprimaire">A propos de Nous</h3>
      <p>Mazrettnaa est une application pour location de materielle et .
         terre agriculture aussi elle vous aidez a execez le metier de agriculture.</p>

      </div>
      <div class="col-md-4">
        <br/>
        <h3 className="colorprimaire" >Contact Info</h3>
        <p><strong>Adress:</strong> 514 Rue chath bath tunise 7071
</p>
        <p><strong>Email:</strong> Contact@mazertetna.com</p>
        <p><strong>Tel:</strong>  28 00 41 00</p></div>
      <div class="col-md-2">
      <br/>
        <h3  className="colorprimaire" >Lien Rapide</h3>
       
        <p><a className="text-dark" exact activeClassName="active" href="./#ContactUs"> Contact as</a></p>
        <p> <a className=" text-dark" href="./#aboutUs"> AboutUs </a> </p>
        <p><a className="text-dark" exact activeClassName="active" href="./#team"> Nos expair</a></p>
      </div>

    
 
       
     
      
      </footer> 
      <p className="nav-link textalign text-dark" style={{fontSize:"14px"}}>  <a className="navbar-brand text-dark" href="#">
         Mazrettnaa
        </a> Projet chef d'oeuvre  simplon 2020</p>
        </div>
        <hr></hr>
        </>
    )
}

}
