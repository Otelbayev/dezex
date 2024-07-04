import React from "react";
import { Content } from "./style";
import one from "../../assets/garant.png";
import two from "../../assets/team.png";
import three from "../../assets/3.png";
import { useScrollContext } from "./../../context/ScrollContext";

const About = () => {
  const { aboutRef } = useScrollContext();
  return (
    <div className="root-container">
      <Content>
        <div className="title" ref={aboutRef} data-aos="zoom-in">
          О НАС
        </div>
        <div className="card">
          <div className="card__item" data-aos="fade-up">
            <img src={one} alt="" />
            <div className="card__item__title">ГАРАНТИЯ КАЧЕСТВА</div>
            <div className="card__item__desc">
              Мы предоставляем год гарантии на все наши услуги. Будьте уверены -
              если мы обработали помещение оно будет таким еще долгое время.
            </div>
          </div>
          <div className="card__item" data-aos="fade-up">
            <img src={two} alt="" />
            <div className="card__item__title">КОМАНДА ПРОФЕССИОНАЛОВ</div>
            <div className="card__item__desc">
              Все наши сотрудники обучены и прекрасно знают свое дело. Каждый
              год они проходят курсы повышения квалификации и делают обработку
              на высшем уровне.
            </div>
          </div>
          <div className="card__item" data-aos="fade-up">
            <img src={three} alt="" />
            <div className="card__item__title">ТОЛЬКО БЕЗВРЕДНЫЕ ПРЕПАРАТЫ</div>
            <div className="card__item__desc">
              В нашей работе мы используем только проверенные средства обработки
              со всеми сертификатами качества и безопасности для окружающих.
            </div>
          </div>
        </div>
        <div className="title" data-aos="zoom-in">
          Видео
        </div>

        <div className="video">
          <div className="video__item" data-aos="fade-up">
            <iframe
              style={{ width: "100%" }}
              height="315"
              src="https://www.youtube.com/embed/gn4xMUvtfsY?si=20XF_ShTQDqKUrGp"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="video__item" data-aos="fade-up">
            <iframe
              style={{ width: "100%" }}
              height="315"
              src="https://www.youtube.com/embed/UpiY5FDsGwQ?si=hyttGuG7yAZKCn3x"
              title="YouTube video player"
            ></iframe>
          </div>
          <div className="video__item" data-aos="fade-up">
            <iframe
              style={{ width: "100%" }}
              height="315"
              src="https://www.youtube.com/embed/SdJkwose_T8?si=EyPI0UnNe26ik6Z-"
              title="YouTube video player"
            ></iframe>
          </div>
        </div>
      </Content>
    </div>
  );
};

export default About;
