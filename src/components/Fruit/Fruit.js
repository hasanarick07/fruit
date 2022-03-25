import React from "react";
import "./Fruit.css";

const Fruit = props => {
  const { picture, name, price } = props.fruit;
  return (
    <div className="card">
      <img src={picture} alt="" />
      <p>Name :{name}</p>
      <p>Price :{price} </p>
      <div className="add-to-cart">Add To Cart</div>
    </div>
  );
};

export default Fruit;
