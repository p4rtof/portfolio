import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  variant: "primary" | "outline" | "ghost";
  children: ReactNode;
  href?: string;
  onClick?: () => void;
};

export default function Button({ variant, children, href, onClick }: ButtonProps) {
  const baseStyle =
    "px-6 py-3 rounded-full text-sm font-medium transition-colors";

  const variants = {
    primary: "bg-white text-gray-900 hover:bg-gray-200",
    outline: "border border-gray-600 text-white hover:border-gray-400",
    ghost: "text-gray-300 hover:text-white",
  };

  const className = `${baseStyle} ${variants[variant]}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}