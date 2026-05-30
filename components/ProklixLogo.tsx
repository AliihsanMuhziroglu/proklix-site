import Image from "next/image";

type Variant = "primary" | "icon" | "mono";

type Props = {
  variant?: Variant;
  className?: string;
  priority?: boolean;
};

const sources: Record<Variant, { src: string; width: number; height: number; alt: string }> = {
  primary: {
    src: "/proklix-logo-primary.png",
    width: 320,
    height: 80,
    alt: "Proklix",
  },
  icon: {
    src: "/proklix-icon.png",
    width: 48,
    height: 48,
    alt: "Proklix",
  },
  mono: {
    src: "/proklix-logo-mono.png",
    width: 280,
    height: 64,
    alt: "Proklix",
  },
};

export function ProklixLogo({ variant = "icon", className = "", priority = false }: Props) {
  const { src, width, height, alt } = sources[variant];

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
    />
  );
}
