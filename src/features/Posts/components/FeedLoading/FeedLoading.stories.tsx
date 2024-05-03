import { StoryObj, Meta } from "@storybook/react";
import FeedLoading from "./FeedLoading";

const meta: Meta<typeof FeedLoading> = {
  title: "Components/FeedLoading",
  component: FeedLoading,
};

export default meta;
type Story = StoryObj<typeof FeedLoading>;

export const Default: Story = {};
