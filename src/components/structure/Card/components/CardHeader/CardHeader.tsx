import { ReactNode } from "react";
import "./card-header.css";

interface CardHeaderProps {
  children: ReactNode;
}

const CardHeader = ({ children }: CardHeaderProps) => (
  <header className="card-header">{children}</header>
);

export default CardHeader;
