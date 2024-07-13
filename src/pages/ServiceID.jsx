import React, { useEffect } from "react";
import Showcase from "../components/Showcase";
import { service } from "../utils/mock";
import { useParams } from "react-router-dom";
import Header from "./../components/Header/index";
import { Root } from "../components/Universal";

const ServiceID = () => {
  const { id } = useParams();
  const data = service.find((e) => e.id == id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Root>
      <Header />
      <Showcase data={data} />
      <div className="slide-in">
        <button className="phone">
          <a href="tel:+998940375577">
            <i className="fa-solid fa-phone"></i> <span>Позвонить</span>
          </a>
        </button>
        <button className="tel">
          <a href="https://t.me/asadbek5577">
            <i className="fa-brands fa-telegram"></i> <span>Написать</span>
          </a>
        </button>
      </div>
    </Root>
  );
};

export default ServiceID;
