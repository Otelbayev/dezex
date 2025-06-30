import React, { useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { Helmet } from "react-helmet";

const scaleAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;

export const Root = styled.div`
  overflow: hidden;
  position: relative;
  .slide-in {
    position: fixed;
    z-index: 99;
    bottom: 10px;
    right: 50%;
    transform: translateX(50%);
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 0 5px #fff;
    /* animation: ${scaleAnimation} 0.5 ease-in-out infinite; */
    button {
      padding: 10px;
      width: 220px;
      border-radius: 5px;
      border: none;
      i {
        font-size: 23px;
        color: #fff;
      }
      a {
        display: flex;
        color: #fff;
        align-items: center;
        justify-content: center;
        gap: 8px;
        text-decoration: none;
        span {
          font-size: 16px;
          font-weight: 700;
        }
      }
    }
    .phone {
      background-color: #00ff26cf;
    }
    .tel {
      background-color: #00a2ffcf;
    }
  }

  @media (max-width: 600px) {
    .slide-in {
      button {
        width: auto;
        padding: 8px 25px;
      }
    }
  }
`;

const Universal = () => {
  return (
    <Root>
      <Helmet>
        <title>Дезинфекция в Ташкенте</title>
        <meta
          name="description"
          content="Услуги дезинфекции помещений в Ташкенте, дезинсекция от тараканов и клопов. Вызов санитарной службы для обработки квартир и нежилых помещений, круглосуточный сервис дезинфекции, дезинфекции, дератизации и дезодарации."
        />
        <meta
          name="keywords"
          content="Дезинфекция в Ташкенте, профессиональная дезинфекция, уничтожение тараканов Ташкент, уничтожение клопов Ташкент, уничтожение комаров, дезинсекция в Ташкенте, дератизация в Ташкенте, дезодорация помещений, санитарная обработка, средство от тараканов, средство от клопов, обработка от насекомых, уничтожение грызунов, крысы, Bioclean Ташкент, услуги дезинфекции, борьба с вредителями, санитарная служба Ташкент, дезинфекционные услуги, уничтожение насекомых, дезинфицирующие средства, антисанитария Ташкент, санитарная обработка помещений"
        />
      </Helmet>
      <Header />
      <Outlet />
      <Footer />
      <div className="slide-in">
        <button className="phone">
          <a href="tel:+998940375577">
            <i className="fa-solid fa-phone"></i> <span>Позвонить</span>
          </a>
        </button>
        <button className="tel">
          <a href="https://t.me/dezexuzz">
            <i className="fa-brands fa-telegram"></i> <span>Написать</span>
          </a>
        </button>
      </div>
    </Root>
  );
};

export default Universal;
