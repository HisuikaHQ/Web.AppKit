import styled, { css } from "styled-components";
import React, { forwardRef, useEffect, useState } from "react";
import { CommonTypes, ComponentBaseProps } from "../Common/Interfaces";
import { baseStyling } from "../Common/Styling/baseStyling";
import { DefaultLight } from "../Common/Themes/DefaultLight";

const CheckboxContainer = styled.div<{ theme: typeof DefaultLight }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.Checkbox.gap};
  cursor: pointer;
  user-select: none;
`;

const CheckboxInput = styled.input<CheckboxProps>`
  ${baseStyling};
  appearance: none;
  position: relative;
  margin: 0;
  cursor: pointer;
  border: ${({ theme }) => DefaultLight.Checkbox.borderWidth} solid
    ${({ theme, color = "Default" }) => DefaultLight.Button[color].borderColor};
  border-radius: ${({ theme }) => DefaultLight.Checkbox.borderRadius};
  transition: ${({ theme }) => DefaultLight.Checkbox.transition};

  ${({ theme, size = "Small" }) => css`
    width: ${DefaultLight.Checkbox.sizes[size].width};
    height: ${DefaultLight.Checkbox.sizes[size].height};
  `}

  &:checked {
    background-color: ${({ theme, color = "Default" }) =>
      DefaultLight.Button[color].backgroundColor};
    border-color: ${({ theme, color = "Default" }) =>
      DefaultLight.Button[color].borderColor};

    &::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 45%;
      transform: translate(-50%, -50%) rotate(45deg);
      width: 25%;
      height: 50%;
      border: solid ${({ theme }) => DefaultLight.Checkbox.checkmarkColor};
      border-width: 0 2px 2px 0;
    }
  }

  &:focus-visible {
    box-shadow: ${({ theme, color = "Default" }) =>
        DefaultLight.Button[color].shadowColor}
      0 0 0 0.2em;
    outline: none;
  }

  ${({ theme, disabled }) =>
    disabled &&
    css`
      opacity: ${DefaultLight.Checkbox.disabled.opacity};
      cursor: not-allowed;
      pointer-events: none;
    `}
`;

const CheckboxLabel = styled.label<{ size?: CommonTypes.Size }>`
  font-family: "Outfit", sans-serif;
  font-size: ${({ theme, size = "Small" }) =>
    DefaultLight.Checkbox.sizes[size].fontSize};

  cursor: pointer;
`;

export interface CheckboxProps extends ComponentBaseProps {
  color?: "Default" | "Primary" | "Success" | "Warning" | "Alert" | "Disabled";
  label?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      color = "Default",
      theme = "Light",
      size = "Small",
      disabled,
      label,
      checked,
      onChange,
      name,
      ...props
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = useState(checked || false);

    useEffect(() => {
      setIsChecked(checked || false);
    }, [checked]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = event.target.checked;
      setIsChecked(newChecked);
      onChange?.(event);
    };

    return (
      <CheckboxContainer
        theme={theme === "Light" ? DefaultLight : DefaultLight}
      >
        <CheckboxInput
          type="checkbox"
          theme={theme === "Light" ? DefaultLight : DefaultLight}
          size={size}
          color={color}
          disabled={disabled}
          checked={isChecked}
          onChange={handleChange}
          name={name}
          ref={ref}
          {...props}
        />
        {label && (
          <CheckboxLabel
            theme={theme === "Light" ? DefaultLight : DefaultLight}
            size={size}
          >
            {label}
          </CheckboxLabel>
        )}
      </CheckboxContainer>
    );
  }
);

Checkbox.displayName = "Checkbox";
