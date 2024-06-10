import { ReactNode } from "react";

interface PanelContentProps {
  children: ReactNode;
}

const PanelContent = ({ children }: PanelContentProps) => <div>{children}</div>;

export default PanelContent;
