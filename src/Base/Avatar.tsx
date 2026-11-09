import styled from "styled-components";
import {baseStyling} from "../Common/Styling/baseStyling";
import {ComponentBaseProps} from "../Common/Interfaces";
import {resolveTheme} from "../Common/Themes/resolveTheme";

const StyledAvatar = styled.div<ComponentBaseProps>`
    ${baseStyling};
    display: grid;
    place-items: center;
    width: 3.5rem;
    height: 3.5rem;
    background-color: ${({theme}) => resolveTheme(theme).Bubbles.backgroundColor};
    border-radius: 100%;
    transition: all 0.3s linear;
    cursor: pointer;
    user-select: none;
`;

export function Avatar({children, ...props}: ComponentBaseProps) {
    return (
        <StyledAvatar {...props}>
            {children}
        </StyledAvatar>
    )
}
