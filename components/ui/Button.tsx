import type { ReactNode } from "react";
import { TelegramIcon } from "./TelegramIcon";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  href?: string;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  target?: string;
  rel?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-150 active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600";

const variants: Record<Variant, string> = {
  primary: "bg-brand-600 hover:bg-brand-800 active:bg-brand-900 text-white dark:bg-brand-600 dark:hover:bg-brand-800",
  secondary:
    "bg-brand-50 hover:bg-brand-100 text-brand-800 dark:bg-[#0D1F35] dark:hover:bg-[#122a45] dark:text-brand-100",
  ghost:
    "border border-brand-600 text-brand-600 hover:bg-brand-50 dark:border-brand-400 dark:text-brand-100 dark:hover:bg-[#0D1F35]",
};

const sizes: Record<Size, string> = {
  sm: "text-xs px-3 py-1.5 min-h-[36px]",
  md: "text-sm px-4 py-2.5 min-h-[44px]",
  lg: "text-base px-6 py-3.5 min-h-[52px]",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  icon,
  target,
  rel,
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${disabled ? "pointer-events-none opacity-60" : ""} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled}>
      {icon}
      {children}
    </button>
  );
}

export { TelegramIcon };
