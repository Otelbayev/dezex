import React, { useState } from "react";
import { Root, Container, Wrapper } from "./style";
import logo from "../../assets/logo.jpg";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <Root>
      <Container>
        <div className="root-container">
          <div className="top" data-aos="fade-down">
            <div className="top__title">Звоните прямо сейчас!</div>
            <div className="top__phone">
              <i className="fa-solid fa-phone"></i>
              <a href="tel:+998935960246">(99) 860 09 69</a> |
              <a href="tel:+998935960246">(99) 860 09 69</a>
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
            <nav>
              <ul className="nav__list">
                <li onClick={() => setOpen(false)} className="nav__list__item">
                  <a href="#about">О нас</a>
                </li>
                <li onClick={() => setOpen(false)} className="nav__list__item">
                  <a href="#services">Услуги</a>
                </li>
                <li onClick={() => setOpen(false)} className="nav__list__item">
                  <a href="#reviews">Отзывы</a>
                </li>
                <li onClick={() => setOpen(false)} className="nav__list__item">
                  <a href="#contacts">Контакты</a>
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
