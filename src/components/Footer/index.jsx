import React from "react";
import { Container } from "./style";
import { useScrollContext } from "../../context/ScrollContext";

const Footer = () => {
  const { contactRef } = useScrollContext();
  return (
    <Container ref={contactRef}>
      <div className="root-container">
        <div className="content">
          <div className="contact">
            <div className="contact__item" data-aos={"zoom-in"}>
              <i className="fa-solid fa-phone"></i>
              <div>
                <div className="contact__item__label">Телефон</div>
                <a className="contact__item__tel" href="tel:+998900375577">
                  90 037 55 77
                </a>
              </div>
            </div>
            <div className="contact__item" data-aos={"zoom-in"}>
              <i className="fa-solid fa-phone"></i>
              <div>
                <div className="contact__item__label">Телефон</div>
                <a className="contact__item__tel" href="tel:+998940375577">
                  94 037 55 77
                </a>
              </div>
            </div>
            <div className="contact__item" data-aos={"zoom-in"}>
              <i className="fa-solid fa-clock"></i>
              <div>
                <div className="contact__item__label">Время работы</div>
                <div className="contact__item__tel">Пн-Вс: 24 / 7</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
