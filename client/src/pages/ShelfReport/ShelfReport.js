import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container, Jumbotron } from "reactstrap";
import API2 from "../../utilities/API2";
import API from "../../utilities/API";
import "./ShelfReport.css";





class ShelfReport extends Component {


    constructor(props) {
        super(props);

        this.state = {
            inventory: [],
            drugName: "",
            bottleFullQuantity: "",
            bottlePartialQuantity: "",
            currentQuantity: "",
            daysLeft: "",
            drugDose: "",
            drugFrequency: ""
        }
    }

    // componentWillMount(){
    //     console.log("Props", props.drugInventory)
    // }

    // componentDidMount(){
    //     this.loadInventories(this.state.drugName);
    //     console.log(this.state.drugName);
    //     console.log("Props", props);

    // }

    componentDidMount() {
        this.loadInventory();
        // this.loadDrugs();
        // this.getInventory(this.state.currentQty);
        // this.fdaData(this.state.drugName));
        console.log(this.state.drugName);
        console.log(this.state.currentQuantity);
        console.log(this.state.daysLeft);


    }

    loadInventory = () => {
        API2.getInventories()
            .then(res =>
                this.setState({
                    inventory: res.data,
                    drugName: "",
                    currentQuantity: "",
                    // daysLeft: this.state.currentQuantity - (this.state.drugDose * this.state.drugFrequency),
                })
            )

            .catch(err => console.log(err));
    }

    // loadDrugs = () => {
    //     API.getDrugs()
    //       .then(res =>
    //         this.setState({
    //           drugs: res.data,
    //         })
    //       )
    //       .catch(err => console.log(err))
    //   }

    // handleFormSubmit(drugName, quantity, dose) {
    //     console.log(drugName);
    //     console.log(quantity);
    //     console.log(dose);
    //     console.log(this.state);
    // }



    render() {

        const inventory = this.state.inventory.filter(drug => (drug));
       

        return (

            // const currentQty = this.state.currentQty;


            <Fragment>

                <Row>

                    <Col className="test col-md-12">
                        <h1 id="times">Medication Inventory</h1>
                        <table className="transparent-tables">
                            <thead>
                                <tr>
                                    <th>Drug Name</th>
                                    <th>Drug Type</th>

                                    <th>Quantity Left</th>
                                    <th>Days Left</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inventory.map(inventory => (

                                    <tr key={inventory._id}>
                                        <td>
                                            <Link
                                                className="link"
                                                to={{ state: { drugName: inventory.drugName } }}>{inventory.drugName}</Link></td>
                                                <td>
                                            <Link to="/New_Medication">{inventory.drugForm}</Link></td>
                                        <td><Link to={{ pathname: "/MedicationInventory", state: { currentQuantity: inventory.currentQuantity, daysLeft: inventory.daysLeft } }}>{inventory.currentQuantity}
                                        </Link></td>
                                        
                                        <td>
                                            <Link to="/New_Medication">{inventory.currentQuantity - (inventory.drugDose * inventory.drugFrequency)}</Link></td>


                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Col>
                </Row>

            </Fragment>


        )
    }

}


export default ShelfReport;