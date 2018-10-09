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
      <div className="modal-container" style={{ height: 200 }}>

        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
              Welcome to DorisRx
                </Modal.Title>
          </Modal.Header>
          <Modal.Body>

            {this.props.children}

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide}>Log In</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}


export default ModalOne;


