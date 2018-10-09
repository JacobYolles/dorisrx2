import React from "react";
import API from "../../utils/API";
import React, { Component } from "react";

// const User = () => (
//   <div>
//     <h1>Daily Prescription Log</h1>
//     <p>
//       Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui mauris,
//       ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus porta. Nam
//       quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
//       imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis
//       diam, sit amet facilisis lectus blandit at.
//     </p>
//   </div>
// );
class User extends Component {
  state = {
    drugList: [],
    taken: false,
    pastDue: false

  };

  componentDidMount() {
    this.loadDrugs();
  }

  loadDrugs = () => {
    API.getDrugs()
      .then(res =>
        this.setState({.drugs: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  render() {

// take terniary operator and put it in an if statement here


    return (
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Prescriptions to take Now</h1>
            </Jumbotron>
            {this.state.drugs.length ? (
              <List>
                {this.state.drugs.map(drug => (
                  <ListItem key={drug._id}>
                    <Link to={".drugs/" + drug._id}>
                      <strong>
                        {drug.title}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deletedrug(drug._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>Everything has been taken!</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default User;
