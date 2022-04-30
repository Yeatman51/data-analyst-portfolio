import React, {useState} from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

import ProfilePic from '../assets/img/yeatman-profile.jpg'

import excel from '../assets/img/icons/data-icon/data-excel.png'
import mysql from '../assets/img/icons/data-icon/data-mysql.png'
import tableau from '../assets/img/icons/data-icon/data-tableau.png'
import python from '../assets/img/icons/data-icon/data-python.png'

import html from '../assets/img/icons/code-icon/code-html.png'
import css from '../assets/img/icons/code-icon/code-css.png'
import js from '../assets/img/icons/code-icon/code-js.png'
import re from '../assets/img/icons/code-icon/code-react.png'
import nd from '../assets/img/icons/code-icon/code-node.png'
import git from '../assets/img/icons/code-icon/code-git.png'
import npm from '../assets/img/icons/code-icon/code-npm.png'
import sass from '../assets/img/icons/code-icon/code-sass.png'
import gsap from '../assets/img/icons/code-icon/code-gsap.png'
import bs from '../assets/img/icons/code-icon/code-bs.png'
import tw from '../assets/img/icons/code-icon/code-tw.png'

import fig from '../assets/img/icons/design-icon/design-fig.png'
import ai from '../assets/img/icons/design-icon/design-ai.png'
import xd from '../assets/img/icons/design-icon/design-xd.png'
import ps from '../assets/img/icons/design-icon/design-ps.png'
import id from '../assets/img/icons/design-icon/design-id.png'
import lr from '../assets/img/icons/design-icon/design-lr.png'
import pr from '../assets/img/icons/design-icon/design-pr.png'
import ae from '../assets/img/icons/design-icon/design-ae.png'

const scrollToTop = () => {
   window.scrollTo(0, 0)
}

function Home() {
  return (
    <div>
      <Header/>

      <div className="home-top-banner">
         <div className="cont-profile-pic">
            <img className="profile-pic" 
            src={ProfilePic} 
            alt="Jon Yeatman Profile"/>
         </div>
         
         <div className="about-text-home">
            <p>
            Thorough and meticulous Business Analyst/Administrator passionate about helping businesses succeed. Former small business owner and certified full-stack web developer. Organized problem solver with a strong technical aptitude and ability to partner with leadership, sales, marketing, support and other important teams to maximize operations and interactions. Experience with various stages of the Software Development Lifecycle (SDLC) especially design, analysis, deployment and maintenance. 
            </p>
            <button className="home-portfolio-btn" onClick={scrollToTop}><Link to="./Portfolio">portfolio</Link></button>
         </div>

         

      </div>
        
   <div className="dividers-line"></div>

      <div className="icon-header">
         <h3>
               The development technology and designing software I use at a quick glance
         </h3>
      </div>


      <div className="data-text-container">
         <h2 className="data-text-header-home">data analyst</h2>
      </div>

   <div className="dividers-line"></div>

      <div className="design-logos-container">
         <div className="code-logos">
               <img src={excel} alt="excel"/>
               <h3>excel</h3>
         </div>

         <div className="code-logos">
               <img src={mysql} alt="SQL"/>
               <h3>SQL</h3>
         </div>

         <div className="code-logos">
               <img src={tableau} alt="tableau"/>
               <h3>tableau</h3>
         </div>

         <div className="code-logos">
               <img src={python} alt="python"/>
               <h3>python</h3>
         </div>

      </div>

      <div className="developer-text-container">
         <h2 className="developer-text-header-home">developer</h2>
      </div>
   <div className="dividers-line"></div>

        <div className="code-logos-container">
            <div className="code-logos">
                <img src={html} alt="HTML Logo"/>
                <h3>HTML</h3>
            </div>

            <div className="code-logos">
                <img src={css} alt="CSS Logo"/>
                <h3>CSS</h3>
            </div>

            <div className="code-logos">
                <img src={sass} alt="SASS Logo"/>
                <h3>SASS</h3>
            </div>

            <div className="code-logos">
                <img src={js} alt="JavaScript Logo"/>
                <h3>JavaScript</h3>
            </div>

            <div className="code-logos">
                <img src={re} alt="React Logo"/>
                <h3>react JS</h3>
            </div>

            <div className="code-logos">
                <img src={nd} alt="Node Logo"/>
                <h3>NODE</h3>
            </div>

            <div className="code-logos">
                <img src={npm} alt="NPM Logo"/>
                <h3>NPM</h3>
            </div>

            <div className="code-logos">
                <img src={git} alt="Git Logo"/>
                <h3>GIT</h3>
            </div>

            <div className="code-logos gsap">
                {/* <img src={gsap} alt="Greensock Logo"/>
                <h3>Greensock</h3> */}
            </div>

            <div className="code-logos">
                <img src={bs} alt="Bootstrap Logo"/>
                <h3>bootstrap</h3>
            </div>

            <div className="code-logos">
                <img src={tw} alt="Tailwind Logo"/>
                <h3>tailwind</h3>
            </div>
            
        </div>

      <div className="designer-text-container">
         <h2 className="designer-text-header-home">graphic designer</h2>
      </div>
   <div className="dividers-line"></div>

        <div className="design-logos-container">
            <div className="code-logos">
                <img src={fig} alt="Figma Logo"/>
                <h3>figma</h3>
            </div>

            <div className="code-logos">
                <img src={ai} alt="Illustrator Logo"/>
                <h3>illustrator</h3>
            </div>

            <div className="code-logos">
                <img src={xd} alt="XD Logo"/>
                <h3>XD</h3>
            </div>

            <div className="code-logos">
                <img src={ps} alt="Photoshop Logo"/>
                <h3>photoshop</h3>
            </div>
        
            <div className="code-logos">
                <img src={id} alt="InDesign Logo"/>
                <h3>InDesign</h3>
            </div>

            <div className="code-logos">
                <img src={lr} alt="Lightroom Logo"/>
                <h3>lightroom</h3>
            </div>

            <div className="code-logos">
                <img src={pr} alt="Premiere Pro Logo"/>
                <h3>premiere pro</h3>
            </div>

            <div className="code-logos">
                <img src={ae} alt="After Effects Logo"/>
                <h3>after effects</h3>
            </div>

        </div>

        <div className="email-home">
            <h3>jonlyeatman@gmail.com</h3>
        </div>

    </div>
  
  );
}

export default Home;