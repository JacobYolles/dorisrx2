import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs/NavTabs";
import Authentication from "./pages/Authentication";
import User from "./pages/User";
import Caregiver from "./pages/Caregiver";
import UserInput from "./pages/UserInput";
import Reports from "./pages/Reports";





const App = () => (
  <Router>
    <div>
      <NavTabs />
      <Route exact path="/" component={Authentication} />
      <Route path="/user" component={User} />
      <Route path="/caregiver" component={Caregiver} />
      <Route exact path="/Userinput" component={UserInput} />
      <Route exact path="/reports" component={Reports} />
    </div>
  </Router>
);





export default App;
