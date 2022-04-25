import React, { useState } from "react";
import "./App.css";

import Card from "./components/Card";
import CardList from "./components/CardList";
import Confirmation from "./pages/Confirmation";
import Authorization from "./pages/Authorization";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import Template from "./pages/Template";
import PageHeader from "./components/PageHeader";

const MOCK_DATA = [
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
];

function App() {
  return (
    <div className="App">
      <PageHeader />
      {/* <Template /> */}
      {/* <CardList data={MOCK_DATA} /> */}
      {/* <Posts data={MOCK_DATA} /> */}
      {/* <Post data={MOCK_DATA[3]} /> */}
      <Authorization />
      {/* <Confirmation /> */}
    </div>
  );
}

export default App;
