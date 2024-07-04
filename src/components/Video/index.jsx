import React from "react";
import { Content } from "../About/style";

const Video = () => {
  return (
    <div className="root-container">
      <Content>
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

export default Video;
