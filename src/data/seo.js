// كل نصوص الـ SEO هنا مكتوبة صريحة (مش مفاتيح ترجمة)،
// عشان عنوان الصفحة مايظهرش أبداً بشكل "seo.title".
export const SITE_URL = "https://journal-sarah.vercel.app";
export const BRAND = "Sarah Journal";

export const HOME_TITLE = "Sarah Journal | Journals & Creative Stationery";

export const HOME_DESCRIPTION = {
  en: "Sarah Journal: carpet frames, watch accessories, bookmarks and stickers, plus workshops to make your own handmade pieces. Little details, big feelings.",
  ar: "براويز سجاد وإكسسوارات ساعات اليد وبوكمارك واستيكرز، وورش تصنعي فيها قطعتك الهاند ميد بإيدك. تفاصيل صغيرة، مشاعر كبيرة.",
};

export const categoryTitle = (name) => `${name} | ${BRAND}`;

export const categoryDescription = (name, lang) =>
  lang === "ar"
    ? `${name} من ${BRAND}. تفاصيل صغيرة، مشاعر كبيرة.`
    : `${name} by ${BRAND}. Little details, big feelings.`;