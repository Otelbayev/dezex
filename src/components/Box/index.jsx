import React from "react";
import { Container } from "./style";

const Box = ({ title, desc, mode, width }) => {
  return (
    <Container data-aos="zoom-in" $mode={mode} $width={width}>
      <div className="box">
        <div className="box__title">{title}</div>
        {desc && <div className="box__desc">{desc}</div>}
        <button className="phone">
          <a href="tel:+998900375577">
            <i className="fa-solid fa-phone"></i> <span>Позвонить</span>
          </a>
        </button>
        <button className="tel">
          <a href="https://t.me/asadbek5577">
            <i className="fa-brands fa-telegram"></i> <span>Написать</span>
          </a>
        </button>
      </div>
    </Container>
  );
};

export default Box;
