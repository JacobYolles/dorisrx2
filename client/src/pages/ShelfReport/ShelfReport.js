import React, { Component, Fragment } from "react";
import "./ShelfReport.css";

/* Import Components */
// import CheckBox from "../../components/checkBox/CheckBox";
// import TextArea from "../../components/textArea/TextArea";
// import Select from "../../components/select/Select";
import Button from "../../components/button/Button";
import { Col, Row, Container } from "reactstrap";
import API from "../../utilities/API";
import API2 from "../../utilities/API2";
import { Link } from "react-router-dom";
import { Query } from "mongoose";

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

// drugName
// currentQuantity
// drugDose
// drugFrequency



class ShelfReport extends Component {
  constructor(props) {
    super(props);

  // component did mount goes below the states.
  this.state = {
    inventory: [],
    drugname: "",
    bottleFullQuantity: "",
    bottlePartialQuantity: "",
    drugDose: "",
    drugFrequency: "",
    taken: false
  }

//   this.handleFormSubmit = this.handleFormSubmit.bind(this);
}


  componentDidMount() {
    this.loadInventory();
    // this.loadDrugs();
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
          taken: ""
        })
      )
      .catch(err => console.log(err))
  }

//   loadDrugs = () => {
//     API.getDrugs()
//       .then(res =>
//         this.setState({
//           drugs: res.data,
//         })
//       )
//       .catch(err => console.log(err))
//   }

//   handleFormSubmit(drugName, quantity, dose) {
//     console.log(drugName);
//     console.log(quantity);
//     console.log(dose);
//     console.log(this.state);
//   }

  // pickImage = (drugForm)=> {
  //   let image;
  //   if(drugForm === 'capsule') {
  //     image = 'images/capsule.png'
  //   }
  //   return image;
  // }



  render() {
    // const early = this.state.inventory.filter(drug => (drug.early === true || drug.early === "true"));
    // const mid = this.state.inventory.filter(drug => (drug.mid === true || drug.mid === "true"));
    // const late = this.state.inventory.filter(drug => (drug.late === true || drug.late === "true"));
    // console.log("mid mid", mid);


    // const daysLeft = this.state.inventory(drug=> drug.currentQuantity - (drug.drugDose * drugFrequency))

    return (

      <Fragment>

        <Row>
          <Col className="test col-md-12">
            <h1 id="times">Drug Shelf and Reorder Report</h1>
            <table className="users">
              <thead>
                <tr>
                  <th>Drug Name</th>
                  <th>Quantity Left</th>
                  <th>Days Left</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                  <tr>
                {/* {drug.map(inventory => ( */}
                  {/* //   key={inventory._id}

                  <tr key={inventory._id}> */}

                    

                  </tr>
                {/* ))} */}
              </tbody>
            </table>

          </Col>

         
        </Row>

      </Fragment>

    )
  }

}
export default ShelfReport;