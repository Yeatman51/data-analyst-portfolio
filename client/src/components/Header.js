import React from "react";
import Navbarhome from "./Navbarhome";

// import { TweenMax } from "gsap";



function Header() {

  // TweenMax.fromTo(".yeatman-logo", 2.0, 
  //   { 
  //     opacity: 0, 
  //     y: 100, 
  //     scale: 0 
  //   },
  //   { opacity: 1, 
  //     y: 0, 
  //     scale: 1,
  //   }
  // );
  
  // TweenMax.fromTo(".header-text", 2.0,
  //   { 
  //     opacity: 0, 
  //     y: -100, 
  //     scale: 0 
  //   },
  //   { 
  //     opacity: 1, 
  //     y: 0, scale: 1, 
  //     delay: 1,  
  //   }
  // );

  return (
    <header className="header-background">
      <div className="header-title">
         <span style={{color: "#CF5609"}}>Jon</span> 
         <span style={{color: "#fff"}}>Yeatman</span>   
      </div>

      <p className="header-paragraph">
         
      </p>

      <Navbarhome></Navbarhome>
    </header>
  
  );
}

export default Header;