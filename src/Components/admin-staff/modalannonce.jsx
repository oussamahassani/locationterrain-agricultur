import React, { Component  } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Modals extends Component {
    state = {
 modal : false,



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
                <tr>
                  <th>altitude</th>
                  <th>longitude</th>
                  <th>province</th>
                  <th>image</th>
                  <th>Rue</th>
                  <th>code Postale</th>
                  <th>Date d'ajout</th>
                </tr></thead><tbody>
                <tr>
                  <td>{this.props.donner.altitude}</td>
                  <td>{this.props.donner.longitude}</td>
                  <td>{this.props.donner.province}</td>
                  <td> <img src={"image/" + this.props.donner.image} alt='image' width="40px"></img></td>
                  <td>{this.props.donner.street}</td>
                  <td>{this.props.donner.postalCode}</td>
                  <td>{this.props.donner.datecreation.slice(0,10)}</td> </tr>
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
