import React from "react";
import "./Home.css";
import sofa from "../../Assets/sofa-promotional-header.svg";
import heroHang from "../../Assets/heroHang.svg";
import cantilever1 from "../../Assets/cantilever--1.svg";
import cantilever2 from "../../Assets/cantilever--2.svg";
import cantilever3 from "../../Assets/cantilever--3.svg";
import cantilever4 from "../../Assets/cantilever--4.svg";
import cantilever5 from "../../Assets/cantilever--5.svg";
import cantilever6 from "../../Assets/cantilever--6.svg";
import cantilever7 from "../../Assets/cantilever--7.svg";
import cantilever8 from "../../Assets/cantilever--8.svg";
import HomeMap from "./HomeMap";
import LatestProduct from "./LatestProduct";
import handyCraft1 from "../../Assets/handy-craft--1.svg";
import handyCraft2 from "../../Assets/handy-craft--2.svg";
import handyCraft3 from "../../Assets/handy-craft--3.svg";
import handyCraft4 from "../../Assets/handy-craft--4.svg";
import handyCraft5 from "../../Assets/handy-craft--5.svg";
import handyCraft6 from "../../Assets/handy-craft--6.svg";
import freedelivery from "../../Assets/free-delivery.svg";
import support from "../../Assets/24-hours-support.svg";
import cashback from "../../Assets/cashback.svg";
import premiumQuality from "../../Assets/premium-quality.svg";
import clock from "../../Assets/clock-list.svg";
import shelve from "../../Assets/shelve.svg";
import executive1 from "../../Assets/executive-chair--1.svg";
import executive2 from "../../Assets/executive-chair--2.svg";
import executive3 from "../../Assets/executive-chair--3.svg";

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
      shopImg: <img src={freedelivery} alt="" />,
      shopexTitle: "24/7 Support",
      shopexP:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      trending: <img src={cantilever5} alt="" />,
      trendingprice: "$26.00 ",
      trendingDiscount: "$42.00",
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
      shopImg: <img src={cashback} alt="" />,
      shopexTitle: "24/7 Support",
      shopexP:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      trending: <img src={cantilever6} alt="" />,
      trendingprice: "$26.00 ",
      trendingDiscount: "$42.00",
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
      shopImg: <img src={premiumQuality} alt="" />,
      shopexTitle: "24/7 Support",
      shopexP:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      trending: <img src={cantilever7} alt="" />,
      trendingprice: "$26.00 ",
      trendingDiscount: "$42.00",
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
      shopImg: <img src={support} alt="" />,
      shopexTitle: "24/7 Support",
      shopexP:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      trending: <img src={cantilever8} alt="" />,
      trendingprice: "$26.00 ",
      trendingDiscount: "$42.00",
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
      <div>
        <h2 className="lph2">Latest Products</h2>
        <div className="latestPick">
          <p>Latest Products</p>
          <p>Best Seller</p>
          <p>Featured</p>
          <p>Special Offer</p>
        </div>
        <div className="LatPro">
          {LatPro.map((Latest) => (
            <LatestProduct
              latestPics={Latest.latestPics}
              latestTitle={Latest.latestTitle}
              latestPrice={Latest.latestPrice}
              LatestDiscount={Latest.LatestDiscount}
            />
          ))}
        </div>
      </div>
      <div>
        <h2 className="homeH2">What Shopex Offer!</h2>
        <div className="homediv">
          {FeaturedProduct.map((cantil) => (
            <HomeMap
              cantilever={cantil.shopImg}
              cantTitle={cantil.shopexTitle}
              code={cantil.shopexP}
            />
          ))}
        </div>
      </div>
      <div>
        <h2 className="homeH2">Trending Products</h2>
        <div className="homediv">
          {FeaturedProduct.map((cantil) => (
            <HomeMap
              cantilever={cantil.trending}
              cantTitle={cantil.cantTitle}
              code={cantil.trendingDiscount}
              price={cantil.trendingprice}
              // trendingprice
            />
          ))}
        </div>
      </div>
      <div className="productOff">
        <div className="shopNow">
          <h3>23% off in all products</h3>
          <p>Shop Now</p>
          <img src={clock} alt="" />
        </div>
        <div className="viewCollection">
          <h3>23% off in all products</h3>
          <p>View Collection</p>
          <img src={shelve} alt="" />
        </div>

        <div>
          <div>
            <img src={executive1} alt="" />
            <b>Executive Seat chair</b>
            <s>$32.00</s>
          </div>
          <div>
            <img src={executive2} alt="" />
            <b>Executive Seat chair</b>
            <s>$32.00</s>
          </div>
          <div>
            <img src={executive3} alt="" />
            <b>Executive Seat chair</b>
            <s>$32.00</s>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
