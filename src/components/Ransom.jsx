// حروف مقصوصة زي اللوجو. للحروف اللاتينية بس (العربي بيتوصل ومينفعش يتقطّع)
const tiles = ["t-burgundy", "t-beige", "t-green", "t-blush", "t-yellow"];

export default function Ransom({ text, className = "" }) {
  let n = 0;
  return (
    <p className={`ransom ${className}`} aria-label={text} dir="ltr">
      {text.split(" ").map((word, w) => (
        <span className="ransom__word" key={w} aria-hidden="true">
          {[...word].map((ch, i) => {
            const k = n++;
            return (
              <span
                key={i}
                className={`ransom__tile ${tiles[k % tiles.length]}`}
                style={{ "--r": `${((k * 37) % 9) - 4}deg`, "--i": k }}
              >
                {ch}
              </span>
            );
          })}
        </span>
      ))}
    </p>
  );
}