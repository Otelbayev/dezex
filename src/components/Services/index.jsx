import React from "react";
import { Container } from "./style";
import ServiceBox from "../ServiceBox";
import { service } from "../../utils/mock";
import { useScrollContext } from "./../../context/ScrollContext";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const { serviceRef } = useScrollContext();
  const navigate = useNavigate();

  return (
    <Container>
      <div className="root-container">
        <div className="root-wrapper">
          <div className="title" ref={serviceRef}>
            Услуги
          </div>
          <div className="content-s">
            {service.map((e) => (
              <ServiceBox
                onClick={() => navigate(`service/${e.id}`)}
                title={e.title}
                desc={e.desc}
                bg={e.img}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Services;
