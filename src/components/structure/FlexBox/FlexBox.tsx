import { CSSProperties, ReactNode } from "react";
import "./flex-box.css";

interface FlexBoxProps {
  children: ReactNode;
  gap?: CSSProperties["gap"];
  align?: CSSProperties["alignItems"];
  direction?: CSSProperties["flexDirection"];
  justify?: CSSProperties["justifyContent"];
}

const FlexBox = ({
  children,
  gap,
  align,
  direction,
  justify,
}: FlexBoxProps) => (
  <div
    className="flex-box"
    style={{
      gap,
      alignItems: align,
      flexDirection: direction,
      justifyContent: justify,
    }}
  >
    {children}
  </div>
);

export default FlexBox;
