import { useLang } from "../context/LangContext.jsx";
import ArtImage from "./ArtImage.jsx";
import Social from "./Social.jsx";
import {
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  WHATSAPP_CHANNEL_URL,
} from "../config.js";

const tiles = [
  { kind: "frames", tone: 1 },
  { kind: "bookmarks", tone: 0 },
  { kind: "watch", tone: 2 },
  { kind: "scene", tone: 3 },
  { kind: "frames", tone: 2 },
  { kind: "watch", tone: 0 },
];

const altKey = {
  frames: "cat.frames",
  watch: "cat.watch",
  bookmarks: "cat.bookmarks",
  scene: "brand.en",
};

export default function Instagram() {
  const { t } = useLang();
  return (
    <section className="section">
      <div className="container">
        <header className="section__head">
          <p className="eyebrow">{t("ig.eyebrow")}</p>
          <h2>{t("ig.title")}</h2>
          <a className="link" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            {INSTAGRAM_HANDLE}
          </a>
        </header>

        <p className="ig-note">{t("ig.note")}</p>

        <div className="ig">
          {tiles.map((tile, i) => (
            <a key={i} href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram">
              <ArtImage kind={tile.kind} tone={tile.tone} ratio="1 / 1" alt={t(altKey[tile.kind])} />
            </a>
          ))}
        </div>

        <Social />

        <div className="ig-channel">
          <p>{t("ig.channelNote")}</p>
          <a className="btn" href={WHATSAPP_CHANNEL_URL} target="_blank" rel="noreferrer">
            {t("ig.channel")}
          </a>
        </div>
      </div>
    </section>
  );
}