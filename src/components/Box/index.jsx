import { useState } from "react";
import { Container } from "./style";

const Box = ({ title, desc, mode, width }) => {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendToBot(botToken, chatId, phone) {
    const sanitizedPhone = phone.replace(/[\s\-]/g, "");
    const message = `📫⏳ Company Dezex\n\n☎📞 Phone: ${sanitizedPhone}`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    });

    return response.ok;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const phoneRegex = /^[\d\s()+-]{7,}$/;
    if (!phoneRegex.test(phone)) {
      alert("Неправильный номер телефона.");
      return;
    }

    setLoading(true);

    try {
      const botToken = "6917338241:AAHWudXXGskysZBSUMhQ5Cvep2FMrk1qdCE";
      const chatIds = ["5942455501", "5162180249"];

      const sendResults = await Promise.all(
        chatIds.map((chatId) => sendToBot(botToken, chatId, phone))
      );

      const allSuccess = sendResults.every((res) => res === true);

      if (allSuccess) {
        alert("Сообщение отправлено.");
        setPhone("");
      } else {
        alert("Некоторые сообщения не были доставлены.");
      }
    } catch (error) {
      console.error("Telegramga yuborishda xatolik:", error);
      alert("Ошибка при отправке сообщения.");
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
          <a href="https://t.me/dezexuzz">
            <i className="fa-brands fa-telegram"></i> <span>Написать</span>
          </a>
        </button> */}
      </div>
    </Container>
  );
};

export default Box;
