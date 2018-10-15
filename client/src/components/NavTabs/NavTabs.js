import React from "react";
import "./NavTabs.css"


const NavTabs = () => (

<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Log In / Out
        </a>

      {/* <a className="navbar-brand" href="/caregiver">
      Admin
        </a> 
        
         <a className="navbar-brand" href="/user">
      User
        </a> 

        <a className="navbar-brand" href="/reports">
      Reports
        </a>  */}

         <a className="navbar-brand" href="/New_Medication">
      New Medication
        </a>


         <a className="navbar-brand" href="/Todays_Medication">
      Today's Medications
        </a>

<<<<<<< HEAD
<a className="navbar-brand" href="/MedicationInventory">
      Medication Inventory
        </a>

        <a className="navbar-brand" href="/Detail">
=======
        {/* <a className="navbar-brand" href="/Detail">
>>>>>>> a2ad63edf1849241fe34dfed23511ec32212f898
      Medication Details
        </a> */}

</nav>

    );


    export default NavTabs;


