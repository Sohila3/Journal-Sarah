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

  // Switch direction + language for the entire document
  // (العنوان والوصف بيتحدّثوا من كل صفحة عن طريق usePageSeo)
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    try {
      localStorage.setItem("sj-lang", lang);
    } catch {}
  }, [lang]);

  // لو المفتاح ناقص في اللغة الحالية بنجيبه من الإنجليزي، ولو ناقص فيها كمان بنعرضه كما هو
  const t = useCallback(
    (key) => {
      const value = translations[lang]?.[key] ?? translations.en?.[key];
      if (value === undefined && import.meta.env.DEV) {
        console.warn(`[i18n] Missing translation key: "${key}"`);
      }
      return value ?? key;
    },
    [lang]
  );
  const toggle = () => setLang((l) => (l === "ar" ? "en" : "ar"));

  return (
    <LangContext.Provider value={{ lang, t, toggle, isRTL: lang === "ar" }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);