import Image from "../Image";
import "./club-logo.css";

interface ClubLogoProps {
  src: string;
  alt?: string;
}

const ClubLogo = ({ src, alt }: ClubLogoProps) => (
  <div className="club-logo">
    <Image src={src} alt={alt} />
  </div>
);

export default ClubLogo;
