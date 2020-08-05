import React, { Component } from "react";
import {connect} from 'react-redux'
import { getoneannonce,addtofavoriteannoce} from '../../action/Annonce'
import {getoneuser} from '../../action/Personne'
import MapDisplay from '../maps/ViewMap'
import Cookies from 'js-cookie'
import Propietairedetail from './propietairedetail'
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
   componentWillReceiveProps(nextProps){
    if(nextProps.userannoce !==this.props.userannoce ){
      //Perform some operation
      this.setState({annonce: nextProps.userannoce });

    
  }
}
   
  
  
   sendtofavorite = () =>  {
     if (Cookies.get("typeuser") !== "demandeur")
     alert("vous navez pas autorizer d'ajouter cette annonce ")
     else
this.props.addtofavoriteannoce(this.state.annonce)
   }
  render() {
    return (
      <div className="container">
        <div className="padding-container">
        <h1 className="textalign">Detail annoce </h1>
        {this.state.annonce  ? this.state.annonce.map( annonce => <>
        <p className="textalign"> NUmero annonce : {annonce.idannonce}</p>
    
        <img src ={'../../image/'+ annonce.image} alt ="..." className="centre-image"></img>
        <div class="row">
    <div class="col-md-2"> <p className="textalign"> prix : {annonce.price }  DT</p></div>
    <div class="col-md-3 offset-md-2">espace : {annonce.espace}</div>
    <div class="col-md-3 offset-md-2"> province: : {annonce.province}</div>
  </div>

 
        <h5>Emplacement Maps:</h5>
        <MapDisplay lat={annonce.altitude} lon={annonce.longitude}/>
   
   
</>
        )

     
      
         : "on"}
      
  
 {Cookies.get("typeuser")=="demandeur" ?  <> <Propietairedetail iduser={this.state.ids}/>  
 

<button  onClick={() => this.sendtofavorite()} className="btn btn-emailning float-right"> Ajouter au liste favorite</button> </> : <h5> merci de conetctez pour voire les coordoner de propietaire ou d'ajouter cette annonce au liste favorite</h5>}
      </div>
      </div>
    );
  }
}
const mapstatetoprops = (state) => ({
  userannoce : state.annonce
 })
 const mapdispatchtoprops = (disptach) => ({
  getoneannonce : (id) => disptach(getoneannonce(id)),
   addtofavoriteannoce:(annonce) => disptach (addtofavoriteannoce(annonce)),
   getoneuser:(id) => disptach(getoneuser(id))

 
 })
 export default connect (mapstatetoprops,mapdispatchtoprops) (PropertyDetail);

