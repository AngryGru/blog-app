import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import "./Posts.css";
import { useDispatch } from "react-redux";
import { loadData } from "../../redux/reducers/postsReducer";
import Card from "../../components/Card";
import CardList from "../../components/CardList";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { PostsSelectors } from "../../redux/reducers/postsReducer";

import Modal from "../../components/Modal";
import { setSelectedImage } from "../../redux/reducers/postsReducer";

const LIST_DATA = [
  {
    id: 0,
    image:
      "https://images.hdqwalls.com/download/triangles-colorful-background-nz-1920x1080.jpg",
    text: "Lorem ipsum dolor sit amet consectetur.",
    date: "2022-04-16",
    lesson_num: 0,
    title: "What is Lorem Ipsum?",
    author: 0,
  },
  {
    id: 1,
    image:
      "https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105__480.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eligendi.",
    date: "2022-03-10",
    lesson_num: 1,
    title: "What is Lorem?",
    author: 1,
  },
  {
    id: 2,
    text: "Dolorum, eligendi. Lorem consectetur adipisicing elit.",
    date: "2022-06-18",
    lesson_num: 2,
    title: "What is Ipsum?",
    author: 2,
  },
  {
    id: 3,
    image:
      "https://images.hdqwalls.com/download/colorful-polygons-1920x1080.jpg",
    text: "Sit amet consectetur lorem ipsum dolor adipisicing elit. Eligendi, dolorum.",
    date: "2022-05-08",
    lesson_num: 3,
    title: "What is Dolorum?",
    author: 3,
  },
  {
    id: 4,
    image:
      "https://www.teahub.io/photos/full/128-1284836_desktop-wallpaper-laptop-mac-macbook-air-vk42-rainbow.jpg",
    text: "Sit amet consectetur lorem ipsum dolor adipisicing elit. Eligendi, dolorum.",
    date: "2022-05-09",
    lesson_num: 4,
    title: "Avocado runs the world!",
    author: 4,
  },
  {
    id: 5,
    image:
      "https://stackify.com/wp-content/uploads/2017/11/OOPS-concept-abstraction-881x441.jpg",
    text: "Sit amet consectetur lorem ipsum dolor adipisicing elit. Eligendi, dolorum.  Sit amet consectetur lorem ipsum dolor adipisicing elit. Sit amet consectetur lorem ipsum dolor adipisicing elit. Eligendi, dolorum.",
    date: "2022-05-07",
    lesson_num: 5,
    title: "The Voyager's Courage",
    author: 5,
  },
];

const Posts = () => {
  const dispatch = useDispatch();

  const cardsList = useSelector((state) =>
    PostsSelectors.getCards(state, "all/saved/liked")
  );

  useEffect(() => {
    dispatch(loadData(LIST_DATA));
  }, []);

  // const { theme } = useThemeContext();
  // const isLightTheme = theme === Theme.Light;
  const theme = useSelector((state: any) => state.themeSwitchReducer.theme);
  const isLightTheme = theme === "lightTheme";

  const onAddBtnClick = () => {
    window.location.replace("/add-post");
  };

  const selectedCard = useSelector(PostsSelectors.getSelectedPost);
  const selectedImage = useSelector(PostsSelectors.getSelectedImage);

  const [modalActive, setModalActive] = useState(false);
  const onCloseModalClick = () => {
    setModalActive(false);
    dispatch(setSelectedImage(null));
  };

  return (
    <div
      className={classNames("postsPage", {
        ["postsPageDark"]: !isLightTheme,
      })}
    >
      <div className="postsHeader">
        <p>My posts</p>
        <button className="addBtn" onClick={onAddBtnClick}>
          Add
        </button>
      </div>
      <div className="postsTabs">
        <button>All</button>
        <button>Liked</button>
        <button>Disliked</button>
        <button>Saved</button>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <div className="closeBtnContainer">
          <span className="closeBtn" onClick={onCloseModalClick}>
            <IoClose />
          </span>
        </div>
        <div className="imageContainer">
          {selectedImage && <img src={selectedImage} alt="Selected image" />}
        </div>
      </Modal>
      <CardList data={cardsList} setModalActive={setModalActive} />
      {/* <CardList data={LIST_DATA} /> */}
    </div>
  );
};

export default Posts;

// return (
//   <div
//     className={classNames("postsPage", {
//       ["postsPageDark"]: !isLightTheme,
//     })}
//   >
//     <div className="postsHeader">
//       <p>My posts</p>
//       <button className="addBtn" onClick={onAddBtnClick}>
//         Add
//       </button>
//     </div>
//     <Modal active={modalActive} setActive={setModalActive}>
//       {selectedCard && (
//         <div style={{ background: "red", padding: "10px" }}>
//           <Card {...selectedCard} />
//         </div>
//       )}
//       <button
//         onClick={() => setModalActive(false)}
//       >
//         Cancel
//       </button>
//     </Modal>
//     <CardList data={LIST_DATA} />
//   </div>
// );
