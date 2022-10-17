import React from "react";
import "./Home.css";

const LatestProduct = ({
  latestPics,
  latestTitle,
  latestPrice,
  LatestDiscount,
}) => {
  return (
    <div>
      LatestProduct
      <div className="latestProduct">
        <div className="latestPics">{latestPics}</div>
        <div>
          <span>
            <b className="latestTitle">{latestTitle}</b>
          </span>
          <span>
            <b className="latestPrice">{latestPrice}</b>
            <s className="LatestDiscount">{LatestDiscount}</s>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LatestProduct;
