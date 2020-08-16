import React,{Component} from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input,CustomInput } from 'reactstrap';
import Sidebar from '../compossant/Slidebar'
import {getoneuser,UpdateUser} from '../../action/Personne'
import {connect} from 'react-redux'
let  donner = ""
let nouvauxpasse =""
let passe =""
let oldpasse=""
class UserProfil extends Component{
state = {
  invalidFile:false,
  fileName : ""
}
    componentDidMount() {
        this.props.getoneuser(this.props.match.params.id)
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
alert("egale")
}
else
alert("diferent")

         
       }
       handleFileChange = ({target: {files}})  => {
        const cancel = !files.length;
        if (cancel) return;
     console.log(files)
     const [{ size, name }] = files;
        const maxSize = 90000;
    
        if (size < maxSize) {
          this.setState({fileName: name,invalidFile: false });
        } else {
          this.setState({fileName: "", invalidFile: true });
        }
      }
render() {
  const {invalidFile } = this.state;
  return (
    < div className="flexflex">
    <Sidebar/>
    <div className="container">

           <br/>
        <h4>Votre profile</h4>
     {donner.length > 0 ? donner.map( (personne , index) => 
   
     <div key = {index}>
     <label>Photo {"  "}</label>
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
            <button className="col-md btn btn-outline-success">Upload file</button>
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
    personne : state.personne
   }) , {getoneuser,UpdateUser})(UserProfil);
