import React from "react";
import "./CardList.css";
import Card from "../Card";

const CardList = (props: any) => {
  const listCards = props.data.map((item: any) => {
    return (
      <Card
        key={item.id}
        image={item.image}
        title={item.title}
        text={item.text}
        date={item.date}
      />
    );
  });
  return <div className="list">{listCards}</div>;
};

export default CardList;
