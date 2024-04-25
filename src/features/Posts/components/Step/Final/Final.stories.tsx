import type { StoryObj, Meta } from "@storybook/react";
import Final from "./Final";
import { withSteps } from "../../../../../helpers/decorators/withSteps";

const meta: Meta<typeof Final> = {
  title: "Components/Steps/Final",
  component: Final,
  decorators : [withSteps]
};

export default meta;
type Story = StoryObj<typeof Final>;

export const Default: Story = {};
