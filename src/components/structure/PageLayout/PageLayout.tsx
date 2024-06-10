import { ReactNode } from "react";
import "./page-layout.css";

type PageLayoutSize = "sm" | "md" | "lg";

interface PageLayoutProps {
  children: ReactNode;
  size?: PageLayoutSize;
}

const PageLayout = ({ children, size = "md" }: PageLayoutProps) => (
  <div className={`page-layout ${size}`}>{children}</div>
);

export default PageLayout;
