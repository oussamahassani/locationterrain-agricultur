import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import Cookies from 'js-cookie'
import { getoneauthuser } from '../../action/Personne'
import logo from '../../assest/logo.png'
import swal from "sweetalert";
import Pannier from '../market-place/panier'
import { logout } from '../../utils'
import { connect } from 'react-redux'
class Navbar extends Component {
  componentDidMount() {
    if(Cookies.get("_id"))
  this.props.getoneauthuser(Cookies.get("_id"))
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
     
        <div style={{background : '#eee'}}  className={Cookies.get("jwt")?"d-flex  justify-content-between bagroundvavbar" : null}>
          <nav className={Cookies.get("jwt")? "navbar navbar-expand-lg  with400px  ":"navbar navbar-expand-lg bagroundvavbar  "}  style={{background : '#eee'}}>

            <img src={logo} width="100px"  alt="logo" />
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
                  {Cookies.get("jwt") ? 
                  <NavLink className="nav-link text-dark" exact activeClassName="active" to="/admin">Home</NavLink>
                  
                   : <NavLink className="nav-link text-dark" exact activeClassName="active" to="/login">
                    LogIn

              </NavLink>
              
                  }

                </li>
                <li>
                {Cookies.get("jwt") ?  <NavLink className="nav-link text-dark" exact activeClassName="active" to="/NosProduit"> Nos Produit</NavLink> : null }
                </li>

              </ul>

            </div>

          </nav>
        
          <div >
          <br/>
            <div style={{ display: "flex" , width:"400px" }}>
  
            
            {Cookies.get("jwt") ? <>
             <div ><Pannier/></div>
             <span className="marginuser"></span>
            <button className="btn navbar-brand" onClick={this.verification}>Deconecter</button> </>: null}
            {" "}
            <div className="user navbar-brand">
            {Cookies.get("jwt") ?   <li class=" marginuser dropdown listestyle-none">
                <a href="#" class="dropdown-toggle text-dark" data-toggle="dropdown">{this.props.personne.length > 0 ? this.props.personne[0].Nom : null}
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
                    </div> {/* end user function */}
            </div>
            </div>
            </div>
           
 
      </>
    );
  }
}
const mapstatetoprops = (state) => ({

              personne : state.Curentnow
 })
 const mapdispatchtoprops = (disptach) => ({

  getoneauthuser : (id) => disptach(getoneauthuser(id)),

 
 })
export default connect (mapstatetoprops,mapdispatchtoprops) (Navbar);
