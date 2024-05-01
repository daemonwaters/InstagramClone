import type { StoryObj, Meta } from "@storybook/react";
import Actions from "./Actions";
import { expect, fn, userEvent, within } from "@storybook/test";

const meta: Meta<typeof Actions> = {
  title: "Components/Actions",
  component: Actions,
  parameters: {
    layout: "padded",
    design: {
      type: "figma",
      url: "https://www.figma.com/file/w3VRMXqFv6LRfIF9O4QFt1/Layouts?type=design&node-id=7%3A1487&mode=design&t=tgOyFlvSuRM4FvUo-1",
    },
  },
  argTypes: {
    extraStyles: {
      description: "An object containing any extra css styling",
      defaultValue: {},
    },
    likeHandler: {
      description: "A function passed down to control like functionality",
    },
    unlikeHandler: {
      description: "A function passed down to control unlike functionality",
    },
    didLike: {
      description: "A boolean describing if the content is liked or not",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Actions>;

export const Default: Story = {
  args: {
    didLike: false,
    likeHandler: fn(),
    unlikeHandler: fn(),
  },
  render: (args) => <Actions {...args} />,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("The user should click on Like Button", async () => {
      await userEvent.click(canvas.getByAltText("Like"));
    });

    await step("The like button should be in active state", async () => {
      await expect(canvas.getByAltText("Like")).toBeInTheDocument();
    });

    await step("The user should click to undo the like", async () => {
      await userEvent.click(canvas.getByAltText("Like"));
    });
  },
};
