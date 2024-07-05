import React from "react";
import { data } from "../../utils/mock";
import { Container } from "./style";
import { useNavigate } from "react-router-dom";
import { useScrollContext } from "../../context/ScrollContext";

const Service = () => {
  const navigate = useNavigate();
  const { serviceRef } = useScrollContext();
  return (
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
  );
};

export default Service;
