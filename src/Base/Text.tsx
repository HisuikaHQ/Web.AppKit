import React, { CSSProperties, ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import { resolveTheme } from "../Common/Themes/resolveTheme";
import { omitProps } from "../Common/Styling/omitProps";

export interface TextProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    > {
  className?: string;
  style?: CSSProperties;
  text?: string;
  disabled?: boolean;
  color?: string;
  size?: number;
  children?: ReactNode;
  wordWrap?: boolean;
}

const TextElement = styled.p.withConfig(omitProps("disabled", "color", "size", "wordWrap"))<{
  disabled?: boolean;
  color?: string;
  size?: number;
  wordWrap?: boolean;
}>`
  font-family: "Outfit", sans-serif;
  font-size: ${({ size }) => (size ? size + "pt" : "9pt")};
  color: ${({ disabled, color, theme }) =>
    disabled ? resolveTheme(theme).Base.disabledTextColor : color || resolveTheme(theme).Base.textColor};
  padding: 0;
  margin: 0;
  white-space: ${({ wordWrap }) => (wordWrap ? "normal" : "nowrap")};
  overflow: ${({ wordWrap }) => (wordWrap ? "auto" : "hidden")};
  text-overflow: ${({ wordWrap }) => (wordWrap ? "clip" : "ellipsis")};
`;

export function Text({
  className,
  style,
  text,
  disabled = false,
  color,
  size,
  children,
  wordWrap = true,
  ...props
}: TextProps) {
  const [disable, setDisable] = useState(disabled);

  useEffect(() => {
    setDisable(disabled);
  }, [disabled]);

  return (
    <TextElement
      className={[
        "Base__Text",
        "Text",
        disable ? "Base__Text--Disabled" : "",
        className,
      ].join(" ")}
      disabled={disable}
      size={size}
      color={color}
      wordWrap={wordWrap}
      style={style}
      {...props}
    >
      {text || children}
    </TextElement>
  );
}
