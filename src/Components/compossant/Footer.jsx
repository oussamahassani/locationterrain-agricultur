import React from 'react'
import { NavLink} from 'react-router-dom';
export default function Footer() {
    return (
      <>
     <hr></hr>
        <div className=" navbar-dark  fixedfooter bagroundvavbar">
            <footer className="navbar navbar-expand-lg">
           
        <a className="navbar-brand text-dark" href="#">
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
            <li className="nav-item active">
            <NavLink className="nav-link text-dark" exact activeClassName="active" to="/ContactUs">
            Contact as
              </NavLink>
             
            </li>
          
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/about">
                AboutUs
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/contact">
                ContactUs
              </Link>
            </li> */}
           
          </ul>
        </div>
     
      
      </footer> 
      <p className="nav-link textalign text-dark">Projet chef d'oeuvre  simplon 2020</p>
        </div>
        <hr></hr>
        </>
    )
}
