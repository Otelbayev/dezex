import React from "react";
import { data } from "../../utils/mock";
import { Container, Sale } from "./style";
import { useNavigate } from "react-router-dom";
import { useScrollContext } from "../../context/ScrollContext";
import Box from "../Box";

const Insect = () => {
  const navigate = useNavigate();
  const { insectRef } = useScrollContext();
  return (
    <div>
      <Container>
        <div className="root-container">
          <div className="title" ref={insectRef}>
            Насекомые
          </div>
          <div className="content">
            {data.map((e) => (
              <div
                className="cart"
                data-aos="fade-up"
                onClick={() => navigate(`insect/${e.id}`)}
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
                <Box
                  title="Оставить заявку"
                  // desc="Оставьте онлайн-заявку и получите скидку 10%"
                  // mode="dark"
                  // width="400px"
                />
              </div>
            </div>
          </div>
        </div>
      </Sale>
    </div>
  );
};

export default Insect;
