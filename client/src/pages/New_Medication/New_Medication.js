// import React from "react";
import React, { Component, Fragment } from "react";
import Input from "../../components/input/input";
import API from "../../utilities/API";
import API4 from "../../utilities/API4";
import { Col, Row, Container } from "reactstrap";
import Button from "../../components/button/Button";
import "./New_Medication.css";



// class New_Medication extends React.Component {

//   state = {
//     drug: [],
//         ndcNum: "38-991-23",
//         rxNum: "8813S",
//         pharmName: "Save On 10",
//         doctorName: "Dr. Reese",
//         drugName: "Ramelteon",
//         drugForm: "tablet",
//         drugFormSizeAndMeasure: "300 mg",
//         currentQty: 15,
//         bottleFullQty: 90,
//         taken: false,
//         rxDiscard: "2019-02-02",
//         rxReorder: "2019-03-03",
//         drugDose: 1,
//         drugFreq: 2,
//         early: true,
//         middle: false,
//         late: true,
//         folders: ['early', 'mid', 'late'],
//         values: []
//   }

//   // componentDidMount() {
//   //   this.loadDrugData()
//   // }

//   handleChange = (e) => {
//     let options = e.target.options;
//     let selectedOptions = [];

//     for(let i = 0; i < options.length; i++) {
//         if( options[i].selected ) {
//             selectedOptions.push(options[i].value);
//         }
//     }

//     this.setState({values: selectedOptions});
// }

// handleSubmit = (e) => {
//   e.preventDefault();
//   console.log('this.state.values' + this.state.values);
// }
// // componentDidMount() {
// //   // alert("here")
// //   API.getDrugs()
// //   .then(res => this.setState({
// //     drugs: res.data
// //   }))
// //   .catch(err => console.log(err))
// // }


//   render() {
//     return (
//       <div>
//         <h1>Input a New Prescription</h1>
//         <form onSubmit={this.handleSubmit}>
//                 <select multiple="true" value={this.state.values} onChange={this.handleChange}>
//                     {this.state.folders.map((item, index) => 
//                         <option value={index} key={index}>{item}</option>    
//                     )}
//                 </select>
//                 <button type="submit">Go</button>
//             </form>
//       </div>

//     )
//   }


// }

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


  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    this.showState()
  }
  showState() {
    console.log("state-early :" + this.state.early + "  state-middle :" + this.state.middle + "  state-late :" + this.state.late);
  }

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
                title="Drug size, measuring units and type:"
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
                title="Current quantity in bottle:"
                value={this.state.bottlePartialQuanitity}
                onChange={this.handleInputChange}
                name="bottlePartialQuanitity"
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
              <Input
                title="How much do you take per dose:"
                value={this.state.drugDose}
                onChange={this.handleInputChange}
                name="drugDose"
                inputType="number"
                placeholder="How many in each dose?"
              />
              <p>What time(s) of day is it to be taken?</p>
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
                className="button-padding"
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


export default New_Medication;


