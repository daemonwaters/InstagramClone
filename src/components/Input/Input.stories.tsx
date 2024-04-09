import type { StoryObj, Meta } from "@storybook/react";
import { within, expect } from "@storybook/test";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/w3VRMXqFv6LRfIF9O4QFt1/Layouts?type=design&node-id=1%3A448&mode=design&t=ARCNoK84jjNvbiaU-1",
    },
  },
  argTypes: {
    type: {
      control: "select",
      description: "Specifies the type of Input either Text or Password",
      options: ["text", "password"],
    },
    placeholder: {
      control: "text",
      description: "Placeholder for the Input",
    },
    value: {
      control: "text",
      description:
        "The value assosiated with the Input element , most likely a string state",
    },
    onChange: {
      description:
        "A function passed down to component handling the change event",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: {
    type: "text",
    placeholder: "Phone number,username or email address",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Password",
  },
};

export const Playground: Story = {
  render: (args) => <Input {...args} />,
};
