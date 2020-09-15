import React, { Component,Fragment } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { postpartenair } from '../../action/Expair'
import {connect} from 'react-redux'
import Sidebar from '../compossant/Slidebar'
import swal from "sweetalert";
import 'react-toastify/dist/ReactToastify.css';
class AddExpaire extends Component {
  state = {
    Nom:"",
    description:"",
    Photo:"",
    Linkedden :"",
    resauxsociaux:"",
    Nivaux :"",
    Post:"",
    files:[]
   
  };

  constructor() {
    super();
    this.imageName = React.createRef();
  }
  handleChange = event => {
    if (event.target.name === "Photo") {
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
      Nom,
      description,
      Photo,
      Linkedden,
      resauxsociaux,
      Nivaux,
      Post
    } = this.state;
    event.preventDefault();
    // console.log(this.state);
    let expaire = {
      Nom:Nom,
      description: description,
      Photo: Photo,
      Linkedden: Linkedden,
      resauxsociaux: resauxsociaux,
      Nivaux:Nivaux,
      Post:Post
      
    };

      if ( Nom &&  description && Photo && Linkedden &&  Nivaux && Post )
        {
         
            
      this.props.postpartenair(expaire)
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
      
           <div className="flexflex"><Sidebar/>
     
      <div className="borderadd" style={{margin:"auto"}}>
      <div className="container">
           <div className="form-group">
           <h3 className="title-container">Ajouter Expair</h3>
            
 {/*  <ToastContainer />*/}
  </div> 
  <div className="row justify-content-md-center">
        <form onSubmit={this.handleSubmit}>
        <div className="row">
    <div className="col-md-6">
    <label >Photo :</label>

    
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
            name="Photo"
            accept="image/*"
            encType="multipart/form-data"
            onChange={this.handleChange}
            ref={this.imageName}
          />{" "}  <button type="button" className="btn btn-success" onClick={()=> this.onClickHandler()}>Upload</button> 
          </div>
          <div className="col-md-6">
            <label for="Titel">Nom</label><br/>
          <input
          required
            type="Text"
            name="Nom"
            placeholder="Nom"
            onChange={this.handleChange}
          /></div></div>{" "}
          <br />
          <div className="row">
          <div className="col-md-6">
          <label for="Prix"> Linkedden</label><br/>
          <input
          required
            type="text"
            name="Linkedden"
            placeholder="Linkedden"
            onChange={this.handleChange}
          />{" "}
          </div>
          <div className="col-md-6">
          <label for="Discount">Cv</label><br/>
          <input
          required
            type="text"
            name="resauxsociaux"
            placeholder="cv"
            onChange={this.handleChange}
          />{" "} 
          </div>
         </div>   <br />
           <br />
           <div className="row">
          <div className="col-md-6">
          <label for="Prix"> Nivaux</label><br/>
          <input
          required
            type="text"
            name="Nivaux"
            placeholder="Nivaux"
            onChange={this.handleChange}
          />{" "}
          </div>
          <div className="col-md-6">
          <label for="Discount">Post</label><br/>
          <input
          required
            type="text"
            name="Post"
            placeholder="Post"
            onChange={this.handleChange}
          />{" "}
          </div>
         </div> 
          <div className="row">

          <label className="col-md-5">Description</label>
          <div className="col-md-5">
        
          <textarea
            name="description"
            rows="5" cols="33"
            onChange={this.handleChange}
          >{" "}</textarea> </div></div>
          <br />
          <input  class ="btn btn-success" type="submit" value='Ajouter Expair' />
        </form>
        </div>
      </div>
      </div>
      </div>
    );
  }
}

const mapdispatchtoprops = (disptach) => ({
  postpartenair : (obj) => disptach(postpartenair(obj))

})
export default connect(null,mapdispatchtoprops)(AddExpaire);
