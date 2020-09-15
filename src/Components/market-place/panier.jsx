import React, { Component  } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {getallproduitfrompannier,delateoneproduitfrompannier} from '../../action/pannier'
import Paypal from './Paypal'

import { connect } from 'react-redux';
class Pannier extends Component {
  state = {
    modal : false,
   somme : 0 , 
   produit : []
   
   
       }
       componentDidMount(){
        this.props.getallproduitfrompannier()
      }
      calculefunction = () => 
      { const somme  = this.state.produit.map(el => Number(el.Prix)).reduce((a,b)=> a+b)
        this.setState({somme : somme})
       console.log(somme)
      }
      showbutton(){
        if(this.state.produit.length >0 )
        return   <div className="row">

        <button className="btn btn-success col-sm-3"  onClick ={this.calculefunction}>calculer sommme</button>
          
          <p className="col-sm-3 offset-md-4">{this.state.somme > 0 ?"votre montant est "  + this.state.somme + "$" : ""} </p> </div>
         else
        return null}
      
      static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.pannier!== prevState.produit ){
          return { produit: nextProps.pannier };
        }
        else return null; // Triggers no change in the state
      }
  toggle = () => this.setState({ modal: !this.state.modal})
  closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;

render () {
  return (
  <div>
    <button class="btn" onClick={this.toggle}><span>{this.props.pannier.length}</span>
      <i class="fa fa-shopping-cart" aria-hidden="true" style={{color:'black'}}></i>
</button>

    <Modal     aria-labelledby="example-modal-sizes-title-lg" isOpen={this.state.modal} toggle={this.toggle} size="lg" >
      <ModalHeader toggle={this.toggle} close={this.closeBtn}></ModalHeader>
      <ModalBody>
 
<h1> <i class="fa fa-info" aria-hidden="true"></i> Bonjour panier</h1>
  {this.props.pannier.map((produit,index) => 
  <>
  <div className="d-flex justify-content-around">
  <p class="col-sm-3">{produit.Titel}</p>
  <p class="col-sm-3">{produit.Prix}</p>
  <p class="col-sm-3"><img src={`image/${produit.image}`} width="70px"/></p>
  <p class="col-sm-1" onClick={() => this.props.delateoneproduitfrompannier(produit._id)}>❌</p>
  </div>
  </>

)}

{this.showbutton()}
{this.state.somme > 0 ? <Paypal somme={this.state.somme}/> : null}
      </ModalBody>
<ModalFooter ><div className="d-flex justify-content-around" style={{width:"80%"}}>Nous acceptant <img src="image/iconcart/master.png" alt="master" width="50px"/> <img src="image/iconcart/paypal.png" alt="" width="50px"/>
<img src="image/iconcart/visa.png" alt="" width="50px"/></div> </ModalFooter>
      
    </Modal>
  </div>
);
}
}
const mapStateToProps = (state) => ({

    pannier : state.Pannier
  
})
//
export default connect(mapStateToProps ,{getallproduitfrompannier,delateoneproduitfrompannier}) (Pannier)
