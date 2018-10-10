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

      <div className="modal-container">

        <Modal
          show={this.state.show}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title">
              Welcome to DorisRx
                </Modal.Title>
          </Modal.Header>
          <Modal.Body>

            {this.props.children}

          </Modal.Body>
          <Modal.Footer>
            <div id ="modalButtons">
              <Button onClick={this.handleHide} href = "/reports">Log In</Button>
              <Button onClick={this.handleHide} href = "/caregiver">New User</Button>
            </div>

          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}


export default ModalOne;


