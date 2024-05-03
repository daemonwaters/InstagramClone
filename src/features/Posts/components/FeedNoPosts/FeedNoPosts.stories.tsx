import { StoryObj, Meta } from "@storybook/react";
import FeedNoPosts from "./FeedNoPosts";

const meta: Meta<typeof FeedNoPosts> = {
  title: "Components/FeedNoPosts",
  component: FeedNoPosts,
};

export default meta;
type Story = StoryObj<typeof FeedNoPosts>;

export const Default: Story = {};
