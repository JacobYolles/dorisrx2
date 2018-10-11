import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs/NavTabs";
import Authentication from "./pages/Authentication";
import User from "./pages/User";
import Reports from "./pages/Reports"
import Caregiver from "./pages/Caregiver";
import TodaysMedication from "./pages/Todays_Medication";
import NewMedication from "./pages/New_Medication"
import { Col, Row, Container } from "reactstrap";




const App = () => (
  <Router>
    <Fragment>
      <NavTabs />
<<<<<<< HEAD
      <Container>
        <Row>
          <Col>
            <Route exact path="/" component={Authentication} />
            {/* <Route path="/User" component={User} /> */}
            {/* <Route path="/caregiver" component={Caregiver} /> */}
            <Route exact path="/New_Medication" component={NewMedication} />
            <Route exact path="/Todays_Medication" component={TodaysMedication} />
          </Col>
        </Row>
      </Container>
=======
      <Row size="md-12">
        <Col size="md-6">
          <Route exact path="/" component={Authentication} />
          <Route exact path="/reports" component={Reports} />
          <Route path="/user" component={User} />
          <Route path="/caregiver" component={Caregiver} />
          <Route exact path="/New_Medication" component={NewMedication} />
          <Route exact path="/Todays_Medication" component={TodaysMedication} />
        </Col>
      </Row>
>>>>>>> e3721bb071f01da2612056d97d50ccd7cc35b094
    </Fragment>
  </Router>
);





export default App;
