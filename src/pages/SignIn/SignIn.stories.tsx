import type { StoryObj, Meta } from "@storybook/react";
import SignIn from "./SignIn";
import { userEvent, within } from "@storybook/test";
import {
  withRouter,
  reactRouterParameters,
} from "storybook-addon-remix-react-router";
import { withRedux } from "../../helpers/decorators/withRedux";

const meta: Meta<typeof SignIn> = {
  title: "Pages/SignIn",
  component: SignIn,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/w3VRMXqFv6LRfIF9O4QFt1/Layouts?type=design&node-id=1%3A2&mode=design&t=7IywYCBA2XymE4ti-1",
    },
    reactRouter: reactRouterParameters({
      routing: {
        path: "/",
      },
    }),
  },
  decorators: [withRouter, withRedux],
};

export default meta;
type Story = StoryObj<typeof SignIn>;

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step(
      "The user should fill out the username and password",
      async () => {
        await userEvent.type(
          canvas.getByPlaceholderText("Phone number,username or email address"),
          "RandomUsername"
        );
        await userEvent.type(
          canvas.getByPlaceholderText("Password"),
          "password123"
        );
      }
    );
  },
};
