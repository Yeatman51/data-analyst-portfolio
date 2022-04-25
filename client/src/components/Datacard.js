import React from "react";
import { Link } from "react-router-dom";

const scrollToTop = () => {
   window.scrollTo(0, 0)
}

function Datacard(props) {
  return (
   
      <div className="dev-info">
         <Link to={props.dataPage} onClick={scrollToTop}>
         <h1>{props.title}</h1>
         <img className="dev-pic"
         src={process.env.PUBLIC_URL + props.imgSrc} 
         alt={props.alt}
         />
         <p>{props.description}</p>
         </Link>
      </div>
   
  
  );
}

export default Datacard;