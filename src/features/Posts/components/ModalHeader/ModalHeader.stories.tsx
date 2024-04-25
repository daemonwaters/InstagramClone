import type { StoryObj, Meta } from "@storybook/react";
import ModalHeader from "./ModalHeader";
import { withSteps } from "../../../../helpers/decorators/withSteps";

const meta: Meta<typeof ModalHeader> = {
  title: "Components/ModalHeader",
  component: ModalHeader,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/w3VRMXqFv6LRfIF9O4QFt1/Layouts?type=design&node-id=7%3A1487&mode=design&t=p1zkwkSIWTxjespg-1",
    },
    layout: "padded",
  },
  argTypes: {
    variant: {
      description: "Describes the variant of header",
      control: "select",
      options: ["default", "withActions"],
    },
    title: {
      description: "The title of header",
    },
    buttonTitle: {
      description: "Title given to the button of header",
    },
  },
  decorators: [withSteps],
};

export default meta;
type Story = StoryObj<typeof ModalHeader>;

export const Default: Story = {
  args: { variant: "default", title: "Create new post", extended: false },
};

export const withActions: Story = {
  args: {
    variant: "withActions",
    title: "Crop",
    extended: true,
    buttonTitle: "Next",
  },
};
