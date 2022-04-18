import React from "react";
import "./Card.css";

const Card = (props: any) => {
  return (
    <div className="card">
      <div className="card-content">
        {props.image ? (
          <img src={props.image} />
        ) : (
          <img src={require("../../assets/no-img-bg.jpg")} />
        )}
        <h3 className="card-content_title">{props.title}</h3>
        <p className="card-content_text">{props.text}</p>
        <p className="card-content_date">
          {props.date.split("-").reverse().join(".")}
        </p>
      </div>
    </div>
  );
};

export default Card;
