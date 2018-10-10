import React from "react";
import { Link } from "react-router-dom";


const NavTabs = () => (

<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Log In
        </a>

      {/* <a className="navbar-brand" href="/caregiver">
      Admin
        </a> */}

              {/* <a className="navbar-brand" href="/user">
      User
        </a> */}


         <a className="navbar-brand" href="/New_Medication">
         New Medication
        </a>


         <a className="navbar-brand" href="/Todays_Medication">
         Todays Medication
        </a>

</nav>

    );


    export default NavTabs;


