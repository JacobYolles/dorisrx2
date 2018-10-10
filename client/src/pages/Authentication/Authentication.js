import React, { Component } from "react";
import Input from "../../components/input"
import Modal from "../../components/modal"
import "./Authentication.css"



const styles = {

  form: {
    width: 500,
    margin: "auto",
  },

}

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
        {
          <form style={styles.form} >

            <Input
              value={this.state.firstName}
              name="firstName"
              onChange={this.handleInputChange}
              type="text"
              placeholder="First Name"
            />
            <Input
              value={this.state.lastName}
              name="lastName"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Last Name"
            />
            <Input
              value={this.state.password}
              name="password"
              onChange={this.handleInputChange}
              type="password"
              placeholder="Password"
            />

          </form>
        }
      </Modal>



    )
  }
}

export default Authentication;

