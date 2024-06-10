import { ReactNode } from "react";
import "./paragraph.css";

type ParagraphSize = "sm" | "md" | "lg";

interface ParagraphProps {
  children: ReactNode;
  size?: ParagraphSize;
}

const Paragraph = ({ children, size = "md" }: ParagraphProps) => (
  <p className={`paragraph ${size}`}>{children}</p>
);

export default Paragraph;
