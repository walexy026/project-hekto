import React, { Fragment } from "react";
import "./ProductDetails.css";
import bagUS from "../../Assets/bagUS.svg";
import readingLamp from "../../Assets/readingLamp.svg";
import fingerBag from "../../Assets/fingerBag.svg";
import handBag from "../../Assets/handBag.svg";
import star from "../../Assets/star.svg";
import wishlistBlue from "../../Assets/wishlist2.svg";
import instagram from "../../Assets/instagRaam.svg";
import facebook from "../../Assets/faceBOOOK.svg";
import twitter from "../../Assets/twiiiiter.svg";
import Description from "../../Components/Description/Description";
import RelatedProduct from "../../Components/RelatedProducts/RelatedProduct";
const ProductDetails = () => {
  return (
    <Fragment>
    <div className="productWrapper">
      <div className="productDescription">
        <div className="bagTypes">
          <img src={bagUS} alt="bagUS" />
          <img src={readingLamp} alt="readingLamp" />
          <img src={fingerBag} alt="fingerBag" />
        </div>
        <div>
          <img src={handBag} alt="handBag" />
        </div>
        <div className="productText">
          <h3>Playwood arm chair</h3>

          <span>
            <span>
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </span>
            <b id="b1">(22)</b>
          </span>
          <div id="bs">
            <b id="b2">$32.00</b>
            <s id="s1">$32.00</s>
          </div>
          <p id="p1">Color</p>
          <p id="p2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            tellus porttitor purus, et volutpat sit.
          </p>
          <span id="imgb3">
            <b id="b3">Add To cart</b>
            <img src={wishlistBlue} alt="wishlistBlue" />
          </span>
          <p id="p3">Categories:</p>
          <p id="p4">Tags</p>
          <span id="shareSM">
            <b id="b4">Share</b>
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={twitter} alt="twitter" />
          </span>
        </div>
      </div>
    </div>
    <Description/>
    <RelatedProduct/>
    </Fragment>
  );
};

export default ProductDetails;
