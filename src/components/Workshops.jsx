import { useState, useRef } from "react";
import { useLang } from "../context/LangContext.jsx";
import ArtImage from "./ArtImage.jsx";
import Social from "./Social.jsx";
import workshops from "../data/workshops.js";
import { WHATSAPP_NUMBER, WHATSAPP_CHANNEL_URL } from "../config.js";

export default function Workshops() {
  const { t, lang } = useLang();
  const [selected, setSelected] = useState(workshops[0]?.id ?? "");
  const [form, setForm] = useState({ name: "", phone: "", people: "1", note: "" });
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const formRef = useRef(null);

  const set = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setError("");
    setSent(false);
  };

  const choose = (id) => {
    setSelected(id);
    setSent(false);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const submit = (e) => {
    e.preventDefault();
    const w = workshops.find((x) => x.id === selected);
    if (!w) return;
    if (!form.name.trim()) return setError(t("ws.err.name"));
    if (form.phone.replace(/\D/g, "").length < 10) return setError(t("ws.err.phone"));

    const lines = [
      t("ws.msg"),
      `${t("ws.f.workshop")}: ${w.title[lang]}`,
      `${t("ws.f.name")}: ${form.name.trim()}`,
      `${t("ws.f.phone")}: ${form.phone.trim()}`,
      `${t("ws.f.people")}: ${form.people}`,
    ];
    if (form.note.trim()) lines.push(`${t("ws.f.note")}: ${form.note.trim()}`);

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener"
    );
    setSent(true);
  };

  return (
    <section id="workshops" className="section section--sand">
      <div className="container">
        <header className="section__head">
          <p className="eyebrow">{t("ws.eyebrow")}</p>
          <h2>{t("ws.title")}</h2>
          <p className="ws-sub">{t("ws.sub")}</p>
        </header>

        <div className="ws-grid">
          {workshops.map((w) => {
            const isSel = selected === w.id;
            const date = w.date?.[lang];
            const desc = w.desc?.[lang];
            return (
              <article key={w.id} className={`ws ${isSel ? "is-selected" : ""}`}>
                <ArtImage
                  kind={w.kind}
                  tone={w.tone}
                  src={w.image || undefined}
                  alt={w.title[lang]}
                  ratio="4 / 3"
                />
                <h3>{w.title[lang]}</h3>
                {desc && <p className="ws__desc">{desc}</p>}
                {(date || w.price != null) && (
                  <ul className="ws__meta">
                    {date && <li>{date}</li>}
                    {w.price != null && (
                      <li>
                        {w.price} {t("currency")}
                      </li>
                    )}
                  </ul>
                )}
                <button type="button" className="btn btn--ghost" onClick={() => choose(w.id)}>
                  {isSel ? t("ws.selected") : t("ws.pick")}
                </button>
              </article>
            );
          })}
        </div>

        <form ref={formRef} className="ws-form" onSubmit={submit} noValidate>
          <span className="tape tape--a" aria-hidden="true" />
          <span className="tape tape--b" aria-hidden="true" />
          <h3>{t("ws.form.title")}</h3>

          <label>
            {t("ws.f.workshop")}
            <select value={selected} onChange={(e) => { setSelected(e.target.value); setSent(false); }}>
              {workshops.map((w) => (
                <option key={w.id} value={w.id}>
                  {w.title[lang]}
                </option>
              ))}
            </select>
          </label>

          <label>
            {t("ws.f.name")}
            <input type="text" value={form.name} onChange={set("name")} autoComplete="name" />
          </label>

          <div className="ws-form__row">
            <label>
              {t("ws.f.phone")}
              <input
                type="tel"
                inputMode="tel"
                dir="ltr"
                value={form.phone}
                onChange={set("phone")}
                autoComplete="tel"
              />
            </label>
            <label>
              {t("ws.f.people")}
              <input type="number" min="1" value={form.people} onChange={set("people")} />
            </label>
          </div>

          <label>
            {t("ws.f.note")}
            <textarea rows="3" value={form.note} onChange={set("note")} />
          </label>

          {error && <p className="ws-error" role="alert">{error}</p>}
          {sent && <p className="ws-ok" role="status">{t("ws.done")}</p>}

          <button type="submit" className="btn btn--block">
            {t("ws.submit")}
          </button>
        </form>

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