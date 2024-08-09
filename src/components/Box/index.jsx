import React, { useState } from "react";
import { Container } from "./style";

const Box = ({ title, desc, mode, width }) => {
  const [phone, setPhone] = useState("");

  // https://api.telegram.org/bot6917338241:AAHWudXXGskysZBSUMhQ5Cvep2FMrk1qdCE/getUpdates

  async function sentToBot(botToken, chatId) {
    const message = ` \n📫⏳ Company Dezex \n\n☎📞 Phone: ${phone
      .split(" ")
      .join("")
      .split("-")
      .join("")} \n `;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const data = {
      chat_id: chatId,
      text: message,
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!phone) {
      alert("Неправильный номер телефона.");
      return;
    }
    try {
      const res1 = await sentToBot(
        "6917338241:AAHWudXXGskysZBSUMhQ5Cvep2FMrk1qdCE",
        "5942455501"
      );
      // const res2 = await sentToBot(
      //   "7271486951:AAEOY1KwrGDJ2DyXw0JOQHsOPIjq8tydR68",
      //   "5942455501"
      // );
      if (res1.ok) {
        alert("Сообщение отправлено.");
        setPhone("");
      }
    } catch (err) {
      alert("Error sending message.");
    }
  };

  return (
    <Container data-aos="zoom-in" $mode={mode} $width={width}>
      <div className="box">
        <div className="box__title">{title}</div>
        {desc && <div className="box__desc">{desc}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="90-037-55-77"
          />
          <button style={{ background: "coral" }} type="submit">
            <a>
              <span>Отправить</span>
            </a>
          </button>
        </form>
        {/* <button className="phone">
          <a href="tel:+998900375577">
            <i className="fa-solid fa-phone"></i> <span>Позвонить</span>
          </a>
        </button> */}
        {/*<button className="tel">
          <a href="https://t.me/asadbek5577">
            <i className="fa-brands fa-telegram"></i> <span>Написать</span>
          </a>
        </button> */}
      </div>
    </Container>
  );
};

export default Box;
