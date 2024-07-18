import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "../utils/mock";
import styled from "styled-components";

const Content = styled.div`
  padding: 20px 0;
  text-align: center;
  img {
    width: 60%;
    margin: 20px 0;
  }
  h3,
  h4 {
    padding: 10px 0;
  }
  .none {
    text-align: start;
  }
`;

const InsectID = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();

  const res = data.find((e) => e.id == id);

  return (
    <div className="root-container">
      <Content>
        <div className="title">{res.title}</div>
        <img src={res.img} alt="" />
        <div
          className="none"
          dangerouslySetInnerHTML={{ __html: res.desc }}
        ></div>
      </Content>
    </div>
  );
};

export default InsectID;
