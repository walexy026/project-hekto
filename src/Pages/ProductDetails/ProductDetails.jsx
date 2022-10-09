import React from "react";
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
const ProductDetails = () => {
  return (
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
        <div>
          <h3>Playwood arm chair</h3>
          <span><img src={star} alt="star" /><b>(22)</b> </span>
         <div> <>$32.00</><s>$32.00</s></div>
         <p>Color</p>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>
         <span><b>Add To cart</b> <img src={wishlistBlue} alt="" /> </span>
         <p>Categories:</p>
         <p>Tags</p>
         <span><b>Share</b>
         <img src={facebook} alt="facebook" />
         <img src={instagram} alt="instagram" />
         <img src={twitter} alt="twitter" />
         </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
