import React from "react";
import styled from "styled-components";
import {baseStyling} from "../Common/Styling/baseStyling";
import {resolveTheme} from "../Common/Themes/resolveTheme";
import type {UiTheme} from "../Common/Themes/UiTheme";
import { omitProps } from "../Common/Styling/omitProps";

export interface LinkProps {
    className?: string;
    children?: React.ReactNode;
    disabled?: boolean;
    href: string;
    theme?: UiTheme;
}

const LinkElement = styled.a.withConfig(omitProps("disabled"))<LinkProps>`
    ${baseStyling};
    font-weight: 500;
    color: ${({disabled, theme}) =>
                disabled ? resolveTheme(theme).Link.disabledColor : resolveTheme(theme).Link.color};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    padding-inline: 5px;
    border-radius: 5px;
    text-decoration: none;

    &:hover {
        background-color: ${({disabled, theme}) =>
                disabled ? "transparent" : resolveTheme(theme).Link.backgroundColor};
        color: ${({disabled, theme}) =>
                disabled ? resolveTheme(theme).Link.disabledColor : resolveTheme(theme).Link.hoverColor};
    }

    &:active {
        background-color: ${({disabled, theme}) =>
                disabled ? "initial" : resolveTheme(theme).Link.activeBackgroundColor};
        color: ${({disabled, theme}) =>
                disabled ? resolveTheme(theme).Link.disabledColor : resolveTheme(theme).Link.activeColor};
        user-select: none;
        -webkit-user-select: none;
    }
`;

export function Link({
                         children,
                         className,
                         disabled = false,
                         href,
                         ...props
                     }: LinkProps) {
    return (
            <LinkElement
                className={[
                    `Base__Link${disabled ? "--Disabled" : ""}`,
                    "Link",
                    className,
                ].join(" ")}
                disabled={disabled}
                href={disabled ? "#" : href}
                {...props}
            >
                {children}
            </LinkElement>
    );
}
