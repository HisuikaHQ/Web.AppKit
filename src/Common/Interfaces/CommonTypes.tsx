import type {UiTheme} from "../Themes/UiTheme";

// eslint-disable-next-line @typescript-eslint/no-namespace -- public API exposes CommonTypes.X
export namespace CommonTypes {
    export type Theme = UiTheme;
    export type Size = 'Small' | 'Medium' | 'Large';
    export type Color =
    | "Default"
    | "Primary"
    | "Success"
    | "Warning"
    | "Alert"
    | "Disabled"
    | "TabButton"
    | "TabButtonActive";
    export type CSSSize = number | string | 'Unset' | 'Fit-Content' | 'Min-Content' | 'Max-Content' | 'Auto';
}
