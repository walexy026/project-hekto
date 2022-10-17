import React from "react";
import ProductTitle from "../../Components/ProductTitle/ProductTitle";
import "./ShopGridDefault.css";
import shop from "../../Assets/shop-grid--1.svg";
import ShopGrid from "../../Components/ShopGrid/ShopGrid";

const ShopGridDefault = () => {
  const immg = [
    {
      id: 1,
      pics: <img src={shop} alt="" />,
      picsTitle: "Vel elit euismod",
      yellow: "y",
      pink: "p",
      blue: "b",
      price: "$26.00 ",
      discount: "$42.00",
    },
    {
      id: 2,
      pics: <img src={shop} alt="" />,
      picsTitle: "Vel elit euismod",
      price: "$26.00 ",
      discount: "$42.00",
    },
    {
      id: 3,
      pics: <img src={shop} alt="" />,
      picsTitle: "Vel elit euismod",
      price: "$26.00 ",
      discount: "$42.00",
    },
    {
      id: 4,
      pics: <img src={shop} alt="" />,
      picsTitle: "Vel elit euismod",
      price: "$26.00 ",
      discount: "$42.00",
    },
  ];

  return (
    <div>
      ShopGridDefault
      <ProductTitle
        title="Shop Grid Default"
        ProductDetails="Shop Grid Default"
      />
      <div className="shopGridTitle">
        <span className="gridTitle">
          <h4>Ecommerce Accessories & Fashion item </h4>
          <b>About 9,620 results (0.62 seconds)</b>
        </span>
        <span>
          <form className="gridForm" action="">
            <label htmlFor="page-select">Per Page:</label>
            <input type="text" name="page-select" id="page-select" />
            <label htmlFor="sort">Sort By:</label>
            <select name="sort" id="sort">
              <option value="" id="sort">
                Best Match
              </option>
            </select>
            <label htmlFor="view">View:</label>
            <input type="text" name="view" id="view" />
          </form>
        </span>
      </div>
      {immg.map((grid) => (
        <ShopGrid
          pics={grid.pics}
          picsTitle={grid.picsTitle}
          yellow={grid.yellow}
          pink={grid.pink}
          blue={grid.blue}
          price={grid.price}
          discount={grid.discount}
        />
      ))}
    </div>
  );
};

export default ShopGridDefault;
