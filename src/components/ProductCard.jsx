import { useState } from "react";
import { useLang } from "../context/LangContext.jsx";
import { useCart } from "../context/CartContext.jsx";
import ArtImage from "./ArtImage.jsx";

export default function ProductCard({ product }) {
  const { lang, t } = useLang();
  const { add } = useCart();
  const [added, setAdded] = useState(false);
  const name = product.name[lang];

  const handleAdd = () => {
    add(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <article className="card">
      <ArtImage kind={product.kind} tone={product.tone} src={product.image} alt={name} ratio="4 / 5" />
      <h3 className="card__name">{name}</h3>
      <p className="card__price">
        {product.price} {t("currency")}
      </p>
      <button className="btn btn--ghost" onClick={handleAdd}>
        {added ? t("shop.added") : t("shop.add")}
      </button>
    </article>
  );
}