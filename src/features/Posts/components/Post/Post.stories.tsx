import type { StoryObj, Meta } from "@storybook/react";
import Post from "./Post";
import MockAvatar from "../../../../assets/svgs/avatarmock.svg";
import MockPostImg from "../../../../assets/imgs/post-placeholder.avif";
import { withRouter } from "storybook-addon-remix-react-router";
const meta: Meta<typeof Post> = {
  title: "Components/Post",
  component: Post,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    design: {
      type: "figma",
      url: "https://www.figma.com/file/w3VRMXqFv6LRfIF9O4QFt1/Layouts?type=design&node-id=7%3A1487&mode=design&t=tgOyFlvSuRM4FvUo-1",
    },
  },
  argTypes: {
    user_avatar_url: {
      control: "text",
      description:
        "Url passed down to the post component displaying the author avatar",
    },
    username: {
      control: "text",
      description: "Username of the post author",
    },
    date: {
      control: "text",
      description: "Display when the post was published",
    },
    post_img_url: {
      control: "text",
      description: "Url of the post image",
    },
    likes_count: {
      control: "number",
      description: "Display the number of likes the post has",
    },
    caption: {
      control: "text",
      description: "Caption of the post",
    },
    editValue: {
      description:
        "An object containing additional filters or custom adjustmets made to the image",
    },
  },
  decorators: [withRouter],
};

export default meta;
type Story = StoryObj<typeof Post>;

export const Default: Story = {
  args: {
    user_avatar_url: MockAvatar,
    username: "randomuser",
    date: 200,
    post_img_url: MockPostImg,
    likes_count: 377,
    caption: "Hello this is our first post!",
    editValue: {
      filter: "",
      customClass: {},
    },
  },
};
