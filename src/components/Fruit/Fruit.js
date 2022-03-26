import React from "react";
import "./Fruit.css";

const Fruit = ({ fruit, added }) => {
  const { picture, name, price, id } = fruit;
  return (
    <div className="card">
      <img src={picture} alt="" />
      <p>Name :{name}</p>
      <p>Price :{price} </p>
      <div onClick={() => added(id)} className="add-to-cart">
        Add To Cart
      </div>
    </div>
  );
};

export default Fruit;
