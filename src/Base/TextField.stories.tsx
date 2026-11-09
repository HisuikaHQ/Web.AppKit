import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextField } from "./TextField";

const meta = {
  title: "Base/TextField",
  component: TextField,
  argTypes: {
    placeholder: { control: "text" },
    type: {
      options: ["text", "password", "email", "number", "tel", "url"],
      control: { type: "select" },
    },
    disabled: { control: "boolean" },
    invalid: { control: "boolean" },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Hello World !",
    type: "text",
    disabled: false,
    invalid: false,
  },
};
