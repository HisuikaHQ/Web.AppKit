import {Meta, StoryObj} from "@storybook/react-vite";
import {IconButton} from "./IconButton";
import {ComponentBaseProps} from "../Common/Interfaces/ComponentBaseProps";

const meta: Meta<ComponentBaseProps> = {
    title: "Base/IconButton",
    component: IconButton,
    argTypes: {
        disabled: {control: "boolean"},
    },
};

type Story = StoryObj<typeof meta>;
export const Default = {
    args: {
        disabled: false,
    },
} satisfies Story;

export default meta;
