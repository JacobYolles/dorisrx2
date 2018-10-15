// import React from "react";
import React, { Component, Fragment } from "react";
import Input from "../../components/input/input";
import API from "../../utilities/API";
import API4 from "../../utilities/API4";
import { Col, Row, Container } from "reactstrap";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
// import {  FormBtn } from "../../components/Form";
import "./inputForm.css";



class InputForm extends Component {

  state = {
        drugs: [],
        ndcNum: "12345",
        rxNum:"",
        pharmName:"",
        doctorName:"", 
        drugName:"",
        drugDose: 0,
        drugSizeMeasureType:"", 
        bottleFullQty: 0,
        bottlePartialQty: 0, 
        rxDiscard:"", 
        rxReorder:"",
        drugFreq:0, 
        early:false, 
        middle: false, 
        late: false, 
        currentQty: 0
    };
    
  
  


  handleInputChange = event => {
    if(event.target.type === 'checkbox'){
      event.target.checked = event.target.value
    }
    if(event.target.value === 'on'){
      event.target.value = true
      this.state.drugFreq ++
    }

  


    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  
  handleFormSubmit = event => {
    event.preventDefault();
    // if (this.state.title && this.state.author) {
    if (true) {
      API.saveDrug({
        ndcNum: "12345",
        rxNum: this.state.rxNum,
        pharmName: this.state.pharmName,
        doctorName: this.state.doctorName,
        drugName: this.state.drugName,
        drugDose: this.state.drugDose,
        drugSizeMeasureType: this.state.drugSizeMeasureType,
        bottleFullQty: this.state.bottleFullQty,
        bottlePartialQty: this.state.bottlePartialQty,
        rxDiscard: this.state.rxDiscard,
        rxReorder: this.state.rxReorder,
        drugFrequency: this.state.drugFreq,
        early: this.state.early,
        middle: this.state.middle,
        late: this.state.late,
        currentQuantity: this.state.currentQty
      })
        
    }
  };






  render() {
    return (

      <Container fluid>
        <Row>
          <Col size="md-6">

            <h1 className="new-M-h1">Medication Input</h1>


            <form className="table-background">
            <p> Please insert your medication information below:</p>
              <Input
                title="Prescription Number:"
                value={this.state.rxNum}
                onChange={this.handleInputChange}
                name="rxNum"
                placeholder="Prescription Number"
              />
              <Input
                title="Pharmacy Name:"
                value={this.state.pharmName}
                onChange={this.handleInputChange}
                name="pharmName"
                placeholder="Pharmacy Name"
              />
              <Input
                title="Doctors Name:"
                value={this.state.doctorName}
                onChange={this.handleInputChange}
                name="doctorName"
                placeholder="Doctor Name"
              />
              <Input
                title="Drug Name:"
                value={this.state.drugName}
                onChange={this.handleInputChange}
                name="drugName"
                placeholder="Drug Name"
              />
            <Input
                title="Drug Dose"
                value={this.state.drugDose}
                onChange={this.handleInputChange}
                name="drugDose"
                inputType="number"
                placeholder="How many in each dose?"
              />
              <Input
                title="Drug size, measuring units and unit type (ex: 150 mg tablet )"
                value={this.state.drugSizeMeasureType}
                onChange={this.handleInputChange}
                name="drugSizeMeasureType"
                placeholder="Drug size, measure and type (ex: 150 mg tablet ) "
              />
              <Input
                title="Bottle capacity when full:"
                value={this.state.bottleFullQty}
                onChange={this.handleInputChange}
                name="bottleFullQty"
                inputType="number"
                placeholder="How many in a full bottle (Qty)"
              />
              <Input
                title="How many in the bottle if not full when entering this the first time."
                value={this.state.bottlePartialQty}
                onChange={this.handleInputChange}
                name="bottlePartialQty"
                inputType="number"
                placeholder="If this is not a full bottle, how many are left? (otherwise leave blank)"
              />
              <Input
                title="Discard Date:"
                value={this.state.rxDiscard}
                onChange={this.handleInputChange}
                name="rxDiscard"
                inputType="date"
                placeholder="What is the discard date?"
              />
              <Input
                title="Reorder Date:"
                value={this.state.rxReorder}
                onChange={this.handleInputChange}
                name="rxReorder"
                inputType="date"
                placeholder="What is the re-order date?"
              />
              
                <p>What time(s) of day is it to be taken? (Check each that applies)</p>
                <label>
                <span className="form-padding">Morning</span>
                <input
                  title="Take it mornings"
                  name="early"
                  type="checkbox"
                  checked={this.state.early}
                  onChange={this.handleInputChange} />
              </label>

              <label>
                <span className="form-padding">Mid-Day</span>
                <input
                  name="middle"
                  type="checkbox"
                  checked={this.state.middle}
                  onChange={this.handleInputChange} />
              </label>

              <label>
                <span className="form-padding">Evening</span>
                <input
                  name="late"
                  type="checkbox"
                  checked={this.state.late}
                  onChange={this.handleInputChange} />
              </label>

              <Button

                      // onClick={this.handleFormSubmit}
                      action={this.handleFormSubmit}
                      type={"primary"}
                      title={"Submit"}
                      
                    />

                    
            </form>

          </Col>
        </Row>
      </Container>
      
    );
  }
}
export default InputForm;


