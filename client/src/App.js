import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs/NavTabs";
import Authentication from "./pages/Authentication";
import User from "./pages/User";
import Caregiver from "./pages/Caregiver";
import NewMedication from "./pages/New_Medication";
import TodaysMedication from './pages/Todays_Medication';
import Reports from "./pages/Reports";




const App = () => (
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
);





export default App;
