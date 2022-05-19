import React from "react";
import "./CardList.css";
import Card from "../Card";
import { Link } from "react-router-dom";
import { Card as CardType } from "../../common/types";

const CardList = (props: any) => {
  const onCardClick = (item: CardType) => {};

  const listCards = props.data.map((item: CardType) => {
    return (
      <Link key={item.id} to={`/cards-list/${item.id}`}>
        <Card
          // key={item.id}
          image={item.image}
          title={item.title}
          text={item.text}
          date={item.date}
          onClick={() => onCardClick(item)}
        />
      </Link>
    );
  });
  return <div className="list">{listCards}</div>;
};

export default CardList;
