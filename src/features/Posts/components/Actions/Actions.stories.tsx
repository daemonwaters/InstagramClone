import type { StoryObj, Meta } from "@storybook/react";
import Actions from "./Actions";
import { expect, userEvent, within } from "@storybook/test";

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
};

export default meta;
type Story = StoryObj<typeof Actions>;

export const Default: Story = {
  render: () => <Actions />,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("The user should click on Like Button", async () => {
      await userEvent.click(canvas.getByTestId("notliked"));
    });

    await step("The like button should be in active state", async () => {
      await expect(canvas.getByTestId("liked")).toBeInTheDocument();
    });

    await step("The user should click to undo the like", async () => {
      await userEvent.click(canvas.getByTestId("liked"));
    });
  },
};
