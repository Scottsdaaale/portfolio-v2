interface CursorProps {
  size?: number;
  className?: string;
}

function Blink() {
  return (
    <animate
      attributeName="opacity"
      values="1;1;0;0;1"
      keyTimes="0;0.5;0.5;0.95;1"
      dur="1.2s"
      repeatCount="indefinite"
    />
  );
}

/** Blinking accent block. Standalone mark for favicons and small placements. */
export function BlinkCursor({ size = 24, className }: CursorProps) {
  return (
    <svg
      width={(size / 24) * 14}
      height={size}
      viewBox="0 0 14 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <rect x="2" y="4" width="10" height="17" className="fill-brand">
        <Blink />
      </rect>
    </svg>
  );
}

interface LogoLockupProps {
  cursorSize?: number;
  className?: string;
}

/** E5: name + blinking cursor. The brand is the sentence still being typed. */
export function LogoLockup({ cursorSize = 18, className }: LogoLockupProps) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className ?? ""}`}>
      Scotty Peterson
      <BlinkCursor size={cursorSize} className="translate-y-[1px]" />
    </span>
  );
}
