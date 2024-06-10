import { Image } from "../../../../../../../../components";
import "./player-card-picture.css";

interface PlayerCardPictureProps {
  src: string;
}

const PlayerCardPicture = ({ src }: PlayerCardPictureProps) => (
  <div className="player-card__picture">
    <Image src={src} />
  </div>
);

export default PlayerCardPicture;
