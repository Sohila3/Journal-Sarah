import { useLang } from "../context/LangContext.jsx";
import {
  INSTAGRAM_URL,
  FACEBOOK_URL,
  TIKTOK_URL,
  WHATSAPP_URL,
  WHATSAPP_CHANNEL_URL,
} from "../config.js";

export default function Footer() {
  const { t } = useLang();
  const external = { target: "_blank", rel: "noreferrer" };

  return (
    <footer id="contact" className="footer">
      <div className="container footer__grid">
        <div>
          <div className="brand brand--footer">
            <span className="brand__en">{t("brand.en")}</span>
            <span className="brand__sep">|</span>
            <span className="brand__ar">{t("brand.ar")}</span>
          </div>
          <p className="muted">{t("footer.tagline")}</p>
        </div>

        <div>
          <h4>{t("footer.links")}</h4>
          <a href="#home">{t("nav.home")}</a>
          <a href="#shop">{t("nav.shop")}</a>
          <a href="#about">{t("nav.about")}</a>
        </div>

        <div>
          <h4>{t("footer.contact")}</h4>
          <a href={INSTAGRAM_URL} {...external}>{t("footer.instagram")}</a>
          <a href={FACEBOOK_URL} {...external}>{t("footer.facebook")}</a>
          <a href={TIKTOK_URL} {...external}>{t("footer.tiktok")}</a>
          <a href={WHATSAPP_URL} {...external}>{t("footer.whatsapp")}</a>
          <a href={WHATSAPP_CHANNEL_URL} {...external}>{t("footer.channel")}</a>
        </div>
      </div>
      <div className="container footer__copy">
        © {new Date().getFullYear()} Sarah Journal | جرنال ساره. {t("footer.rights")}
      </div>
    </footer>
  );
}