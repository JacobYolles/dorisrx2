import React, { Component, Fragment } from "react";
import "./Todays_Medication.css";

/* Import Components */
// import CheckBox from "../../components/checkBox/CheckBox";
// import TextArea from "../../components/textArea/TextArea";
// import Select from "../../components/select/Select";
// import Button from "../../components/button/Button";
import Wrapper from "../../components/Wrapper";
import { Col, Row, Container } from "reactstrap";
import API2 from "../../utilities/API2";

// import {
//   Row, Col, Card, CardBlock, Container, CardTitle, CardText
// } from 'reactstrap';

// function time() {
//   var early = false
//   var middle = false
//   var late = false
// if (early === true) {
//   render(this.state.drugName, this.state.drugDose, this.state.bottlePartialQuantity -1 )
// }
// }

class TodaysMedication extends Component {
  // constructor(props) {
  //   super(props);

  // component did mount goes below the states.
  state = {
    inventory: [],
    drugname: "",
    bottleFullQuantity: "",
    bottlePartialQuantity: "",
    drugDose: "",
    drugFrequency: "",
  }


  componentDidMount() {
    this.loadInventory();
  }

  loadInventory = () => {
    API2.getInventories()
      .then(res =>
        this.setState({
          inventory: res.data,
          drugName: "",
          bottleFullQuantity: "",
          bottlePartialQuantity: "",
          drugDose: "",
          drugFrequency: "",
        })
      )
      .catch(err => console.log(err))
  }

  // pickImage = (pillType)=> {
  //   let image;
  //   if(pillType === 'capsule') {
  //     image = 'images/capsule.png'
  //   }
  //   return image;
  // }



  render() {
    return (
      <Wrapper>
        {/* <Fragment>
          <Container fluid> */}
            <Row>
              <Col className="test col-md-6">
              <table>
                <tr>
                  <th className="text-success">Drug Name</th>
                  <th>Drug Name</th>
                  <th>Drug Type</th>
                </tr>
                {this.state.inventory.map(inventory => (
                  // <list 
                  //   key={inventory._id}
                  //   className="listItem"
                  // >
                  //   <div>
                  //   hey you!  you need to take {inventory.drugDose}<br></br> {inventory.drugName}   pills today! 

              
                  //   </div>
                  // </list>
                  <tr>
                    <td>{inventory.drugName}</td>
                    <td>{inventory.drugDose}</td>
                    {/* <td><img src={this.pickImage(inventory.type)} alt="pill"></img>></td> */}
                  </tr>
                ))}
                </table>
              </Col>
            </Row>
          {/* </Container>
        </Fragment> */}
      </Wrapper>
    )
  }

}
export default TodaysMedication;