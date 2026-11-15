import { useLang } from "../context/LangContext.jsx";
import ArtImage from "./ArtImage.jsx";

const cats = [
  { id: "frames", key: "cat.frames", tone: 0 },
  { id: "watch", key: "cat.watch", tone: 1 },
  { id: "bookmarks", key: "cat.bookmarks", tone: 2 },
];

export default function Categories({ onSelect }) {
  const { t } = useLang();
  return (
    <section id="shop" className="section">
      <div className="container">
        <header className="section__head">
          <p className="eyebrow">{t("cat.eyebrow")}</p>
          <h2>{t("cat.title")}</h2>
        </header>
        <div className="cats">
          {cats.map((c) => (
            <a key={c.id} href="#shop" className="cat" onClick={() => onSelect?.(c.id)}>
              <ArtImage kind={c.id} tone={c.tone} ratio="3 / 4" alt={t(c.key)} />
              <h3>{t(c.key)}</h3>
              <span className="link">
                {t("cat.link")} <span className="arrow">→</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}