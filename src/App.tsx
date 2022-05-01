import React, { useState } from "react";
import "./App.css";
import PageHeader from "./components/PageHeader";
import Template from "./pages/Template";
import Authorization from "./pages/Authorization";
import Confirmation from "./pages/Confirmation";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import Information from "./pages/Information";
import Router from "./pages/Router";

import classNames from "classnames";
import { ThemeModeProvider } from "./context/ThemeModeProvider";
import { Theme } from "./context/themeModeContext";

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
    text: "Sit amet consectetur lorem ipsum dolor adipisicing elit. Eligendi, dolorum. Eligendi, dolorum.",
    date: "2022-05-07",
    lesson_num: 5,
    title: "The Voyager's Courage",
    author: 5,
  },
];
const MOCK_INFO = [
  [
    "Aliquam dapibus urna convallis molestie iaculis. Quisque congue quam auctor libero bibendum, sit amet convallis orci pharetra. Mauris egestas nec ante ac pulvinar. Proin porttitor viverra erat. Sed vestibulum elit a orci facilisis, sed mollis nibh commodo. In ut libero vel nulla blandit faucibus. Proin placerat porttitor nisl.",
    "Maecenas ut justo scelerisque, consequat turpis ultrices, semper elit. Pellentesque hendrerit eros non massa mollis posuere. Duis non nibh purus. Donec dapibus elit odio, id pretium lacus interdum ac. Morbi ultricies purus mi, ut sagittis lectus suscipit eget. Cras suscipit lacus sed dolor sagittis, posuere malesuada risus pretium.",
    "Sed eget euismod diam. Etiam congue neque in faucibus varius. Suspendisse sagittis sapien lectus, nec aliquet enim aliquam sed. Mauris a lacinia tortor. Vivamus euismod mollis dui eget sagittis. Donec convallis turpis in mi placerat, eu varius dui placerat. Sed porta purus eu euismod imperdiet.",
  ],
  [
    "Nullam cursus aliquam justo, vitae lacinia felis. Nam eget massa congue, cursus felis at, ornare mauris. Aliquam tristique, mauris ac vehicula sodales, quam ante dictum mauris, et vestibulum orci erat quis neque. Etiam ac venenatis nisl. Fusce eleifend eros vel viverra luctus. Suspendisse et viverra felis. Ut pharetra leo nisl, eget volutpat dolor varius eu.",
    "Aliquam non auctor orci, sit amet commodo dui. Pellentesque ornare eros vel lacus ultrices sagittis. Donec sollicitudin urna et dui molestie, id congue risus consectetur. Praesent vestibulum, lacus at semper sagittis, ante nisi tempor massa, ac dictum neque est sodales tellus. Nulla et tortor eu sem porttitor iaculis. Vestibulum venenatis sem ut sodales lacinia. Sed eleifend ipsum et quam feugiat, vel tristique nulla imperdiet. Suspendisse lacinia quis ex at interdum. Phasellus vel justo gravida, placerat nibh a, scelerisque mauris.",
    "Donec euismod ultrices lorem, et euismod risus porttitor a. Vivamus cursus nibh massa, in aliquet nisi vulputate vitae. Nulla libero velit, ultricies in tristique id, auctor a quam. Etiam vitae viverra velit. Integer vitae augue ex. Suspendisse varius turpis et metus rutrum, non tempus libero fermentum. Aliquam ultrices hendrerit tortor ac egestas. Suspendisse quis commodo ex. Mauris efficitur nisl lacus, id tristique felis blandit et. Etiam a elementum erat. Duis posuere bibendum ullamcorper. Integer vel odio varius, convallis diam at, eleifend ante.",
  ],
  [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  ],
];

const App = () => {
  const [theme, setTheme] = useState(Theme.Light);

  const onChangeTheme = (value: Theme) => {
    setTheme(value);
  };
  const isLightTheme = theme === Theme.Light;

  return (
    <ThemeModeProvider theme={theme} onChangeTheme={onChangeTheme}>
      <div
        className={classNames("App", {
          ["AppDark"]: !isLightTheme,
        })}
      >
        <Router />
      </div>
    </ThemeModeProvider>
  );
};

export default App;
