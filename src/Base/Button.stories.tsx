import { Meta, StoryObj } from "@storybook/react-vite";
import { Button, ButtonProps } from "./Button";

const meta: Meta<ButtonProps> = {
  title: "Base/Button",
  component: Button,
  argTypes: {
    color: {
      options: [
        "Default",
        "Primary",
        "Success",
        "Warning",
        "Alert",
        "Disabled",
      ],
      control: { type: "select" },
    },
    size: {
      options: ["Small", "Medium", "Large"],
      control: { type: "select" },
    },
    label: { control: "text" },
    disabled: { control: "boolean" },
  },
};

type Story = StoryObj<typeof meta>;
export const Default = {
  args: {
    color: "Default",
    label: "Default",
    disabled: false,
    size: "Small",
  },
} satisfies Story;

export const Primary = {
  args: {
    color: "Primary",
    label: "Primary",
    disabled: false,
    size: "Small",
  },
} satisfies Story;

export const Success = {
  args: {
    color: "Success",
    label: "Success",
    disabled: false,
    size: "Small",
  },
} satisfies Story;

export const Warning = {
  args: {
    color: "Warning",
    label: "Warning",
    disabled: false,
    size: "Small",
  },
} satisfies Story;

export const Alert = {
  args: {
    color: "Alert",
    label: "Alert",
    disabled: false,
    size: "Small",
  },
} satisfies Story;

export const Disabled = {
  args: {
    color: "Default",
    label: "Disabled",
    disabled: true,
    size: "Small",
  },
} satisfies Story;

export default meta;
