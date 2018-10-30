import React from "react";
import "./NavTabs.css"


const NavTabs = () => (

<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Log In / Out
        </a>


        <a className="navbar-brand" href="/Todays_Medication">
      Today's Medications
        </a>


         <a className="navbar-brand" href="/InputForm">
      New Medication
        </a>

        <a className="navbar-brand" href="/ContactForm">
      Contacts
        </a>


        {/* <a className="navbar-brand" href="/Detail">
      Medication Details
        </a> */}

        <a className="navbar-brand" href="/ShelfReport">
      Drug Shelf and Reorder Report
        </a>

</nav>

    );


    export default NavTabs;


