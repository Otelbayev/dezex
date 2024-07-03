import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import call from "../assets/call.gif";

const scaleAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;

const Root = styled.div`
  position: relative;
  .slide-in {
    position: fixed;
    z-index: 99;
    top: 80vh;
    right: 40px;
    animation: ${scaleAnimation} 0.5 ease-in-out infinite;
  }
`;

const Universal = () => {
  return (
    <Root>
      <Header />
      <Outlet />
      {/* <Footer /> */}
      <div className="slide-in">
        <a href="tel:+998935960246">
          <img
            style={{
              width: "70px",
              height: "70px",
            }}
            src={call}
            alt=""
          />
        </a>
      </div>
    </Root>
  );
};

export default Universal;
