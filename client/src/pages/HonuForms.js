import React, {useState} from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

import video from '../assets/ddl_download_automation.mp4'

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

      {/* <div className="project-pic-container">
         <video className="data1-pic" controls >
            <source src={video} type="video/mp4"/>
         </video>
      </div> */}

      <p className="project-description">
      Custom forms were built in the following categories to keep all operational data clear and concise: 
      </p>

      <p className="project-description">
        Beginning of shift, end of shift, staff on site, incident reports, supply request, current inventory, wasted test kits, shipping confirmation, mileage reimbursement, processing request, warehouse inventory, and task management
      </p>

     

      <div className="project-pic-container">
         <img className="data1-pic"
         src={DDL1} 
         alt="filtering parameters"/>
      </div>

      {/* <p className="project-description">
      After logging in the program will automatically fill all filtering parameters to select the exact data set required.
      </p> */}

      <div className="project-pic-container">
         <img className="data1-pic"
         src={DDL3} 
         alt="export process"/>
      </div>

      {/* <p className="project-description">
         After the correct parameters have been selected the program will wait and allow the graph data to fill before beginning the export process
      </p> */}

      <div className="project-pic-container">
         <img className="data1-pic"
         src={DDL2} 
         alt="run report"/>
      </div>

      {/* <p className="project-description">
         In this final step the program will now automatically run the report triggering a download of the data. 
      </p> */}

      <div className="project-pic-container">
         <img className="data1-pic"
         src={DDL4} 
         alt="run report"/>
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

export default Data3;