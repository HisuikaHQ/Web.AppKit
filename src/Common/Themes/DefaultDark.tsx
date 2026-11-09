import type { UiTheme } from "./UiTheme";
import { DefaultLight } from "./DefaultLight";

export const DefaultDark: UiTheme = {
  name: "Dark",
  Base: {
    borderRadius: "5px",
    defaultBackgroundColor: "#1e1e1f",
    textColor: "#f2f2f2",
    disabledTextColor: "#6b6b6b",
    trackColor: "rgba(255, 255, 255, 0.15)",
  },
  Link: {
    color: "#4db8ff",
    hoverColor: "#6cc4ff",
    activeColor: "#2fa9f5",
    disabledColor: "#6b6b6b",
    backgroundColor: "rgba(255, 255, 255, 0.06)",
    activeBackgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  Bubbles: {
    backgroundColor: "#2a2a2c",
  },
  AppActivity: {
    backgroundColor: "#121213",
  },
  AppHeader: {
    backgroundColor: "none",
    border: "none",
  },
  UiApp: {
    backgroundColor: "#1e1e1f",
    border: "1px solid rgba(255, 255, 255, 0.06)",
    boxShadow: "-3px -3px 15px 0px rgba(0, 0, 0, 0.5)",
    borderRadius: "8px",
    margin: "5px",
  },
  TextField: {
    borderColor: "rgba(200, 200, 200, 0.3)",
    outlineColor: "rgba(120, 120, 120, 0.5)",
    backgroundColor: "#2a2a2c",
    textColor: "#f2f2f2",
  },
  Button: {
    ...DefaultLight.Button,
    Default: {
      backgroundColor: "#4a4a4d",
      borderColor: "#38383a",
      hoverBackgroundColor: "#55555a",
      activeBackgroundColor: "#3f3f42",
      shadowColor: "rgba(140, 140, 140, 0.4)",
      textColor: "#f2f2f2",
    },
    TabButton: {
      backgroundColor: "transparent",
      borderColor: "transparent",
      hoverBackgroundColor: "rgba(255, 255, 255, 0.06)",
      activeBackgroundColor: "rgba(255, 255, 255, 0.1)",
      shadowColor: "rgba(255, 255, 255, 0.1)",
      textColor: "#a8a8a8",
    },
    TabButtonActive: {
      backgroundColor: "rgba(255, 255, 255, 0.08)",
      borderColor: "rgba(255, 255, 255, 0.08)",
      hoverBackgroundColor: "rgba(255, 255, 255, 0.1)",
      activeBackgroundColor: "rgba(255, 255, 255, 0.12)",
      shadowColor: "rgba(255, 255, 255, 0.1)",
      textColor: "#f2f2f2",
    },
    Disabled: {
      backgroundColor: "#3a3a3c",
      borderColor: "#2e2e30",
      hoverBackgroundColor: "#3a3a3c",
      activeBackgroundColor: "#3a3a3c",
      shadowColor: "rgba(0, 0, 0, 0.2)",
      textColor: "#8a8a8a",
    },
  },
  Checkbox: {
    ...DefaultLight.Checkbox,
    checkmarkColor: "#ffffff",
  },
  RadioButton: {
    ...DefaultLight.RadioButton,
  },
  IconButton: {
    ...DefaultLight.IconButton,
    color: "#ffffff",
    hover: { backgroundColor: "rgba(255, 255, 255, 0.1)" },
    active: { backgroundColor: "rgba(255, 255, 255, 0.2)" },
    focus: { shadowColor: "rgba(255, 255, 255, 0.2)" },
  },
};
