import type { Meta, StoryObj } from "@storybook/react-vite";
import { AppHeader } from "./AppHeader";
import { SampleMenuBar } from "../Base/MenuBar.stories";

const meta = {
  title: "Appl/AppHeader",
  component: AppHeader,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    title: { control: "text" },
  },
} satisfies Meta<typeof AppHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Hello World !",
  },
};

export const AppBar: Story = {
  args: {
    title: "Storybook",
  },
  render: (args) => (
    <AppHeader {...args}>
      <SampleMenuBar />
    </AppHeader>
  ),
};

export const AppBarNoTitle: Story = {
  ...AppBar,
  args: {},
};
