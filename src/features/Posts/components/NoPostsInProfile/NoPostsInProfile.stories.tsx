import { StoryObj, Meta } from "@storybook/react";
import NoPostsInProfile from "./NoPostsInProfile";

const meta: Meta<typeof NoPostsInProfile> = {
  title: "Components/NoPostsInProfile",
  component: NoPostsInProfile,
};

export default meta;
type Story = StoryObj<typeof NoPostsInProfile>;

export const Default: Story = {};
