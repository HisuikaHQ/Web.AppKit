import styled from "styled-components";
import {baseStyling} from "../Common/Styling/baseStyling";
import {ComponentBaseProps} from "../Common/Interfaces";
import {DefaultLight} from "../Common/Themes/DefaultLight";

const StyledAvatar = styled.div<ComponentBaseProps>`
    ${baseStyling};
    display: grid;
    place-items: center;
    width: 3.5rem;
    height: 3.5rem;
    background-color: ${({theme}) => 
            // FIXME: theming
            theme === "Light"
                    ? DefaultLight.Bubbles.backgroundColor 
                    : DefaultLight.Bubbles.backgroundColor
                //  : DefaultDark.Bubbles.backgroundColor
                    ?? 'transparent'
            };
    border-radius: 100%;
    transition: all 0.3s linear;
    cursor: pointer;
    user-select: none;
`;

export function Avatar({...props}: ComponentBaseProps) {
    return (
        <StyledAvatar>
            {props.children}
        </StyledAvatar>
    )
}
