import type { Preview } from "@storybook/react";
import "../src/App.scss";
import {withRedux} from './decorators/withRedux'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "fullscreen",
  },
  decorators : [withRedux]
};

export default preview;
