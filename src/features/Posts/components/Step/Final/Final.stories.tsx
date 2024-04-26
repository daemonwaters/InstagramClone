import type { StoryObj, Meta } from "@storybook/react";
import Final from "./Final";
import { withRedux } from "../../../../../helpers/decorators/withRedux";

const meta: Meta<typeof Final> = {
  title: "Components/Steps/Final",
  component: Final,
  decorators: [withRedux],
};

export default meta;
type Story = StoryObj<typeof Final>;

export const Default: Story = {};
