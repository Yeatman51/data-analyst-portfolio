import React, {useState} from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Data1Pic from '../assets/img/homepage/1.png'
import Data2Pic from '../assets/img/data-portfolio/vaccine-dashboard.png'
import Data3Pic from '../assets/img/data-portfolio/site-data.png'
import Data4Pic from '../assets/img/data-portfolio/pre-runsheet.png'
import DataRunsheet from '../assets/img/data-portfolio/runsheet.png'
import Data5Pic from '../assets/img/data-portfolio/per-site-paperwork.png'
import Data6Pic from '../assets/img/data-portfolio/khatali.png'
import Data7Pic from '../assets/img/data-portfolio/YCLS-page-1.png'
import Data8Pic from '../assets/img/data-portfolio/YCLS-page-2.png'

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
         src={Data2Pic} 
         alt="Vaccination Dashboard"/>
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
         src={Data3Pic} 
         alt="Data Overview"/>
      </div>

      <p className="project-description">
         Overview of all site data in a standard tabular layout
      </p>

      <div className="project-pic-container">
         <img className="data1-pic"
         src={Data4Pic} 
         alt="Pivot Table Run Sheet"/>
      </div>

      <p className="project-description">
         Pivot table design to quickly filter through different dates and operational zones across the state to visualize all critical information for different sites.
      </p>

      <div className="project-pic-container">
         <img className="data1-pic"
         src={DataRunsheet} 
         alt="Daily Run Sheet"/>
      </div>

      <p className="project-description">
         The previous pivot table is used to collect today's critical site information and then pasted into a separate sheet that is printed every day in the different distribution centers
      </p>

      <div className="project-pic-container">
         <img className="data1-pic"
         src={Data5Pic} 
         alt="Data1"/>
      </div>

      <p className="project-description">
         dfghjk
      </p>

      <div className="project-pic-container">
         <img className="data1-pic"
         src={Data6Pic} 
         alt="Data1"/>
      </div>

      <div className="project-pic-container">
         <img className="data1-pic"
         src={Data7Pic} 
         alt="Data1"/>
      </div>

      <div className="project-pic-container">
         <img className="data1-pic"
         src={Data8Pic} 
         alt="Data1"/>
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

export default Data1;