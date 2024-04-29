import { StoryObj, Meta } from "@storybook/react";
import PostPreview from "./PostPreview";
import { withRedux } from "../../../../helpers/decorators/withRedux";

const meta: Meta<typeof PostPreview> = {
  title: "Components/PostPreview",
  component: PostPreview,
  decorators: [withRedux],
};

export default meta;
type Story = StoryObj<typeof PostPreview>;

export const Default: Story = {};
