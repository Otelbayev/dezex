import React from "react";
import { Content } from "./style";
import one from "../../assets/garant.png";
import two from "../../assets/team.jpg";
import three from "../../assets/3.jpg";

const About = () => {
  return (
    <div className="root-container">
      <Content>
        <div className="title"></div>
        <div className="card">
          <div className="card__item">
            <img src={one} alt="" />
            <div className="card__item__title">ГАРАНТИЯ КАЧЕСТВА</div>
            <div className="card__item__desc">
              Мы предоставляем год гарантии на все наши услуги. Будьте уверены -
              если мы обработали помещение оно будет таким еще долгое время.
            </div>
          </div>
          <div className="card__item">
            <img src={two} alt="" />
            <div className="card__item__title">КОМАНДА ПРОФЕССИОНАЛОВ</div>
            <div className="card__item__desc">
              Все наши сотрудники обучены и прекрасно знают свое дело. Каждый
              год они проходят курсы повышения квалификации и делают обработку
              на высшем уровне.
            </div>
          </div>
          <div className="card__item">
            <img src={three} alt="" />
            <div className="card__item__title">ТОЛЬКО БЕЗВРЕДНЫЕ ПРЕПАРАТЫ</div>
            <div className="card__item__desc">
              В нашей работе мы используем только проверенные средства обработки
              со всеми сертификатами качества и безопасности для окружающих.
            </div>
          </div>
        </div>
      </Content>
    </div>
  );
};

export default About;
