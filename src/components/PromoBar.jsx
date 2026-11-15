import { useLang } from "../context/LangContext.jsx";
import { FREE_SHIPPING_MIN, DISCOUNT_MIN, DISCOUNT_PERCENT } from "../config.js";

export default function PromoBar() {
  const { t, isRTL } = useLang();
  const cur = t("currency");

  const fill = (key, vars) =>
    Object.entries(vars).reduce((s, [k, v]) => s.replace(`{${k}}`, v), t(key));

  const messages = [
    fill("promo.discount", { pct: DISCOUNT_PERCENT, min: DISCOUNT_MIN, cur }),
    fill("promo.free", { min: FREE_SHIPPING_MIN, cur }),
  ];

  // كل مجموعة بتتكرر عشان تغطي عرض الشاشة، والمجموعتين مع بعض بيعملوا لفة كاملة من غير فراغ
  const group = (hidden) => (
    <div className="promo__group" aria-hidden={hidden || undefined}>
      {Array.from({ length: 4 }).map((_, r) =>
        messages.map((m, i) => (
          <span className="promo__item" key={`${r}-${i}`}>
            <span dir={isRTL ? "rtl" : "ltr"}>{m}</span>
            <i className="promo__dot" aria-hidden="true" />
          </span>
        ))
      )}
    </div>
  );

  return (
    <div className="promo" dir="ltr">
      <div className="promo__track">
        {group(false)}
        {group(true)}
      </div>
    </div>
  );
}