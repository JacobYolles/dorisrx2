import React, { Component } from "react";
import Input from "../../components/input"
import Modal from "../../components/modal"
import "./Authentication.css"
import API5 from "../../utilities/API5"


const styles = {

  form: {
    width: 500,
    margin: "auto",
  },

}

class Authentication extends Component {

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    API5.getUsers
  }


  state = {
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
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
      username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    });
  };

  render() {
    return (

      <Modal>
        {
          <form style={styles.form} >

            <Input
              value={this.state.username}
              name="username"
              onChange={this.handleInputChange}
              type="text"
              placeholder="User Name"
            />
            <Input
              value={this.state.password}
              name="password"
              onChange={this.handleInputChange}
              type="password"
              placeholder="Password"
            />
            <Input
              value={this.state.email}
              name="email"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Email"
            />
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


          </form>
        }
      </Modal>



    )
  }
}

export default Authentication;

