import React from "react";
import Navbar from "../components/Navbar";
import ProfilePic from '../assets/img/yeatman-profile-picture.jpg'
import Resume from '../assets/img/YEATMAN_RESUME.pdf'

function About() {
  return (
    <div>
       <Navbar/>
        <div className="cont-profile-pic">
            <img className="profile-pic"
            src={ProfilePic} 
            alt="Jon Yeatman Profile"/>
        </div>

        <div className="about-text">
            <p>
                I thrive best in an environment that sparks both a challenge and creativity. Constantly in search of ways to improve business processes and tend to be an out-of-the-box thinker. Looking for the next step in my career to grow in the business and analytics space. 
                <br/>
                <br/>
                I am an avid outdoorsman; hiking, biking, and camping with my 12-year-old retriever. Enjoy being challenged to learn new things personally and always looking for the next best YouTube channel or podcast. As a dedicated and loyal college football fan, I have a goal of attending a game in every major stadium.


                <br/>
                <br/>
                Strengths: Leadership, Project Management, Training and Instructing, Out-of-the-Box Thinking, Business Strategy, Attention to Detail, Efficiency 
            </p>
        </div>

        <a className="resume" href={Resume} 
            target="_blank" rel="noreferrer">My Resume</a>

        <div className="email">
            <h3>jonlyeatman@gmail.com</h3>
        </div>

        <p className="secret-message">
            01001001 00100000 01100001 01101101 00100000 01000010 01100001 01110100 01101101 01100001 01101110
        </p>

    </div>
  
  );
}

export default About;