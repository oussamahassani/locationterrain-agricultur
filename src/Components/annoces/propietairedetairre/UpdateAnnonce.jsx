import React,{Component} from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input,Form } from 'reactstrap';
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
console.log(this.props.annoce ,this.props.match.params.id)


  return (
    <div className="container">
           <br/>
        <h4>Modifier annonce</h4>
     { donner.map( annonce => 
     <>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText><i class="fa fa-money" aria-hidden="true"></i>
</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="prix" defaultValue = {annonce.price} onChange= {(e) => donner[0].price = e.target.value}/>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
          <i class="fa fa-calculator" aria-hidden="true"></i>

          </InputGroupText>
        </InputGroupAddon>
        <Input placeholder="espace" defaultValue = {annonce.espace}  onChange= {(e) => donner[0].espace = e.target.value}/> 
      </InputGroup>
      <br />
         <label >Type de bien :</label>
         <select class="btn-block btn-sm">
         <option value="terre"> terre</option>
         <option value="materiel"> materiel</option>
         </select>
         <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">  <InputGroupText><i class="fa fa-map" aria-hidden="true"></i>
        </InputGroupText>
</InputGroupAddon>
        <Input placeholder="Longitude" defaultValue={annonce.longitude}  onChange= {(e) => donner[0].longitude = e.target.value}/>
        <InputGroupAddon addonType="prepend">  <InputGroupText><i class="fa fa-map" aria-hidden="true"></i>
        </InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Altitude"  defaultValue={annonce.altitude} onChange= {(e) => donner[0].altitude = e.target.value}/>
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
