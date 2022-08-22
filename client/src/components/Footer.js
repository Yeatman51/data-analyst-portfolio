import React from "react";
// import tableau from '../assets/img/icons/data-icon/tableau.svg'

import tableauLogo from '../assets/img/icons/data-icon/tableau-logo.png';

function Footer() {
  return (
    
    <footer id="footer-relative">
        <div className="foot-wrapper">
            
            <div className="icon-button">
                <div className="icon">
                    <a alt="github" className="icon-anchor" href="https://github.com/Yeatman51" target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i></a>
                </div>
            
                    <a alt="github" className="icon-anchor" href="https://github.com/Yeatman51" target="_blank" rel="noreferrer">
                    <span className="icon-span">Github</span></a>
                
           </div>

           <div className="icon-button">
                <div className="icon">
                    <a alt="tableau" className="icon-anchor" href="https://public.tableau.com/app/profile/jon.yeatman" target="_blank" rel="noreferrer">
                    <img className="tableau-icon" src={tableauLogo}></img></a>
                </div>
            
                    <a alt="tableau" className="icon-anchor" href="https://public.tableau.com/app/profile/jon.yeatman" target="_blank" rel="noreferrer">
                    <span className="icon-span">Tableau</span></a>
                
           </div>

            <div className="icon-button">
                <div className="icon">
                    <a alt="linkedin" className="icon-anchor" href="https://www.linkedin.com/in/jon-yeatman/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin-in"></i></a>
                </div>

                    <a alt="linkedin" className="icon-anchor" href="https://www.linkedin.com/in/jon-yeatman/" target="_blank" rel="noreferrer">
                    <span className="icon-span">LinkedIn</span></a>
                
            </div>

            <div className="icon-button">
                <div className="icon">
                    <a alt="Email" className="icon-anchor" href="mailto:jonlyeatman@gmail.com" target="_blank" rel="noreferrer">
                    <i className="fas fa-envelope"></i></a>
                </div>

                    <a alt="Email" className="icon-anchor" href="mailto:jonlyeatman@gmail.com" target="_blank" rel="noreferrer">
                    <span className="icon-span">Email Jon</span></a>
                
            </div>

        </div>
      
    </footer>
  
  );
}

export default Footer;