import React from "react";
import Showcase from "../components/Showcase";
import About from "../components/About";
import Video from "../components/Video";
import Comments from "../components/Comments";

const Home = () => {
  return (
    <div>
      <Showcase />
      <About />
      <Video />
      <Comments />
    </div>
  );
};

export default Home;
