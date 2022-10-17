import React from "react";
import "./Home.css";
import jj from "../../Assets/sofa-promotional-header.svg";
import jk from "../../Assets/heroHang.svg";

const Home = () => {
  return (
    <div>
      Home
      <div className="heroSection">
        <img src={jk} alt="" />
        <div>
          <h6>Best Furniture For Your Castle....</h6>
          <h1>New Furniture Collection Trends in 2020</h1>
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </h5>
          <button>Shop Now</button>
        </div>
        <div>
          <img src={jj} alt="" />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
