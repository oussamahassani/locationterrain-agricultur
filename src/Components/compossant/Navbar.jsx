import React, { Component } from "react";
import { NavLink} from 'react-router-dom';
import Cookies from 'js-cookie'
import logo from  '../../assest/logo.png'
import swal from "sweetalert";
import {logout} from '../../utils'
class Navbar extends Component {
  verification(){
    swal("Are you sure you want to do this?", {
      buttons: ["Rester", "Deconecter"],
      dangerMode: true,
    })
    .then((willdecooenct) => {
      if (willdecooenct) {
        logout()
       if( swal("vous avez deconnectez", {
          icon: "success"}))
          {
          window.location.href = "http://localhost:3000/";
          }
      
  }
})

      
  }
  render() {
    return (
      <>
         <hr></hr> 
         <div  className={Cookies.get("jwt")?"bagroundvavbar flex-betwen ":"bagroundvavbar"}>
      <nav className="navbar navbar-expand-lg  ">
   
        <img src={logo} width="150px" height="100px" alt="logo" />
        <a className="navbar-brand text-dark" href="#">
      
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav navbar-nav ml-auto  ">
           <li className="nav-item">
          { Cookies.get("jwt") ? null :    <NavLink className="nav-link text-dark" exact activeClassName="active" to="/">
               Acceuil
              </NavLink>
  }
            </li>
  
            <li className="nav-item">
              <NavLink className="nav-link text-dark" exact activeClassName="active" to="/allListings">
               Annonces
              </NavLink>
            </li>
            
          
            {/* <li className="nav-item">
              <Link className="nav-link" to="/contact">
                ContactUs
              </Link>
            </li> */}
            <li className="nav-item">
          {Cookies.get("jwt")? <NavLink className="nav-link text-dark" exact activeClassName="active" to="/admin">Home</NavLink>  : <NavLink className="nav-link text-dark" exact activeClassName="active" to="/login">
                LogIn
              </NavLink>
  }
 
            </li>
          
          </ul>
       
        </div>
       
      </nav>
      <div>
        <br/>  <br/>
        {Cookies.get("jwt")?  <div>  <img src="index.png" width="100px" className="rounded-circle border" alt="Cinque Terre" /> 
        {" "}
      <button className="btn btn-danger"
                                           onClick={this.verification}
            >Deconecter</button> </div>: null }
            </div>
            </div>
      <hr></hr>
 
      </>
    );
  }
}

export default Navbar;
