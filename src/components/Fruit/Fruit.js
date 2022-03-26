import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Fruit.css";

const Fruit = ({ fruit, added }) => {
  const { picture, name, price } = fruit;
  return (
    <div className="card">
      <img src={picture} alt="" />
      <p>Name :{name}</p>
      <p>Price :{price} </p>
      <div onClick={() => added(fruit)} className="add-to-cart">
        Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default Fruit;
