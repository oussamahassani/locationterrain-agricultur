import React, { Component } from "react";
import {connect} from 'react-redux'
import { getoneannonce,addtofavoriteannoce} from '../../action/Annonce'
import {getoneuser} from '../../action/Personne'
import MapDisplay from '../maps/ViewMap'
import Cookies from 'js-cookie'
import Propietairedetail from './propietairedetail'
import Poppers from '../compossant/poper'
import "../index.css"




class PropertyDetail extends Component {
  state = {
    id : this.props.match.params.id,
    annonce :"",
    ids :this.props.match.params.ids
  }
  componentDidMount() {
  
      this.props.getoneannonce(this.state.id)
   
   }
   static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.annonce!== prevState.annonce ){
      //Perform some operation
      return { annonce: nextProps.annonce };
    }
    else return null; // Triggers no change in the state
  }

  render() {
    return (
      <div className="container">
        <div className="padding-container">
        <h1 className="textalign">Detail annoce </h1>
      <div  className ="">
        <Poppers/>
        </div>
        {this.state.annonce ? this.state.annonce.map( annonce => <>
        <p className="textalign"> Numero annonce : {annonce.idannonce}</p>
    
        <img src ={'../../image/'+ annonce.image} alt ="..." className="centre-image" width="250px" height="250px"></img>
        <div class="row">
    <div class="col-md-2"> <p className="textalign">Prix : {annonce.price }  DT</p></div>
    <div class="col-md-3 offset-md-2">Espace : {annonce.espace} m²</div>
    <div class="col-md-3 offset-md-2"> Province: : {annonce.province}</div>
  </div>

 
        <h5>Emplacement Maps:</h5>
        <MapDisplay lat={annonce.altitude} lon={annonce.longitude} titre={annonce.idannonce} description={annonce.description} image={annonce.image} location={annonce.typelocation}/>
   
 
</>
        ) : <p>off</p>}

{this.state.annonce ? Cookies.get("typeuser") == "demandeur" ?<Propietairedetail iduser={this.state.ids} annonce ={this.props.annonce}/>  : Cookies.get("typeuser")=="proprietaire"?  <p className="text-center">Vous navez pas l'autorisation de voire le cordonner des autre proprietaire</p>: <p className="text-center">Merci de  conectez pour voir le cordonner de proprietaire compte</p>   : <p className="text-center">Annonce existe pas</p> }
 

      </div>
      </div>
    );
  }
}
const mapstatetoprops = (state) => ({
  annonce : state.annonce ,
  personne : state.personne 
 })
 const mapdispatchtoprops = (disptach) => ({
  getoneannonce : (id) => disptach(getoneannonce(id)),
   addtofavoriteannoce:(annonce) => disptach (addtofavoriteannoce(annonce)),
   getoneuser:(id) => disptach(getoneuser(id))

 
 })
 export default connect (mapstatetoprops,mapdispatchtoprops) (PropertyDetail);

