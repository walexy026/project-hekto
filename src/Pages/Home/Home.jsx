import React from "react";
import "./Home.css";
import sofa from "../../Assets/sofa-promotional-header.svg";
import heroHang from "../../Assets/heroHang.svg";
import cantilever1 from "../../Assets/cantilever--1.svg";
import cantilever2 from "../../Assets/cantilever--2.svg";
import cantilever3 from "../../Assets/cantilever--3.svg";
import cantilever4 from "../../Assets/cantilever--4.svg";
import HomeMap from "./HomeMap";
import LatestProduct from "./LatestProduct";
import handyCraft1 from "../../Assets/handy-craft--1.svg";
import handyCraft2 from "../../Assets/handy-craft--2.svg";
import handyCraft3 from "../../Assets/handy-craft--3.svg";
import handyCraft4 from "../../Assets/handy-craft--4.svg";
import handyCraft5 from "../../Assets/handy-craft--5.svg";
import handyCraft6 from "../../Assets/handy-craft--6.svg";

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
      cantilever: <img src={cantilever3} alt="" />,
      cantTitle: "Cantilever chair",
      recyellow: " ",
      recpink: " ",
      recblue: "",
      code: "Code - Y523201",
      price: "$42.00",
    },
    {
      id: 4,
      cantilever: <img src={cantilever4} alt="" />,
      cantTitle: "Cantilever chair",
      recyellow: " ",
      recpink: "",
      recblue: "",
      code: "Code - Y523201",
      price: "$42.00",
    },
  ];

  const LatPro = [
    {
      id: 1,
      latestPics: <img src={handyCraft1} alt="" />,
      latestTitle: "Comfort Handy Craft",
      latestPrice: "$42.00",
      LatestDiscount: "$65.00",
    },
    {
      id: 2,
      latestPics: <img src={handyCraft2} alt="" />,
      latestTitle: "Comfort Handy Craft",
      latestPrice: "$42.00",
      LatestDiscount: "$65.00",
    },
    {
      id: 3,
      latestPics: <img src={handyCraft3} alt="" />,
      latestTitle: "Comfort Handy Craft",
      latestPrice: "$42.00",
      LatestDiscount: "$65.00",
    },
    {
      id: 4,
      latestPics: <img src={handyCraft4} alt="" />,
      latestTitle: "Comfort Handy Craft",
      latestPrice: "$42.00",
      LatestDiscount: "$65.00",
    },
    {
      id: 5,
      latestPics: <img src={handyCraft5} alt="" />,
      latestTitle: "Comfort Handy Craft",
      latestPrice: "$42.00",
      LatestDiscount: "$65.00",
    },
    {
      id: 6,
      latestPics: <img src={handyCraft6} alt="" />,
      latestTitle: "Comfort Handy Craft",
      latestPrice: "$42.00",
      LatestDiscount: "$65.00",
    },
  ];

  return (
    <div>
      <div className="heroSection">
        <img src={heroHang} alt="" />
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
          <img src={sofa} alt="" />
        </div>
        <div></div>
      </div>
      <div>
        <h2 className="homeH2">Featured Products</h2>
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
      </div>
      {LatPro.map((Latest) => (
        <LatestProduct
          latestPics={Latest.latestPics}
          latestTitle={Latest.latestTitle}
          latestPrice={Latest.latestPrice}
          LatestDiscount={Latest.LatestDiscount}
        />
      ))}
    </div>
  );
};

export default Home;
