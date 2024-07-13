import React from "react";
import { Container } from "./style";

const ServiceBox = ({ bg, title, desc, onClick }) => {
  return (
    <Container $bg={bg}>
      <div className="service-title">{title || "Дезинфекция"}</div>
      <div className="service-content">
        <div className="service-desc">
          {desc ||
            "Дезинфекция помещений после смерти человека, а также от бактерий, микробов, плесени, грибка, коронавируса."}
        </div>
        <button onClick={onClick}>Заказать услугу</button>
      </div>
    </Container>
  );
};

export default ServiceBox;
