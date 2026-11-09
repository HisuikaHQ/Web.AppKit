import type { Meta, StoryObj } from "@storybook/react-vite";
import { Link } from "./Link";

const meta = {
  title: "Base/Link",
  component: Link,
  argTypes: {
    href: { control: "text" },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "https://nuka.works/",
    disabled: false,
    children: "Hello World !",
  },
};
