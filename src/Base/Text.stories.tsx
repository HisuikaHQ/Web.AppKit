import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "./Text";

const meta = {
  title: "Base/Text",
  component: Text,
  argTypes: {
    text: { control: "text" },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Hello World !",
    disabled: false,
  },
};
