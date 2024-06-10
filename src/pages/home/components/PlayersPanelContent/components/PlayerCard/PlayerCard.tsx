import { ReactNode } from "react";
import { PlayerCardParagraph, PlayerCardPicture } from "./components";
import "./player-card.css";

interface PlayerCardProps {
  children: ReactNode;
}

const PlayerCard = ({ children }: PlayerCardProps) => (
  <div className="player-card">{children}</div>
);

PlayerCard.Picture = PlayerCardPicture;
PlayerCard.Paragraph = PlayerCardParagraph;

export default PlayerCard;
