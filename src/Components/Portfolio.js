import React from "react";
import "../CSS/Portfolio.css";
import CardPortf from "./Portfolio/CardPortf";
const Portfolio = () => {
  return (
    <div className="Portf">
      <p className="text"> portfolio</p>
      <div className="row">
        <div className="col-4 card-container">
          <CardPortf />
        </div>
        <div className="col-4 card-container">
          <CardPortf />
        </div>
        <div className="col-4 card-container">
          <CardPortf />
        </div>
        <div className="col-4 card-container">
          <CardPortf />
        </div>
        <div className="col-4 card-container">
          <CardPortf />
        </div>
        <div className="col-4 card-container">
          <CardPortf />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
