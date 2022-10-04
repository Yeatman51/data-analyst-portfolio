import React, {useState} from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

import video from '../assets/ddl_download_automation.mp4'

import wp1 from '../assets/img/web-portfolio/wall-pro-header-logo.png'
import wp2 from '../assets/img/web-portfolio/wall-pro-home.png'
import wp3 from '../assets/img/web-portfolio/wall-pro-logo.png'




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

      <div className="project-pic-container">
         <img className="data1-pic"
         src={wp1} 
         alt="Wall Pro Logo"/>
      </div>

      <p className="project-description">
      The application will assist clients in calculating square footage measurements for wall installation material deliverables on behalf of the design company. The average user will be able to utilize the calculator tool to place product orders, save their account info to view order history, and notify the administration team of their new orders.

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
         src={wp2} 
         alt="export process"/>
      </div>

      <div className="project-pic-container">
         <img className="data1-pic"
         src={wp3} 
         alt="export process"/>
      </div>


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