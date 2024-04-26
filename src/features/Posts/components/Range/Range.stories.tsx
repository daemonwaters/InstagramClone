import { Meta, StoryObj } from "@storybook/react";
import Range from "./Range";
import { withRedux } from "../../../../helpers/decorators/withRedux";

const meta: Meta<typeof Range> = {
  title: "Components/Range",
  component: Range,
  argTypes: {
    title: {
      description: "Title of the given Range component.",
    },
  },
  decorators : [withRedux]
};

export default meta;
export const Default: StoryObj<typeof Range> = {
  args: {
    title: "Brightness",
  },
  render: (args) => <Range {...args} />,
  parameters: {
    layout: "padded",
  },
};
