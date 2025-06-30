import { useEffect } from "react";
import Showcase from "../components/Showcase";
import About from "../components/About";
import Comments from "../components/Comments";
import Insect from "../components/Insect";
import { useScrollContext } from "../context/ScrollContext";
import { useScroll } from "../hooks/useScroll";
import Services from "../components/Services";
import { Helmet } from "react-helmet";

const Home = () => {
  const { scroll, commentRef, aboutRef, serviceRef, insectRef } =
    useScrollContext();

  const obj = {
    comment: commentRef,
    about: aboutRef,
    service: serviceRef,
    insect: insectRef,
  };

  useEffect(() => {
    useScroll(obj[scroll]);
  }, [scroll]);

  useEffect(() => {
    if (window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-16648129567/1qmYCMSkisQZEJ-YuYI-",
      });
    }
  }, []);

  return (
    <div>
      <Helmet>
        <title>Дезинфекция в Ташкенте</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="google-site-verification"
          content="jRItGPtkX6hB9uBkC5cqgX57Ps5xsZq3SC6FJi7dkSY"
        />
        <meta
          name="description"
          content="Услуги дезинфекции помещений в Ташкенте, дезинсекция от тараканов и клопов. Вызов санитарной службы для обработки квартир и нежилых помещений, круглосуточный сервис дезинфекции, дезинфекции, дератизации и дезодарации."
        />

        <meta
          name="keywords"
          content="Дезинфекция в Ташкенте, профессиональная дезинфекция, уничтожение тараканов Ташкент, уничтожение клопов Ташкент, уничтожение комаров, дезинсекция в Ташкенте, дератизация в Ташкенте, дезодорация помещений, санитарная обработка, средство от тараканов, средство от клопов, обработка от насекомых, уничтожение грызунов, крысы, Bioclean Ташкент, услуги дезинфекции, борьба с вредителями, санитарная служба Ташкент, дезинфекционные услуги, уничтожение насекомых, дезинфицирующие средства, антисанитария Ташкент, санитарная обработка помещений"
        />

        <meta name="author" content="dezex" />
        <link rel="canonical" href="https://www.dezex.uz" />

        {/* Open Graph */}
        <meta property="og:title" content="dezex" />
        <meta
          property="og:description"
          content="Услуги дезинфекции помещений в Ташкенте, дезинсекция от тараканов и клопов. Вызов санитарной службы для обработки квартир и нежилых помещений, круглосуточный сервис дезинфекции, дезинфекции, дератизации и дезодарации."
        />
        <meta
          property="og:image"
          content="https://www.dezex.uz/android-chrome-192x192.png"
        />
        <meta property="og:url" content="https://www.dezex.uz" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dezex Uz" />
        <meta
          name="twitter:description"
          content="Услуги дезинфекции помещений в Ташкенте, дезинсекция от тараканов и клопов. Вызов санитарной службы для обработки квартир и нежилых помещений, круглосуточный сервис дезинфекции, дезинфекции, дератизации и дезодарации!"
        />
        <meta
          name="twitter:image"
          content="https://www.dezex.uz/android-chrome-192x192.png"
        />

        {/* Tags */}
        <meta
          property="article:tag"
          content="Дезинфекция в Ташкенте, Дезинсекция в Ташкенте, Дератизация в Ташкенте, дезинфицирующий средство, санитарный обработка"
        />
      </Helmet>

      <Showcase />
      <About />
      <Services />
      {/* <Video /> */}
      <Comments />
      <Insect />
    </div>
  );
};

export default Home;
