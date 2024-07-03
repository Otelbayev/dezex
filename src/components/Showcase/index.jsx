import React, { useState } from "react";
import { Container } from "./style";

const Showcase = () => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue("");
  };
  return (
    <Container>
      <div className="root-container">
        <div className="showcase">
          <h1 className="showcase__title" data-aos="zoom-in">
            Профессиональная дезинфекция в Ташкенте!
          </h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="lab">ОСТАВЬТЕ СВОЙ НОМЕР ТЕЛЕФОНА</label>
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              name="lab"
              placeholder="93 596 02 46"
              required
            />
            <button>Отправить</button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Showcase;
