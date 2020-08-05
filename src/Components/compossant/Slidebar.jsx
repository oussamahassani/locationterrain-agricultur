import React from "react";
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Cookies from 'js-cookie'

const Sidebar = () => {
  
    return (
        <>
       
       <div class="row" id="body-row">
 
    <div id="sidebar-container" className="sidebar-expanded d-none d-md-block">
        
        <ul className="list-group">
      
            <li className="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
                <small>MENU</small>
            </li>
          
            <a href="#submenu1" data-toggle="collapse" aria-expanded="false" className="bg-dark list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-start align-items-center">
                    <span className="fa fa-dashboard fa-fw mr-3"></span>
                    <span className="menu-collapsed">Dashboard</span>
                    <span className="submenu-icon ml-auto"></span>
                </div>
            </a>
          
            <div id='submenu1' className="collapse sidebar-submenu">
            {Cookies.get("typeuser") =="admin"?     <NavLink to="/gestionuser" className="list-group-item list-group-item-action bg-dark text-white">
                    <span className="menu-collapsed">Gestion utilisateur</span>
    </NavLink> : null }
    { Cookies.get("typeuser") =="demandeur"?       <NavLink className="list-group-item list-group-item-action bg-dark text-white" exact activeClassName="active" to="/listefavorite">
                Liste favorite
              </NavLink> : null }
              {/* <a href="/listefavorite" class="list-group-item list-group-item-action bg-dark text-white">
                    <span class="menu-collapsed">Liste favorite</span>
    </a>*/}
              {Cookies.get("typeuser") =="proprietaire"?  <NavLink to="/gestionannonce"  activeClassName="active"  className="list-group-item list-group-item-action bg-dark text-white">
                    <span className="menu-collapsed">Gestion annonces</span>
             </NavLink> : null }
              { Cookies.get("typeuser") =="demandeur"? <NavLink  to="/mesannonce" activeClassName="active" className="list-group-item list-group-item-action bg-dark text-white">
                    <span className="menu-collapsed">Mes annonces annonces</span>
                </NavLink> : null }
            </div>
            <a href="#submenu2" data-toggle="collapse" aria-expanded="false" className="bg-dark list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-start align-items-center">
                    <span className="fa fa-user fa-fw mr-3"></span>
                    <span className="menu-collapsed">Profile</span>
                    <span className="submenu-icon ml-auto"></span>
                </div>
            </a>
         
            <div id='submenu2' className="collapse sidebar-submenu">
                <a href={`/userprofil/${Cookies.get("_id")}`} className="list-group-item list-group-item-action bg-dark text-white">
                    <span className="menu-collapsed">Settings</span>
                </a>
               
            </div>
            <a href="#" className="bg-dark list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-start align-items-center">
                    <span className="fa fa-tasks fa-fw mr-3"></span>
                    <span className="menu-collapsed">Tasks</span>
                </div>
            </a>
        
            <li className="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
                <small>OPTIONS</small>
            </li>
        
            <a href="#" className="bg-dark list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-start align-items-center">
                    <span className="fa fa-calendar fa-fw mr-3"></span>
                    <span className="menu-collapsed">Calendar</span>
                </div>
            </a>
            <a href={"/Boite-messagerie/" + Cookies.get("_id")} className="bg-dark list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-start align-items-center">
                    <span className="fa fa-envelope-o fa-fw mr-3"></span>
                    <span className="menu-collapsed">Messages <span className="badge badge-pill badge-primary ml-2">5</span></span>
                </div>
            </a>
         
            <li className="list-group-item sidebar-separator menu-collapsed"></li>
     
            <a href="/Helper" className="bg-dark list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-start align-items-center">
                    <span className="fa fa-question fa-fw mr-3"></span>
                    <span className="menu-collapsed">Help</span>
                </div>
            </a>
            <a href="#top" data-toggle="sidebar-colapse" className="bg-dark list-group-item list-group-item-action d-flex align-items-center">
                <div className="d-flex w-100 justify-content-start align-items-center">
                    <span id="collapse-icon" className="fa fa-2x mr-3"></span>
                    <span id="collapse-text" className="menu-collapsed">Collapse</span>
                </div>
            </a>
        </ul>
    </div>
 </div>
        </>
    );
    }
const mapStateToProps = (state) => {
   
  }
export default connect(mapStateToProps,null)(Sidebar) ;