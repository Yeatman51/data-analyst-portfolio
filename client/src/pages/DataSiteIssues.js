import React, {useState} from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import DataSI1 from '../assets/img/data-portfolio/SiteIssuesDashboard.png'
import DataSI2 from '../assets/img/data-portfolio/SiteIssuesRunSheet.png'
import DataSI3 from '../assets/img/data-portfolio/SiteIssuesSheet.png'
import DataSI4 from '../assets/img/data-portfolio/SiteIssuesDB.png'


const scrollToTop = () => {
   window.scrollTo(0, 0)
}

function Data2() {
  return (
    <div>
       <Navbar/>

      <div className="project-title">
         <h1>Clinical Site Issues Dashboard</h1>

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
         On a monthly cadence, the above Dashboard was shared with executive management and third-party partners to showcase the overall issues occurring throughout the month at sites across the state of Michigan. 
      </p>

      <p className="project-description">
         This dashboard was designed to convey visually top performance priorities for the company utilizing various charts to display the incline and decline of issues over time. 
         <br /><br />
         <i>Top Left Chart: Objective is to see an increase month-over-month 
         <br />  Top Right Chart: Objective is to see a decline MoM </i>
      </p>

      <p className="project-description">
       Analyzing this data month-over-month allowed for prioritization of critical focus points and the implementation of new processes to help decrease the total number of issues reported across the state.
      </p>

      <p className="project-description">
       The insights gained from this analytical report helped to create new training guides and restructure critical forms to increase accuracy and day-to-day operations.
      </p>

      <div className="project-pic-container">
         <img className="data1-pic"
         src={DataSI2} 
         alt="run sheet for site issues"/>
      </div>

      <p className="project-description">
         Staff members would take all operational sites from the run sheet (see previous case study on how the run sheet was automatically generated) This information was then copied into the site issue tracker and completed by hand each day.
      </p>

      <div className="project-pic-container">
         <img className="data1-pic"
         src={DataSI3} 
         alt="site issues sheet"/>
      </div>

      <p className="project-description">
         After the site issue tracker was completed by on-site staff members, it was then scanned and uploaded so that the data could be scrubbed and verified before being entered into the final data log.
      </p>

      <div className="project-pic-container">
         <img className="data1-pic"
         src={DataSI4} 
         alt="run sheet for site issues"/>
      </div>


      <div className="center">
         <button className="back-portfolio-btn" onClick={scrollToTop}><Link to="./Portfolio">back to portfolio</Link></button>
      </div>

      <div className="email">
         <h3>jonlyeatman@gmail.com</h3>
      </div>

    </div>
  
  );
}

export default Data2;