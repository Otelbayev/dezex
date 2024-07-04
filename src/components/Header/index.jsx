import React, { useState } from "react";
import { Root, Container, Wrapper } from "./style";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { useScroll } from "../../hooks/useScroll";
import { useScrollContext } from "../../context/ScrollContext";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { contactRef, serviceRef, commentRef, aboutRef } = useScrollContext();

  return (
    <Root>
      <Container>
        <div className="root-container">
          <div className="top" data-aos="fade-down">
            <div className="top__title">Звоните прямо сейчас!</div>
            <div className="top__phone">
              <i className="fa-solid fa-phone"></i>
              <a href="tel:+998935960246">90 037 55 77</a> |
              <a href="tel:+998935960246">94 037 55 77</a>
            </div>
          </div>
        </div>
      </Container>
      <Wrapper open={open}>
        <div className="root-container">
          <div className="header">
            <div data-aos={"fade-right"} className="logo">
              <NavLink to="/">
                <img src={logo} alt="" />
                <span className="logo-title">softdez</span>
              </NavLink>
            </div>
            <nav data-aos={"fade-left"}>
              <ul className="nav__list">
                <li
                  onClick={() => {
                    setOpen(false);
                    useScroll(aboutRef);
                  }}
                  className="nav__list__item"
                >
                  <a>О нас</a>
                </li>
                <li
                  onClick={() => {
                    setOpen(false);
                    useScroll(serviceRef);
                  }}
                  className="nav__list__item"
                >
                  <a>Услуги</a>
                </li>
                <li
                  onClick={() => {
                    setOpen(false);
                    useScroll(commentRef);
                  }}
                  className="nav__list__item"
                >
                  <a>Отзывы</a>
                </li>
                <li
                  onClick={() => {
                    setOpen(false);
                    useScroll(contactRef);
                  }}
                  className="nav__list__item"
                >
                  <a>Контакты</a>
                </li>
              </ul>
            </nav>
            <div
              data-aos={"fade-left"}
              className="bars"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <i className="fa-solid fa-xmark"></i>
              ) : (
                <i className="fa-solid fa-bars"></i>
              )}
            </div>
          </div>
        </div>
      </Wrapper>
    </Root>
  );
};

export default Header;
