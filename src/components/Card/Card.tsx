import React, { FC } from "react";
import "./Card.css";

type CardProps = {
  image?: string;
  title: string;
  text: string;
  date: string;
  onClick?: () => void;
};

const Card: FC<CardProps> = (props) => {
  return (
    <div className="card" onClick={props.onClick}>
      <div className="cardContent">
        {props.image ? (
          <img src={props.image} />
        ) : (
          <img src={require("../../assets/no-img-bg.jpg")} />
        )}
        <div className="cardInfo">
          <h3 className="cardContentTitle">{props.title}</h3>
          <p className="cardContentText">{props.text}</p>
          <p className="cardContentDate">
            {props.date.split("-").reverse().join(".")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
