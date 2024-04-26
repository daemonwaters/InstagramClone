import type { StoryObj, Meta } from "@storybook/react";
import Crop from "./Crop";
import { withRedux } from "../../../../../helpers/decorators/withRedux";

const meta: Meta<typeof Crop> = {
  title: "Components/Steps/Crop",
  component: Crop,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/w3VRMXqFv6LRfIF9O4QFt1/Layouts?type=design&node-id=7%3A1487&mode=design&t=p1zkwkSIWTxjespg-1",
    },
    layout: "padded",
  },
  decorators: [withRedux],
};

export default meta;
type Story = StoryObj<typeof Crop>;

export const Default: Story = {};
