import React, { Component } from "react";
import Property from "./Property.jsx";
import {connect} from 'react-redux'

import {Getanonces} from '../../action/Annonce'
import Recherche from '../compossant/recherchepublic'
class AllListings extends Component {
  state = {
    properties: "",
    recherche :"",
    filterreccherche:""
  };
  constructor(props) {
    super(props);
    
  }
  componentDidMount() {
   this.props.Getanonces()
  }
  //componentWillReceiveProps(nextProps){
    static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.annoce!== prevState.properties ){
      //Perform some operation
      return { properties: nextProps.annoce };
    }
    else return null; // Triggers no change in the state
  }
  rechercheannonce = (espace,prix) => {
 if(prix || espace)
   {
   const a =  this.state.properties.filter(el => el.price == prix|| el.espace == espace)
   this.setState({properties : a})

  }
  else
  {
  //this.props.Getanonces()
  this.setState({properties: this.props.annoce });
  }
}
onchangestate(e){
  const valeur = e.target.value;
this.setState({filterreccherche:valeur })
if (valeur ==="PRICE_DESC")
this.state.properties.sort((a,b) => a.price -b.price)
if (valeur ==="PRICE_ASC")
this.state.properties.sort((b,a) => a.price -b.price)
if (valeur ==="CREATED_DESC")
this.state.properties.sort((a,b) => Number(a.espace)- Number(b.espace))
if (valeur=== '')
window.location.reload()
}
  render() {
   
    return (
      <div>
         <Recherche rechercheannonce ={this.rechercheannonce} />
         <div className="padding-allannonce">
   
           <div className="container">
           Trier par:
           <select onChange = {(e) => this.onchangestate(e)}><option value="">Tout</option><option selected="" value="CREATED_DESC">Espace le plus vaste</option><option value="PRICE_DESC">Prix le plus élevé</option><option value="PRICE_ASC">Prix le plus bas</option></select>
          
           {/*
             <div className="centre-recherche btn-block">
            
 <input type="text" placeholder="Nom annonce  Adreesse" 
      
      onChange={(e) => this.setState({recherche :e.target.value})}></input>
 <button className="btn btn-success" onClick={() => this.rechercheannonce()}> Rechercher</button>
 </div>
           */ }
      
     
          <div className="row">
            {this.state.properties ?  this.state.properties .map(el => <Property key={el._id} el={el} /> ): <h3>auqu'un annonce disponible</h3> }
          </div>
        </div>
        </div>
      </div>
    );
  }
}
const mapstatetoprops = (state) => ({
 annoce : state.annonce
})
const mapdispatchtoprops = (disptach) => ({
  Getanonces : () => disptach(Getanonces())

})
export default connect (mapstatetoprops,mapdispatchtoprops) (AllListings);
