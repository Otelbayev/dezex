import React, { useEffect } from "react";
import Showcase from "../components/Showcase";
import About from "../components/About";
import Video from "../components/Video";
import Comments from "../components/Comments";
import Service from "../components/Service";
import { useScrollContext } from "../context/ScrollContext";
import { useScroll } from "../hooks/useScroll";

const Home = () => {
  const { scroll, commentRef, aboutRef, serviceRef } = useScrollContext();

  const obj = {
    comment: commentRef,
    about: aboutRef,
    service: serviceRef,
  };

  useEffect(() => {
    useScroll(obj[scroll]);
  }, [scroll]);

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
