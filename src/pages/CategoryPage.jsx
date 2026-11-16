import { Link, Navigate, useParams } from "react-router-dom";
import { useLang } from "../context/LangContext.jsx";
import usePageSeo from "../hooks/usePageSeo.js";
import categories from "../data/categories.js";
import products from "../data/products.js";
import ProductCard from "../components/ProductCard.jsx";
import ArtImage from "../components/ArtImage.jsx";
import { WHATSAPP_URL } from "../config.js";

export default function CategoryPage() {
  const { id } = useParams();
  const { t } = useLang();
  const cat = categories.find((c) => c.id === id);
  const name = cat ? t(cat.key) : "";

  usePageSeo({
    title: cat ? `${name} | ${t("brand.en")} | ${t("brand.ar")}` : t("seo.title"),
    description: cat ? t("cat.seo").replace("{name}", name) : t("seo.description"),
    path: cat ? `/category/${cat.id}` : "/",
  });

  if (!cat) return <Navigate to="/" replace />;

  const list = products.filter((p) => p.kind === cat.id);

  return (
    <>
      <section className="catpage__head">
        <div className="container">
          <Link to="/" className="back">
            <span className="back__arrow" aria-hidden="true">←</span>
            {t("nav.home")}
          </Link>
          <p className="eyebrow">{t("cat.eyebrow")}</p>
          <h1>{name}</h1>
        </div>
      </section>

      <section className="section section--sand catpage__body">
        <div className="container">
          <nav className="catchips" aria-label={t("cat.eyebrow")}>
            {categories.map((c) => (
              <Link
                key={c.id}
                to={`/category/${c.id}`}
                className="chip"
                aria-current={c.id === cat.id ? "page" : undefined}
              >
                <span className="chip__thumb" aria-hidden="true">
                  <ArtImage kind={c.id} tone={c.tone} src={c.image || undefined} ratio="1 / 1" alt="" />
                </span>
                <span className="chip__name">{t(c.key)}</span>
              </Link>
            ))}
          </nav>

          {list.length > 0 ? (
            <div className="grid">
              {list.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <div className="catempty">
              <p>{t("cat.empty")}</p>
              <a className="btn" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                {t("cat.ask")}
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  );
}