import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import Cookies from 'js-cookie'
import { getoneuser } from '../../action/Personne'
import logo from '../../assest/logo.png'
import swal from "sweetalert";

import { logout } from '../../utils'
import { connect } from 'react-redux'
class Navbar extends Component {
  componentDidMount() {
  //this.props.getoneuser(Cookies.get("_id"))
  }
  verification() {
    swal("Are you sure you want to do this?", {
      buttons: ["Rester", "Deconecter"],
      dangerMode: true,
    })
      .then((willdecooenct) => {
        if (willdecooenct) {
          logout()
          if (swal("vous avez deconnectez", {
            icon: "success"
          })) {
            window.location.href = "http://localhost:3000/";
          }

        }
      })


  }
  render() {
    

    return (
      <>
     
        <div  className={Cookies.get("jwt") ? "bagroundvavbar flex-betwen " : "bagroundvavbar"}>
          <nav className="navbar navbar-expand-lg  ">

            <img src={logo} width="7%"  alt="logo" />
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
                  {Cookies.get("jwt") ? null : <NavLink className="nav-link text-dark" exact activeClassName="active" to="/">
                    Acceuil
              </NavLink>
                  }
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link text-dark" exact activeClassName="active" to="/allListings">
                    Annonces
              </NavLink>
                </li>


                 <li className="nav-item">
              <NavLink className="nav-link text-dark" exact activeClassName="active"  to="/blog">
               Blog
              </NavLink>
            </li>
                <li className="nav-item">
                  {Cookies.get("jwt") ? <NavLink className="nav-link text-dark" exact activeClassName="active" to="/admin">Home</NavLink> : <NavLink className="nav-link text-dark" exact activeClassName="active" to="/login">
                    LogIn
              </NavLink>
                  }

                </li>

              </ul>

            </div>

          </nav>
          <div >
          <br/><br/>
            <div className="" style={{ display: "flex" , width:"300px" }}>
           
            {Cookies.get("jwt") ? <button className="btn btn-danger" onClick={this.verification}>Deconecter</button> : null}
            {" "}
            {Cookies.get("jwt") ?   <li class="dropdown listestyle-none">
                <a href="#" class="dropdown-toggle text-dark" data-toggle="dropdown">User
                 </a>

                  <ul class="dropdown-menu listestyle-none">
                    <li className="  list-group-item list-group-item-secondary  ">
                      <div class="navbar-content">
                      {this.props.personne.length > 0 ? Cookies.get("jwt") ? <span><br></br> Nom: {this.props.personne[0].Nom}    {" "}  {this.props.personne[0].Prenom}</span> : null : null}
                        <p class="text-muted small">
                        {this.props.personne.length > 0 ? Cookies.get("jwt") ? <span><br></br> Email : {this.props.personne[0].email}</span> : null : null}
                                                    </p>
                        <div class="divider">
                        </div>
                        {this.props.personne.length > 0 ?

Cookies.get("jwt") ? this.props.personne[0].Photo ? <img src={`../image/${this.props.personne[0].Photo}`} width="60px" className="rounded-circle border" alt="Cinque Terre" /> : <img src="index.png" width="60px" className="rounded-circle border" alt="Cinque Terre" /> : null : null}
                      </div>
                    </li>
                    </ul>
                    </li> : null }
            </div>
            </div>
            </div>
           
 
      </>
    );
  }
}
const mapstatetoprops = (state) => ({

              personne : state.personne
 })
 const mapdispatchtoprops = (disptach) => ({

              getoneuser : (id) => disptach(getoneuser(id)),

 
 })
export default connect (mapstatetoprops,mapdispatchtoprops) (Navbar);
