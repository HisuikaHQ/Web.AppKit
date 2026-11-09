import type { Meta, StoryObj } from "@storybook/react-vite";
import { MenuBar, MenuBarProps } from "./MenuBar";
import { Menu } from "./Menu";
import { MenuList } from "./MenuList";
import { MenuItem } from "./MenuItem";

const meta = {
  title: "Base/MenuBar",
  component: MenuBar,
  excludeStories: ["SampleMenuBar"],
} satisfies Meta<typeof MenuBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SampleMenuBar = (args: MenuBarProps) => (
  <MenuBar {...args}>
    <Menu title={"File"}>
      <MenuList>
        <MenuItem>New File...</MenuItem>
        <MenuItem>Open...</MenuItem>
        <MenuItem>Quit</MenuItem>
      </MenuList>
    </Menu>

    <Menu title={"Edit"}>
      <MenuList>
        <MenuItem>Undo Action</MenuItem>
        <MenuItem>Redo Action</MenuItem>
        <MenuItem>Copy</MenuItem>
        <MenuItem>Paste</MenuItem>
      </MenuList>
    </Menu>

    <Menu title={"Tools"}>
      <MenuList>
        <MenuItem>Refresh</MenuItem>
      </MenuList>
    </Menu>

    <Menu title={"Help"}>
      <MenuList>
        <MenuItem>Get Help on GitHub...</MenuItem>
        <MenuItem>About...</MenuItem>
      </MenuList>
    </Menu>
  </MenuBar>
);

export const MenubarTest: Story = {
  args: {},
  render: (args) => <SampleMenuBar {...args} />,
};
