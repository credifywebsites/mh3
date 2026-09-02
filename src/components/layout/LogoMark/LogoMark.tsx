type LogoMarkProps = {
  variant?: "nav" | "footer";
  className?: string;
};

export function LogoMark({ variant = "nav", className }: LogoMarkProps) {
  if (variant === "footer") {
    return (
      <svg
        className={className}
        viewBox="0 0 26 26"
        fill="none"
        width="22"
        height="22"
        aria-hidden="true"
        focusable="false"
      >
        <circle cx="13" cy="13" r="11.5" stroke="#3dbd94" strokeWidth="2" />
        <path
          d="M7.5 13l4 4 7-8"
          stroke="#3dbd94"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 30 30"
      fill="none"
      width="30"
      height="30"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="15" cy="15" r="13.5" stroke="#1a8a66" strokeWidth="2.2" />
      <path
        d="M8.5 15l4.5 4.5 8.5-9"
        stroke="#1a8a66"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
