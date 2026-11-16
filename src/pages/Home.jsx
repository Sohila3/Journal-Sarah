import { useLang } from "../context/LangContext.jsx";
import usePageSeo from "../hooks/usePageSeo.js";
import Hero from "../components/Hero.jsx";
import Categories from "../components/Categories.jsx";
import About from "../components/About.jsx";
import Workshops from "../components/Workshops.jsx";

export default function Home() {
  const { t } = useLang();
  usePageSeo({ title: t("seo.title"), description: t("seo.description"), path: "/" });

  return (
    <>
      <Hero />
      <Categories />
      <About />
      <Workshops />
    </>
  );
}