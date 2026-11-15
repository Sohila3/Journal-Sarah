// Soft illustrated placeholders. Pass `src` to show a real photo instead.
const tones = [
  { bg: "#EFE4D6", frame: "#6B4F3A", paper: "#FAF6F0", a: "#C9A19A", b: "#B08968" },
  { bg: "#F3E6E1", frame: "#8A6A57", paper: "#FBF7F2", a: "#B98E88", b: "#D9BFA6" },
  { bg: "#E6D9C6", frame: "#5E4534", paper: "#F8F2E8", a: "#B08968", b: "#C9A19A" },
  { bg: "#F1EADF", frame: "#7A5C46", paper: "#FAF6F0", a: "#D4B5A8", b: "#9C7A62" },
];

function Frame({ c }) {
  return (
    <g>
      <rect x="90" y="90" width="220" height="300" fill={c.frame} />
      <rect x="108" y="108" width="184" height="264" fill={c.paper} />
      <rect x="124" y="124" width="152" height="232" fill={c.a} />
      <path d="M200 144 L262 240 L200 336 L138 240Z" fill={c.b} />
      <path d="M200 172 L240 240 L200 308 L160 240Z" fill={c.paper} />
      <circle cx="200" cy="240" r="14" fill={c.a} />
      {Array.from({ length: 10 }).map((_, i) => (
        <line key={i} x1={130 + i * 15} y1="356" x2={130 + i * 15} y2="368" stroke={c.frame} strokeWidth="1.5" />
      ))}
    </g>
  );
}

function Watch({ c }) {
  const beads = Array.from({ length: 16 }).map((_, i) => {
    const a = (i / 16) * Math.PI * 2;
    return (
      <circle
        key={i}
        cx={200 + Math.cos(a) * 92}
        cy={240 + Math.sin(a) * 92}
        r={i % 4 === 0 ? 13 : 9}
        fill={i % 4 === 0 ? c.a : i % 2 ? c.paper : c.b}
        stroke={c.frame}
        strokeWidth="1"
        strokeOpacity=".35"
      />
    );
  });
  return (
    <g>
      {beads}
      <circle cx="200" cy="354" r="3" fill={c.frame} />
      <path d="M200 357 L200 372" stroke={c.frame} strokeWidth="1.5" />
      <circle cx="200" cy="384" r="12" fill={c.a} stroke={c.frame} strokeOpacity=".4" />
    </g>
  );
}

function Bookmark({ c }) {
  return (
    <g>
      <rect x="150" y="70" width="100" height="300" fill={c.paper} stroke={c.frame} strokeOpacity=".35" />
      <rect x="160" y="80" width="80" height="280" fill="none" stroke={c.b} strokeWidth="1" />
      <circle cx="200" cy="170" r="22" fill={c.a} />
      <circle cx="200" cy="170" r="9" fill={c.paper} />
      <path d="M200 192 L200 290" stroke={c.b} strokeWidth="2" />
      <path d="M200 240 q-26 -6 -30 -28 q24 2 30 28z" fill={c.b} />
      <path d="M200 262 q26 -6 30 -28 q-24 2 -30 28z" fill={c.b} />
      <line x1="200" y1="370" x2="200" y2="400" stroke={c.frame} strokeWidth="1.5" />
      {[-12, -6, 0, 6, 12].map((d) => (
        <line key={d} x1="200" y1="398" x2={200 + d} y2="428" stroke={c.a} strokeWidth="2" />
      ))}
    </g>
  );
}

function Scene({ c }) {
  return (
    <g>
      <g transform="translate(40 -10) scale(1.1)"><Frame c={c} /></g>
      <g transform="translate(-30 150) scale(.5)"><Watch c={c} /></g>
      <g transform="translate(270 120) scale(.55)"><Bookmark c={c} /></g>
    </g>
  );
}

const draw = { frames: Frame, watch: Watch, bookmarks: Bookmark, scene: Scene };

export default function ArtImage({ kind = "frames", tone = 0, src, alt = "", ratio = "4 / 5", className = "" }) {
  const c = tones[tone % tones.length];
  const Piece = draw[kind] || Frame;
  return (
    <div className={`art ${className}`} style={{ aspectRatio: ratio, background: c.bg }}>
      {src ? (
        <img src={src} alt={alt} loading="lazy" />
      ) : (
        <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" role="img" aria-label={alt}>
          <Piece c={c} />
        </svg>
      )}
    </div>
  );
}