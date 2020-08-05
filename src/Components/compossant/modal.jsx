import React, { Component  } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Modals extends Component {
    state = {
 modal : false,
 creatAT : this.props.donner.createdAt


    }


  toggle = () => this.setState({ modal: !this.state.modal})
  closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;

render () {
  return (
  <div>
    <Button color="info" onClick={this.toggle}><i class="fa fa-info" aria-hidden="true"></i>
</Button>
    <Modal     aria-labelledby="example-modal-sizes-title-lg" isOpen={this.state.modal} toggle={this.toggle} size="lg" >
      <ModalHeader toggle={this.toggle} close={this.closeBtn}>{this.props.donner.id}</ModalHeader>
      <ModalBody>
      <table class="ui blue table">
              <thead>
                <tr><th>id</th>
                  <th>Nom</th>
                  <th>Prenom</th>
                  <th>Email</th>
                  <th>Image</th>
                  <th>typeuser</th>
                  <th>status</th>
                  <th>Date d'ajout</th>
                </tr></thead><tbody>
                <tr>
                  <td>{this.props.donner.Iduser}</td>
                  <td>{this.props.donner.Nom}</td>
                  <td>{this.props.donner.Prenom}</td>
                  <td>{this.props.donner.email}</td>
                  <td> <img src={this.props.donner.image} alt='image' width="40px"></img></td>
                  <td>{this.props.donner.typeuser}</td>
                  <td>{this.props.donner.status}</td>
                  <td>{this.state.creatAT}</td></tr>
              </tbody>
            </table>

  
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  </div>
);
}
}

export default Modals;
