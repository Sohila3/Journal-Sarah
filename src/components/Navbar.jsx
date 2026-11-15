import { useState } from "react";
import { useLang } from "../context/LangContext.jsx";
import { useCart } from "../context/CartContext.jsx";
import logo from "../assets/Logo.jpg";

const links = [
  ["nav.home", "#home"],
  ["nav.shop", "#shop"],
  ["nav.about", "#about"],
  ["nav.contact", "#contact"],
];

export default function Navbar() {
  const { t, lang, toggle } = useLang();
  const { count, setOpen } = useCart();
  const [menu, setMenu] = useState(false);

  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#home" className="brand" onClick={() => setMenu(false)}>
          <img
            src={logo}
            alt="Sarah Journal | جرنال ساره"
            className="brand__logo"
            width="44"
            height="44"
          />
          <span className="brand__text">
            <span className="brand__en">{t("brand.en")}</span>
            <span className="brand__sep">|</span>
            <span className="brand__ar">{t("brand.ar")}</span>
          </span>
        </a>

        <nav className={`nav__links ${menu ? "is-open" : ""}`} aria-label="Main">
          {links.map(([key, href]) => (
            <a key={key} href={href} onClick={() => setMenu(false)}>
              {t(key)}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button className="lang" onClick={toggle} aria-label="Switch language">
            {lang === "ar" ? "EN" : "AR"}
          </button>
          <button className="icon-btn" onClick={() => setOpen(true)} aria-label={t("nav.cart")}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M5 8h14l-1 12H6L5 8z" />
              <path d="M9 8V6a3 3 0 0 1 6 0v2" />
            </svg>
            {count > 0 && <span className="badge">{count}</span>}
          </button>
          <button
            className="icon-btn nav__burger"
            onClick={() => setMenu((m) => !m)}
            aria-label={t("nav.menu")}
            aria-expanded={menu}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
              {menu ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}