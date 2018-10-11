import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container, Jumbotron } from "reactstrap";
import API4 from "../../utilities/API4";

class Detail extends Component {
  state = {
    drugsValues: [],  
    warnings: "",
    directions: "",
    usage: ""
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount(){
    this.loadDrugs();
   this.fdaData();
  }


  fdaData = () => {
      API4.getFdaDataValue(tylenol) 
          .then(res => {
              console.log({drugsValues})



        })
      
  }

  loadDrugs = () => {
    API.searchFDA() 
    .then(res => {
      console.log({ warnings: res.data.results[0].warnings, directions: res.data.results[0].dosage_and_administration, usage: res.data.results[0].indications_and_usage})
      
      this.setState({ "warnings": res.data.results[0].warnings, "directions": res.data.results[0].dosage_and_administration, "usage": res.data.results[0].indications_and_usage })

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
                {this.state.book.title} by {this.state.book.author}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Synopsis</h1>
              <p>
                {this.state.book.synopsis}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Authors</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;