import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container, Jumbotron } from "reactstrap";
import API4 from "../../utilities/API4";
import "./detail.css"

class Detail extends Component {
  // state = {
  //   drugsValues: [],
  //   warnings: "",
  //   directions: "",
  //   usage: "",
  //   brand_name: ""
  // };
  constructor(props) {
    super(props);
    // console.log(props.location.state.drugName);
    this.state = {
      drugName: props.location.state.drugName
    }
  }

  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    this.loadDrugs(this.state.drugName);
    // this.fdaData(this.state.drugName));
    console.log(this.state.drugName);
  }


  fdaData = () => {
    API4.getFdaDataValue()
      .then(res => {
        // console.log({drugsValues})



      })

  }

  // deleteFdaValue

  loadDrugs = () => {
    API4.getFdaDataValue(this.state.drugName)
      .then(res => {
        console.log({ brand_name: res.data.results[0].openfda.brand_name, warnings: res.data.results[0].warnings_and_cautions||res.data.results[0].warnings, directions: res.data.results[0].dosage_and_administration, usage: res.data.results[0].indications_and_usage })

        this.setState({ "brand_name": res.data.results[0].openfda.brand_name, "warnings": res.data.results[0].warnings_and_cautions||res.data.results[0].warnings, "directions": res.data.results[0].dosage_and_administration, "usage": res.data.results[0].indications_and_usage })

      })
      .catch(err => console.log(err));


  }

  //   loadFDA = () => {


  //   }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                Here Is Your Medication Information
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h4>Here's Your Medication Information</h4>
              <p>
              <strong>Medication:</strong><br></br>{this.state.drugName}<br></br><br></br>

                <strong>Warnings:</strong><br></br>{this.state.warnings}<br></br><br></br>
                <strong>Instructions:</strong><br></br>{this.state.directions}
                <br></br><br></br>

                <strong>Usage:</strong><br></br>{this.state.usage}

              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/Todays_Medication">← Back to Prescription Log</Link>
          </Col>
        </Row>
      </Container>
      
    );
  }
}

export default Detail;