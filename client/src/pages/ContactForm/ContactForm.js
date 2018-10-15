// import React from "react";
import React, { Component, Fragment } from "react";
import Input from "../../components/input/input";
import API from "../../utilities/API";
import API4 from "../../utilities/API4";
import { Col, Row, Container } from "reactstrap";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
// import {  FormBtn } from "../../components/Form";
import "./ContactForm.css";



class ContactForm extends Component {

  state = {
        pharmName:"",
        doctorName:"", 
        address: "",
        city: "",
        state: "",
        zip: "",
        locationId: "",
        email: "",
        phone: "",
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
      API.saveContact({
        pharmName: this.state.pharmName,
        doctorName: this.state.doctorName, 
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
        locationId: this.state.locationId,
        email: this.state.email,
        phone: this.state.phone
      })
        
    }
  };


  render() {
    return (

<Container fluid>
        <Row>
          <Col size="md-6">
           
              <h1>Contact Inputs</h1>
            
            <form className="table-background">
              
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
                title="Address"
                value={this.state.address}
                onChange={this.handleInputChange}
                name="address"
                placeholder="address"
              />
            <Input
                title="City"
                value={this.state.city}
                onChange={this.handleInputChange}
                name="city"
                placeholder="city"
              />
              <Input
                title="state"
                value={this.state.state}
                onChange={this.handleInputChange}
                name="state"
                placeholder="state "
              />
              <Input
                title="zip"
                value={this.state.zip}
                onChange={this.handleInputChange}
                name="zip"
                placeholder="zip code "
              />
              <Input
                title="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                type="email"
                placeholder="email address "
              />
              <Input
                title="phone"
                value={this.state.phone}
                onChange={this.handleInputChange}
                name="phone"
                type="phone"
                placeholder="phone"
              />
              

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
export default ContactForm;


