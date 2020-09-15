import React from "react";
import {updateproduitt} from '../../action/Produit'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import {connect} from 'react-redux'
export class ModalUpdateProduit extends React.Component {

  state = {
    modal:false,
    unmountOnClose:false,
    id : this.props.Produit._id
  }
   
     
       toggle = () => this.setState({modal:!this.state.modal});
      changeUnmountOnClose = e => {
          let value = e.target.value;
          this.setState({unmountOnClose:JSON.parse(value)});
      }
      onchange = (e) => {
        console.log(e.target.value , e.target.name)
        const name = e.target.name;
        const value = e.target.value
        this.setState({[name] : value})
      }
    render(){
      return (
          <div>
           
                  
                  {' '}
                  <Button color="warning" onClick={this.toggle}><i class="fa fa-pencil-square" aria-hidden="true"></i></Button>
           
              <Modal isOpen={this.state.modal} toggle={this.toggle}  unmountOnClose={this.state.unmountOnClose}>
                  <ModalHeader toggle={this.toggle}><legend class="center">Modifier Produit</legend></ModalHeader>
                  <form class="form-horizontal">
                  <ModalBody>
               


     
     

        <div class="form-group">
            <label class="col-md-4 control-label" for="Titel">Titre</label>
            <div class="col-md-6">
                <input  name="Titel" defaultValue={this.props.Produit.Titel}    type="text" placeholder="" class="form-control input-md" onChange={this.onchange} required=""/>
            </div>
        </div>
           
        <div class="form-group registration-date">
        <div class="form-group">
            <label class="col-md-4 control-label" for="Prix">Prix:</label>
            <div class="col-md-6">
                <input name="Prix"  defaultValue={this.props.Produit.Prix} onChange={this.onchange}  type="text" placeholder="" class="form-control input-md"/>

            </div>
        </div>
        
     
        <div class="form-group">
            <label class="col-md-4 control-label" for="Discount">Remise:</label>
            <div class="col-md-6">
                <input  name="Discount" defaultValue={this.props.Produit.Discount} type="text" placeholder="" onChange={this.onchange} class="form-control input-md"/>

            </div>
        </div>        

        <div class="form-group">
            <label class="col-md-4 control-label" for="cost">Discription:</label>
            <div class="col-md-12">
                <textarea   name="Description" type="text" defaultValue={this.props.Produit.Description} onChange={ this.onchange}  placeholder="" class="form-control input-md"/>
            </div>
        </div>
  
        
        </div>

        </ModalBody>
                  <ModalFooter>
                      <Button class="btn btn-primary" color="warning" onClick={() => this.props.updateproduitt(this.state)}>Modifier Produit</Button>{' '}
                      <Button  class="btn btn-danger" color="secondary" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
</form>
                 
              </Modal>
          </div>
      );
  }
  
}


export default connect(null , {updateproduitt})(ModalUpdateProduit) ;