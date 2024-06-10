import { ReactNode } from "react";
import "./button.css";

type ButtonType = "button" | "submit" | "reset";

interface ButtonProps {
  active?: boolean;
  children: ReactNode;
  type?: ButtonType;
  onClick?: () => void;
}

const Button = ({
  active = false,
  children,
  type = "button",
  onClick,
}: ButtonProps) => (
  <button
    className={`button${active ? " active" : ""}`}
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
