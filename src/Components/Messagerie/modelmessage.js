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
        {console.log(this.props.message)}
        <Button color="info" onClick={this.toggle}>Open
        </Button>
         <Modal     aria-labelledby="example-modal-sizes-title-lg" isOpen={this.state.modal} toggle={this.toggle} size="lg" >
         <ModalHeader toggle={this.toggle} close={this.closeBtn}></ModalHeader>
         <ModalBody>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
          {this.props.message.send?this.props.message.send.map(el => <>
            <div className="modal-header">
               
              <div>
                <small className="text-uppercase text-muted">Subject</small>
                <h4 className="modal-title">{el.subject}</h4>
              </div>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-sm-8">
                  <small className="text-uppercase text-muted">From</small>
                  <h4>
                    <a href="'mailto:'+selected.fromAddress">
                      {el.from}
                    </a>
                  </h4>
                </div>
                <div className="col-sm-4">
                  <small className="text-uppercase text-muted">Sent</small>
                  <h6>{el.dtSent}</h6>
                </div>
                <div className="col-sm-12">
                  <p
                    dangerouslySetInnerHTML={{
                      __html:el.body
                    }}
                  />
                </div>
                
                <div className="col-sm-12">
                    <p>{el.repalymessagemessage}</p>
              </div>
              </div>
              </div>
              </>
                ) : null}
              <p className="my-3" />
             
              <button
                className="btn btn-outline-primary float-right"
                data-dismiss="modal"
                data-toggle="modal"
                data-target="#composeModal"
                onClick={this.toggle}
              >
                Reply
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
