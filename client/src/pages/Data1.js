import React, {useState} from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Data1Pic from '../assets/img/homepage/1.png'
import Data2Pic from '../assets/img/data-portfolio/vaccine-dashboard.png'

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
       All files and sensitive data has been recreated for visual purposes only and contains fictitious data only Per Honu Management policy
      </p>
      </div>

      <div className="project-pic-container">
         <img className="data1-pic"
         src={Data2Pic} 
         alt="Data1"/>
      </div>

      <div className="project-description">
         <p>
            This project referred to internally as the "Data Model" allows Honu team members running vaccination and testing sites across the state of Michigan to visualize vaccine vials used across the state.
         </p>
      </div>

      <p className="project-description">
         This "Data Model" helps to identify patterns and trends to better utilize limited inventory for sites that have larger turnouts across the state.
      </p>

      <p className="project-description">
        The creation of this data model significantly reduced the amount of time staff members had previously been spending manually writing forms required for daily vaccination transportation.
      </p>

      {/* <div className="project-pic-container">
         <img className="data1-pic"
         src={Data1Pic} 
         alt="Data1"/>
      </div>

      <div className="project-pic-container">
         <img className="data1-pic"
         src={Data1Pic} 
         alt="Data1"/>
      </div> */}

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