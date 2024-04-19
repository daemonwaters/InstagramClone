import type { StoryObj, Meta } from "@storybook/react";
import StoryContainer from "./StoryContainer";
import AvatarMock from "../../../../assets/svgs/avatarmock.svg";
import Story from "../Story/Story";

const meta: Meta<typeof StoryContainer> = {
  title: "Components/StoryContainer",
  component: StoryContainer,
};

export default meta;
type Story = StoryObj<typeof StoryContainer>;

export const Default: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <StoryContainer>
      {Array.from(Array(8).keys()).map((key) => (
        <Story key={key} avatar_url={AvatarMock} username="username" />
      ))}
    </StoryContainer>
  ),
};
