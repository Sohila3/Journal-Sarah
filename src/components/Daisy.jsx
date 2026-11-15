export default function Daisy({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      {Array.from({ length: 8 }).map((_, i) => (
        <ellipse
          key={i}
          cx="50"
          cy="26"
          rx="9"
          ry="22"
          transform={`rotate(${i * 45} 50 50)`}
          fill="#fff9ef"
          stroke="rgba(91,24,42,.25)"
          strokeWidth="1"
        />
      ))}
      <circle cx="50" cy="50" r="12" fill="#d4a034" />
    </svg>
  );
}