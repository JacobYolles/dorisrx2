import React, { Component, Fragment } from "react";
import "./Todays_Medication.css";

/* Import Components */
// import CheckBox from "../../components/checkBox/CheckBox";
// import TextArea from "../../components/textArea/TextArea";
// import Select from "../../components/select/Select";
import Button from "../../components/button/Button";
import { Col, Row, Container } from "reactstrap";
import API from "../../utilities/API";
import API2 from "../../utilities/API2";
import { Link } from "react-router-dom";
import { Query } from "mongoose";

// import {
//   Row, Col, Card, CardBlock, Container, CardTitle, CardText
// } from 'reactstrap';

// function time() {
//   var early = false
//   var middle = false
//   var late = false
// if (early === true) {
//   render(this.state.drugName, this.state.drugDose, this.state.bottlePartialQuantity -1 )
// }
// }

class TodaysMedication extends Component {
  constructor(props) {
    super(props);

<<<<<<< HEAD
    // component did mount goes below the states.
    this.state = {
      inventory: [],
      drugname: "",
      bottleFullQuantity: "",
      bottlePartialQuantity: "",
      drugDose: "",
      drugFrequency: "",
      taken: false
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
=======
  // component did mount goes below the states.
  this.state = {
    inventory: [],
    drugname: "",
    currentQuantity: "",
    bottleFullQuantity: "",
    bottlePartialQuantity: "",
    drugDose: "",
    drugFrequency: "",
    taken: false
>>>>>>> 7ead6cddfbf7f5da54446b1b7062204e3f7e109e
  }


  componentDidMount() {
    this.loadInventory();
    this.loadDrugs();
  }

  loadInventory = () => {
    API2.getInventories()
      .then(res =>
        this.setState({
          inventory: res.data,
          drugName: "",
          currentQuantity: "",
          bottleFullQuantity: "",
          bottlePartialQuantity: "",
          drugDose: "",
          drugFrequency: "",
          taken: ""
        })
      )
      .catch(err => console.log(err))
  }

  loadDrugs = () => {
    API.getDrugs()
      .then(res =>
        this.setState({
          drugs: res.data,
        })
      )
      .catch(err => console.log(err))
  }

  handleFormSubmit(drugName, quantity, dose, id) {
    console.log(drugName);
    console.log(quantity);
    console.log(dose);
    console.log(id);
    let updatedQuantity = quantity - dose;
    let newQuantity = {
      currentQuantity: updatedQuantity
    }
    console.log(newQuantity);
    API2.putInventory(id, newQuantity).then( res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }

//   decrementQuantity = (id, num) => {
//     API2.putInventory(id, num)
//         .then(
//           this.setState(this.state.inventory.currentQuantity = this.state.inventory.currentQuantity - this.state.inventory.drugDose) )
//         .catch(err =>console.log(err));
// }

  // pickImage = (drugForm)=> {
  //   let image;
  //   if(drugForm === 'capsule') {
  //     image = 'images/capsule.png'
  //   }
  //   return image;
  // }



  render() {
    const early = this.state.inventory.filter(drug => (drug.early === true || drug.early === "true"));
    const mid = this.state.inventory.filter(drug => (drug.mid === true || drug.mid === "true"));
    const late = this.state.inventory.filter(drug => (drug.late === true || drug.late === "true"));
    // console.log("mid mid", mid);
    return (

      <Fragment>

        <Row>
          <Col className="test col-md-4">
            <h1 id="times">Morning Medications</h1>
            <table className="transparent-tables">
              <thead>
                <tr>
                  <th width="100">Drug Name</th>
                  <th>Dose</th>
                  <th>Drug Type</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {early.map(inventory => (
                  //   key={inventory._id}

                  <tr key={inventory._id}>
                      {/* Name */}
                    <td><Link
                      className="link"
                      to={{ pathname: "/Detail", state: { drugName: inventory.drugName } }}>{inventory.drugName}</Link></td>
                      {/* Dosage */}
                      <td><Link className="link"
                       to={{ pathname: "/MedicationInventory", state: { drugDose: inventory.drugDose, inventory: inventory._id} }}>{inventory.drugDose}
                        </Link></td>
                    <td><Link
                      className="link"
                      to="/New_Medication">{inventory.drugForm}</Link></td>

                    <td>
                      <Button
                        // onClick={() => this.decrementQuantity(inventory._id, inventory.currentQuantity, inventory.drugDose)}
                        className="tButton"
                        action={this.handleFormSubmit.bind(this, inventory.drugName, inventory.currentQuantity, inventory.drugDose, inventory._id)}
                        type={"primary"}
                        title={"Taken"}
                      /></td>
                  </tr>
                ))}
              </tbody>
            </table>

          </Col>

          <Col className="test col-md-4">
            <h1 id="times">Midday Medications</h1>
            <table className="transparent-tables">
              <thead>
                <tr>
                  <th>Drug Name</th>
                  <th>Dose</th>
                  <th>Drug Type</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {mid.map(inventory => (
                  <tr key={inventory._id}>
                    <td>
                      <Link
                        to={{ pathname: "/Detail", state: { drugName: inventory.drugName } }}>{inventory.drugName}</Link></td>
                    <td> <Link
                      to="/MedicationInventory">{inventory.drugDose}</Link></td>
                    <td><Link
                      to="/New_Medication">{inventory.drugForm}</Link></td>

                    <td><Button
                      className="tButton"
                      action={this.handleFormSubmit.bind(this, inventory.drugName, inventory.currentQuantity, inventory.drugDose, inventory._id)}
                      type={"primary"}
                      title={"Taken"}
                    /></td>
                  </tr>
                ))}

              </tbody>
            </table>
          </Col>
          <Col className="test col-md-4">
            <h1 id="times">Evening Medications</h1>
            <table className="transparent-tables">
              <thead>
                <tr>
                  <th>Drug Name</th>
                  <th>Dose</th>
                  <th>Drug Type</th>
                </tr>
              </thead>
              <tbody>
                {late.map(inventory => (
                  <tr key={inventory._id}>
                    <td>
                      <Link
                        to={{ pathname: "/Detail", state: { drugName: inventory.drugName } }}>{inventory.drugName}</Link></td>
                    <td><Link to={{ pathname: "/MedicationInventory", state: { currentQuantity: inventory.drugDose } }}>{inventory.drugDose}
                        </Link></td>
                    <td>


                      <Link to="/New_Medication">{inventory.drugForm}</Link></td>
                    <td><Button
                      action={this.handleFormSubmit.bind(this, inventory.drugName, inventory.currentQuantity, inventory.drugDose, inventory._id)}

                      type={"primary"}
                      title={"Taken"}
                      // drugName={inventory.drugName}
                      // quantity={inventory.currentQuantity}
                    /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>

      </Fragment>

    )
  }

}
export default TodaysMedication;