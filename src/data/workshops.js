// عدلي الورش هنا. أضيفي ورشة = أضيفي كائن جديد، ومسحي ورشة = شيلي الكائن.
// image: مسار صورة حقيقية في فولدر public (مثال "/workshops/frames.jpg")، وإلا بتظهر رسمة مؤقتة.
// price: رقم بالجنيه (مثال 150) أو null لو مش عايزة تظهره.
const workshops = [
  {
    id: "frames",
    kind: "frames",
    tone: 0,
    image: "",
    title: { ar: "ورشة براويز السجاد", en: "Carpet Frames Workshop" },
    desc: { ar: "", en: "" },
    date: { ar: "", en: "" },
    price: null,
  },
  {
    id: "watch",
    kind: "watch",
    tone: 1,
    image: "",
    title: { ar: "ورشة إكسسوارات الساعات", en: "Watch Accessories Workshop" },
    desc: { ar: "", en: "" },
    date: { ar: "", en: "" },
    price: null,
  },
  {
    id: "bookmarks",
    kind: "bookmarks",
    tone: 2,
    image: "",
    title: { ar: "ورشة البوكمارك", en: "Bookmarks Workshop" },
    desc: { ar: "", en: "" },
    date: { ar: "", en: "" },
    price: null,
  },
];

export default workshops;