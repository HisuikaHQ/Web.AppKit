import styled from "styled-components";
import {FlexLayout} from "../Layouts/FlexLayout";
import {ComponentBaseProps} from "../Common/Interfaces";
import {DefaultLight} from "../Common/Themes/DefaultLight";

const UiAppElement = styled(FlexLayout)`
    background-color: ${({theme}) => DefaultLight.UiApp.backgroundColor};
    border: ${({theme}) => DefaultLight.UiApp.border + ';'});
    box-shadow: ${({theme}) => DefaultLight.UiApp.boxShadow + ';'});
    border-radius: ${({theme}) => DefaultLight.UiApp.borderRadius + ';'});
    margin: ${({theme}) => DefaultLight.UiApp.margin + ';'});
    flex: 1;
`;

export function UiApp({children, className, theme, ...props}: ComponentBaseProps) {
    return (
        <UiAppElement
            className={["Appl__UiApp", "UiApp", className].join(" ")}
            {...props}
        >
            {children}
        </UiAppElement>
    );
}
