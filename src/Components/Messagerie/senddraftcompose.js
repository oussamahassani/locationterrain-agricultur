import React,{Component} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {connect} from 'react-redux'
import {updatemessagedrafts} from '../../action/messagerie'
 class Senddraftcompose extends Component {
    constructor(props) {
        super(props);
    
      }
      state = {
        modal : false,
      }
    Senddraftcompose = () => {
        this.props.updatemessagedrafts(this.props.message._id)
        this.setState({ modal: false})
    }
        toggle = () => this.setState({ modal: !this.state.modal})
        closeBtn = <button className="close" onClick={this.toggle}>&times;</button>
      render() {
    return (
        <>
            <Button  className="bagroundmessagenonlu" onClick={this.toggle}>Ouvrire 
        </Button>
         <Modal isOpen={this.state.modal} toggle={this.toggle} size="lg" >
         <ModalHeader toggle={this.toggle} close={this.closeBtn}></ModalHeader>
         <ModalBody>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
       
            <div className="modal-header">
               
              <div>
                <small className="text-uppercase text-muted">Sujet </small>
                <h4 className="modal-title">{this.props.message.subject}</h4>
              </div>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-sm-8">
                  <small className="text-uppercase text-muted">From</small>
                  <p>{this.props.message.fromAddress}</p>
                </div>
                <div className="col-sm-12">
                    <small className="text-uppercase text-muted">Message:</small>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:this.props.message.body
                    }}
                  />
                </div>
                
                
              </div>
              
              
              </div>
         
               
              <p className="my-3" />
             
              <button className="btn-2"
                onClick={this.Senddraftcompose}
              >
                Envoyer
              </button>
             
            </div>
        
        </div>
     
        </ModalBody>
      <ModalFooter>
        <p className="text-center">Mazretna@2020</p>
      </ModalFooter>
    </Modal>
    </>
     
    )
}
}
const mapstatetoprops = (state) => ({
    email : state.email
   })
  const mapdispatchtoprops = (disptach) => ({
    updatemessagedrafts:(id) => disptach(updatemessagedrafts(id))
   })
export default connect (mapstatetoprops,mapdispatchtoprops)(Senddraftcompose)