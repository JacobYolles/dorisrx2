// import React from "react";
import React, { Component, Fragment } from "react";
import Input from "../../components/input/input";
import API from "../../utilities/API";
import API4 from "../../utilities/API4";
import { Col, Row, Container } from "reactstrap";
import Button from "../../components/button/Button";
<<<<<<< HEAD:client/src/pages/InputForm/InputForm.js
import { Link } from "react-router-dom";
// import {  FormBtn } from "../../components/Form";



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
    
  
  
=======
import "./New_Medication.css";
>>>>>>> master:client/src/pages/New_Medication/New_Medication.js


  handleInputChange = event => {
    if(event.target.type === 'checkbox'){
      event.target.checked = event.target.value
    }
    if(event.target.value === 'on'){
      event.target.value = true
      this.state.drugFreq ++
    }

    // update the drugFreq based on how many checkmarks are checked
    // if (this.state.early == "true"){
    //   this.state.drugFreq = this.state.drugFreq +1
    // }

    // if (this.state.middle == "true"){
    //   this.state.drugFreq = this.state.drugFreq +1
    // }

    // if (this.state.late == "true"){
    //   this.state.drugFreq = this.state.drugFreq +1
    // }



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



<<<<<<< HEAD:client/src/pages/InputForm/InputForm.js
=======
class New_Medication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ndcNum: "",
      rxNum: "",
      pharmName: "",
      doctorName: "",
      drugName: "",
      drugForm: "",
      drugFormSizeAndMeasure: "",
      currentQty: "",
      bottleFullQty: "",
      rxDiscard: "",
      rxReorder: "",
      drugDose: "",
      drugFreq: "",
      early: "",
      middle: "",
      late: ""

    };
    // console.log("state-early :" + this.state.early + "state-middle :" + this.state.middle + "state-late :" + this.state.late );

    this.handleInputChange = this.handleInputChange.bind(this);

  }

>>>>>>> master:client/src/pages/New_Medication/New_Medication.js


<<<<<<< HEAD:client/src/pages/InputForm/InputForm.js
=======
    this.setState({
      [name]: value
    });
    this.showState()
  }
  showState() {
    console.log("state-early :" + this.state.early + "  state-middle :" + this.state.middle + "  state-late :" + this.state.late);
  }
>>>>>>> master:client/src/pages/New_Medication/New_Medication.js

  render() {
    return (

      <Container fluid>
        <Row>
          <Col size="md-6">

            <h1 className="new-M-h1">Prescription Bottle Inputter</h1>

            <form className="table-background">
              <Input
                title="Prescription Number"
                value={this.state.rxNum}
                onChange={this.handleInputChange}
                name="rxNum"
                placeholder="Prescription Number"
              />
              <Input
                title="Pharmacy Name"
                value={this.state.pharmName}
                onChange={this.handleInputChange}
                name="pharmName"
                placeholder="Pharmacy Name"
              />
              <Input
                title="Doctor Name"
                value={this.state.doctorName}
                onChange={this.handleInputChange}
                name="doctorName"
                placeholder="Doctor Name"
              />
              <Input
                title="Drug Name"
                value={this.state.drugName}
                onChange={this.handleInputChange}
                name="drugName"
                placeholder="Drug Name"
              />
<<<<<<< HEAD:client/src/pages/InputForm/InputForm.js
            <Input
                title="Drug Dose"
                value={this.state.drugDose}
                onChange={this.handleInputChange}
                name="drugDose"
                inputType="number"
                placeholder="How many in each dose?"
              />
=======

>>>>>>> master:client/src/pages/New_Medication/New_Medication.js
              <Input
                title="Drug size, measuring units and unit type (ex: 150 mg tablet )"
                value={this.state.drugSizeMeasureType}
                onChange={this.handleInputChange}
                name="drugSizeMeasureType"
                placeholder="Drug size, measure and type (ex: 150 mg tablet ) "
              />
              <Input
                title="Bottle capacity when full"
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
                title="Discard Date"
                value={this.state.rxDiscard}
                onChange={this.handleInputChange}
                name="rxDiscard"
                inputType="date"
                placeholder="What is the discard date?"
              />
              <Input
                title="Reorder Date"
                value={this.state.rxReorder}
                onChange={this.handleInputChange}
                name="rxReorder"
                inputType="date"
                placeholder="What is the re-order date?"
              />
<<<<<<< HEAD:client/src/pages/InputForm/InputForm.js
              
                <p>What time(s) of day is it to be taken? (Check each that applies)</p>
                <label>
                Morning
=======
              <Input
                title="How many to take in each dose"
                value={this.state.drugDose}
                onChange={this.handleInputChange}
                name="drugDose"
                inputType="number"
                placeholder="How many in each dose?"
              />
              <p>What time(s) of day is it to be taken?</p>
              <label>
                <span className="form-padding">Morning</span>
>>>>>>> master:client/src/pages/New_Medication/New_Medication.js
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
<<<<<<< HEAD:client/src/pages/InputForm/InputForm.js

                      // onClick={this.handleFormSubmit}
                      action={this.handleFormSubmit}
                      type={"primary"}
                      title={"Submit"}
                      
                    />

                    
=======
                className="button-padding"
                action={this.handleFormSubmit}
                type={"primary"}
                title={"Submit"}

              />
>>>>>>> master:client/src/pages/New_Medication/New_Medication.js
            </form>

          </Col>
        </Row>
      </Container>
<<<<<<< HEAD:client/src/pages/InputForm/InputForm.js
      
=======




>>>>>>> master:client/src/pages/New_Medication/New_Medication.js
    );
  }
}
export default InputForm;


