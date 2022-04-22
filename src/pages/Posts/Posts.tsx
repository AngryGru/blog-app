import React from "react";
import "./Posts.css";
import CardList from "../../components/CardList";

const Posts = (props: any) => {
  return (
    <div className="postsPage">
      <div className="postsHeader">
        <div className="postsMenu">Username</div>
        <div className="postsTitle">
          <p>My posts</p>
          <button className="addBtn">Add</button>
        </div>
      </div>
      <CardList data={props.data} />
    </div>
  );
};

export default Posts;
