import React, { Component } from "react";
import "./modalTwo.css";
import { Modal, Button } from "react-bootstrap"



class ModalTwo extends Component {
  constructor(props, context) {
    console.log(props)
    super(props, context);

    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: true,
    };
  }

  

  handleHide() {
    this.setState({ show: false });
  }
  render() {
    return (


      <Modal id ="modalContainerTwo"

        show={this.state.show}
        container={this}
        aria-labelledby="contained-modal-title"
      >
        <Modal.Header id = "modalHeader">
          <Modal.Title id="contained-modal-title">
            Medication Information:
            </Modal.Title>
        </Modal.Header>
        <div id = "modalDrugBody">
        <Modal.Body>
          {/* {this.props.state.drugData} */}
          {this.props.children}
        </Modal.Body>
        </div>
        <Modal.Footer id = "modalFooter">
          <Button onClick={this.handleHide} href = "/Todays_Medication">Close</Button>
        </Modal.Footer>
      </Modal>

    );
  }
}




export default ModalTwo;


