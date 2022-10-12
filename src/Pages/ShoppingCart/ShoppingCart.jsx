import React from "react";
import "./ShoppingCart.css";
import Cart from "../../Components/Cart/Cart";
import bagOne from "../../Assets/bag0ne.svg";
import bagTwo from "../../Assets/bagTwo.svg";
import bagThree from "../../Assets/bagThree.svg";
import bagFour from "../../Assets/bagFour.svg";
import bagFive from "../../Assets/bagFive.svg";
import CartTotal from "../../Components/CartTotal/CartTotal";
import ProductTitle from "../../Components/ProductTitle/ProductTitle";

const ShoppingCart = () => {
  const cartData = [
    {
      id: 1,
      // heading: "Product",
      logo: bagOne,
      name: "Ut diam consequat",
      color: "Color:Brown",
      size: "Size:XL",
      price: "$32.00",
      decrease: "-",
      count: "1",
      increase: "+",
      total: "£219.00",
    },
    {
      id: 2,
      // heading: "Product",
      logo: bagTwo,
      name: "Vel faucibus posuere",
      color: "Color:Brown",
      size: "Size:XL",
      price: "$32.00",
      decrease: "-",
      count: "1",
      increase: "+",
      total: "£219.00",
    },
    {
      id: 3,
      // heading: "Product",
      logo: bagThree,
      name: "Ac vitae vestibulum",
      color: "Color:Brown",
      size: "Size:XL",
      price: "$32.00",
      decrease: "-",
      count: "1",
      increase: "+",
      total: "£219.00",
    },
    {
      id: 4,
      // heading: "Product",
      logo: bagFour,
      name: "Elit massa diam",
      color: "Color:Brown",
      size: "Size:XL",
      price: "$32.00",
      decrease: "-",
      count: "1",
      increase: "+",
      total: "£219.00",
    },
    {
      id: 5,
      // heading: "Product",
      logo: bagFive,
      name: "Proin pharetra elementum",
      color: "Color:Brown",
      size: "Size:XL",
      price: "$32.00",
      decrease: "-",
      count: "1",
      increase: "+",
      total: "£219.00",
    },
  ];

  return (
    <div>
<ProductTitle title = 'ShoppingCart' ProductDetails = 'ShoppingCart'/>
    <div className="cartDiv">
      <div className="heading">
        <h3 id="h3product">Product</h3>
        <h3 id="h3price">Price</h3>
        <h3 id="h3quantity">Quantity</h3>
        <h3 id="h3total">Total</h3>
      </div>
      <div className="shopCart">
        <div className="cartMap">
          {cartData.map((items) => (
            <Cart
            // heading={items.heading}
            img={items.logo}
              name={items.name}
              color={items.color}
              size={items.size}
              price={items.price}
              decrease={items.decrease}
              count={items.count}
              increase={items.increase}
              total={items.total}
              key={items.id}
              />
              ))}
          <span className="btncartUpdate">
            <button id="btncart" type="submit">
              Update Cart
            </button>
            <button id="btncart" type="submit">
              Clear Cart
            </button>
          </span>
        </div>
        <div>
          <CartTotal />
        </div>
      </div>
    </div>
    </div>
  );
};

export default ShoppingCart;
