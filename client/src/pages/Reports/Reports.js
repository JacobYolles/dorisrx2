import React, { Component } from "react";
import API from "../../utilities/API";
import Input from "../Input";
import Container from "../../components/container";
import TextArea from "../../components/textArea";
import Button from "../../components/button";


class Reports extends Component {

  state = {
    result: [],
    search: ""
  };

  componentDidMount(){
    this.searchDrug();
  }

  searchDrug = query => {
    API.searchFDA(query)
    .then(res => this.setState({ result: res.data }))
    .catch(err => console.log(err));
    console.log(this.state);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchDrug(this.state.search);
  };

  render() {
    return (
      <Container>
      <TextArea></TextArea>
      <Button>Submit</Button>
      </Container>
     
    );
  }
}

// const Reports = () => (
//   <div>
//     <h1>Here Are Your Prescription For Today!</h1>
//     <p>
//       Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui mauris,
//       ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus porta. Nam
//       quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
//       imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis
//       diam, sit amet facilisis lectus blandit at.
//     </p>
//   </div>
// );

export default Reports;