import type { CommonTypes } from "../Interfaces/CommonTypes";

export interface ButtonColorTheme {
  backgroundColor: string;
  borderColor: string;
  hoverBackgroundColor: string;
  activeBackgroundColor: string;
  shadowColor: string;
  textColor: string;
}

export interface ToggleSizeTheme {
  width: string;
  height: string;
  fontSize: string;
}

export interface UiTheme {
  name: string;
  Base: {
    borderRadius: string;
    defaultBackgroundColor: string;
    textColor: string;
    disabledTextColor: string;
    trackColor: string;
  };
  Link: {
    color: string;
    hoverColor: string;
    activeColor: string;
    disabledColor: string;
    backgroundColor: string;
    activeBackgroundColor: string;
  };
  Bubbles: { backgroundColor: string };
  AppActivity: { backgroundColor: string };
  AppHeader: { backgroundColor: string; border: string };
  UiApp: {
    backgroundColor: string;
    border: string;
    boxShadow: string;
    borderRadius: string;
    margin: string;
  };
  TextField: {
    borderColor: string;
    outlineColor: string;
    backgroundColor: string;
    textColor: string;
  };
  Button: Record<CommonTypes.Color, ButtonColorTheme>;
  Checkbox: {
    borderRadius: string;
    borderWidth: string;
    gap: string;
    transition: string;
    checkmarkColor: string;
    sizes: Record<CommonTypes.Size, ToggleSizeTheme>;
    disabled: { opacity: number };
  };
  RadioButton: {
    borderWidth: string;
    gap: string;
    transition: string;
    sizes: Record<CommonTypes.Size, ToggleSizeTheme>;
    disabled: { opacity: number };
  };
  IconButton: {
    color: string;
    hover: { backgroundColor: string };
    active: { backgroundColor: string };
    focus: { shadowColor: string };
    borderRadius: string;
    padding: string;
  };
}
