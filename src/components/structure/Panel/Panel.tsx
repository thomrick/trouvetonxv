import { ReactNode } from "react";
import { PanelContent } from "./components";
import "./panel.css";

interface PanelProps {
  children: ReactNode;
}

const Panel = ({ children }: PanelProps) => (
  <section className="panel">{children}</section>
);

Panel.Content = PanelContent;

export default Panel;
