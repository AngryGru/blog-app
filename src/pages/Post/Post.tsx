import React from "react";
import "./Post.css";
import Card from "../../components/Card";
import { idText } from "typescript";

const Post = (props: any) => {
  return (
    <div className="postPage">
      <div className="postHeader">
        <div className="postMenu">Username</div>
        <div className="postTitle">Content title</div>
      </div>
      <Card
        key={props.data.id}
        image={props.data.image}
        title={props.data.title}
        text={props.data.text}
        date={props.data.date}
      />
    </div>
  );
};

export default Post;
