import React, { useState } from "react";
import { Container } from "./style";

const Showcase = () => {
  return (
    <Container>
      <div className="root-container">
        <div className="showcase">
          <h1 className="showcase__title" data-aos="zoom-in">
            Профессиональная дезинфекция в Ташкенте!
          </h1>
          <div className="showcase__mintitle" data-aos="zoom-in">
            Официальная служба дезинфекции дезинсекции в г.ташкент! Мы
            гарантируем все наши услуги!
          </div>
          {/* <form>
            <label htmlFor="lab">ОСТАВЬТЕ СВОЙ НОМЕР ТЕЛЕФОНА</label>
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              name="lab"
              placeholder="93 596 02 46"
              required
            />
            <button>Отправить</button>
          </form> */}
        </div>
      </div>
    </Container>
  );
};

export default Showcase;
