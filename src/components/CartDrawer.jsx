import { useLang } from "../context/LangContext.jsx";
import { useCart } from "../context/CartContext.jsx";
import ArtImage from "./ArtImage.jsx";
import { WHATSAPP_NUMBER } from "../config.js";

export default function CartDrawer() {
  const { t, lang } = useLang();
  const { items, open, setOpen, changeQty, remove, total } = useCart();

  const checkout = () => {
    const lines = items.map(
      (i) => `• ${i.qty} × ${i.name[lang]} — ${i.price * i.qty} ${t("currency")}`
    );
    const msg = `${t("cart.msg")}\n${lines.join("\n")}\n\n${t("cart.total")}: ${total} ${t("currency")}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <>
      <div className={`overlay ${open ? "is-open" : ""}`} onClick={() => setOpen(false)} />
      <aside className={`drawer ${open ? "is-open" : ""}`} aria-hidden={!open} aria-label={t("cart.title")}>
        <div className="drawer__head">
          <h3>{t("cart.title")}</h3>
          <button className="icon-btn" onClick={() => setOpen(false)} aria-label={t("cart.close")}>
            ✕
          </button>
        </div>

        <div className="drawer__body">
          {items.length === 0 && <p className="muted">{t("cart.empty")}</p>}
          {items.map((i) => (
            <div className="line" key={i.id}>
              <div className="line__img">
                <ArtImage kind={i.kind} tone={i.tone} src={i.image} ratio="1 / 1" />
              </div>
              <div className="line__info">
                <p>{i.name[lang]}</p>
                <p className="muted">
                  {i.price} {t("currency")}
                </p>
                <div className="qty">
                  <button onClick={() => changeQty(i.id, -1)} aria-label="-">−</button>
                  <span>{i.qty}</span>
                  <button onClick={() => changeQty(i.id, 1)} aria-label="+">+</button>
                  <button className="qty__remove" onClick={() => remove(i.id)}>
                    {t("cart.remove")}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {items.length > 0 && (
          <div className="drawer__foot">
            <div className="total">
              <span>{t("cart.total")}</span>
              <strong>
                {total} {t("currency")}
              </strong>
            </div>
            <button className="btn btn--block" onClick={checkout}>
              {t("cart.checkout")}
            </button>
          </div>
        )}
      </aside>
    </>
  );
}