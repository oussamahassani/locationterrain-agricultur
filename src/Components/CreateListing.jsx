import React, { Component } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import Cookies from 'js-cookie'
import { postannoce } from '../action/Annonce'
import {connect} from 'react-redux'
import swal from "sweetalert";
import 'react-toastify/dist/ReactToastify.css';
class CreateListing extends Component {
  state = {
    image:'',
    price:'', 
    espace:'', 
    longitude:'', 
    altitude:'', 
    typelocation:'',
    street:'',  
    city:'',    
    province:'', 
    postalCode:'', 
    description:'',
    typebien:'' 
 
  };

  constructor() {
    super();
    this.imageName = React.createRef();
  }
  handleChange = event => {
    if (event.target.name === "image") {
      this.setState({
        [event.target.name]: this.imageName.current.files[0].name
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  };

  handleSubmit = async event => {
    const {
      image, 
      price, 
      espace, 
      longitude, 
      altitude, 
      typelocation,
      street,  
      city,    
      province, 
      postalCode, 
      description,
      typebien 
    } = this.state;
    event.preventDefault();
    // console.log(this.state);
    let property = {
      image: image,
      price: price,
      longitude: longitude,
      altitude: altitude,
      typelocation: typelocation,
      street: street,
      city: city,
      province: province,
      postalCode: postalCode,
      description: description,
      espace: espace,
      typebien:typebien,
      idcreateur : Cookies.get('_id') 
    };

      if ( image &&  price && espace && longitude &&  altitude && typelocation &&
        street && city &&   province &&
        postalCode &&  description &&
        typebien )
        {
          if (description.length>10)
          {
            if(postalCode.length>6)
      this.props.postannoce(property)
      else
      swal("error!", "le code postal doit etre plus 6  Number" , "error")
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
      <div className="marginpage">
      <div className="container">
           <div className="form-group">
 {/*  <ToastContainer />*/}
  </div> 
  <div className="row justify-content-md-center">
        <form onSubmit={this.handleSubmit}>
        <div className="row">
    <div className="col">
  
          <input
            type="file"
            name="image"
            accept="image/*"
            encType="multipart/form-data"
            onChange={this.handleChange}
            ref={this.imageName}
          />{" "}  <button type="button" className="btn btn-success" onClick={()=> this.onClickHandler()}>Upload</button> 
          </div>
          <div className="col">
          <input
          required
            type="number"
            name="price"
            placeholder="Prix"
            onChange={this.handleChange}
          /> </div></div>{" "}
          <br />
          <div className="row">
          <div className="col">
          <input
          required
            type="text"
            name="espace"
            placeholder="espace"
            onChange={this.handleChange}
          />{" "}
          </div>
          <div class="col">
          <input
          required
            type="number"
            name="longitude"
            placeholder="longitude"
            onChange={this.handleChange}
          />{" "}</div></div>   <br />
          <div class="row">
           <div class="col">
          <input
          required
            type="number"
            name="altitude"
            placeholder="altitude"
            onChange={this.handleChange}
          />{" "}</div>
      <div class="col">
          <input
          required
            type="text"
            name="street"
            placeholder="Street"
            onChange={this.handleChange}
          />{" "}
          </div></div>
          <br />
          <div className="row">
           <div className="col">
          <input
          required
            type="text"
            name="city"
            placeholder=" Region"
            onChange={this.handleChange}
          />{" "}
          </div>
        <div className="col">
          <select   name="province" onChange={this.handleChange}>
	<option selected="selected" value="">ville</option>
	<option value="Beja">Beja</option>
	<option value="Bizerte">Bizerte</option>
	<option value="El Kef">El Kef</option>
	<option value="Gafsa">Gafsa</option>
	<option value="Gammarth">Gammarth - Côtes de Carthage</option>
	<option value="Kelibia">Kelibia</option>
	<option value="Korba">Korba</option>
	<option value="Les Berges du Lac">Les Berges du Lac</option>
	<option value="Matmata">Matmata</option>
	<option value="Medenine">Medenine</option>
	<option value="Sbeitla">Sbeitla</option>
	<option value="Carthage">Carthage</option>
	<option value="Djerba">Djerba</option>
	<option value="Douz">Douz</option>
	<option value="Hammamet">Hammamet</option>
	<option value="Kairouan">Kairouan</option>
	<option value="Mahdia">Mahdia</option>
	<option value="Monastir">Monastir</option>
	<option value="Nabeul">Nabeul</option>
	<option value="Sfax">Sfax</option>
	<option value="Sousse">Sousse</option>
	<option value="Tabarka">Tabarka</option>
	<option value="Tataouine">Tataouine</option>
	<option value="Tozeur">Tozeur</option>
	<option value="Tunis">Tunis</option>
	<option value="Zarzis">Zarzis</option>

</select>
</div></div>
         {" "}
          <br />
          <div className="row">
          <div className="col">
          <input
          required
            type="text"
            name="postalCode"
            placeholder="Code Postal"
            onChange={this.handleChange}
          />{" "}
          </div>
       
          <div className="col">
          <select  name="typelocation" onChange={this.handleChange}>
          <option value="Pourcentage">Pourcentage</option>
	<option value="Location">Location</option>
          </select>
          </div>
          <div className="col">
          <select  name="typebien" onChange={this.handleChange}>
          <option selected="selected" value="">Type bien</option>
	<option value="Terre">Terre</option>
	<option value="Materiel">Materiel</option>
	</select>
  
          {" "}
          </div>
          </div>  <br />
          <div className="row">

          <label className="col">Description</label>
          <div className="justify-content-md-center">
        
          <textarea
            name="description"
            rows="5" cols="33"
            onChange={this.handleChange}
          >{" "}</textarea> </div></div>
          <br />
          <input  class ="btn btn-success" type="submit" value='Ajouter annonce' />
        </form>
        </div>
      </div>
      </div>
    );
  }
}
const mapstatetoprops = (state) => ({
  
})
const mapdispatchtoprops = (disptach) => ({
  postannoce : (obj) => disptach(postannoce(obj))

})
export default connect(mapstatetoprops,mapdispatchtoprops)(CreateListing);
