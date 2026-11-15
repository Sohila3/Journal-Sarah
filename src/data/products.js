// `image`: put a real photo URL/path here (e.g. "/products/frame-1.jpg").
// When it's empty, a soft illustrated placeholder is shown instead.
// `kind` is "frames" | "watch" | "bookmarks"; `tone` is 0-3 (palette variant).
const products = [
  { id: 1, kind: "frames", tone: 0, price: 450, image: "", name: { en: "Dusty Rose Rug Frame", ar: "برواز سجاد وردي هادئ" } },
  { id: 2, kind: "frames", tone: 2, price: 480, image: "", name: { en: "Sand Diamond Rug Frame", ar: "برواز سجاد لوزات رملية" } },
  { id: 3, kind: "watch", tone: 1, price: 190, image: "", name: { en: "Pearl & Rose Watch Charm", ar: "إكسسوار ساعة لؤلؤ ووردي" } },
  { id: 4, kind: "watch", tone: 3, price: 150, image: "", name: { en: "Beaded Hand Bracelet", ar: "أسورة يد بالخرز" } },
  { id: 5, kind: "bookmarks", tone: 0, price: 60, image: "", name: { en: "Rose Tassel Bookmark", ar: "بوكمارك وردة بشرابة" } },
  { id: 6, kind: "bookmarks", tone: 2, price: 75, image: "", name: { en: "Pressed Flower Bookmark", ar: "بوكمارك زهور مجففة" } },
  { id: 7, kind: "frames", tone: 3, price: 280, image: "", name: { en: "Mini Rug Frame", ar: "برواز سجاد ميني" } },
  { id: 8, kind: "watch", tone: 2, price: 220, image: "", name: { en: "Golden Dust Watch Set", ar: "طقم إكسسوار ساعة ذهبي" } },
];

export default products;