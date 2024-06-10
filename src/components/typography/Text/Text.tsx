import { ReactNode } from "react";
import "./text.css";

type TextSize = "sm" | "md" | "lg";

interface TextProps {
  children: ReactNode;
  size?: TextSize;
}

const Text = ({ children, size = "md" }: TextProps) => (
  <span className={`text ${size}`}>{children}</span>
);

export default Text;
