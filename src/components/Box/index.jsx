import { useState } from "react";
import { Container } from "./style";

const Box = ({ title, desc, mode, width }) => {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

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
  // AKfycbxUssMwAkIDsy_EdOYN7k6bbxgpydE7OuFphInITHWYiM6By02a0MxdxsdLiu-wG-r8mQ
  // https://script.google.com/macros/s/AKfycbxUssMwAkIDsy_EdOYN7k6bbxgpydE7OuFphInITHWYiM6By02a0MxdxsdLiu-wG-r8mQ/exec

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Oddiy telefon raqam validatsiyasi (raqamlar va kamida 7 belgidan iborat)
    const phoneRegex = /^[\d+()\s-]{7,}$/;
    if (!phoneRegex.test(phone)) {
      alert("Неправильный номер телефона.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxUssMwAkIDsy_EdOYN7k6bbxgpydE7OuFphInITHWYiM6By02a0MxdxsdLiu-wG-r8mQ/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phone: phone,
            date: new Date().toLocaleString(),
          }),
        }
      );

      const text = await response.text();
      console.log("Status:", response.status);
      console.log("Response:", text);

      if (response.ok) {
        alert("Сообщение отправлено.");
        setPhone("");
      } else {
        alert("Ошибка при отправке. Повторите попытку.");
      }
    } catch (err) {
      console.error("Xatolik:", err);
      alert("Ошибка при отправке запроса.");
    } finally {
      setLoading(false);
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
          <button
            disabled={loading}
            style={{
              background: "coral",
              opacity: loading ? 0.5 : 1,
              cursor: loading ? "wait" : "pointer",
            }}
            type="submit"
          >
            <a>
              <span>{loading ? "Отправка..." : "Отправить"}</span>
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
