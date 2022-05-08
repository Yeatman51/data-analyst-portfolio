import React, {useState} from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import DataSI1 from '../assets/img/data-portfolio/SiteIssuesDashboard.png'
import DataSI2 from '../assets/img/data-portfolio/SiteIssuesRunSheet.png'
import DataSI3 from '../assets/img/data-portfolio/SiteIssuesSheet.png'


const scrollToTop = () => {
   window.scrollTo(0, 0)
}

function Data1() {
  return (
    <div>
       <Navbar/>

      <div className="project-title">
         <h1>State of Michigan Vaccination Site Data and Automation</h1>

      <p className="project-disclaimer">
       All files and sensitive data has been recreated for visual purposes only and contains fictitious data per Honu Management policy
      </p>
      </div>

      <div className="project-pic-container">
         <img className="data1-pic"
         src={DataSI1} 
         alt="Site Issues Dashboard"/>
      </div>

      <p className="project-description">
         This project referred to internally as the "Data Model" allows Honu team members running vaccination and testing sites across the state of Michigan to visualize vaccine vials used across the state.
      </p>

      <p className="project-description">
         This "Data Model" helps to identify patterns and trends to better utilize limited inventory for sites that have larger turnouts across the state.
      </p>

      <p className="project-description">
        The creation of this data model significantly reduced the amount of time staff members had previously been spending manually writing forms required for daily vaccination transportation.
      </p>

      <div className="project-pic-container">
         <img className="data1-pic"
         src={DataSI2} 
         alt="run sheet for site issues"/>
      </div>

      <p className="project-description">
         Overview of all site data in a standard tabular layout
      </p>

      <div className="project-pic-container">
         <img className="data1-pic"
         src={DataSI3} 
         alt="site issues sheet"/>
      </div>

      <p className="project-description">
         Pivot table design to quickly filter through different dates and operational zones across the state to visualize all critical information for different sites.
      </p>


      <div className="center">
         <button className="back-portfolio-btn" onClick={scrollToTop}><Link to="./Portfolio">back to portfolio</Link></button>
      </div>

      <div className="email">
         <h3>jonlyeatman@gmail.com</h3>
      </div>

    </div>
  
  );
}

export default Data1;