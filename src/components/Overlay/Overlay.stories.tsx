import type { StoryObj, Meta } from "@storybook/react";
import Overlay from "./Overlay";

const meta: Meta<typeof Overlay> = {
  title: "Components/Overlay",
  component: Overlay,
  parameters: {
    layout: "padded",
    design: {
      type: "figma",
      url: "https://www.figma.com/file/w3VRMXqFv6LRfIF9O4QFt1/Layouts?type=design&node-id=7%3A1487&mode=design&t=G0w7uPH8tl6RY1VP-1",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Overlay>;

export const Default: Story = {};
