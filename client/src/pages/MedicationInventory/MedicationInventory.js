import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container, Jumbotron } from "reactstrap";
import API2 from "../../utilities/API2";
import API from "../../utilities/API";




class DrugInventory extends Component {
 
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         drugName: props.location.drugName,
            
    //     }
    // }

    // componentWillMount(){
    //     console.log("Props", props.drugInventory)
    // }

    // componentDidMount(){
    //     this.loadInventories(this.state.drugName);
    //     console.log(this.state.drugName);
    //     console.log("Props", props);

    // }

    loadInventory = () => {
        API2.getInventories(this.state.drugName)
        .then (res => this.setState({
            drugName: "",
            currentQty: ""
        }))
        
        .catch(err => console.log(err))
    }

    loadDrugs = () => {
        API.getDrugs()
        .then(res => 
            this.setState({
                drugs: res.data
            }))
            .catch(err => console.log(err))
    }

    render () {
        return(
            // const drugName = this.state.drugName;
            // const currentQty = this.state.currentQty;

            <Container fluid>
            <Row>
              <Col size="md-12">
                <Jumbotron>
                  <h1>
                    Here Is Your Medication Inventory
                  </h1>
                </Jumbotron>
              </Col>
            </Row>
            <Row>
              <Col size="md-10 md-offset-1">
                <article>
                  <h4>Here's Your Medication Inventory</h4>
                  <p>
                  <strong>Medication:</strong><br></br>{this.state.drugName}<br></br><br></br>
    
                    <strong>Current Medication Quantity:</strong><br></br>{this.state.currentQty}<br></br><br></br>
                  </p>
                </article>
              </Col>
            </Row>
           
          </Container>


        )
    }

  }


export default DrugInventory;