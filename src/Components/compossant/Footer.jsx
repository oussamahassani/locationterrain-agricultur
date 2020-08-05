import React from 'react'

export default function Footer() {
    return (
        <div className=" navbar-dark bg-dark fixedfooter">
            <footer className="navbar navbar-expand-lg">
             
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
            <li className="nav-item active">
              <a className="nav-link" href="/ContactUs">
               Contact as
              </a>
            </li>
          
            <li className="nav-item">
              <a className="nav-link" href="/about">
                AboutUs
              </a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/contact">
                ContactUs
              </Link>
            </li> */}
           
          </ul>
        </div>
     
    
      </footer> 
      <p className="nav-link textalign text-light">Projet chef d'oeuvre  simplon 2020</p>
        </div>
    )
}
