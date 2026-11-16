import { useLang } from "../context/LangContext.jsx";
import ArtImage from "./ArtImage.jsx";
import Ransom from "./Ransom.jsx";
import Daisy from "./Daisy.jsx";

// لما تجهزي صورة حقيقية: حطيها في فولدر public واكتبي مسارها هنا، مثال: "/hero.jpg"
const HERO_SRC = "";

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="home" className="hero">
      <span className="torn torn--green" aria-hidden="true" />
      <span className="torn torn--blush" aria-hidden="true" />

      <div className="container hero__grid">
        <div className="hero__text">
          {/* الـ H1 فيه اسم البراند + الشعار، عشان الهوية تبقى واضحة */}
          <h1 className="reveal" style={{ "--d": "0.5s" }}>
            <Ransom as="span" text={t("brand.en")} />
            <span className="hero__tag">{t("hero.title")}</span>
          </h1>

          <p className="lead reveal" style={{ "--d": "0.7s" }}>
            {t("hero.text")}
          </p>

          <a href="#shop" className="btn reveal" style={{ "--d": "0.9s" }}>
            {t("hero.cta")}
          </a>
        </div>

        <figure className="polaroid">
          <span className="tape tape--a" aria-hidden="true" />
          <span className="tape tape--b" aria-hidden="true" />

          <ArtImage
            kind="scene"
            tone={0}
            src={HERO_SRC || undefined}
            ratio="4 / 5"
            className="hero__img"
            alt="Sarah Journal carpet frames, watch accessories, bookmarks and stickers"
          />
          <figcaption className="note">{t("hero.note")}</figcaption>

          <svg className="doodle doodle--heart" viewBox="0 0 40 40" aria-hidden="true">
            <path
              pathLength="1"
              d="M20 33 C6 23 5 12 13 9 C17 8 20 11 20 14 C20 11 23 8 27 9 C35 12 34 23 20 33Z"
            />
          </svg>
          <svg className="doodle doodle--spark" viewBox="0 0 40 40" aria-hidden="true">
            <path pathLength="1" d="M20 4 L23 17 L36 20 L23 23 L20 36 L17 23 L4 20 L17 17Z" />
          </svg>
        </figure>
      </div>

      <Daisy className="daisy" />
    </section>
  );
}