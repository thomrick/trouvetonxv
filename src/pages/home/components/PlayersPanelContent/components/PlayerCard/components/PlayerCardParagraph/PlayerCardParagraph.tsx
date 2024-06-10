import { ReactNode } from "react";
import "./player-card-paragraph.css";

interface PlayerCardParagraphProps {
  children: ReactNode;
}

const PlayerCardParagraph = ({ children }: PlayerCardParagraphProps) => (
  <p className="player-card__paragraph">{children}</p>
);

export default PlayerCardParagraph;
