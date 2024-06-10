import { ReactNode } from "react";
import "./card-content.css"

interface CardContentProps {
  children: ReactNode;
}

const CardContent = ({ children }: CardContentProps) => (
  <main className="card-content">{children}</main>
);

export default CardContent;
