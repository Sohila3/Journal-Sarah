import { Link } from "react-router-dom";
import { useLang } from "../context/LangContext.jsx";
import ArtImage from "./ArtImage.jsx";
import categories from "../data/categories.js";

// الكروت بتتكرر عشان الشريط يغطي الشاشات العريضة من غير فراغ
const REPEAT = 2;

export default function Categories() {
  const { t, isRTL } = useLang();

  const group = (hidden) => (
    <div className="showcase__group" aria-hidden={hidden || undefined}>
      {Array.from({ length: REPEAT }).map((_, r) =>
        categories.map((c) => {
          const clone = hidden || r > 0;
          return (
            <Link
              key={`${r}-${c.id}`}
              to={`/category/${c.id}`}
              className="cat"
              dir={isRTL ? "rtl" : "ltr"}
              tabIndex={clone ? -1 : undefined}
              aria-hidden={clone || undefined}
            >
              <ArtImage
                kind={c.id}
                tone={c.tone}
                src={c.image || undefined}
                ratio="3 / 4"
                alt={clone ? "" : t(c.key)}
              />
              <h3>{t(c.key)}</h3>
              <span className="link">
                {t("cat.link")} <span className="arrow">→</span>
              </span>
            </Link>
          );
        })
      )}
    </div>
  );

  return (
    <section id="shop" className="section">
      <div className="container">
        <header className="section__head">
          <p className="eyebrow">{t("cat.eyebrow")}</p>
          <h2>{t("cat.title")}</h2>
        </header>
      </div>

      <div className="showcase" dir="ltr">
        <div className={`showcase__track ${isRTL ? "is-rtl" : ""}`}>
          {group(false)}
          {group(true)}
        </div>
      </div>
    </section>
  );
}