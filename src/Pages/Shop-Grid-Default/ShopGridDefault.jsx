import React from "react";
import ProductTitle from "../../Components/ProductTitle/ProductTitle";
import "./ShopGridDefault.css";
import shop1 from "../../Assets/shop-grid--1.svg";
import shop2 from "../../Assets/shop-grid--2.svg";
import shop3 from "../../Assets/shop-grid--3.svg";
import shop4 from "../../Assets/shop-grid--4.svg";
import shop5 from "../../Assets/shop-grid--5.svg";
import shop6 from "../../Assets/shop-grid--6.svg";
import shop7 from "../../Assets/shop-grid--7.svg";
import shop8 from "../../Assets/shop-grid--8.svg";
import shop9 from "../../Assets/shop-grid--9.svg";
import shop10 from "../../Assets/shop-grid--10.svg";
import shop11 from "../../Assets/shop-grid--11.svg";
import shop12 from "../../Assets/shop-grid--12.svg";
import ShopGrid from "../../Components/ShopGrid/ShopGrid";

const ShopGridDefault = () => {
  const immg = [
    {
      id: 1,
      pics: <img src={shop1} alt="" />,
      picsTitle: "Vel elit euismod",
      yellow: "",
      pink: "",
      blue: "",
      price: "$26.00 ",
      discount: "$42.00",
    },
    {
        id: 2,
        pics: <img src={shop2} alt="" />,
        picsTitle: "Ultricies condimentum imperdiet",
      price: "$26.00 ",
      discount: "$42.00",
    },
    {
      id: 3,
      pics: <img src={shop3} alt="" />,
      picsTitle: "Vitae suspendisse sed",
      price: "$26.00 ",
      discount: "$42.00",
    },
    {
      id: 4,
      pics: <img src={shop4} alt="" />,
      picsTitle: "Sed at fermentum",
      price: "$26.00 ",
      discount: "$42.00",
    },
    {
      id: 5,
      pics: <img src={shop5} alt="" />,
      picsTitle: "Fusce pellentesque at",
      price: "$26.00 ",
      discount: "$42.00",
    },
    {
      id: 6,
      pics: <img src={shop6} alt="" />,
      picsTitle: "Vestibulum magna laoreet",
      price: "$26.00 ",
      discount: "$42.00",
    },
    {
      id: 7,
      pics: <img src={shop7} alt="" />,
      picsTitle: "Sollicitudin amet orci",
      price: "$26.00 ",
      discount: "$42.00",
    },
    {
      id: 8,
      pics: <img src={shop8} alt="" />,
      picsTitle: "Ultrices mauris sit",
      price: "$26.00 ",
      discount: "$42.00",
    },
    {
      id: 9,
      pics: <img src={shop9} alt="" />,
      picsTitle: "Pellentesque condimentum ac",
      price: "$26.00 ",
      discount: "$42.00",
    },
    {
      id: 10,
      pics: <img src={shop10} alt="" />,
      picsTitle: "Cras scelerisque velit",
      price: "$26.00 ",
      discount: "$42.00",
    },
    {
      id: 11,
      pics: <img src={shop11} alt="" />,
      picsTitle: "Lectus vulputate faucibus",
      price: "$26.00 ",
      discount: "$42.00",
    },
    {
      id: 12,
      pics: <img src={shop12} alt="" />,
      picsTitle: "Purus risus, ut",
      price: "$26.00 ",
      discount: "$42.00",
    },
  ];

  return (
    <div>
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
      <div className="gridclass">
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
    </div>
  );
};

export default ShopGridDefault;
