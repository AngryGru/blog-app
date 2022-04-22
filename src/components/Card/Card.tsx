import React from "react";
import "./Card.css";

const Card = (props: any) => {
  return (
    <div className="card">
      <div className="cardContent">
        {props.image ? (
          <img src={props.image} />
        ) : (
          <img src={require("../../assets/no-img-bg.jpg")} />
        )}
        <h3 className="cardContentTitle">{props.title}</h3>
        <p className="cardContentText">{props.text}</p>
        <p className="cardContentDate">
          {props.date.split("-").reverse().join(".")}
        </p>
      </div>
    </div>
  );
};

export default Card;
