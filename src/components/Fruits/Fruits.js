import React, { useEffect, useState } from "react";
import Fruit from "../Fruit/Fruit";
import SelectedFruit from "../SelectedFruit/SelectedFruit";
import "./Fruits.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa1, faTrash } from "@fortawesome/free-solid-svg-icons";

const Fruits = () => {
  const [Fruits, setFruits] = useState([]);
  const [selected, setSelected] = useState([]);
  useEffect(() => {
    fetch("fruit.json")
      .then(res => res.json())
      .then(data => setFruits(data));
  }, []);
  const addToCart = select => {
    let selectedFruit = [];
    let singleSelectFruit = [];
    const exist = selected.find(newSelect => newSelect.id === select.id);
    if (!exist) {
      singleSelectFruit = [...selected, select];
    } else {
      singleSelectFruit = [...selected];
    }
    if (singleSelectFruit.length <= 4) {
      selectedFruit = [...singleSelectFruit];
    } else {
      alert("You can not add any food");
      selectedFruit = [...selected];
    }
    setSelected(selectedFruit);
  };
  const choseOne = select => {
    const chose = select[Math.floor(Math.random() * select.length)];
    alert(chose.name);
  };
  return (
    <div className="container">
      <div className="fruit-container">
        {Fruits.map(fruit => (
          <Fruit key={fruit.id} fruit={fruit} added={addToCart}></Fruit>
        ))}
      </div>
      <div className="fruit-cart">
        <h1>Chooses Fruit</h1>
        {selected.map(select => (
          <SelectedFruit key={select.id} select={select}></SelectedFruit>
        ))}
        <button onClick={() => choseOne(selected)}>
          Choose One <FontAwesomeIcon icon={fa1}></FontAwesomeIcon>
        </button>
        <br />
        <button>
          Remove All <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Fruits;
