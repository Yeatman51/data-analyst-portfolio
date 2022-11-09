import React, {useState} from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

import video from '../assets/honu-forms-overview.mp4'

import DDL1 from '../assets/img/web-portfolio/honu-1.png'
import DDL2 from '../assets/img/web-portfolio/honu-2.png'
import DDL3 from '../assets/img/web-portfolio/honu-3.png'
import DDL4 from '../assets/img/web-portfolio/honu-4.png'


const scrollToTop = () => {
   window.scrollTo(0, 0)
}

function Data3() {
  return (
    <div>
       <Navbar/>

      <div className="project-title">
         <h1>Honu Data Forms</h1>

      </div>

      {/* <p className="project-description">
         This project utilizes the automation power of Python running inside of Jupiter Notebook. This allows users to easily update the preferred download date variable and run the file with ease. 

      </p> */}

      <div className="project-pic-container">
         <video className="data1-pic" controls >
            <source src={video} type="video/mp4"/>
         </video>
      </div>

      <p className="project-description">
      Custom forms were built in the following categories to keep all operational data clear and concise: 
      </p>

      <p className="project-description-list">
         <li>Beginning of shift</li>
         <li>Staff on Site</li>
         <li>End of Shift</li>
         <li>Incident Reports</li>
         <li>Supply Request</li>
         <li>Current Inventory</li>
         <li>Wasted Test Kits</li>
         <li>Shipping Confirmation</li>
         <li>Mileage Reimbursement</li>
         <li>Processing Request</li>
         <li>Warehouse Inventory</li>
         <li>Task Management</li>
      </p>

     

      <div className="project-pic-container">
         <img className="data1-pic"
         src={DDL1} 
         alt="Forms"/>
      </div>

      <p className="project-description">
      Staff members and site leads are able to access all forms
      </p>

      <div className="project-pic-container">
         <img className="data1-pic"
         src={DDL3} 
         alt="End of Shift Form"/>
      </div>

      <p className="project-description">
      End of shift form submission process
      </p>

      <div className="project-pic-container">
         <img className="data1-pic"
         src={DDL2} 
         alt="Staff on Site Dashboard"/>
      </div>

      <p className="project-description">
      Only management team members are able to access the form results. Every data table displaying results can be filtered and exported to an Excel or CSV file. 
      </p>

      <div className="project-pic-container">
         <img className="data1-pic"
         src={DDL4} 
         alt="Supply Requests Dashboard"/>
      </div>

      <p className="project-description">
      This business Intelligence Application utilizes the WordPress Engine. 
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

export default Data3;