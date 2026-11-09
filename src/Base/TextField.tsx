import React, {forwardRef} from "react";
import styled from "styled-components";
import {baseStyling} from "../Common/Styling/baseStyling";
import {ComponentBaseProps} from "../Common/Interfaces";
import {resolveTheme} from "../Common/Themes/resolveTheme";

export interface TextFieldProps
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    type?: "text" | "password" | "email" | "number" | "tel" | "url";
    placeholder?: string;
    invalid?: boolean;
    className?: string;
    disabled?: boolean;
}

const TextFieldElement = styled.input<{ invalid?: boolean } & Omit<ComponentBaseProps, "size" | "onClick">>`
    ${baseStyling};
    height: auto;
    border-radius: ${({theme}) => resolveTheme(theme).Base.borderRadius};
    outline: none;
    padding: 5px 10px;
    font-weight: 400;
    font-size: 9pt;
    border: ${({invalid, theme}) =>
            invalid ? "rgba(255,129,129,0.8)" : resolveTheme(theme).TextField.borderColor} solid 1px;
    background-color: ${({theme}) => resolveTheme(theme).TextField.backgroundColor};
    color: ${({theme}) => resolveTheme(theme).TextField.textColor};

    &:focus-within {
        box-shadow: ${({invalid, theme}) =>
                invalid ? "rgba(248,85,85,0.5)" : resolveTheme(theme).TextField.outlineColor} 0 0 0 0.3em;
    }

    &:disabled {
        opacity: 0.6;
    }
`;
export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
    (props, ref) => (
        <TextFieldElement
            ref={ref}
            {...props}
            className={["Base__TextField", "TextField", props.className].join(" ")}
        />
    )
);

TextField.displayName = "TextField";
