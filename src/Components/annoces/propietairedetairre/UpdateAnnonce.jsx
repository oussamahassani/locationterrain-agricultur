import React,{Component} from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input,Form,Label } from 'reactstrap';
import {Getanonces,updateannoces} from '../../../action/Annonce'
import {connect} from 'react-redux'
let  donner = []
class UpdateAnnonce  extends Component{

    componentDidMount() {
        this.props.Getanonces()
       }
       UpdateAnnonce() {
           console.log(donner[0])
           this.props.updateannoces(donner)
       }

render() {
donner = this.props.annoce.filter(annonce => annonce._id ==this.props.match.params.id)

  return (
    <div className="container">
           <br/>
        <h4>Modifier annonce</h4>
     { donner.map( annonce => 
     <>
     <Label >Prix: </Label>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText><i class="fa fa-money" aria-hidden="true"></i>
</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="prix" defaultValue = {annonce.price} onChange= {(e) => donner[0].price = e.target.value}/>
      </InputGroup>
      <br />
      <Label >Espace: </Label>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
          <i class="fa fa-calculator" aria-hidden="true"></i>

          </InputGroupText>
        </InputGroupAddon>
        <Input placeholder="espace" defaultValue = {annonce.espace}  onChange= {(e) => donner[0].espace = e.target.value}/> 
      </InputGroup>
      <br />
      <Label >Type de bien : </Label>
      <Input type="select" name="select"  >
        <option value={annonce.typebien} selected>{annonce.typebien}</option>
       {annonce.typebien == "Materiel" ? null  : <option  value="Materiel">Materiel</option>}
       {annonce.typebien == "Terre" ? null  :  <option value="Terre">Terre</option>}
        
   
        </Input>
         <br />
         <Label >Longitude   ET Altitude: </Label>
      <InputGroup>
        <InputGroupAddon addonType="prepend">  <InputGroupText><i class="fa fa-map" aria-hidden="true"></i>
        </InputGroupText>
</InputGroupAddon>
        <Input placeholder="Longitude" defaultValue={annonce.longitude}  onChange= {(e) => donner[0].longitude = e.target.value}/>
        <InputGroupAddon addonType="prepend">  <InputGroupText><i class="fa fa-map" aria-hidden="true"></i>
        </InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Altitude"  defaultValue={annonce.altitude} onChange= {(e) => donner[0].altitude = e.target.value}/>
      </InputGroup> <br/>
      <Label>type location</Label>
      <Input type="select" name="select"  >
         <option  value= {annonce.typelocation} > {annonce.typelocation}</option>
         {annonce.typelocation == "Pourcentage" ? null  :   <option value="Pourcentage"> Pourcentage</option>}
         {annonce.typelocation == "Location" ? null  :<option value="Location"> Location</option> }
         </Input>
      <Label >Description: </Label>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
        </InputGroupAddon>
        <textarea  class="btn-block" rows="6" cols="50" defaultValue = {annonce.description}  onChange= {(e) => donner[0].description = e.target.value}></textarea>
      </InputGroup>
      
      </>
     
     )
     }
      <br />
      <button className="btn btn-warning float-right" onClick={() =>this.UpdateAnnonce()}>Modifer</button>
      <br/>
      <br />
      <br />
    </div>
  );
};
}
export default connect((state) => ({
    annoce : state.annonce
   }) , {Getanonces,updateannoces})(UpdateAnnonce);
