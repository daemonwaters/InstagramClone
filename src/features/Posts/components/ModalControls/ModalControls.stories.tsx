import type { StoryObj, Meta } from "@storybook/react";
import ModalControls from "./ModalControls";

const meta: Meta<typeof ModalControls> = {
  title: "Components/ModalControls",
  component: ModalControls,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/w3VRMXqFv6LRfIF9O4QFt1/Layouts?type=design&node-id=7%3A1487&mode=design&t=p1zkwkSIWTxjespg-1",
    },
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof ModalControls>;

export const Default: Story = {
  decorators: [
    (story) => (
      <div style={{ position: "relative", marginTop: "3rem" }}>{story()}</div>
    ),
  ],
};
