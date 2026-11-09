import type { Meta, StoryObj } from "@storybook/react-vite";
import { Spinner } from "./Spinner";

const meta = {
  title: "Misc/Spinner",
  component: Spinner,
  argTypes: {
    color: {
      options: ["Default", "Blue"],
      control: { type: "select" },
    },
    size: {
      options: ["Small", "Medium", "Large"],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "Medium",
    color: "Default",
  },
};

export const Blue: Story = {
  args: {
    size: "Medium",
    color: "Blue",
  },
};
