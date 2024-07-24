import React, { useState } from "react";
import { Container } from "./style";

const Box = ({ title, desc, mode, width }) => {
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!phone) {
      alert("Неправильный номер телефона.");
      return;
    }

    const botToken = "6917338241:AAHWudXXGskysZBSUMhQ5Cvep2FMrk1qdCE";
    const chatId = "5942455501";
    const message = `☎ Phone: ${phone.split(" ").join("").split("-").join("")}`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const data = {
      chat_id: chatId,
      text: message,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Сообщение успешно отправлено!");
        setPhone("");
      } else {
        alert("Не удалось отправить сообщение.");
      }
    } catch (error) {
      console.error("Error:", error);
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
