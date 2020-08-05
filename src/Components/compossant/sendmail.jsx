import React, { Component  } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {sendemailtoproprietairee,recupereremail} from '../../action/Email'
import {connect} from 'react-redux'
import swal from "sweetalert";
class Modalsemail extends Component {
 
    state = {
 modal : false

    }
    obj = {
      name : null,
      prenom: null,
      email : this.props.user,
      subject : null,
      message:null,
      to : this.props.toemail
        }
     sendformcontact = () => {
if (this.obj.name && this.obj.prenom  && this.obj.subject && this.obj.message)
{
          this.props.sendemailtoproprietairee(this.obj)
     
           }
else
swal("error!", "merci de remplire tout les champs!", "error");
          }

  toggle = () => this.setState({ modal: !this.state.modal})
  closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;

render () {
  return (
  <div>
    <Button className="btn btn-emailning" onClick={this.toggle}>Emailing <i class="fa fa-envelope" aria-hidden="true"></i> </Button>
   
    <Modal  className="bd-example-modal-lg"  isOpen={this.state.modal} toggle={this.toggle} size="1000">
      <ModalHeader toggle={this.toggle} close={this.closeBtn}></ModalHeader>
      <ModalBody>
     

      <div className="col d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up">

<div className="form"  >
    <div className="form-row">
      <div className="col- form-group">
        <input type="text" name="name" className="form-control" id="name" placeholder="Votre nom" data-rule="minlen:4" data-msg="Please enter at least 4 chars" required onChange={(e) => (this.obj.name = e.target.value)}/>
        <div className="validate"></div>
      </div>
      <div className="col-lg-6 form-group">
        <input type="text" class="form-control" name="prenom" id="prenom" placeholder="Votre prénom" data-rule="email" data-msg="Please enter a valid email" required onChange={(e) => (this.obj.prenom = e.target.value)}/>
        <div class="validate"></div>
      </div>
    </div>

  {/* <div className="form-group">
      <input type="email" className="form-control" name="email" placeholder="Votre adresse E-mail" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" onChange={(e) => (this.obj.email = e.target.value)}/>
      <div className="validate"></div>
  </div> */}

    <div className="form-group">
      <input type="text" className="form-control" name="subject" id="subject" placeholder="Sujet" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" onChange={(e) => (this.obj.subject = e.target.value)}/>
      <div class="validate"></div>
    </div>

    

    <div className="form-group">
      <textarea className="form-control" name="message" rows="7" data-rule="required" data-msg="Please write something for us" placeholder="Message"onChange={(e) => (this.obj.message = e.target.value)} ></textarea>
      <div className="validate"></div>
    </div>
    
    <div className="row">

      <div className="col-md-6"><div className="text-center">(Recaptcha)</div></div>

      <div className="col-md-6"><div className="text-center"><button className="btn btn-primary" onClick={() => this.sendformcontact()}>Envoyer</button></div></div>

    </div>

  </div>
  </div>


  
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  </div>
);
}
}


 const mapstatetoprops = (state) => ({
  
 })
 const mapdispatchtoprops = (disptach) => ({
  sendemailtoproprietairee : (obj) => disptach(sendemailtoproprietairee(obj)),
  recupereremail :(id) => disptach(recupereremail(id))
 
 })
 export default connect (mapstatetoprops,mapdispatchtoprops) (Modalsemail);
 
