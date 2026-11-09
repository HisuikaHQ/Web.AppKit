import type { Meta, StoryObj } from "@storybook/react-vite";
import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";
import { MenuList } from "./MenuList";

const meta = {
  title: "Base/Menu",
  component: Menu,
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

const render: Story["render"] = (args) => (
  <Menu {...args}>
    <MenuList>
      <MenuItem>About This Mac</MenuItem>
      <MenuItem>System Preferences...</MenuItem>
      <MenuItem>App Store...</MenuItem>
      <MenuItem>---</MenuItem>
      <MenuItem>Recent Items</MenuItem>
      <MenuItem>Force Quit...</MenuItem>
      <MenuItem>---</MenuItem>
      <MenuItem>Sleep</MenuItem>
      <MenuItem>Restart...</MenuItem>
      <MenuItem>Shutdown...</MenuItem>
      <MenuItem>---</MenuItem>
      <MenuItem>Lock Screen</MenuItem>
      <MenuItem>Log Out...</MenuItem>
    </MenuList>
  </Menu>
);

export const Default: Story = {
  args: {
  title: "Apple Logo",
},
  render,
};
