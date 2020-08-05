import React, { Component } from "react";
import { NavLink} from 'react-router-dom';
import Cookies from 'js-cookie'
import logo from  '../../assest/logo.png'
import swal from "sweetalert";
class Navbar extends Component {
  verification(){
    swal("Are you sure you want to do this?", {
      buttons: ["Rester", "Deconecter"],
      dangerMode: true,
    })
    .then((willdecooenct) => {
      if (willdecooenct) {
        Cookies.remove('typeuser')
        Cookies.remove('jwt')
        Cookies.remove('_id')
       if( swal("Poof! Your imaginary file has been deleted!", {
          icon: "success"}))
          window.location.href = "http://localhost:3000/";
      
  }
})

      
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <img src={logo} width="150px" height="100px" alt="logo" />
        <a className="navbar-brand" href="#">
          Mazrettnaa
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
          <ul className="nav navbar-nav ml-auto">
           <li className="nav-item">
          { Cookies.get("jwt") ? null :    <NavLink className="nav-link" exact activeClassName="active" to="/">
               Acceuil
              </NavLink>
  }
            </li>
  
            <li className="nav-item">
              <NavLink className="nav-link" exact activeClassName="active" to="/allListings">
               Annonces
              </NavLink>
            </li>
            
          
            {/* <li className="nav-item">
              <Link className="nav-link" to="/contact">
                ContactUs
              </Link>
            </li> */}
            <li className="nav-item">
          {Cookies.get("jwt")? <NavLink className="nav-link" exact activeClassName="active" to="/admin">Home</NavLink>  : <NavLink className="nav-link" exact activeClassName="active" to="/login">
                LogIn
              </NavLink>
  }
 
            </li>
            {Cookies.get("jwt")? <button className="btn btn-danger"
                                           onClick={this.verification}
            >Deconecter</button> : null }
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
