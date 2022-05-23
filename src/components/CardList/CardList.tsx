import React, { useState } from "react";
import "./CardList.css";
import { useDispatch } from "react-redux";
import Card from "../Card";
import { Link } from "react-router-dom";
import { Card as CardType } from "../../common/types";
import { setSelectedImage } from "../../redux/reducers/postsReducer";

const CardList = ({ data, setModalActive }: any) => {
  const dispatch = useDispatch();

  const onCardClick = (item: CardType) => {
    const defaultImage =
      "https://st2.depositphotos.com/1031174/12280/i/950/depositphotos_122808092-stock-photo-grey-textured-background.jpg";
    item.image
      ? dispatch(setSelectedImage(item.image))
      : dispatch(setSelectedImage(defaultImage));
    setModalActive(true);
  };

  const listCards = data.map((item: CardType) => {
    return (
      <Card
        id={item.id}
        key={item.id}
        image={item.image}
        title={item.title}
        text={item.text}
        date={item.date}
        onClick={() => onCardClick(item)}
      />
    );
  });
  return <div className="list">{listCards}</div>;
};

export default CardList;

{
  /* <Link key={item.id} to={`/cards-list/${item.id}`}>
        <Card
          // key={item.id}
          image={item.image}
          title={item.title}
          text={item.text}
          date={item.date}
          onClick={() => onCardClick(item)}
        />
      </Link> */
}
