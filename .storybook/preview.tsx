import type { Preview } from "@storybook/react-vite";
import { ThemeProvider } from "styled-components";
import { DefaultDark } from "../src/Common/Themes/DefaultDark";
import { DefaultLight } from "../src/Common/Themes/DefaultLight";
import "../src/Common/fonts.scss";

const themes = { Light: DefaultLight, Dark: DefaultDark };

const preview: Preview = {
  tags: ["autodocs"],
  globalTypes: {
    theme: {
      description: "UiKit theme",
      toolbar: {
        title: "Theme",
        icon: "paintbrush",
        items: ["Light", "Dark"],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: "Light",
  },
  decorators: [
    (Story, context) => {
      const theme = themes[context.globals.theme as keyof typeof themes] ?? DefaultLight;
      return (
        <ThemeProvider theme={theme}>
          <div style={{ background: theme.Base.defaultBackgroundColor, color: theme.Base.textColor, padding: 16 }}>
            <Story />
          </div>
        </ThemeProvider>
      );
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
