import React from "react";
import styled, { keyframes } from "styled-components";
import { ComponentBaseProps } from "../Common/Interfaces/ComponentBaseProps";
import { resolveTheme } from "../Common/Themes/resolveTheme";
import { CommonTypes } from "../Common/Interfaces";
import { omitProps } from "../Common/Styling/omitProps";

type HTMLDivProps = Pick<
  React.HTMLAttributes<HTMLDivElement>,
  "className" | "style" | "id" | "role" | "aria-label" | "aria-labelledby"
>;

interface ProgressBarProps extends ComponentBaseProps, HTMLDivProps {
  value: number;
  indeterminate?: boolean;
  color?: CommonTypes.Color;
  size?: "Small" | "Medium" | "Large";
  showPercentage?: boolean;
  label?: string;
}

const primaryIndeterminate = keyframes`
  0% {
    transform: translateX(-100%) scaleX(0.5);
  }
  50% {
    transform: translateX(0%) scaleX(0.5);
  }
  100% {
    transform: translateX(100%) scaleX(0.5);
  }
`;

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const BarContainer = styled.div.withConfig(omitProps("size"))<{ size: string }>`
  width: 100%;
  height: ${({ size }) =>
    size === "Small" ? "4px" : size === "Medium" ? "8px" : "12px"};
  background-color: ${({ theme }) => resolveTheme(theme).Base.trackColor};
  border-radius: 999px;
  overflow: hidden;
  position: relative;
`;

const DeterminateBar = styled.div.withConfig(omitProps("value", "color"))<{ value: number; color: CommonTypes.Color }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${({ value }) => `${value}%`};
  background-color: ${({ theme, color }) =>
    resolveTheme(theme).Button[color].backgroundColor};
  border-radius: 999px;
  transition: width 0.2s ease;
`;

const IndeterminateBar = styled.div.withConfig(omitProps("color"))<{ color: CommonTypes.Color }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${({ theme, color }) =>
    resolveTheme(theme).Button[color].backgroundColor};
  border-radius: 999px;
  transform-origin: left;
  animation: ${primaryIndeterminate} 2s infinite linear;
`;

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: ${({ theme }) => resolveTheme(theme).Base.textColor};
`;

export const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    {
      value = 0,
      indeterminate = false,
      color = "Primary",
      size = "Small",
      showPercentage = false,
      label,
      className,
      style,
      id,
      role = "progressbar",
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
    },
    ref
  ) => {
    // Ensure value is between 0 and 100
    const normalizedValue = Math.min(100, Math.max(0, value));

    return (
      <Container
        ref={ref}
        className={className}
        style={style}
        id={id}
        role={role}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-valuenow={!indeterminate ? normalizedValue : undefined}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {(label || showPercentage) && (
          <LabelContainer>
            {label && <span>{label}</span>}
            {showPercentage && !indeterminate && (
              <span>{normalizedValue}%</span>
            )}
          </LabelContainer>
        )}
        <BarContainer size={size}>
          {indeterminate ? (
            <IndeterminateBar color={color} />
          ) : (
            <DeterminateBar value={normalizedValue} color={color} />
          )}
        </BarContainer>
      </Container>
    );
  }
);
