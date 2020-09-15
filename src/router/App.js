import React, { Component } from "react";
import { BrowserRouter,Switch, Link, Route, Redirect } from "react-router-dom";
import * as Composant from '../Components'
import "../main.css";
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import Index from '../blog/Index'
import Cookies from 'js-cookie'
import mapview from "../Components/maps/MultiMap"
import Expair from '../Components/Expair/expair'
class App extends Component {
  render = () => {
    return (
        <>
      
         <BrowserRouter>
         <Composant.Navbar />
         <Switch>
           <Route path="/TestRoute" exact component={Expair} />
           <Route path="/mapview" exact component={mapview} />
           <PublicRoute path="/NosProduit" exact component = {Composant.NosProduit} />
         <PublicRoute path="/cree-compte" exact component = {Composant.Signup} />
          <PublicRoute restricted={false} path="/" exact component={Composant.Home} /> 
          <PublicRoute   exact path="/allListings"  component={Composant.AllListings} />
          <PublicRoute   exact path="/detailleannoce/:id/:ids"  component={Composant.PropertyDetail} />
          <PublicRoute restricted={true} path="/login" exact component={Composant.Login} />
          <Route  path="/ContactUs" exact component = {Composant.ContactUs} />
          <PublicRoute path="/blog" exact component={Index} />
          <PublicRoute   path="/about" exact component={Composant.AboutMe} />
             {/* admin roote */}
          <PrivateRoute path = "/calender" exact component = {Composant.Calander} />
          <PrivateRoute path="/admin" exact component={Composant.Admin} />
           <PrivateRoute path="/gestionannonce" exact component={Composant.GestionDesannonce} /> 
           <PrivateRoute path="/Produitcontenaire" exact component={Composant.Produitcontenaire} />
           <PrivateRoute path="/statestique" exact component={Composant.LineGraph} />
           <PrivateRoute path="/gestionuser" exact component={Composant.GestionUser} />
           <PrivateRoute path="/ajouterproduit" exact component={Composant.ajouterproduit} />
          
          <PublicRoute path="/Addexpaire" exact component = {Composant.Addexpaire} />
            {/* user + prorietair  roote */}
           <PrivateRoute path="/NosProduit" exact component = {Composant.NosProduit} />
          <PrivateRoute path ="/mesannonce" exact component = {Composant.AnnonceconetenairProretaire} />
          <PrivateRoute path="/userprofil/:id" exact component={Composant.UserProfil} />
       <PrivateRoute exact path="/listefavorite" exact component= {Composant.ListeFavorite}/> 
          <PublicRoute path="/createListing" exact component={Composant.CreateListing} />
          <PrivateRoute path="/Helper" exact component={Composant.Helper} />
          <PrivateRoute path="/UpdateAnnonce/:id" exact component = {Composant.UpdateAnnonce} />
          <PrivateRoute path="/Addmessagerie/:id" exact component={Composant.Addmessagerie} />
          <PrivateRoute path="/Boite-messagerie/:id" exact component={Composant.BoiteMessagerie} />
             {/* redirect route */}
          <PublicRoute path='/404' component={Composant.Notfound} />
         <Redirect exact path ="***" to="/404" />  
          </Switch>
          <Composant.Footer/>
      </BrowserRouter>
  

        </>
   


    );
  };
}
export default App;
