import { useRef, type ButtonHTMLAttributes, type ReactNode } from "react";

interface MagneticProps extends ButtonHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href?: string;
  strength?: number;
  className?: string;
}

/**
 * Magnetic — wraps content in a span that gently follows the cursor.
 * Use as an anchor-like wrapper for CTAs.
 */
export const Magnetic = ({
  children,
  href,
  strength = 18,
  className = "",
  ...rest
}: MagneticProps) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const inner = useRef<HTMLSpanElement>(null);

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    const span = inner.current;
    if (!el || !span) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    span.style.transform = `translate(${(x / rect.width) * strength}px, ${(y / rect.height) * strength}px)`;
  };

  const onLeave = () => {
    if (inner.current) inner.current.style.transform = "translate(0, 0)";
  };

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
      {...rest}
    >
      <span
        ref={inner}
        className="inline-flex items-center gap-2 transition-transform duration-300 ease-out-soft will-change-transform"
      >
        {children}
      </span>
    </a>
  );
};
