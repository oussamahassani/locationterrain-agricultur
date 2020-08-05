import React,{Component} from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import {getoneuser,UpdateUser} from '../../action/Personne'
import {connect} from 'react-redux'
let  donner = ""
let nouvauxpasse =""
let passe =""
let oldpasse=""
class UserProfil extends Component{

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
 Object.assign(user , {"pass":passe , "oldpass":oldpasse})
this.props.UpdateUser(user)
alert("egale")
}
else
alert("diferent")

         
       }

render() {
  return (
    <div className="container">
           <br/>
        <h4>Votre profile</h4>
     {donner.length > 0 ? donner.map( personne => 
   
     <>
      <label>Nom {"  "}</label>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
       
          <InputGroupText><i class="fa fa-user" aria-hidden="true"></i>

</InputGroupText>
        </InputGroupAddon >
    
        <Input placeholder="nom" defaultValue = {personne.Nom } onChange= {(e) => donner[0].Nom = e.target.value}/>
      </InputGroup>
      <br />
      <label>Prenom</label>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
      
          <InputGroupText>
          <i class="fa fa-user" aria-hidden="true"></i>


          </InputGroupText>
        </InputGroupAddon>

        <Input placeholder="espace" defaultValue = {personne.Prenom}  onChange= {(e) => donner[0].Prenom = e.target.value}/> 
      </InputGroup>
      <br />
      <label>Ancien mot de passe</label>
   
      <InputGroup>
      <InputGroupAddon addonType="prepend">  
        <InputGroupText><i class="fa fa-key" aria-hidden="true"></i>
        </InputGroupText>
        </InputGroupAddon>
         <Input type="password"  onChange= {(e) =>  oldpasse= e.target.value}/>
         </InputGroup>
         <br />
      <InputGroup>
  
        <InputGroupAddon addonType="prepend">  
        <label>Nouvaux de passe</label>
        <InputGroupText><i class="fa fa-key" aria-hidden="true"></i>

        </InputGroupText>
</InputGroupAddon>
        <Input  type="password"  onChange= {(e) =>  passe= e.target.value}/>
        <InputGroupAddon addonType="prepend">  
        <label>confirme  passe</label>
        <InputGroupText><i class="fa fa-key" aria-hidden="true"></i>

        </InputGroupText>
        </InputGroupAddon>
        <Input  type="password"  onChange= {(e) => nouvauxpasse = e.target.value}/>
      </InputGroup>
      </>
     
     )
     : <p> user n'xiste pas </p>}
      <br />
      <button className="btn btn-warning float-right" onClick={() =>this.updateuser()}>Modifer</button>
      <br/>
      <br />
      <br />
    </div>
  );
};
}
export default connect((state) => ({
    personne : state.personne
   }) , {getoneuser,UpdateUser})(UserProfil);
