import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export class ModalProduit extends React.Component {
  constructor(props) {
    super(props);

  }
  state = {
    modal : false,
  }
    toggle = () => this.setState({ modal: !this.state.modal})
    closeBtn = <button className="close" onClick={this.toggle}>&times;</button>
  render() {
    return (
        <>
        <Button className="bagroundmessagenonlu" onClick={this.toggle}><i class="fa fa-search"></i>
        </Button>
         <Modal isOpen={this.state.modal} toggle={this.toggle} size="lg" >
         <ModalHeader toggle={this.toggle} close={this.closeBtn}></ModalHeader>
         <ModalBody>
        <div className="modal-dialog modal-lg">
         
       
            <div>
               
             
            </div>
            <div>
              <div className="row">
                <div className="col-sm-6">
                  <small className="text-uppercase text-muted">Image</small>
                  <img src={"image/"+this.props.Produit.image}  width="300px"  />
                </div>
                <div className="col-sm-6">
                <div>
                <small className="text-uppercase text-muted">Titel </small>
                <h4 className="modal-title">{this.props.Produit.Titel}</h4>
              </div>
              <small className="text-uppercase text-muted">Description</small>
                <p>{this.props.Produit.Description}</p>
                <small className="text-uppercase text-muted">Discount</small>
                <p>{this.props.Produit.Discount > 0 ? this.props.Produit.Discount +"  DT" : "y'a pas de solde en ce produit"}</p>
                
                
                </div>
              
                </div> { /* end class model-body */ }
                
            
         
               
           
             
             
            </div>
        
        </div>
     
        </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
    </>
   
    );
  }
}

export default ModalProduit;