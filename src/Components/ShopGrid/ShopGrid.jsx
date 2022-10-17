import React from "react";
import "./ShopGrid.css";

const ShopGrid = (props) => {
  return (
    <div className="gridwrapper">
      <span className="shopgrid">
        <div className="pics">{props.pics}</div>
        <p className="picsTitle">{props.picsTitle}</p>
        <div className="ypb">
          <span className="yellow">{props.yellow}</span>
          <span className="pink">{props.pink}</span>
          <span className="blue">{props.blue}</span>
        </div>
        <div className="priceDiscount">
          <b className="gridPrice">{props.price}</b>
          <s className="gridDiscount">{props.discount}</s>
        </div>
      </span>
      <span>
        
      </span>
    </div>
  );
};

export default ShopGrid;
