import { useEffect } from "react";
import { SITE_URL } from "../data/seo.js";

// لو النص شكله مفتاح ترجمة (زي seo.title) مانكتبوش في العنوان
const looksLikeKey = (s) => !s || /^[a-z0-9_]+(\.[a-z0-9_]+)+$/i.test(String(s).trim());

// بيحدّث العنوان والوصف والـ canonical لكل صفحة
export default function usePageSeo({ title, description, path = "/" }) {
  useEffect(() => {
    if (looksLikeKey(title)) return;
    document.title = title;

    const desc = document.querySelector('meta[name="description"]');
    if (desc && !looksLikeKey(description)) desc.setAttribute("content", description);

    let canon = document.querySelector('link[rel="canonical"]');
    if (!canon) {
      canon = document.createElement("link");
      canon.setAttribute("rel", "canonical");
      document.head.appendChild(canon);
    }
    canon.setAttribute("href", SITE_URL + path);
  }, [title, description, path]);
}