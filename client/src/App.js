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
    </Fragment>
  </Router>
);





export default App;
