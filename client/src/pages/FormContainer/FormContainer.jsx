import React, { Component } from "react";

/* Import Components */
import CheckBox from "../components/checkBox/CheckBox";
import Input from "../components/input/Input";
import TextArea from "../components/textArea/TextArea";
import Select from "../components/select/Select";
import Button from "../components/button/Button";
import Wrapper from "../components/wrapper/Wrapper";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container } from "../components/Grid/";

// import {
//   Row, Col, Card, CardBlock, Container, CardTitle, CardText
// } from 'reactstrap';


class FormContainer extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     newUser: {
  //       name: "",
  //       age: "",
  //       gender: "",
  //       skills: [],
  //       about: "",
  //       password: ""
  //     },

  //     genderOptions: ["Male", "Female", "Others"],
  //     skillOptions: ["Programming", "Development", "Design", "Testing"]

  //   }
  //   this.handleTextArea = this.handleTextArea.bind(this);
  //   this.handleAge = this.handleAge.bind(this);
  //   this.handleFullName = this.handleFullName.bind(this);
  //   this.handleFormSubmit = this.handleFormSubmit.bind(this);
  //   this.handleClearForm = this.handleClearForm.bind(this);
  //   this.handleCheckBox = this.handleCheckBox.bind(this);
  //   this.handleInput = this.handleInput.bind(this);

  // }

  state = {
    newUser: {
      name: "",
      age: "",
      gender: "",
      skills: [],
      about: "",
      password: ""
    },

    genderOptions: ["Male", "Female", "Others"],
    skillOptions: ["Programming", "Development", "Design", "Testing"]

  }

  /* This lifecycle hook gets executed when the component mounts */

  handleEventChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;

    this.setState(prevState => ({
      newUser: { ...prevState.newUser, [key]: value }
    }), () => console.log(this.state.newUser))
  }


  handleFormSubmit(event) {
    event.preventDefault();
    let userData = this.state.newUser;

    fetch("http://example.com", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
      })
    })
  }


  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      newUser: {
        name: "",
        age: "",
        gender: "",
        skills: [],
        about: ""
      },
    })
  }


  render() {
    return (

      // <Container>
      <Row>
        <Col size="md-12">
          <Wrapper>
            <form className="container-fluid form" onSubmit={this.handleFormSubmit}>

              <Input inputType={"text"}
                title={"Full Name"}
                name={"name"}
                value={this.state.newUser.name}
                placeholder={"Enter your name"}
                handleChange={this.handleEventChange}

              /> {/* Name of the user */}

              <Input inputType={"text"}
                title={"Password"}
                name={"password"}
                value={this.state.newUser.password}
                placeholder={"Enter your password"}
                handleChange={this.handleEventChange}

              /> {/* Name of the user */}

              <Input inputType={"number"}
                name={"age"}
                title={"Age"}
                value={this.state.newUser.age}
                placeholder={"Enter your age"}
                handleChange={this.handleEventChange} /> {/* Age */}


              <Select title={"Gender"}
                name={"gender"}
                options={this.state.genderOptions}
                value={this.state.newUser.gender}
                placeholder={"Select Gender"}
                handleChange={this.handleEventChange}
              /> {/* Age Selection */}

              <CheckBox title={"Skills"}
                name={"skills"}
                options={this.state.skillOptions}
                selectedOptions={this.state.newUser.skills}
                handleChange={this.handleEventChange}
              /> {/* Skill */}

              <TextArea
                title={"About you."}
                rows={10}
                value={this.state.newUser.about}
                name={"currentPetInfo"}
                handleChange={this.handleEventChange}
                placeholder={"Describe your past experience and skills"} />{/* About you */}

              <Button
                action={this.handleFormSubmit}
                type={"primary"}
                title={"Submit"}
                style={buttonStyle}
              /> { /*Submit */}

              <Button
                action={this.handleClearForm}
                type={"secondary"}
                title={"Clear"}
                style={buttonStyle}
              /> {/* Clear the form */}

            </form>
          </Wrapper>
        </Col>
      </Row>
      // </Container>

    );
  }
}


const buttonStyle = {
  margin: "10px 10px 10px 10px"
}

export default FormContainer;