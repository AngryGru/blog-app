import React from "react";
import "./CardList.css";
import { useDispatch } from "react-redux";
import Card from "../Card";
import { CardType } from "../../common/types";
import { setSelectedImage } from "../../redux/reducers/postsReducer";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import classNames from "classnames";

const CardList = ({ data, setModalActive }: any) => {
  const { theme } = useThemeContext();
  const isLightTheme = theme === Theme.Light;

  const dispatch = useDispatch();

  const onEyeBtnClick = (event: any, item: CardType) => {
    event.stopPropagation();
    const defaultImage =
      "https://st2.depositphotos.com/1031174/12280/i/950/depositphotos_122808092-stock-photo-grey-textured-background.jpg";
    dispatch(setSelectedImage(item.image ? item.image : defaultImage));
    setModalActive(true);
  };

  const onCardClick = (id: string, event: any) => {
    event.stopPropagation();
    window.location.href = `/cards-list/${id}`;
  };

  const listCards = data.map((item: CardType) => {
    return (
      <div key={item.id} onClick={(event) => onCardClick(item.id, event)}>
        <Card
          id={item.id}
          key={item.id}
          image={item.image}
          title={item.title}
          text={item.text}
          date={item.date}
          likeStatus={item.likeStatus}
          saved={item.saved}
          onClick={(event) => onEyeBtnClick(event, item)}
        />
      </div>
    );
  });
  return (
    <div
      className={classNames("list", {
        ["listDark"]: !isLightTheme,
      })}
    >
      {listCards}
    </div>
  );
};

export default CardList;
