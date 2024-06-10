import { ReactNode } from "react";
import "./page.css"

interface PageProps {
  children: ReactNode;
}

const Page = ({ children }: PageProps) => {
  return <main className="page">{children}</main>;
};

export default Page;
