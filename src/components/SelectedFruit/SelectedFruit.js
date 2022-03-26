import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./SelectedFruit.css";

const SelectedFruit = ({ select }) => {
  const { picture, name } = select;
  return (
    <div className="select-card">
      <div className="select-card-detail">
        <img src={picture} alt="" />
        <p>{name}</p>
      </div>
      <FontAwesomeIcon className="icon" icon={faTrash}></FontAwesomeIcon>
    </div>
  );
};

export default SelectedFruit;
