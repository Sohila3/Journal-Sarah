// حروف مقصوصة زي اللوجو. للحروف اللاتينية بس (العربي بيتوصل ومينفعش يتقطّع)
// النص الحقيقي موجود مرة واحدة في sr-only، والحروف المرسومة بتتعرض بـ CSS (data-ch)
// عشان محركات البحث وقارئات الشاشة يشوفوا الاسم مرة واحدة سليمة.
const tiles = ["t-burgundy", "t-beige", "t-green", "t-blush", "t-yellow"];

export default function Ransom({ text, className = "", as: Tag = "p" }) {
  let n = 0;
  return (
    <Tag className={`ransom ${className}`} dir="ltr">
      <span className="sr-only">{text}</span>
      {text.split(" ").map((word, w) => (
        <span className="ransom__word" key={w} aria-hidden="true">
          {[...word].map((ch, i) => {
            const k = n++;
            return (
              <span
                key={i}
                data-ch={ch}
                className={`ransom__tile ${tiles[k % tiles.length]}`}
                style={{ "--r": `${((k * 37) % 9) - 4}deg`, "--i": k }}
              />
            );
          })}
        </span>
      ))}
    </Tag>
  );
}