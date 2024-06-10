import Image from "../Image";
import "./background-icon.css";

type IconName =
  | "cart"
  | "charts"
  | "chat"
  | "community"
  | "euro"
  | "fingerprint"
  | "instagram"
  | "sliders"
  | "telegram"
  | "user";

interface BackgroundIconProps {
  name: IconName;
}

const BackgroundIcon = ({ name }: BackgroundIconProps) => (
  <div className="background-icon">
    <Image src={`/icons/${name}.png`} alt={`${name} icon`} />
  </div>
);

export default BackgroundIcon;
