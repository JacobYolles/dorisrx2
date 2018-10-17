import React, { Component } from "react";
import "./modal.css";
import { Button, Modal } from "react-bootstrap"



class ModalOne extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: true
    };
  }

  handleHide() {
    this.setState({ show: false });
  }
  render(props) {
    return (


      
      <Modal id = "modalContainerOne"
        show={this.state.show}
        container={this}
        aria-labelledby="contained-modal-title"
      >
        <Modal.Header id = "modalHeader">
          <Modal.Title id="contained-modal-title">
           <span id = "title">DorisRx</span>
                </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          {this.props.children}

        </Modal.Body>
        <Modal.Footer id = "modalFooter">
          <div id="modalButtons">
            <Button onClick={this.handleHide} href="/Todays_Medication">Log In</Button>
            <Button onClick={this.handleHide} href="/New_Medication">New User</Button>
          </div>

        </Modal.Footer>

      </Modal>
     

    );
  }
}


export default ModalOne;


