import React from "react";
import Showcase from "../components/Showcase";
import About from "../components/About";
import Video from "../components/Video";
import Comments from "../components/Comments";
import Service from "../components/Service";

const Home = () => {
  return (
    <div>
      <Showcase />
      <About />
      <Video />
      <Comments />
      <Service />
    </div>
  );
};

export default Home;
