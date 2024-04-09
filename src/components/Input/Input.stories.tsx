import type { StoryObj, Meta } from "@storybook/react";
import { within, expect, userEvent } from "@storybook/test";
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
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);
    const username = canvas.getByPlaceholderText(args.placeholder);

    expect(username).toBeInTheDocument();

    step("The user types in his/her username", async () => {
      userEvent.type(username, "Some Random Username");
    });
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Password",
  },
  play: ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement);
    const password = canvas.getByPlaceholderText(args.placeholder);
    expect(password).toBeInTheDocument();

    step("The user types in his/her password", async () => {
      userEvent.type(password, "AAAAAAA");
    });
  },
};

export const Playground: Story = {
  render: (args) => <Input {...args} />,
};
