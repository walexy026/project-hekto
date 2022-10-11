import React from "react";
import "./RelatedProduct.css";
import MensFashion from "../../Assets/mensFashionWear.svg";
import WomenFashion from "../../Assets/womenFashion.svg";
import wolx from "../../Assets/wolxDummyFashion.svg";
import topDigitalClock from "../../Assets/topDigitalClock.svg";
import star from "../../Assets/star.svg";
import starWhite from "../../Assets/starWhite.svg";

const RelatedProduct = () => {
  return (
    <div>
      <div className="relatedProduct">
        {" "}
        <h3>Related Products</h3>{" "}
      </div>
      <div className="productRating">
        <div className="productPrice">
          <img src={MensFashion} alt="" />
          <span className="clothRating">
            <b>Mens Fashion Wear</b>
            <div>
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={starWhite} alt="" />
            </div>
          </span>
            <p>$43.00</p>
        </div>
        <div className="productPrice">
          <img src={WomenFashion} alt="" />
          <span className="clothRating">
            <b>Women’s Fashion</b>
            <div>
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={starWhite} alt="" />
            </div>
          </span>
            <p>$67.00</p>
        </div>
        <div className="productPrice">
          <img src={wolx} alt="" />
          <span className="clothRating">
            <b>Wolx Dummy Fashion</b>
            <div>
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={starWhite} alt="" />
            </div>
          </span>
            <p>$67.00</p>
        </div>
        <div className="productPrice">
          <img src={topDigitalClock} alt="topDigitalClock" />
          <span className="clothRating">
            <b>Top Wall Digital Clock</b>
            <div>
            <img src={star} alt="star" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={starWhite} alt="" />
            </div>
          </span>
            <p>$51.00</p>
        </div>
      </div>
    </div>
  );
};

export default RelatedProduct;
