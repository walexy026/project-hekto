import React from "react";
import "./Home.css";
import jj from "../../Assets/sofa-promotional-header.svg";
import jk from "../../Assets/heroHang.svg";
import cantilever1 from "../../Assets/cantilever--1.svg";
import cantilever2 from "../../Assets/cantilever--2.svg";
import cantilever3 from "../../Assets/cantilever--3.svg";
import cantilever4 from "../../Assets/cantilever--4.svg";
import HomeMap from "./HomeMap";

const Home = () => {
  const FeaturedProduct = [
    {
      id: 1,
      cantilever: <img src={cantilever1} alt="" />,
      cantTitle: "Cantilever chair",
      recyellow: ".",
      recpink: ".",
      recblue: ".",
      code: "Code - Y523201",
      price: "$42.00",
    },
    {
      id: 2,
      cantilever: <img src={cantilever2} alt="" />,
      cantTitle: "Cantilever chair",
      recyellow: ". ",
      recpink: ".",
      recblue: ".",
      code: "Code - Y523201",
      price: "$42.00",
    },
    {
      id: 3,
      cantilever: <img src={cantilever3} alt=""/>,
      cantTitle: "Cantilever chair",
      recyellow: " ",
      recpink: " ",
      recblue: "",
      code: "Code - Y523201",
      price: "$42.00",
    },
    {
      id: 4,
      cantilever: <img src={cantilever4} alt=""/>,
      cantTitle: "Cantilever chair",
      recyellow: " ",
      recpink: "",
      recblue: "",
      code: "Code - Y523201",
      price: "$42.00",
    },
  ];

  return (
    <div>
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
      <div>
      <h2>Featured Products</h2>
        <div className="homediv">
          {FeaturedProduct.map((cantil) => (
            <HomeMap
              cantilever={cantil.cantilever}
              cantTitle={cantil.cantTitle}
              recyellow={cantil.recyellow}
              recpink={cantil.recpink}
              recblue={cantil.recblue}
              code={cantil.code}
              price={cantil.price}
            />
          ))}
        </div>
        {/*         
        <h2>Featured Products</h2>
        <div>
          <div>
            <img src={cantilever1} alt="" />
            <p>Cantilever chair</p>
            <div>
              <span className="recyellow">.</span>
              <span className="recpink">.</span>
              <span className="recblue">.</span>
            </div>
            <b>Code - Y523201</b>
            <b>$42.00</b>
          </div>
          <div>
            <img src={cantilever2} alt="" />
            <p>Cantilever chair</p>
            <div>
              <span className="recyellow">.</span>
              <span className="recpink">.</span>
              <span className="recblue">.</span>
            </div>
            <b>Code - Y523201</b>
            <b>$42.00</b>
          </div>
          <div>
            <img src={cantilever3} alt="" />
            <p>Cantilever chair</p>
            <div>
              <span className="recyellow">.</span>
              <span className="recpink">.</span>
              <span className="recblue">.</span>
            </div>
            <b>Code - Y523201</b>
            <b>$42.00</b>
          </div>
          <div>
            <img src={cantilever4} alt="" />
            <p>Cantilever chair</p>
            <div>
              <span className="recyellow">.</span>
              <span className="recpink">.</span>
              <span className="recblue">.</span>
            </div>
            <b>Code - Y523201</b>
            <b>$42.00</b>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Home;
