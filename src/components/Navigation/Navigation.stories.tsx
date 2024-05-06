import type { StoryObj, Meta } from "@storybook/react";
import Navigation from "./Navigation";
import { expect, userEvent, within } from "@storybook/test";
import { withRedux } from "../../helpers/decorators/withRedux";
import { withRouter } from "storybook-addon-remix-react-router";

const meta: Meta<typeof Navigation> = {
  title: "Components/Navigation",
  component: Navigation,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "inline-radio",
      description:
        "Specifies the variant of the navigation component either full-width or decreased",
    },
  },
  decorators: [withRedux, withRouter],
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const MoreListItem = canvas.getAllByRole("listitem")[8];

    await step("The more options should render", async () => {
      await expect(MoreListItem).toBeInTheDocument();
    });

    await step("The user should click on the More options", async () => {
      await userEvent.click(MoreListItem, { delay: 200 });
    });

    await step("The overlay should render", async () => {
      await expect(canvas.getByText("Saved")).toBeInTheDocument();
    });

    await step("The user should click to close the overlay", async () => {
      await userEvent.click(MoreListItem, { delay: 200 });
    });

    await step("The overlay should not be in the document", async () => {
      await expect(canvas.queryByText("Saved")).toBeFalsy();
    });
  },
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const FullWidth: Story = {
  args: {
    variant: "full-width",
  },
};

export const Decreased: Story = {
  args: {
    variant: "decreased",
  },
};
