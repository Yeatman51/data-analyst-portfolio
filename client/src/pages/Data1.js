import React from "react";
import Navbar from "../components/Navbar";
import Data1Pic from '../assets/img/homepage/1.png'

function Data1() {
  return (
    <div>
       <Navbar/>

      <div className="project-title">
         <h1>project title</h1>
      </div>

      <div className="project-pic-container">
         <img className="data1-pic"
         src={Data1Pic} 
         alt="Data1"/>
      </div>

      <div className="project-description">
         <p>
            Major project description paragraph area fill in lots of details hear more and more words
         </p>
      </div>

      <div className="email">
         <h3>jonlyeatman@gmail.com</h3>
      </div>

    </div>
  
  );
}

export default Data1;