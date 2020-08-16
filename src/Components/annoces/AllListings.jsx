import React, { Component } from "react";
import Property from "./Property.jsx";
import {connect} from 'react-redux'
import  Pagination  from "../compossant/pagination";
import {Getanonces,sortsttatees} from '../../action/Annonce'
import {getoneuser} from '../../action/Personne'
import Recherche from '../compossant/recherchepublic'
import Cookies from 'js-cookie'
class AllListings extends Component {
  state = {
    properties :[],
    recherche :[],
    totalRecords: "",
    totalPages: "",
    pageLimit: "",
    currentPage: "",
    startIndex: "",
    endIndex: "",
    input:""
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
  constructor(props) {
    super(props);
    
  }
  
  componentDidMount(){
    console.log('render')
    this.props.getoneuser(Cookies.get("_id"))
    this.props.Getanonces()
   /* setTimeout(() => {
      this.setState({properties:this.props.annoce})
    }, 500);
*/



  }
  
 
  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.annoce!== prevState.properties ){
     console.log("zomara")
      return { properties: nextProps.annoce };
    }
    else return null; // Triggers no change in the state
  }
  rechercheannonce = (espace,prix,ville) => {
    console.log("message" , espace  , prix ,ville)
 if(prix!==""  )
   {
   const a =  this.state.properties.filter(el => el.price == prix)
   this.setState({recherche: a})
  }
 if( espace !== "" )
  {
  const a =  this.state.properties.filter(el => el.espace == espace)
  this.setState({recherche : a})
  }
 if( ville!=="")
  {
  const a =  this.state.properties.filter(el => el.province == ville)
  this.setState({recherche : a})
  }
  if(ville=="" &&  espace=="" && prix=="")
  {
  //this.props.Getanonces()
  this.setState({recherche: [] });
  }
} 
onchangemateriel = (e) => {
  const valeur = e.target.value;
  if (valeur)
this.props.sortsttatees(valeur)
else
window.location.reload()
}

onchangestate = (e) =>{
  const valeur = e.target.value;
if (valeur ==="prixlepluselevee")
{
this.state.properties.sort((a,b) => b.price -a.price)
this.setState({properties   :this.state.properties})
}
if (valeur ==="plusbas")
{
this.state.properties.sort((b,a) => b.price -a.price)
this.setState({properties   :this.state.properties})
console.log("state",this.state.properties)
}
if (valeur ==="espaceleplusvaste")
{
this.state.properties.sort((a,b) => Number(b.espace)- Number(a.espace))
this.setState({properties   :this.state.properties})
}
if (valeur=== '')
window.location.reload()
}
showannonce = (rowsPerPage) => {
  let result = null;
         if (rowsPerPage.length > 0)
         result =rowsPerPage.map(el =><Property key={el._id} el={el} />  )
    
   
   
   return result;
 };
  render() {
  
 console.log("props",this.state.recherche)
    
    let  {
      totalPages,
      properties,
      pageLimit,
      startIndex,
      endIndex
  } = this.state;

  let rowsPerPage = [];
  rowsPerPage = this.state.properties.slice(startIndex,endIndex + 1) 

    return (
      <div>
         <Recherche rechercheannonce ={this.rechercheannonce} />
         <div className="padding-allannonce">
   
           <div className="container">
             <div className="flex-betwen"> 
           <div> Trier par:
           <select onChange = {(e) => this.onchangestate(e)}><option value="">Tout</option><option selected="" value="espaceleplusvaste">Espace le plus vaste</option><option value="prixlepluselevee">Prix le plus élevé</option><option value="plusbas">Prix le plus bas</option></select>
           </div>
           <div>Type de Materiel
           <select onChange = {(e) => this.onchangemateriel(e)}><option value="">Tout</option><option selected="" value="Materiel">Materiel</option><option value="Terre">Terre</option></select>
           </div>
           </div>
          
           {/*
             <div className="centre-recherche btn-block">
            
 <input type="text" placeholder="Nom annonce  Adreesse" 
      
      onChange={(e) => this.setState({recherche :e.target.value})}></input>
 <button className="btn btn-success" onClick={() => this.rechercheannonce()}> Rechercher</button>
 </div>
        this.showannonce(rowsPerPage)   */ }
      
     
          <div>
            <br/>
          {this.state.recherche.length>0 ?this.state.recherche.map(el =><Property key={el._id} el={el}  personne = {this.props.personne} />) : this.showannonce(rowsPerPage) }
         {/*  {this.state.properties.length>0? this.state.recherche.length>0 ?  this.state.recherche.map(el =><Property key={el._id} el={el}  personne = {this.props.personne} />): this.state.properties.map(el =><Property key={el._id} el={el}  personne = {this.props.personne}/>)  : <p>hhh</p>} */}
          </div>
        </div>
        <Pagination
           totalRecords={properties.length}
            pageLimit={pageLimit || 5}
            initialPage={1}
            pagesToShow={5}
            onChangePage={this.onChangePage}
          />
        </div>
        <br/>
      </div>
    );
  }
}
const mapstatetoprops = (state) => ({
 annoce : state.annonce,
 personne : state.personne
})
const mapdispatchtoprops = (disptach) => ({
  Getanonces : () => disptach(Getanonces()),
  getoneuser : (id) => disptach(getoneuser(id)),
  sortsttatees :(value) => disptach(sortsttatees(value))

})
export default connect (mapstatetoprops,mapdispatchtoprops) (AllListings);
