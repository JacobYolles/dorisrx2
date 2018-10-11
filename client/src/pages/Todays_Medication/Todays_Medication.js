import React, { Component, Fragment } from "react";
import "./Todays_Medication.css";

/* Import Components */
// import CheckBox from "../../components/checkBox/CheckBox";
// import TextArea from "../../components/textArea/TextArea";
// import Select from "../../components/select/Select";
import Button from "../../components/button/Button";
import Wrapper from "../../components/wrapper/Wrapper";
import { Col, Row, Container } from "reactstrap";
import API2 from "../../utilities/API2";
import { Link } from "react-router-dom";

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
  // constructor(props) {
  //   super(props);

  // component did mount goes below the states.
  state = {
    inventory: [],
    drugname: "",
    bottleFullQuantity: "",
    bottlePartialQuantity: "",
    drugDose: "",
    drugFrequency: "",
  }


  componentDidMount() {
    this.loadInventory();
  }

  loadInventory = () => {
    API2.getInventories()
      .then(res =>
        this.setState({
          inventory: res.data,
          drugName: "",
          bottleFullQuantity: "",
          bottlePartialQuantity: "",
          drugDose: "",
          drugFrequency: "",
        })
      )
      .catch(err => console.log(err))
  }

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
    console.log("mid mid", mid);
    return (

      <Fragment>

        <Row>
          <Col className="test col-md-4">
            <h1 id="jake">early</h1>
            <table>
              <thead>
                <tr>
                  <th className="text-success">Drug Name</th>
                  <th>Dose</th>
                  <th>Drug Type</th>
                </tr>
              </thead>
              <tbody>
                {early.map(inventory => (
                  //   key={inventory._id}

                  <tr key={inventory._id}>
                    <Link
                      to="/New_Medication"><td>{inventory.drugName}</td></Link>
                    <Link
                      to="/New_Medication"><td>{inventory.drugDose}</td></Link>
                    <Link
                      to="/New_Medication"><td>{inventory.drugForm}</td></Link>
                    <td>
                      <Button
                        action={this.handleFormSubmit}
                        type={"primary"}
                        title={"TAKEN"}
                      /></td>
                  </tr>
                ))}
              </tbody>
            </table>

          </Col>

          <Col className="test col-md-4">
            <h1 id="jake">mid</h1>
            <table>
              <thead>
                <tr>
                  <th className="text-success">Drug Name</th>
                  <th>Dose</th>
                  <th>Drug Type</th>
                </tr>
              </thead>
              <tbody>
                {mid.map(inventory => (
                  <tr key={inventory._id}>
                    <Link
                      to="/New_Medication"><td>{inventory.drugName}</td></Link>
                    <Link
                      to="/New_Medication"><td>{inventory.drugDose}</td></Link>
                    <Link
                      to="/New_Medication"><td>{inventory.drugForm}</td></Link>
                    <td><Button
                      action={this.handleFormSubmit}
                      type={"primary"}
                      title={"TAKEN"}
                    /></td>
                  </tr>
                ))}

              </tbody>
            </table>
          </Col>
          <Col className="test col-md-4">
            <h1 id="jake">late</h1>
            <table>
              <thead>
                <tr>
                  <th className="text-success">Drug Name</th>
                  <th>Dose</th>
                  <th>Drug Type</th>
                </tr>
              </thead>
              <tbody>
                {late.map(inventory => (
                  <tr key={inventory._id}>
                    <Link
                      to="/New_Medication"><td>{inventory.drugName}</td></Link>
                    <Link
                      to="/New_Medication"><td>{inventory.drugDose}</td></Link>
                    <Link
                      to="/New_Medication"><td>{inventory.drugForm}</td></Link>
                    <td><Button
                      action={this.handleFormSubmit}
                      type={"primary"}
                      title={"TAKEN"}
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