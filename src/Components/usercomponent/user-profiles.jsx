import React,{Component,Fragment} from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input,CustomInput } from 'reactstrap';
import Sidebar from '../compossant/Slidebar'
import {getoneuser,UpdateUser} from '../../action/Personne'
import { getmessages } from '../../action/messagerie'
import Cookies from 'js-cookie'
import {connect} from 'react-redux'
import axios from 'axios'
import swal from "sweetalert";
let  donner = ""
let nouvauxpasse =""
let passe =""
let oldpasse=""
class UserProfil extends Component{
state = {
  invalidFile:false,
  fileName : "",
  files : "",
  uplod : ""
}
    componentDidMount() {
        this.props.getoneuser(this.props.match.params.id)
        this.props.getmessages(Cookies.get('_id'))
       }
       componentWillReceiveProps(nextProps){
        if(nextProps.personne!==this.props.personne){
          //Perform some operation
          donner = nextProps.personne 
         console.log("props"  ,nextProps.personne )
        
        }
      }
       updateuser() {
           console.log(donner[0] ,nouvauxpasse,passe)
if (nouvauxpasse ===passe)
{
 let user = Object.assign({},donner[0])
 Object.assign(user , {"pass":passe , "oldpass":oldpasse,"Photo":this.state.fileName})
this.props.UpdateUser(user)
}
else
swal("Err!", "Mot de passe Non pas identique", "error");

         
       }
       handleFileChange = ({target: {files}})  => {

        const cancel = !files.length;
        if (cancel) return;
     console.log(files)
     const [{ size, name }] = files;
        const maxSize = 90000;
        const types = ['image/png', 'image/jpeg', 'image/gif']
        if (size < maxSize ) {
          if (types.every(type => type !== files.types)) {  
          this.setState({fileName: name,invalidFile: false });
          this.setState({ files: URL.createObjectURL(files[0])});
          this.setState({ uplod: files[0]});
        } else {
          this.setState({fileName: "", invalidFile: true });
        }}
        else
        swal("Err!", "votre photo ne peut pas uploder verifier sa taille", "error");
       }
      onClickHandler = () => {
          const data = new FormData()
      
      if (this.state.uplod){
           
              data.append('file', this.state.uplod)
            
            console.log("data" , this.state.uplod)
          axios.post("http://localhost:4000/upload", data)
            .then(res => { // then print response status
            
              console.log(res)
            })
            .catch(err => { // then print response status
              console.log(err)
            })
      }
          else {
            swal("Err!", "votre photo ne peut pas uploder verifier sa taille", "error");
          }
        }
       
render() {
  const {invalidFile } = this.state;
  return (
    < div className="flexflex">
    <Sidebar  message = {this.props.message ? this.props.message.filter(el => !el.read  && !el.deleted ).length : null}/>
    <div className="container">

           <br/>
        <h4>Votre profile</h4>
     {donner.length > 0 ? donner.map( (personne , index) => 
   
     <div key = {index}>
     <label>Photo {"  "}</label>
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
     <InputGroup>
        <InputGroupAddon addonType="prepend">
        <InputGroupText><i className="fa fa-camera" aria-hidden="true"></i>

    
        </InputGroupText>
        {"  "} 

     
       
        <CustomInput
          type="file"
          id="exampleCustomFileBrowser"
          name="customFile"
          label={ 'choisir une image'}
          onChange={this.handleFileChange}
          invalid={invalidFile} />
        </InputGroupAddon>     
        <span class="col-md-3 offset-md-3"></span>
            <button className="col-md btn btn-outline-success" onClick={this.onClickHandler}>Upload file</button>
      </InputGroup>
      <br />
      <label>Nom {"  "}</label>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
       
          <InputGroupText>

</InputGroupText>

        </InputGroupAddon >
    
        <Input placeholder="nom" defaultValue = {personne.Nom } onChange= {(e) => donner[0].Nom = e.target.value}/>
      </InputGroup>
      <br />
      <label>Prenom</label>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
      
          <InputGroupText>
          <i className="fa fa-user" aria-hidden="true"></i>


          </InputGroupText>
        </InputGroupAddon>

        <Input placeholder="espace" defaultValue = {personne.Prenom}  onChange= {(e) => donner[0].Prenom = e.target.value}/> 
      </InputGroup>
      <br />
      <label>Ancien mot de passe</label>
   
      <InputGroup>
      <InputGroupAddon addonType="prepend">  
        <InputGroupText><i className="fa fa-key" aria-hidden="true"></i>
        </InputGroupText>
        </InputGroupAddon>
         <Input type="password"  onChange= {(e) =>  oldpasse= e.target.value}/>
         </InputGroup>
         <br />
      <InputGroup>
  
        <InputGroupAddon addonType="prepend">  
        <label>Nouvaux de passe</label>
        <InputGroupText><i className="fa fa-key" aria-hidden="true"></i>

        </InputGroupText>
</InputGroupAddon>
        <Input  type="password"  onChange= {(e) =>  passe= e.target.value}/>
        <span className=" col-md offset-md"></span>
        <InputGroupAddon addonType="prepend">  
        <label>Confirme  passe</label>
        <InputGroupText><i className="fa fa-key" aria-hidden="true"></i>

        </InputGroupText>
        </InputGroupAddon>
        <Input  type="password"  onChange= {(e) => nouvauxpasse = e.target.value}/>
      </InputGroup>
      </div>
     
     )
     : <p> user n'xiste pas </p>
     }
      <br />
      <div className=" float-right w-50">
      <button className="btn  col-md-6   btn-warning " onClick={() =>this.updateuser()}>Modifer</button>
      </div>
      <br/>
      <br />
      <br />
    </div>
    </div>
  );
};
}
export default connect((state) => ({
    personne : state.personne,
    message: state.message
   }) , {getoneuser,UpdateUser,getmessages})(UserProfil);
