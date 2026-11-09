import type { Meta, StoryObj } from "@storybook/react-vite";
import { Sidebar } from "./Sidebar";
import { SidebarItem } from "./SidebarItem";

const meta = {
  title: "Base/Sidebar",
  component: Sidebar,
  argTypes: {
    closed: { control: "boolean" },
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    closed: false,
  },
};

export const Tests: Story = {
  args: {
    closed: false,
  },
  render: (args) => (
    <Sidebar {...args}>
      <SidebarItem icon={"home"} text={"Home"} />
      <SidebarItem icon={"inventory_2"} text={"Packages"} />
      <SidebarItem icon={"terminal"} text={"Console Management"} />
      <SidebarItem icon={"settings"} text={"Settings"} />
      <SidebarItem icon={"info"} text={"About"} />
    </Sidebar>
  ),
};
