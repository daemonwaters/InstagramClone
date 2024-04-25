import { Meta, StoryObj } from "@storybook/react";
import Range from "./Range";

const meta: Meta<typeof Range> = {
  title: "Components/Range",
  component: Range,
  argTypes: {
    title: {
      description: "Title of the given Range component.",
    },
  },
};

export default meta;
export const Default: StoryObj<typeof Range> = {
  render: () => <Range title="Brightness" />,
  parameters: {
    layout: "padded",
  },
};
