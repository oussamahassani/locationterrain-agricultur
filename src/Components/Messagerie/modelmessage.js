import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export class ModalMessage extends React.Component {
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
        <Button className="bagroundmessagenonlu" onClick={this.toggle}>Ouvrire
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
                  <h4>
                    <a href="'mailto:'+selected.fromAddress">
                      {this.props.message.from}
                    </a>
                  </h4>
                </div>
                <div className="col-sm-4">
                  <small className="text-uppercase text-muted">Sent</small>
                  <h6>{this.props.message.dtSent}</h6>
                </div>
                <div className="col-sm-12">
                  <p
                    dangerouslySetInnerHTML={{
                      __html:this.props.message.body
                    }}
                  />
                </div>
                
                
              </div>
              {this.props.message.repalymessage.map(el => <>
              <span><strong>{el.fromreplay}:</strong></span>  <span>{el.repalymessage}</span> <br></br>
              </>
              )}
              </div>
         
               
              <p className="my-3" />
             
              <button
                className="btn-2 float-right"
                data-dismiss="modal"
                data-toggle="modal"
                data-target="#composeModal"
                onClick={this.toggle}
              >
                Rependre
              </button>
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

export default ModalMessage;
