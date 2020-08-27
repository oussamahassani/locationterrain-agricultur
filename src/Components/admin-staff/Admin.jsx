import React, { Component } from "react";
import { connect } from 'react-redux'
import { Sidebar } from '../../Components'
import Pagination from '../compossant/pagination'
import Cookies from 'js-cookie'
import { Getanonces, delateannocee } from '../../action/Annonce'
import { getmessages } from '../../action/messagerie'
import { URL } from '../../api/Url'
import Axios from 'axios'
import { Switch, NavLink, Route } from "react-router-dom";
import * as Composant from '../../Components'
class Admin extends Component {
  state = {
    properties: [],
    message: [],
    totalRecords: "",
    totalPages: "",
    pageLimit: "",
    currentPage: "",
    startIndex: "",
    endIndex: "",
    input: "",

  }




  componentDidMount() {
    this.props.Getanonces()
    this.props.getmessages(Cookies.get('_id'))

  }
  onDelete = (id) => {
    console.log(id);
    this.props.delateannoce(id)


  };
  updateannoce(id) {
    this.props.history.push("/UpdateAnnonce/" + id)
  }
  showannonce = (rowsPerPage) => {
    let result = null;
    if (rowsPerPage.length > 0)
      result = rowsPerPage.map((property, i) => {
        return (
          <tr key={i}>
            <td>
              <img
                src={"../image/" + property.image}
                alt=""
                className="img-thumbnail"
                style={{ width: 100, height: 100 }}
              />
            </td>
            <td>{property.price}</td>
            <td>{property.espace}</td>
            <td className="hide">{property.longitude}</td>
            <td className="hide">{property.altitude} </td>
            <td className="hide">
              {property.province} {property.street} {property.city}{" "}
              {property.postalCode}
            </td>
            <td><p style={{ width: "300px" }}>{property.description}</p></td>
            <td className="flex-bettwen">
              {Cookies.get("typeuser") == "proprietaire" ? <button
                type="button"
                className="btn btn-warning fa fa-pencil-square"
                style={{ width: 40 }}
                aria-hidden="true"
                onClick={() => this.updateannoce(property._id)}
              >

              </button> : null}

              {Cookies.get("typeuser") == "demandeur" ? null : <button
                className="btn btn-danger  fa fa-trash-o"
                aria-hidden="true"
                onClick={() => this.onDelete(property._id)}
                style={{ width: 40 }}
              >


              </button>}
            </td>
          </tr>
        );
      })

    return result;
  };
  onChangePage = data => {
    this.setState({
      pageLimit: data.pageLimit,
      totalPages: data.totalPages,
      currentPage: data.page,
      startIndex: data.startIndex,
      endIndex: data.endIndex
    });
  };
  render() {
    let {
      totalPages,
      currentPage,
      pageLimit,
      startIndex,
      endIndex
    } = this.state;

    let rowsPerPage = [];
    if (this.props.annonce !== "") {
      if (Cookies.get("typeuser") == "proprietaire")
        rowsPerPage = this.props.annonce.filter(el => el.idcreateur == Cookies.get("_id")).reverse().slice(0, 10).slice(startIndex, endIndex + 1)
      else
        rowsPerPage = this.props.annonce.reverse().slice(0, 10).slice(startIndex, endIndex + 1)
    }
    return (

      <div className="flexflex">
      <Sidebar  message = {this.props.message ? this.props.message.filter(el => !el.read  && !el.deleted ).length : null}/>
      <div className="main"  style={{ padding: 30 }} >
       <>
      <div>
      
         <h1>Dernière annonce </h1>
      </div>
      <div style={{ paddingTop: 20 }}>
        {this.props.annonce.length < 1 ? (
          "Il n'y a pas d'annonces"
        ) : (
          <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col ">Image</th>
                <th scope="col">Prix</th>
                <th scope="col">Espace</th>
                <th className="hide"  scope="col">Longitude</th>
                <th className="hide"   scope="col">altitude</th>
                <th className ="hide" scope="col">Address</th>
                <th scope="col">Description</th>
               { Cookies.get("typeuser") !=="demandeur" ?     <th scope="col">Options</th> : null }
              </tr>
            </thead>
            <tbody>
            {      this.showannonce(rowsPerPage)          }
             
            </tbody>
          </table>
          </div>
        )}
        <Pagination
        totalRecords={ this.props.annonce.length}
        pageLimit={pageLimit || 3}
        initialPage={1}
        pagesToShow={5}
        onChangePage={this.onChangePage}
        />
      </div> </>


      </div>
        </div>
    )
  }
}
const mapstatetoprops = (state) => ({
  annonce: state.annonce,
  message: state.message
})
const mapdispatchtoprops = (disptach) => ({
  Getanonces: () => disptach(Getanonces()),
  delateannoce: (id) => disptach(delateannocee(id)),
  getmessages: (id) => disptach(getmessages(id))


})
export default connect(mapstatetoprops, mapdispatchtoprops)(Admin)


