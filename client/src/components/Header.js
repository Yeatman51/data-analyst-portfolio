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
         <span style={{color: "#da9f63"}}>Jon</span> 
         <span style={{color: "#a3becf"}}>Yeataman</span>   
      </div>
      <p>
this is the p text.
      </p>

      <Navbarhome></Navbarhome>
    </header>
  
  );
}

export default Header;