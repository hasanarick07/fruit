import React, { useEffect, useState } from "react";
import Fruit from "../Fruit/Fruit";
import "./Fruits.css";

const Fruits = () => {
  const [Fruits, setFruits] = useState([]);
  useEffect(() => {
    fetch("fruit.json")
      .then(res => res.json())
      .then(data => setFruits(data));
  }, []);
  const addToCart = id => {
    console.log("hi", id);
  };
  return (
    <div className="container">
      <div className="fruit-container">
        {Fruits.map(fruit => (
          <Fruit key={fruit.id} fruit={fruit} added={addToCart}></Fruit>
        ))}
      </div>
      <div>
        <h1>Chooses Fruit</h1>
      </div>
    </div>
  );
};

export default Fruits;
