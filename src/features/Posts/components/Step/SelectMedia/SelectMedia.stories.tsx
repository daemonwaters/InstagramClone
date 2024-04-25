import type { StoryObj, Meta } from "@storybook/react";
import SelectMedia from "./SelectMedia";
import { withSteps } from "../../../../../helpers/decorators/withSteps";

const meta: Meta<typeof SelectMedia> = {
  title: "Components/Steps/SelectMedia",
  component: SelectMedia,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/w3VRMXqFv6LRfIF9O4QFt1/Layouts?type=design&node-id=7%3A1487&mode=design&t=p1zkwkSIWTxjespg-1",
    },
    layout: "padded",
  },
  argTypes: {
    handleMediaSelect: {
      description: "A function which gets passed down to the onChange event",
    },
  },
  decorators: [withSteps],
};

export default meta;
type Story = StoryObj<typeof SelectMedia>;

export const Default: Story = {};
