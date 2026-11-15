import { useLang } from "../context/LangContext.jsx";
import {
  INSTAGRAM_URL,
  FACEBOOK_URL,
  TIKTOK_URL,
  WHATSAPP_URL,
} from "../config.js";

const common = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const icons = {
  instagram: (
    <svg {...common}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  ),
  facebook: (
    <svg {...common}>
      <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z" />
    </svg>
  ),
  tiktok: (
    <svg {...common}>
      <path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5" />
      <path d="M14 3c.3 2.3 1.9 4 4.5 4.2" />
    </svg>
  ),
  whatsapp: (
    <svg {...common}>
      <path d="M3 21l1.6-4.8A8.5 8.5 0 1 1 8 19.5L3 21z" />
      <path d="M9 9c0 3 3 6 6 6l1-1.5-2-1-1 .8c-1-.4-2-1.4-2.4-2.4l.8-1-1-2L9 9z" />
    </svg>
  ),
};

export default function Social() {
  const { t } = useLang();
  const items = [
    ["instagram", INSTAGRAM_URL, "footer.instagram"],
    ["facebook", FACEBOOK_URL, "footer.facebook"],
    ["tiktok", TIKTOK_URL, "footer.tiktok"],
    ["whatsapp", WHATSAPP_URL, "footer.whatsapp"],
  ];

  return (
    <div className="social">
      {items.map(([id, href, key]) => (
        <a key={id} href={href} target="_blank" rel="noreferrer" aria-label={t(key)} title={t(key)}>
          {icons[id]}
        </a>
      ))}
    </div>
  );
}