import React, { useEffect, useState } from "react";
import Fruit from "../Fruit/Fruit";

const Fruits = () => {
  const [Fruits, setFruits] = useState([]);
  useEffect(() => {
    fetch("fruit.json")
      .then(res => res.json())
      .then(data => setFruits(data));
  }, []);
  return (
    <div>
      <div>
        {Fruits.map(fruit => (
          <Fruit key={fruit.id} fruit={fruit}></Fruit>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Fruits;
