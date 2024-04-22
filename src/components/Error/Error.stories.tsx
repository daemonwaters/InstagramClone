import type { StoryObj, Meta } from "@storybook/react";
import Error from "./Error";

const meta: Meta<typeof Error> = {
  title: "Components/Error",
  component: Error,
};

export default meta;

export const Default: StoryObj<typeof Error> = {};
