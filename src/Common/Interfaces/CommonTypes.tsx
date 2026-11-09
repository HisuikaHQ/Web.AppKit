import {DefaultLight} from "../Themes/DefaultLight";

export namespace CommonTypes {
    export type Theme = typeof DefaultLight | 'Light' | 'Dark';
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
