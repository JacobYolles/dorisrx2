import React from "react";
import API from "../../utilities/API";
import { Container } from "../../components/Grid/Container";
import { Row } from "../../components/Grid/Row";


class Reports extends React.Component {

    state = {
        drugs: [],
        ndcNum: "",
        rxNum: "",
        pharmName: "",
        doctorName: "",
        drugName: "",
        drugForm: "",
        drugFormSize: "",
        drugFormMeasure: "",
        currentQty: "",
        bottleFullQty: "",
        bottlePartialQuantity: "",
        rxDiscard: "",
        rxReorder: "",
        drugDose: "",
        drugFreq: "",
        early: "",
        middle: "",
        late: "",
        instructions: "",
        precautions: ""
    }

    componentDidMount() {
        this.loadDrugs();
    }

    loadDrugs = () => {
        API.getDrugs()
            .then(res =>
                this.setState({
                    drugs: res.data,
                     ndcNum: "", 
                     rxNum: "",
                    pharmName: "",
                    doctorName: "",
                    drugName: "",
                    drugForm: "",
                    drugFormSize: "",
                    drugFormMeasure: "",
                    currentQty: "",
                    bottleFullQty: "",
                    bottlePartialQuantity: "",
                    rxDiscard: "",
                    rxReorder: "",
                    drugDose: "",
                    drugFreq: "",
                    early: "",
                    middle: "",
                    late: "",
                    instructions: "",
                    precautions: ""
                })
            )
            .catch(err => console.log(err))
    };

    handleInputChange = event => {
        let value = event.target.value
        const name = event.target.name

        this.setState({
            [name]: value
        })

    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <list>
                        {this.state.drugs.map(drug => (
                            <ol>
                                <li key={drug._id}>
                                    {this.state.drugs.early}, {this.state.drugs.data}
                                </li>
                            </ol>
                        ))}
                    </list>

                </Row>
            </Container>
        )
    }

}

export default Reports;


// "react-bootstrap": "^0.32.4",
//     "reactstrap": "^6.5.0",
//     "react-native": "^0.57.2",
//     "react-router-dom": "^4.3.1",
//     "react-scripts": "2.0.4",
//     "mongoose": "^5.0.17"