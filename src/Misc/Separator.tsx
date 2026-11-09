import React from "react";
import styled from "styled-components";

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const SeparatorElement = styled.div`
  background-color: rgba(84, 84, 84, 0.2);
  height: 2px;
  border-radius: 300px;
`;

export function Separator({ className, ...props }: SeparatorProps) {
  return (
    <SeparatorElement
      className={["Misc__Separator", "Separator", className].join(" ")}
      {...props}
    />
  );
}
