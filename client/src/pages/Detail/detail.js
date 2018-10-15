import React, { Component } from "react";
import API4 from "../../utilities/API4";
import ModalTwo from "../../components/modalTwo"
import "./detail.css"



class Detail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      drugName: props.location.state.drugName
    }
  }

  componentDidMount() {
    this.loadDrugs(this.state.drugName);

  }

  loadDrugs = () => {
    API4.getFdaDataValue(this.state.drugName)
      .then(res => {

        this.setState({ "brand_name": res.data.results[0].openfda.brand_name, "warnings": res.data.results[0].warnings_and_cautions || res.data.results[0].warnings, "directions": res.data.results[0].dosage_and_administration, "usage": res.data.results[0].indications_and_usage })
        console.log(this.state)


      })
      .catch(err => console.log(err));
  }

  render() {

    if (this.state.brand_name) {
      return (

        <ModalTwo>
          <article>
            <p>
              <strong>Medication:</strong><br></br>{this.state.drugName}<br></br><br></br>
              <strong>Usage:</strong><br></br>{this.state.usage}<br></br><br></br>
              <strong>Instructions:</strong><br></br>{this.state.directions}<br></br><br></br>
              <strong>Warnings:</strong><br></br>{this.state.warnings}<br></br><br></br>
            </p>
          </article>
        </ModalTwo>
      );
    } else {
      return (

        <ModalTwo>
          <article>
            <p>
              <strong>Medication:</strong><br></br>{this.state.drugName}<br></br><br></br>
              <strong>Usage:</strong><br></br>{"Sorry, this information is not available!"}<br></br><br></br>
              <strong>Instructions:</strong><br></br>{"Sorry, this information is not available!"}<br></br><br></br>
              <strong>Warnings:</strong><br></br>{"Sorry, this information is not available!"}<br></br><br></br>
            </p>
          </article>
        </ModalTwo>

      )
    }
  }
}

export default Detail;