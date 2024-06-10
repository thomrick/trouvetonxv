import { CSSProperties, ReactNode } from "react";
import "./flex-box.css";

interface FlexBoxProps {
  children: ReactNode;
  gap?: CSSProperties["gap"];
  align?: CSSProperties["alignItems"];
  direction?: CSSProperties["flexDirection"];
}

const FlexBox = ({ children, gap, align, direction }: FlexBoxProps) => (
  <div
    className="flex-box"
    style={{
      gap,
      alignItems: align,
      flexDirection: direction,
    }}
  >
    {children}
  </div>
);

export default FlexBox;
