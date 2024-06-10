import { ReactNode } from "react";
import "./title.css";

interface TitleProps {
  children: ReactNode;
}

const Title = ({ children }: TitleProps) => <h3 className="title">{children}</h3>;

export default Title;
