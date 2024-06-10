import { ReactNode } from "react";
import "./card.css";
import { CardContent, CardFooter, CardHeader } from "./components";

type CardVariant = "primary" | "secondary";

interface CardProps {
  children: ReactNode;
  variant?: CardVariant;
}

const Card = ({ children, variant = "primary" }: CardProps) => (
  <article className={`card ${variant}`}>{children}</article>
);

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;
