import styled from "styled-components";
import React, { forwardRef, ReactElement } from "react";
import { ComponentBaseProps } from "../Common/Interfaces";
import { buttonBaseStyling } from "../Common/Styling/buttonBaseStyling";
import { baseStyling } from "../Common/Styling/baseStyling";
import { resolveTheme } from "../Common/Themes/resolveTheme";
import { focusOnMouseDown } from "../Common/Helpers/focusOnMouseDown";
import { omitProps, STYLE_ONLY_PROPS } from "../Common/Styling/omitProps";

interface IconButtonProps extends ComponentBaseProps {
  onMouseDown?: React.MouseEventHandler<HTMLButtonElement>;
  isGrouped?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
}

interface GroupIconButtonsProps extends Omit<ComponentBaseProps, "onClick"> {
  children: React.ReactNode;
}

const StyledIconButton = styled.button.withConfig(omitProps(...STYLE_ONLY_PROPS, "isGrouped", "isFirst", "isLast"))<IconButtonProps>`
  ${baseStyling};
  ${buttonBaseStyling};
  display: grid;
  place-items: center;
  background: none;
  color: ${({ theme }) =>
    resolveTheme(theme).IconButton.color};
  padding: ${({ theme }) => resolveTheme(theme).IconButton.padding};
  border-radius: ${({ theme, isGrouped, isFirst, isLast }) => {
    if (!isGrouped) return resolveTheme(theme).IconButton.borderRadius;
    if (isFirst)
      return `${resolveTheme(theme).IconButton.borderRadius} 0 0 ${resolveTheme(theme).IconButton.borderRadius}`;
    if (isLast)
      return `0 ${resolveTheme(theme).IconButton.borderRadius} ${resolveTheme(theme).IconButton.borderRadius} 0`;
    return "0";
  }};

  ${({ isGrouped }) =>
    isGrouped &&
    `
        border-right-width: ${isGrouped ? "0.5px" : "1px"};
        margin: 0;
        
        &:last-child {
            border-right-width: 1px;
        }
    `}

  &:hover {
    background-color: ${({ theme }) => resolveTheme(theme).IconButton.hover.backgroundColor};
  }

  &:active {
    background-color: ${({ theme }) => resolveTheme(theme).IconButton.active.backgroundColor};
  }

  &:focus,
  &:active {
    box-shadow: ${({ theme }) =>
      `${resolveTheme(theme).IconButton.focus.shadowColor} 0 0 0 0.3em`};
  }
`;

const GroupContainer = styled.div`
  display: inline-flex;
  align-items: center;

  ${StyledIconButton} {
    &:not(:first-child) {
      border-left: none;
    }
  }
`;

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ isGrouped, isFirst, isLast, onMouseDown, ...props }, ref) => {
    return (
      <StyledIconButton
        isGrouped={isGrouped}
        isFirst={isFirst}
        isLast={isLast}
        onMouseDown={(event) => {
          focusOnMouseDown(event);
          onMouseDown?.(event);
        }}
        {...props}
        ref={ref}
      >
        {props.children ?? "X"}
      </StyledIconButton>
    );
  }
);

export const GroupIconButtons: React.FC<GroupIconButtonsProps> = ({
  children,
  ...props
}) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <GroupContainer {...props}>
      {React.Children.map(childrenArray, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as ReactElement<IconButtonProps>, {
            isGrouped: true,
            isFirst: index === 0,
            isLast: index === childrenArray.length - 1,
          });
        }
        return child;
      })}
    </GroupContainer>
  );
};

IconButton.displayName = "IconButton";
GroupIconButtons.displayName = "GroupIconButtons";
