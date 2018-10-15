import React, { Component } from "react";
import Input from "../../components/input"
import Modal from "../../components/modal"
import "./Authentication.css"
import API5 from "../../utilities/API5"


class Authentication extends Component {



  state = {
    users: [],
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  }


  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    API5.getUsers().then(res =>
      this.setState({
          users: res.data,
          username: "",
          password: "",
          email: "",
          firstName: "",
          lastName: "",
      })
  )
  .catch(err => console.log(err))
};

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
        
          <form>

            <Input
              id="username"
              value={this.state.username}
              name="username"
              onChange={this.handleInputChange}
              type="text"
              placeholder="User Name"
            />
            <Input
              id="password"
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
   


          </form>
        
      </Modal>
   
      




    )
  }
}

export default Authentication;

