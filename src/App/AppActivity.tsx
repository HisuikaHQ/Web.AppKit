import {use} from "react";
import styled, {ThemeContext, ThemeProvider} from "styled-components";
import {FlexLayout} from "../Layouts/FlexLayout";
import {resolveTheme} from "../Common/Themes/resolveTheme";
import type {UiTheme} from "../Common/Themes/UiTheme";
import {LayoutProps} from "../Layouts/Layout";

export interface AppActivityProps extends LayoutProps {
    direction?: "Vertical" | "Horizontal";
    theme?: UiTheme;
}

const AppActivityElement = styled(FlexLayout)`
    @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded");

    body {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Outfit", sans-serif;
        font-size: 9pt;
    }

    .material-symbols-rounded {
        font-family: Material Symbols Rounded,
        sans-serif;
        font-variation-settings: "FILL" 0,
        "wght" 500,
        "GRAD" 0,
        "opsz" 48;
    }

    &.AppActivity {
        background-color: ${({theme}) => resolveTheme(theme).AppActivity.backgroundColor};
        color: ${({theme}) => resolveTheme(theme).Base.textColor};
        min-height: 100vh;
    }
`;

export function AppActivity({
                                children,
                                direction = "Horizontal",
                                className,
                                theme,
                                ...props
                            }: AppActivityProps) {
    const inheritedTheme = use(ThemeContext);
    return (
        <ThemeProvider theme={theme ?? resolveTheme(inheritedTheme)}>
            <AppActivityElement
                className={[
                    "Appl__AppActivity",
                    "AppActivity",
                    className,
                ].join(" ")}
                direction={direction}
                {...props}
            >
                {children}
            </AppActivityElement>
        </ThemeProvider>
    );
}
