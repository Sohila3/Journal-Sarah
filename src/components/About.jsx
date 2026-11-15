import { useLang } from "../context/LangContext.jsx";

export default function About() {
  const { t } = useLang();
  return (
    <section id="about" className="section about">
      <div className="container about__inner">
        <p className="eyebrow">{t("about.eyebrow")}</p>
        <h2>{t("about.title")}</h2>
        <p>{t("about.p1")}</p>
        <p>{t("about.p2")}</p>
      </div>
    </section>
  );
}