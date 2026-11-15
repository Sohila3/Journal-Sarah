import { useLang } from "../context/LangContext.jsx";
import ProductCard from "./ProductCard.jsx";
import products from "../data/products.js";

const filters = [
  ["all", "shop.all"],
  ["frames", "cat.frames"],
  ["watch", "cat.watch"],
  ["bookmarks", "cat.bookmarks"],
];

export default function FeaturedProducts({ category, setCategory }) {
  const { t } = useLang();
  const list = category === "all" ? products : products.filter((p) => p.kind === category);

  return (
    <section id="shop" className="section section--sand">
      <div className="container">
        <header className="section__head">
          <p className="eyebrow">{t("shop.eyebrow")}</p>
          <h2>{t("shop.title")}</h2>
        </header>

        <div className="tabs" role="tablist">
          {filters.map(([id, key]) => (
            <button
              key={id}
              role="tab"
              aria-selected={category === id}
              className={category === id ? "is-active" : ""}
              onClick={() => setCategory(id)}
            >
              {t(key)}
            </button>
          ))}
        </div>

        <div className="grid">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}