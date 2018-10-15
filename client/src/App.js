import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs/NavTabs";
import Footer from "./components/Footer/Footer";
import Authentication from "./pages/Authentication";
import User from "./pages/User";
import Reports from "./pages/Reports"
import Caregiver from "./pages/Caregiver";
import TodaysMedication from "./pages/Todays_Medication";
import Detail from "./pages/Detail";
import NewMedication from "./pages/New_Medication";
import MedicationInventory from "./pages/MedicationInventory";
import { Col, Row, Container } from "reactstrap";




const App = () => (
  <Router>
    <Fragment>
      <NavTabs />
      <Container>
      <Row>
        <Col size="md-6">
          <Route exact path="/" component={Authentication} />
          <Route exact path="/reports" component={Reports} />
          <Route path="/user" component={User} />
          <Route path="/caregiver" component={Caregiver} />
          <Route exact path="/New_Medication" component={NewMedication} />
          <Route exact path="/Todays_Medication" component={TodaysMedication} />
          <Route exact path="/MedicationInventory" component={MedicationInventory} />
          <Route exact path="/Detail" component={Detail} />

        </Col>
      </Row>
      </Container>
      <Footer />
    </Fragment>
  </Router>
);





export default App;
