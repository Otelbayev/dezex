import React from "react";
import { data } from "../../utils/mock";
import { Container, Sale } from "./style";
import { useNavigate } from "react-router-dom";
import { useScrollContext } from "../../context/ScrollContext";

const Service = () => {
  const navigate = useNavigate();
  const { serviceRef } = useScrollContext();
  return (
    <div>
      <Container>
        <div className="root-container">
          <div className="title" ref={serviceRef}>
            Услуги
          </div>
          <div className="content">
            {data.map((e) => (
              <div
                className="cart"
                data-aos="fade-up"
                onClick={() => navigate(`services/${e.id}`)}
                key={e.id}
              >
                <img src={e.img} alt="" />
                <div className="cart__bottom">
                  <div className="cart__title">{e.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <Sale>
        <div className="root-container">
          <div className="root-wrapper">
            <div className="content">
              <div className="content__left">
                <div className="content__left__title">
                  Закажите бесплатную консультацию прямо сейчас!
                </div>
                <div className="content__left__line"></div>
                <div className="content__left__desc">
                  Оставьте заявку через сайт, и получите{" "}
                  <span className="per">10%</span> скидку на все наши услуги
                </div>
              </div>
              <div className="content__right">
                <div className="content__right__box">
                  <div className="content__right__box__title">
                    Оставить заявку
                  </div>
                  <button className="phone">
                    <a href="tel:+998900375577">
                      <i className="fa-solid fa-phone"></i>{" "}
                      <span>Позвонить</span>
                    </a>
                  </button>
                  <button className="tel">
                    <a href="https://t.me/asadbek5577">
                      <i className="fa-brands fa-telegram"></i>{" "}
                      <span>Написать</span>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Sale>
    </div>
  );
};

export default Service;
