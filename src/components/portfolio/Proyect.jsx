import React from "react";
import "./Proyect.css";

function Proyect(props) {
  return (
    <div className="proyect__card">
      <img className="bg-proyect__card" src={props.image[0]}></img>
      <div className="front-proyect__card">{props.name}</div>
    </div>
  );
}

export default Proyect;
