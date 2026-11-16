import { useEffect } from "react";

const SITE = "https://journal-sarah.vercel.app";

// بيحدّث العنوان والوصف والـ canonical لكل صفحة
export default function usePageSeo({ title, description, path = "/" }) {
  useEffect(() => {
    document.title = title;

    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", description);

    let canon = document.querySelector('link[rel="canonical"]');
    if (!canon) {
      canon = document.createElement("link");
      canon.setAttribute("rel", "canonical");
      document.head.appendChild(canon);
    }
    canon.setAttribute("href", SITE + path);

    const og = document.querySelector('meta[property="og:url"]');
    if (og) og.setAttribute("content", SITE + path);
  }, [title, description, path]);
}