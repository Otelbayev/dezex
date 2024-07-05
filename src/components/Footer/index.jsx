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
                <div className="contact__item__tel">Пн-Вс: 7 / 24</div>
              </div>
            </div>
          </div>
          <div className="lists">
            <ul data-aos="fade-right">
              <div className="lists__title">Все услуги</div>
              <li>Дезинсекция в Ташкенте</li>
              <li>Уничтожение клопов в Ташкенте</li>
              <li>Уничтожение тараканов в Ташкенте</li>
              <li>Уничтожение блох в Ташкенте</li>
              <li>Уничтожение клещей в Ташкенте</li>
              <li>Травля мух и комаров в Ташкенте</li>
              <li>Дезинфекция в Ташкенте</li>
              <li>Дезинфекция вирусов, бактерий в Ташкенте</li>
              <li>Уничтожение грибков в Ташкенте</li>
              <li>Дератизация в Ташкенте и Узбекистане</li>
              <li>Уничтожение мышей в Ташкенте</li>
              <li>Уничтожение крыс в Ташкенте</li>
              <li>Дезодорация в Ташкенте</li>
              <li>Обработка от клопов</li>
              <li>Dezinfeksiya v Tashkente</li>
              <li>Профессиональная дезинфекция в Ташкенте</li>
              <li>Уничтожение скорпионов в Ташкенте</li>
              <li>Дезинфекция от клопов в Ташкенте</li>
            </ul>
            <ul data-aos="fade-left">
              <div className="lists__title">Услуги для:</div>
              <li>Дезинфекция домов и участков в Ташкенте</li>
              <li>Дезинфекция квартир в Ташкенте</li>
              <li>Дезинфекция организаций в Ташкенте</li>
              <li>Дезинфекция в школах и детских садах в Ташкенте</li>
              <li>Дезинфекция гостиниц, санаториев и хостелов в Ташкенте</li>
              <li>Дезинфекция дач в Ташкенте</li>
              <li>Дезинфекция офисов и компаний в Ташкенте</li>
              <li>Дезинфекция производств и складов в Ташкенте</li>
              <li>Дезинфекция ресторанов и кафе в Ташкенте</li>
            </ul>
          </div>
          <div className="copy">© Copyright 2018</div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
