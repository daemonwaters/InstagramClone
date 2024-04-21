import type { StoryObj, Meta } from "@storybook/react";
import Button from "./Button";
import { within, expect, fn } from "@storybook/test";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/w3VRMXqFv6LRfIF9O4QFt1/Layouts?type=design&node-id=1%3A448&mode=design&t=ARCNoK84jjNvbiaU-1",
    },
  },
  argTypes: {
    title: {
      control: "text",
      description: "The text inside the button",
    },
    variant: {
      control: "radio",
      options: ["primary", "secondary", "ghost"],
      description: "Describes the type of button variant",
    },
    extraStyles: {
      control: "object",
      description: "An object containing extra styles for the button",
      defaultValue: {},
    },
    onClick: {
      description: "A function that gets passed to the button event listener",
    },
    type: {
      description: "The type attribute of button",
      options: ["submit", "button"],
      control: "radio",
    },
    disable: {
      description: "A boolean specifying if the button needs to be disabled",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("button")).toBeInTheDocument();
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    title: "Button",
    onClick: fn(),
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: "secondary",
  },
};

export const Ghost: Story = {
  args: {
    ...Primary.args,
    variant: "ghost",
  },
};

export const Playground: Story = {
  args: {
    title: "Button",
  },
  render: (args) => <Button {...args} />,
};
