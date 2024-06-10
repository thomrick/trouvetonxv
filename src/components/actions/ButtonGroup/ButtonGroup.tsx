import { ReactNode } from "react";
import "./button-group.css";

interface ButtonGroupProps {
  children: ReactNode;
}

const ButtonGroup = ({ children }: ButtonGroupProps) => (
  <div className="button-group">{children}</div>
);

export default ButtonGroup;
