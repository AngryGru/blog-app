import React from "react";
import "./CardList.css";
import Card from "../Card";
import { Link } from "react-router-dom";

const CardList = (props: any) => {
  const listCards = props.data.map((item: any) => {
    return (
      <Link key={item.id} to={`/cards-list/${item.id}`}>
        <Card
          // key={item.id}
          image={item.image}
          title={item.title}
          text={item.text}
          date={item.date}
        />
      </Link>
    );
  });
  return <div className="list">{listCards}</div>;
};

export default CardList;
