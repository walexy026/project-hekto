import React from "react";
import "./Description.css";
import { Link } from "react-router-dom";
import Descript from "../Descript/Descript";

const Description = () => {
  return (
    
    <div className="descriptionWrapper">
    <div className="description">
      <nav className="desNav">
        <Link className="desLink line">Description</Link>
        <Link className="desLink">Additional Info</Link>
        <Link className="desLink">Reviews</Link>
        <Link className="desLink">Video</Link>
      </nav>
      <Descript/>
    </div>
    </div>
  );
};

export default Description;