{/* message = {this.props.message ? this.props.message.filter(el => !el.read  && !el.deleted ).length : null}
<div className="main">
<div className='sidebar'>
  <div >
    <div >
      <div id="sidebar-container" className="sidebar-expanded">
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
            {Cookies.get("typeuser") == "admin" ? <NavLink to="./statestique" className="list-group-item list-group-item-action bg-dark text-white">
              <span className="menu-collapsed">Statestique</span>
            </NavLink> : null}
            {Cookies.get("typeuser") == "admin" ? <NavLink to="./gestionuser" className="list-group-item list-group-item-action bg-dark text-white">
              <span className="menu-collapsed">Gestion utilisateur</span>
            </NavLink> : null}
            {Cookies.get("typeuser") == "demandeur" ? <NavLink className="list-group-item list-group-item-action bg-dark text-white" exact activeClassName="active" to="./admin/listefavorite">
              Liste favorite
      </NavLink> : null}
            {Cookies.get("typeuser") == "proprietaire" ? <NavLink to="admin/gestionannonce" activeClassName="active" className="list-group-item list-group-item-action bg-dark text-white">
              <span className="menu-collapsed">Gestion annonces</span>
            </NavLink> : null}
            {Cookies.get("typeuser") == "proprietaire" ? <NavLink to="admin/mesannonce" activeClassName="active" className="list-group-item list-group-item-action bg-dark text-white">
              <span className="menu-collapsed">Mes annonces</span>
            </NavLink> : null}
          </div>
          <a href="#submenu2" data-toggle="collapse" aria-expanded="false" className="bg-dark list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-start align-items-center">
              <span className="fa fa-user fa-fw mr-3"></span>
              <span className="menu-collapsed">Profile</span>
              <span className="submenu-icon ml-auto"></span>
            </div>
          </a>

          <div id='submenu2' className="collapse sidebar-submenu">
            <NavLink to={`./admin/userprofil/${Cookies.get("_id")}`} className="list-group-item list-group-item-action bg-dark text-white">
              <span className="menu-collapsed">Settings</span>
            </NavLink>

          </div>
          <li className="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
            <small>OPTIONS</small>
          </li>

          <a href="#" className="bg-dark list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-start align-items-center">
              <span className="fa fa-calendar fa-fw mr-3"></span>
              <span className="menu-collapsed">Calendar</span>
            </div>
          </a>
          {Cookies.get("typeuser") !== "admin" ? <NavLink to={`admin/Boite-messagerie/${Cookies.get("_id")}`} className="bg-dark list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-start align-items-center">
              <span className="fa fa-envelope-o fa-fw mr-3"></span>
              <span className="menu-collapsed">Messages </span> <span className="badge badge-pill badge-primary ml-2"></span>
            </div>
          </NavLink> : null}

          <li className="list-group-item sidebar-separator menu-collapsed"></li>

          <a href="admin/Helper" className="bg-dark list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-start align-items-center">
              <span className="fa fa-question fa-fw mr-3"></span>
              <span className="menu-collapsed">Help</span>
            </div>
          </a>
         
        </ul>
      </div>
    </div>
  </div>
</div>
<div className="show">
  <Switch>
  <Route exact path="/admin/listefavorite"  exact component= {Composant.ListeFavorite}>
 
    </Route>
    <Route path="/admin/gestionuser" exact component= {Composant.ListeFavorite}>
   
    </Route>
    
    <Route  path="/admin/Boite-messagerie/:id">
      <Composant.BoiteMessagerie></Composant.BoiteMessagerie>
    </Route>
    <Route  path="./admin/userprofil/:id">
    <Composant.UserProfil></Composant.UserProfil>
    </Route>
  </Switch>
</div>
</div>/*







*/}