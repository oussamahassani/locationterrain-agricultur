import React, { Component,Fragment } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { PostProduitt } from '../../action/Produit'
import {connect} from 'react-redux'
import swal from "sweetalert";
import Sidebar from '../compossant/Slidebar'
import 'react-toastify/dist/ReactToastify.css';
class CreateListing extends Component {
  state = {
    Titel:"",
    Prix:"",
    Description:"",
    image:"",
    Discount:"",
    files:[]
  };

  constructor() {
    super();
    this.imageName = React.createRef();
  }
  handleChange = event => {
    if (event.target.name === "image") {
      this.setState({
        [event.target.name]: this.imageName.current.files[0].name,
        files: URL.createObjectURL(event.target.files[0])});
    } else {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  };

  handleSubmit = async event => {
    const {
        Titel,
        Prix,
        Description,
        image,
        Discount,
    } = this.state;
    event.preventDefault();
    // console.log(this.state);
    let produit = {
        Titel: Titel,
        Prix: Prix,
        Description: Description,
        image: image,
        Discount: Discount,
      
    };

      if ( Titel &&  Prix && Description && image &&  Discount)
        {
          if (Description.length>10)
          {
            
      this.props.PostProduitt(produit)
          }
else
swal("error!", "le description doit etre > 10 carectaire" , "error")
        }
      else
      swal("error!", "merci de remplire tous les champs", "error");

  }
   // extention image
  checkMimeType=()=>{
    let files = this.imageName.current.files
    let err = []
   const types = ['image/png', 'image/jpeg', 'image/gif']
    for(var x = 0; x<files.length; x++) {
         if (types.every(type => files[x].type !== type)) {  
         err[x] = files[x].type+' is not a supported format\n';
       }
     };
     for(var z = 0; z<err.length; z++) {
        toast.error(err[z])
    }
   return true;
  }
  // size image
checkFileSize=()=>{
  let files = this.imageName.current.files
    let size = 238000 
    let err = []; 
    for(var x = 0; x<files.length; x++) {
    if (files[x].size > size) {
     err[x] = files[x].type+'is too large, please pick a smaller file\n';
   }
  };
  for(var z = 0; z<err.length; z++) {// if message not same old that mean has
    // discard selected file
   toast.error(err[z])
  }
  return true;
  }
  // verifier taille et size

 
    // si true cherger le state

  
  // send data to server ( uplod image)
 onClickHandler = () => {
  let files = this.imageName.current.files
    const data = new FormData()

   if(this.checkMimeType() && this.checkFileSize() ) {

       for(let x = 0; x<files.length; x++) {
        data.append('file', files[x])
      }
      console.log(data , files)
    axios.post("http://localhost:4000/upload", data)
      .then(res => { // then print response status
        toast.success('upload success')
        console.log(res)
      })
      .catch(err => { // then print response status
        toast.error('upload fail')
        console.log(err)
      })
    }
    else {
      alert("image non conforme")
    }
  }
 
  

  


  
  
 
  render() {
    
    return (
      <div className="flexflex">
        <Sidebar/>
      <div className="borderadd" style={{margin:"auto"}}>
      <div className="container">
      <h3 className="title-container">Ajouter Produit</h3>
           <div className="form-group">
 {/*  <ToastContainer />*/}
  </div> 
  <div className="row justify-content-md-center">
        <form onSubmit={this.handleSubmit}>
        <div className="row">
    <div className="col-md-6">
    <label >Photo Produit:</label>

    
        {this.state.files.length > 0 &&
          <Fragment>
            <h3>Previews</h3>
              <img
                alt="Preview"
               src={this.state.files}
               width="200px"
               height="200px"
               class="rounded-circle"
                
              />
            
          </Fragment>
  }
          <input
            type="file"
            name="image"
            accept="image/*"
            encType="multipart/form-data"
            onChange={this.handleChange}
            ref={this.imageName}
          />{" "}  <button type="button" className="btn btn-success" onClick={()=> this.onClickHandler()}>Upload</button> 
          </div>
          <div className="col-md-6">
            <label for="Titel">Titre Produit</label><br/>
          <input
          required
            type="Text"
            name="Titel"
            placeholder="Titre"
            onChange={this.handleChange}
          /></div></div>{" "}
          <br />
          <div className="row">
          <div className="col-md-6">
          <label for="Prix"> Prix</label><br/>
          <input
          required
            type="text"
            name="Prix"
            placeholder="Prix"
            onChange={this.handleChange}
          />{" "} DT
          </div>
          <div className="col-md-6">
          <label for="Discount">Discount Produit</label><br/>
          <input
          required
            type="text"
            name="Discount"
            placeholder="Discount"
            onChange={this.handleChange}
          />{" "} DT
          </div>
         </div>   <br />
           <br />
          <div className="row">

          <label className="col-md-6">Description</label>
          <div className="col-md-6">
        
          <textarea
            name="Description"
            rows="5" cols="33"
            onChange={this.handleChange}
          >{" "}</textarea> </div></div>
          <br />
          <input  class ="btn btn-success" type="submit" value='Ajouter Produit' />
        </form>
        </div>
      </div>
      </div>
      </div>
    );
  }
}
const mapstatetoprops = (state) => ({
  
})
const mapdispatchtoprops = (disptach) => ({
    PostProduitt : (obj) => disptach(PostProduitt(obj))

})
export default connect(mapstatetoprops,mapdispatchtoprops)(CreateListing);
