import React from "react";
import { Link } from "react-router-dom";


const NavTabs = () => (

<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Log In
        </a>

      <a className="navbar-brand" href="/caregiver">
      User/Admin
        </a>


         <a className="navbar-brand" href="/input">
      Input
        </a>


         <a className="navbar-brand" href="/reports">
      Daily Report
        </a>

</nav>

    );


    export default NavTabs;


