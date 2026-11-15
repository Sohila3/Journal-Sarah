import { createContext, useContext, useEffect, useState, useCallback } from "react";
import translations from "../data/translations.js";

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("sj-lang") || "ar"; // change to "en" for English default
    } catch {
      return "ar";
    }
  });

  // Switch direction, language and SEO text for the entire document
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    document.title = translations[lang]["seo.title"];
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", translations[lang]["seo.description"]);

    try {
      localStorage.setItem("sj-lang", lang);
    } catch {}
  }, [lang]);

  const t = useCallback((key) => translations[lang][key] ?? key, [lang]);
  const toggle = () => setLang((l) => (l === "ar" ? "en" : "ar"));

  return (
    <LangContext.Provider value={{ lang, t, toggle, isRTL: lang === "ar" }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);