import "./Posts.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import Lottie from "react-lottie";
import animationData from "../../components/Lotties/lottie-loading.json";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { IoBookmarkOutline, IoClose } from "react-icons/io5";
import Modal from "../../components/Modal";
import CardList from "../../components/CardList";
import {
  PostsSelectors,
  setSelectedImage,
  setPostsTab,
  setPostsLimitTab,
  loadAllPosts,
  loadMyPosts,
} from "../../redux/reducers/postsReducer";
import EmptyState from "../../components/EmptyState";
import Input from "../../components/Input";
import Pagination from "../../components/Pagination";
import { useNavigate } from "react-router-dom";

const Posts = ({ isPersonal }: any) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const dispatch = useDispatch();

  const activeTab = useSelector(PostsSelectors.getPostsTab);
  const activeLimitTab = useSelector(PostsSelectors.getPostsLimitTab);

  const cardsList = useSelector((state) =>
    PostsSelectors.getCards(state, activeTab, isPersonal)
  );
  const allPostsLoading = useSelector(PostsSelectors.getAllPostsLoading);

  const onTabClick = (tab: string) => {
    dispatch(setPostsTab(tab));
  };

  const totalCount = useSelector(PostsSelectors.getTotalAllPostsCount);
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(2);
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState("date");
  const pagesCount = Math.ceil(totalCount / limit);

  useEffect(() => {
    const offset = (page - 1) * limit;
    dispatch(
      isPersonal
        ? loadMyPosts("")
        : loadAllPosts({ search, limit, offset, order })
    );
  }, [search, limit, page, order]);

  const onSearch = (event: any) => {
    setSearch(event.target.value);
    setPage(1);
  };

  const onLimitChange = (value: number) => {
    dispatch(setPostsLimitTab(value));
    setLimit(value);
    setPage(1);
  };

  const onPrevClick = () => {
    setPage(page - 1);
  };
  const onNextClick = () => {
    setPage(page + 1);
  };
  const onChangeSelect = (event: any) => {
    setOrder(event.target.value);
    setPage(1);
  };

  const { theme } = useThemeContext();
  const isLightTheme = theme === Theme.Light;

  const navigate = useNavigate();
  const onAddBtnClick = () => {
    navigate("/add-post");
  };

  const selectedImage = useSelector(PostsSelectors.getSelectedImage);

  const [modalActive, setModalActive] = useState(false);

  const onCloseModalClick = () => {
    setModalActive(false);
    dispatch(setSelectedImage(null));
  };

  const POSTS_TABS = [
    {
      tabName: "All",
      id: "allPosts",
      className: "showAllTab",
    },
    {
      tabName: <AiOutlineLike />,
      id: "likedPosts",
      className: "likeTab",
    },
    {
      tabName: <AiOutlineDislike />,
      id: "dislikedPosts",
      className: "dislikeTab",
    },
    { tabName: <IoBookmarkOutline />, id: "savedPosts", className: "saveTab" },
  ];

  const POSTS_LIMIT_TABS = [
    {
      tabName: "2",
      id: 2,
      value: 2,
    },
    {
      tabName: "5",
      id: 5,
      value: 5,
    },
    {
      tabName: "10",
      id: 10,
      value: 10,
    },
    {
      tabName: "15",
      id: 15,
      value: 15,
    },
  ];

  return (
    <div
      className={classNames("postsPage", {
        ["postsPageDark"]: !isLightTheme,
      })}
    >
      <div className="postsHeader">
        <div className="postsHeaderTitle">
          <p>{isPersonal ? "My posts" : "All posts"}</p>
          <button className="addBtn" onClick={onAddBtnClick}>
            Add
          </button>
        </div>

        <div className="paginationContainer">
          <div className="searchContainer">
            <Input
              value={search}
              onChange={onSearch}
              className="searchInp"
              placeholder="Search"
            />
          </div>
          <div className="pagination_limit">
            <span>Posts per page:</span>
            {POSTS_LIMIT_TABS.map((tab) => {
              return (
                <button
                  key={tab.id}
                  className={classNames("limitBtn", {
                    ["activeLimitBtn"]: tab.id === activeLimitTab,
                  })}
                  onClick={() => onLimitChange(tab.value)}
                >
                  {tab.tabName}
                </button>
              );
            })}
          </div>
          <div className="selectContainer">
            <span>Sort by:</span>
            <select className="select" id="selector" onChange={onChangeSelect}>
              <option value={"date"}>Date</option>
              <option value={"title"}>Title</option>
              <option value={"text"}>Text</option>
              <option value={"lesson_num"}>Lesson</option>
            </select>
          </div>
        </div>

        <div className="postsHeaderTabs">
          {POSTS_TABS.map((tab) => {
            return (
              <button
                key={tab.id}
                className={classNames(`tab ${tab.className}`, {
                  ["activeTab"]: tab.id === activeTab,
                })}
                onClick={() => onTabClick(`${tab.id}`)}
              >
                {tab.tabName}
              </button>
            );
          })}
        </div>
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
      {allPostsLoading ? (
        <Lottie options={defaultOptions} height={400} width={400} />
      ) : cardsList.length > 0 ? (
        <CardList data={cardsList} setModalActive={setModalActive} />
      ) : (
        <EmptyState />
      )}
      <Pagination
        pageNum={page}
        pagesCount={pagesCount}
        onPrevClick={onPrevClick}
        onNextClick={onNextClick}
      />
    </div>
  );
};

export default Posts;
