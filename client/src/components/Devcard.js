import React from "react";
import { Link } from "react-router-dom";

const scrollToTop = () => {
   window.scrollTo(0, 0)
}

function Devcard(props) {
  return (
    
        <div className="datacard-info">
            <Link to={props.webPage} onClick={scrollToTop}>
            <h1>{props.title}</h1>
            <img className="datacard-pic"
            src={process.env.PUBLIC_URL + props.imgSrc} 
            alt={props.alt}/>
            <p>{props.description}</p>
            </Link>
        </div>
  
  );
}

export default Devcard;