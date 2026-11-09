import type { Meta, StoryObj } from "@storybook/react-vite";
import { ListView } from "./ListView";

const meta = {
  title: "Base/ListView",
  component: ListView,
} satisfies Meta<typeof ListView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
