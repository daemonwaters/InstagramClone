import type { StoryObj, Meta, Decorator } from "@storybook/react";
import Avatar from "./Avatar";
import { Variants } from "./Avatar";
import AvatarMock from "../../assets/svgs/avatarmock.svg";

const withFlex: Decorator = (story) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      {story()}
    </div>
  );
};

const meta: Meta<typeof Avatar> = {
  title: "Atoms/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    src: {
      control: "text",
      description: "An url used for the img src attribute",
    },
    variant: {
      control: "select",
      options: [...Object.values(Variants)],
      description: "Specifies the width and height of avatar component",
    },
  },
  parameters: {
    layout: "padded",
  },
  args: {
    src: AvatarMock,
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Navigation: Story = {
  args: {
    variant: Variants.navigation,
  },
};

export const Profile: Story = {
  args: {
    variant: Variants.profile,
  },
};

export const Story: Story = {
  args: {
    variant: Variants.story,
  },
};

export const UserPreview: Story = {
  args: {
    variant: Variants.userPreview,
  },
};

export const InboxRow: Story = {
  args: {
    variant: Variants.inboxRow,
  },
};

export const InboxHeader: Story = {
  args: {
    variant: Variants.inboxHeader,
  },
};

export const Msg: Story = {
  args: {
    variant: Variants.msg,
  },
};


export const PostPreview: Story = {
  args: {
    variant: Variants.postPreview,
  },
};

export const Sizes: Story = {
  render: (args) => (
    <>
      {Object.values(Variants).map((variant) => (
        <Avatar {...args} variant={variant} />
      ))}
    </>
  ),
  decorators: [withFlex],
};
