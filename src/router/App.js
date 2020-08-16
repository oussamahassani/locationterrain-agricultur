import React, { Component } from "react";
import { BrowserRouter,Switch, Link, Route, Redirect } from "react-router-dom";
import * as Composant from '../Components'
import "../main.css";
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

class App extends Component {
  render = () => {
    return (
        <div>
         <BrowserRouter>
         <Composant.Navbar />
         <Switch>
         <PublicRoute path="/cree-compte" exact component = {Composant.Signup} />
          <PublicRoute restricted={false} path="/" exact component={Composant.Home} /> 
          <Route   exact path="/allListings"  component={Composant.AllListings} />
          <Route   exact path="/detailleannoce/:id/:ids"  component={Composant.PropertyDetail} />
          <PublicRoute restricted={true} path="/login" exact component={Composant.Login} />
          <Route   path="/about" exact component={Composant.AboutMe} />
          <Route  path="/ContactUs" exact component = {Composant.ContactUs} />
          <PrivateRoute path="/gestionannonce" exact component={Composant.GestionDesannonce} />
          <PrivateRoute path ="/mesannonce" exact component = {Composant.AnnonceconetenairProretaire} />
          <PrivateRoute path="/userprofil/:id" exact component={Composant.UserProfil} />
          <PrivateRoute exact path="/listefavorite"><Composant.ListeFavorite/> </PrivateRoute>
          <PrivateRoute path="/createListing" exact component={Composant.CreateListing} />
          <PrivateRoute path="/admin" exact component={Composant.Admin} />
          <PrivateRoute path="/Helper" exact component={Composant.Helper} />
          <PrivateRoute path="/gestionuser" exact component={Composant.GestionUser} />
          <PrivateRoute path="/UpdateAnnonce/:id" exact component = {Composant.UpdateAnnonce} />
          <PrivateRoute path="/Addmessagerie/:id" exact component={Composant.Addmessagerie} />
          <PrivateRoute path="/Boite-messagerie/:id" exact component={Composant.BoiteMessagerie} />
          <PrivateRoute path="/statestique" exact component={Composant.LineGraph} />
          <PublicRoute path='/404' component={Composant.Notfound} />
          <Redirect exact path ="***" to="/404" /> 
          </Switch>
          <Composant.Footer/>
      </BrowserRouter>
     

        </div>
   


    );
  };
}
export default App;
