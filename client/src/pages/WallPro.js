import React, {useState} from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import video from '../assets/ddl_download_automation.mp4'

import DDL1 from '../assets/img/data-portfolio/DDL_01.png'
import DDL2 from '../assets/img/data-portfolio/DDL_02.png'
import DDL3 from '../assets/img/data-portfolio/DDL_03.png'


const scrollToTop = () => {
   window.scrollTo(0, 0)
}

function Data3() {
  return (
    <div>
       <Navbar/>

      <div className="project-title">
         <h1>Wall Pro</h1>

      </div>

      <p className="project-description">
         This project utilizes the automation power of Python running inside of Jupiter Notebook. This allows users to easily update the preferred download date variable and run the file with ease. 

      </p>

      <div className="project-pic-container">
         <video className="data1-pic" controls >
            <source src={video} type="video/mp4"/>
         </video>
      </div>

      <p className="project-description">
        On a daily basis management teams across different distribution centers would utilize a local file similar to this to automatically download the required DDL data for analysis and documentation.
      </p>

      <p className="project-description">
      After the user inputs the desired date the user will then run the file. The program will then automatically log into the online data portal. All passwords and usernames have been secured with a local .ENV file. 
      </p>

      <div className="project-pic-container">
         <img className="data1-pic"
         src={DDL1} 
         alt="filtering parameters"/>
      </div>

      <p className="project-description">
      After logging in the program will automatically fill all filtering parameters to select the exact data set required.
      </p>

      <div className="project-pic-container">
         <img className="data1-pic"
         src={DDL2} 
         alt="export process"/>
      </div>

      <p className="project-description">
         After the correct parameters have been selected the program will wait and allow the graph data to fill before beginning the export process
      </p>

      <div className="project-pic-container">
         <img className="data1-pic"
         src={DDL3} 
         alt="run report"/>
      </div>

      <p className="project-description">
         In this final step the program will now automatically run the report triggering a download of the data. 
      </p>

      <p className="project-description">
        After completing the download the program will then repeat the necessary steps depending on the number of data sets assigned to each distribution center.
      </p>

      <div className="github-icon-container">
         <div className="github-large-icon"> 
            <a href="https://github.com/mbussert/shaw-ppc" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
            <h4>Example code files available on GitHub</h4></a>
         </div>
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