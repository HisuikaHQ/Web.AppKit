import type { UiTheme } from "./UiTheme";
import { DefaultLight } from "./DefaultLight";

const isUiTheme = (theme: unknown): theme is UiTheme =>
  typeof theme === "object" && theme !== null && "Button" in theme && "Base" in theme;

// styled-components passes an empty object when no ThemeProvider is mounted, fall back to DefaultLight
export function resolveTheme(theme?: unknown): UiTheme {
  return isUiTheme(theme) ? theme : DefaultLight;
}
