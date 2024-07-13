import React, { useEffect } from "react";
import Showcase from "../components/Showcase";
import About from "../components/About";
import Video from "../components/Video";
import Comments from "../components/Comments";
import Insect from "../components/Insect";
import { useScrollContext } from "../context/ScrollContext";
import { useScroll } from "../hooks/useScroll";
import Services from "../components/Services";

const Home = () => {
  const { scroll, commentRef, aboutRef, serviceRef, insectRef } =
    useScrollContext();

  const obj = {
    comment: commentRef,
    about: aboutRef,
    service: serviceRef,
    insect: insectRef,
  };

  useEffect(() => {
    useScroll(obj[scroll]);
  }, [scroll]);

  return (
    <div>
      <Showcase />
      <About />
      <Services />
      {/* <Video /> */}
      <Comments />
      <Insect />
    </div>
  );
};

export default Home;
