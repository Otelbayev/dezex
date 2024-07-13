import React from "react";
import { Container } from "./style";
import Box from "../Box";

const Showcase = ({ data }) => {
  return (
    <Container $bg={data?.img}>
      <div className="root-container">
        <div className="showcase">
          <div className="showcase__left">
            <h1 className="showcase__left__title" data-aos="zoom-in">
              {data?.title || "Профессиональная дезинфекция в Ташкенте!"}
            </h1>
            <div className="showcase__left__mintitle" data-aos="zoom-in">
              {data?.desc ||
                "Официальная служба дезинфекции дезинсекции в г.ташкент! Мы гарантируем все наши услуги!"}
            </div>
          </div>
          <div className="showcase__right">
            <Box
              title="Оставить заявку"
              desc="Оставьте онлайн-заявку и получите скидку 10%"
              mode="dark"
              width="100%"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Showcase;
