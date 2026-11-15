
import { useLang } from "../context/LangContext.jsx";
import ArtImage from "./ArtImage.jsx";

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="eyebrow">{t("hero.eyebrow")}</p>

          <h1>{t("hero.title")}</h1>

          <p className="lead">{t("hero.text")}</p>

          <a href="#shop" className="btn">
            {t("hero.cta")}
          </a>
        </div>

        <ArtImage
          kind="scene"
          tone={0}
          ratio="4 / 5"
          className="hero__img"
          alt="Sarah Journal elegant accessories and lifestyle collection"
        />
      </div>
    </section>
  );
}
