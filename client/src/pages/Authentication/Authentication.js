import React, { Component } from "react";
import Input from "../../components/input"
import Modal from "../../components/modal"
import "./modal.css"


const styles = {

  form: {
    width: 500,
    margin: "auto",
  },

  modal: {
    backgroundColor: "black"
  }

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
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    // if (!this.state.firstName || !this.state.lastName) {
    //   alert("Fill out your first and last name please!");
    // } else if (this.state.password.length < 6) {
    //   alert(
    //     `Choose a more secure password ${this.state.firstName} ${this.state
    //       .lastName}`
    //   );
    // } else {
    //   alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    // }

    this.setState({
      firstName: "",
      lastName: "",
      password: ""
    });
  };



  render() {
    return (

      <Modal style={styles.modal} className="modalOne">
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
            {/* <button onClick={this.handleFormSubmit}>Submit</button> */}

          </form>
        }
      </Modal>



    )
  }
}

export default Authentication;

