import { useLang } from "../context/LangContext.jsx";
import usePageSeo from "../hooks/usePageSeo.js";
import { HOME_TITLE, HOME_DESCRIPTION } from "../data/seo.js";
import Hero from "../components/Hero.jsx";
import Categories from "../components/Categories.jsx";
import About from "../components/About.jsx";
import Workshops from "../components/Workshops.jsx";

export default function Home() {
  const { lang } = useLang();
  usePageSeo({
    title: HOME_TITLE,
    description: HOME_DESCRIPTION[lang] ?? HOME_DESCRIPTION.en,
    path: "/",
  });

  return (
    <>
      <Hero />
      <Categories />
      <About />
      <Workshops />
    </>
  );
}