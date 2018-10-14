import React, { Component } from "react";
import Input from "../../components/input"
import Modal from "../../components/modal"
import "./Authentication.css"



class Authentication extends Component {

  state = {
    firstName: "",
    lastName: "",
    password: ""
  }


  handleInputChange = event => {
    let value = event.target.value
    const name = event.target.name

    if (name === "password") {
      value = value.substring(0, 15)
    }

    this.setState({
      [name]: value
    })

  }

  handleFormSubmit = event => {
    event.preventDefault();


    this.setState({
      firstName: "",
      lastName: "",
      password: ""
    });
  };

  render() {
    return (

     
      <Modal>
        
          <form>

            <Input
              value={this.state.firstName}
              name="userName"
              onChange={this.handleInputChange}
              type="text"
              placeholder="userName"
            />
            <Input
              value={this.state.password}
              name="password"
              onChange={this.handleInputChange}
              type="password"
              placeholder="Password"
            />

          </form>
        
      </Modal>
   
      




    )
  }
}

export default Authentication;

