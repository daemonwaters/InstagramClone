import type { StoryObj, Meta } from "@storybook/react";
import Modal from "./Modal";
import { withSteps } from "../../../../helpers/decorators/withSteps";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/w3VRMXqFv6LRfIF9O4QFt1/Layouts?type=design&node-id=7%3A1487&mode=design&t=p1zkwkSIWTxjespg-1",
    },
    layout: "padded",
  },
  decorators: [withSteps],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {};
