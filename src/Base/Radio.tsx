import styled, { css } from "styled-components";
import React, { forwardRef } from "react";
import {CommonTypes, ComponentBaseProps} from "../Common/Interfaces";
import { baseStyling } from "../Common/Styling/baseStyling";
import { resolveTheme } from "../Common/Themes/resolveTheme";
import { omitProps, STYLE_ONLY_PROPS } from "../Common/Styling/omitProps";

const RadioContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme } ) => resolveTheme(theme).RadioButton.gap};
  cursor: pointer;
  user-select: none;
`;

const RadioInput = styled.input.withConfig(omitProps(...STYLE_ONLY_PROPS, "color"))<RadioProps>`
  ${baseStyling};
  appearance: none;
  position: relative;
  margin: 0;
  cursor: pointer;
  border: ${({ theme }) => resolveTheme(theme).RadioButton.borderWidth} solid
    ${({ theme, color = "Default" }) => resolveTheme(theme).Button[color].borderColor};
  border-radius: 50%;
  transition: ${({ theme }) => resolveTheme(theme).RadioButton.transition};

  ${({ theme, size = "Small" }) => css`
    width: ${resolveTheme(theme).RadioButton.sizes[size].width};
    height: ${resolveTheme(theme).RadioButton.sizes[size].height};
  `}

  &:checked {
    background-color: transparent;
    border-color: ${({ theme, color = "Default" }) =>
      resolveTheme(theme).Button[color].borderColor};

    &::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 50%;
      height: 50%;
      border-radius: 50%;
      background-color: ${({ theme, color = "Default" }) =>
        resolveTheme(theme).Button[color].backgroundColor};
    }
  }

  &:focus-visible {
    box-shadow: ${({ theme, color = "Default" }) =>
        resolveTheme(theme).Button[color].shadowColor}
      0 0 0 0.2em;
    outline: none;
  }

  ${({ theme, disabled }) =>
    disabled &&
    css`
      opacity: ${resolveTheme(theme).RadioButton.disabled.opacity};
      cursor: not-allowed;
      pointer-events: none;
    `}
`;

const RadioLabel = styled.label.withConfig(omitProps("size"))<{
    size: CommonTypes.Size
}>`
  font-family: "Outfit", sans-serif;
  font-size: ${({ theme, size }) =>
    resolveTheme(theme).RadioButton.sizes[size].fontSize};
  cursor: pointer;
`;

const StyledRadioGroup = styled.div.withConfig(omitProps("direction"))<{
    direction?: "horizontal" | "vertical"
}>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === "horizontal" ? "row" : "column"};
  gap: ${({ theme }) => resolveTheme(theme).RadioButton.gap};
`;

export interface RadioProps extends ComponentBaseProps {
  color?: "Default" | "Primary" | "Success" | "Warning" | "Alert" | "Disabled";
  label?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string;
}

interface RadioGroupProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  children: React.ReactNode;
  name: string;
  value?: string;
  onChange?: (value: string) => void;
  direction?: "horizontal" | "vertical";
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      color = "Default",
      size = "Small",
      disabled,
      label,
      checked,
      onChange,
      name,
      value,
      ...props
    },
    ref
  ) => {
    return (
      <RadioContainer>
        <RadioInput
          type="radio"
          size={size}
          color={color}
          disabled={disabled}
          checked={checked}
          onChange={onChange}
          name={name}
          value={value}
          ref={ref}
          {...props}
        />
        {label && (
          <RadioLabel
            size={size}
          >
            {label}
          </RadioLabel>
        )}
      </RadioContainer>
    );
  }
);

export const RadioGroup: React.FC<RadioGroupProps> = ({
  children,
  name,
  value,
  onChange,
  direction = "vertical",
  ...props
}) => {
  const handleChange = (newValue: string) => {
    onChange?.(newValue);
  };

  return (
    <StyledRadioGroup direction={direction} {...props}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement<RadioProps>(child)) return null;
        const childValue = child.props.value;
        if (childValue === undefined) return child;
        return React.cloneElement(child, {
          name,
          checked: childValue === value,
          onChange: () => handleChange(childValue),
        });
      })}
    </StyledRadioGroup>
  );
};

Radio.displayName = "Radio";
RadioGroup.displayName = "RadioGroup";
