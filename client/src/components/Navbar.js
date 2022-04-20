import React, {useState} from "react";
import { Link } from "react-router-dom";

function Navbar() {

  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  const closeMenu = () => {
    setNavbarOpen(false)
  }

  
  const hamNavClick = () => {
    setNavbarOpen(!navbarOpen)
    // console.log('mobilehamnavclick');
  }

  return (
    <>
    <nav className="desktop-navigation">
        <ul className="links">
            
            <li><Link to="./" id={location.pathname === "/" ? "active" : "nav-link"}>home</Link></li>
            <li><Link to="./Portfolio" id={location.pathname === "/Portfolio" ? "active" : "nav-link"}>portfolio</Link></li>
            <li><Link to="./About" id={location.pathname === "/About" ? "active" : "nav-link"}>about me</Link></li>
            <li><Link to="./Contact" id={location.pathname === "/Contact" ? "active" : "nav-link"}>contact</Link></li>
            
        </ul>
    </nav>

    <div className="icon-burger" onClick={hamNavClick}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>

  <nav className="mobile-navigation">
    <ul className="mobile-links" style={navbarOpen ? {display:"flex"} : {display:"none"}}>          
      <li><Link to="./" id={location.pathname === "/" ? "active" : "nav-link"} onClick={closeMenu}>home</Link></li>
      <li><Link to="./Portfolio" id={location.pathname === "/Portfolio" ? "active" : "nav-link"} onClick={closeMenu}>portfolio</Link></li>
      <li><Link to="./About" id={location.pathname === "/About" ? "active" : "nav-link"} onClick={closeMenu}>about me</Link></li>
      <li><Link to="./Contact" id={location.pathname === "/Contact" ? "active" : "nav-link"} onClick={closeMenu}>contact</Link></li>
    </ul>
  </nav>
</>

  
  );
}

export default Navbar;