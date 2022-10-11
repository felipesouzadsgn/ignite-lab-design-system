import { clsx } from "clsx";

interface TextProps {
  size?: "sm" | "md" | "lg";
}
export function Text({ size = "md" }: TextProps) {
  return <p className="text-gray-100 font-sans">Text</p>;
}
