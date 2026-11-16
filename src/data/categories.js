// الأقسام. id بيبقى جزء من الرابط: /category/<id>
// kind في products.js لازم يطابق id هنا.
// image: مسار صورة حقيقية في فولدر public (مثال "/cats/frames.jpg")، وإلا بتظهر رسمة مؤقتة.
const categories = [
  { id: "frames", key: "cat.frames", tone: 0, image: "" },
  { id: "watch", key: "cat.watch", tone: 1, image: "" },
  { id: "bookmarks", key: "cat.bookmarks", tone: 2, image: "" },
  { id: "stickers", key: "cat.stickers", tone: 3, image: "" },
];

export default categories;