<<<<<<< HEAD
import React from 'react';
=======
import React, { Component, Fragment } from 'react';
>>>>>>> 2394adc70030d201639841250d47c3d681bf937b
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs/NavTabs";
import Authentication from "./pages/Authentication";
import User from "./pages/User";
import Caregiver from "./pages/Caregiver";
<<<<<<< HEAD
import NewMedication from "./pages/New_Medication";
import TodaysMedication from './pages/Todays_Medication';
import Reports from "./pages/Reports";
=======
import TodaysMedication from "./pages/Todays_Medication";
import NewMedication from "./pages/New_Medication"
import { Col, Row, Container } from "reactstrap";
>>>>>>> 2394adc70030d201639841250d47c3d681bf937b




const App = () => (
<<<<<<< HEAD
  <Router>
    <div>
      <NavTabs />
      <Route exact path="/" component={Authentication} />
      <Route exact path="/reports" component={Reports} />
      <Route path="/user" component={User} />
      <Route path="/caregiver" component={Caregiver} />
      <Route exact path="/New_Medication" component={NewMedication} />
      <Route exact path="/Todays_Medication" component={TodaysMedication} />
    </div>
  </Router>
=======
    <Router>
      <Fragment>
        <NavTabs />
            <Row size="md-12">
              <Col size="md-6">
                <Route exact path="/" component={Authentication} />
                {/* <Route path="/User" component={User} /> */}
                {/* <Route path="/caregiver" component={Caregiver} /> */}
                <Route exact path="/New_Medication" component={NewMedication} />
                <Route exact path="/Todays_Medication" component={TodaysMedication} />
              </Col>
            </Row>
        </Fragment>
      </Router>
>>>>>>> 2394adc70030d201639841250d47c3d681bf937b
);





export default App;
