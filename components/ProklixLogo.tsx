type Props = {
  className?: string;
  size?: number;
};

export function ProklixLogo({ className = "", size = 36 }: Props) {
  const id = "proklix-grad";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={id} x1="8" y1="6" x2="40" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60A5FA" />
          <stop offset="1" stopColor="#1D4ED8" />
        </linearGradient>
      </defs>

      {/* i dot */}
      <circle cx="14" cy="10" r="3.5" fill={`url(#${id})`} />

      {/* P stem */}
      <path
        d="M14 16 V38"
        stroke={`url(#${id})`}
        strokeWidth="5.5"
        strokeLinecap="round"
      />

      {/* P bowl + checkmark area */}
      <path
        d="M14 16 H26 C33 16 38 21.5 38 28.5 C38 35.5 33 41 26 41 H14"
        stroke={`url(#${id})`}
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Checkmark */}
      <path
        d="M22 28 L26 32 L33 23"
        stroke={`url(#${id})`}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
