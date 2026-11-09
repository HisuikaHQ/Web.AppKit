import styled from "styled-components";
import {baseStyling} from "../Common/Styling/baseStyling";
import type { ComponentBaseProps } from "../Common/Interfaces/ComponentBaseProps";
import {resolveTheme} from "../Common/Themes/resolveTheme";
import { omitProps, STYLE_ONLY_PROPS } from "../Common/Styling/omitProps";

const StyledBubble = styled.div.withConfig(omitProps(...STYLE_ONLY_PROPS, "disabled"))`
    ${baseStyling};
    display: grid;
    place-items: center;
    overflow: hidden;
    width: 3.5rem;
    height: 3.5rem;
    background-color: ${({theme}) => resolveTheme(theme).Bubbles.backgroundColor};
    border-radius: 100%;
    transition: all 0.3s linear;
    cursor: pointer;
    user-select: none;

    &:hover {
        //box-shadow: 0 3px 10px 1px rgba(128, 128, 128, 0.39);
        //outline: 1px solid gray;
        border-radius: 35%;
    }
`;

export function BubbleContainer({children, ...props}: ComponentBaseProps) {
    return (
        <StyledBubble {...props}>
            {children}
        </StyledBubble>
    )
}
