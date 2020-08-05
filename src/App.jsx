import React, { Component } from "react";
import { BrowserRouter, Link, Route, Redirect } from "react-router-dom";
import * as Composant from './Components'
import "./main.css";



class App extends Component {
  render = () => {
    return (
      <BrowserRouter>
        <div>
          <Composant.Navbar />

          <Route path="/allListings" exact component={Composant.AllListings} />
          <Route path="/detailleannoce/:id/:ids" exact component={Composant.PropertyDetail} />
          <Route path="/gestionannonce" exact component={Composant.GestionDesannonce} />
          <Route path ="/mesannonce" exact component = {Composant.AnnonceconetenairProretaire} />
          <Route path="/" exact component={Composant.Home} /> 
          <Route path="/login" exact component={Composant.Login} />
          <Route path="/userprofil/:id" exact component={Composant.UserProfil} />
          <Route path="/contact" exact component={Composant.ContactUs} />
          <Route path="/about" exact component={Composant.AboutMe} />
          <Route path="/ContactUs" exact component = {Composant.ContactUs} /> 
          <Route exact path="/listefavorite"><Composant.ListeFavorite/> </Route>
          <Route path="/createListing" exact component={Composant.CreateListing} />
          <Route path="/admin" exact component={Composant.Admin} />
          <Route path="/Helper" exact component={Composant.Helper} />
          <Route path="/gestionuser" exact component={Composant.GestionUser} />
          <Route path="/cree-compte" exact component = {Composant.Signup} />
    
          <Route path="/UpdateAnnonce/:id" exact component = {Composant.UpdateAnnonce} />
          <Route path="/Addmessagerie/:id" exact component={Composant.Addmessagerie} />
          <Route path="/Boite-messagerie/:id" exact component={Composant.BoiteMessagerie} />
          <Composant.Footer/>
        </div>
      </BrowserRouter>


    );
  };
}
export default App;
