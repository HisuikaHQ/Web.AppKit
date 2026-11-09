import type { Meta, StoryObj } from "@storybook/react-vite";
import { SimpleApp } from "./SimpleApp";

const meta = {
  title: "Examples/SimpleApp",
  component: SimpleApp,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SimpleApp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
