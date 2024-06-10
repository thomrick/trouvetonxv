import { ReactNode } from "react";
import "./panel.css"

interface PanelProps {
  children: ReactNode;
}

const Panel = ({ children }: PanelProps) => <section className="panel">{children}</section>;

export default Panel;
