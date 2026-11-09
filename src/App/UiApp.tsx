import styled from "styled-components";
import {FlexLayout} from "../Layouts/FlexLayout";
import type { ComponentBaseProps } from "../Common/Interfaces/ComponentBaseProps";
import {resolveTheme} from "../Common/Themes/resolveTheme";

const UiAppElement = styled(FlexLayout)`
    background-color: ${({theme}) => resolveTheme(theme).UiApp.backgroundColor};
    border: ${({theme}) => resolveTheme(theme).UiApp.border};
    box-shadow: ${({theme}) => resolveTheme(theme).UiApp.boxShadow};
    border-radius: ${({theme}) => resolveTheme(theme).UiApp.borderRadius};
    margin: ${({theme}) => resolveTheme(theme).UiApp.margin};
    flex: 1;
`;

export function UiApp({children, className, ...props}: ComponentBaseProps) {
    return (
        <UiAppElement
            className={["Appl__UiApp", "UiApp", className].join(" ")}
            {...props}
        >
            {children}
        </UiAppElement>
    );
}
