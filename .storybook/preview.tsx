import type { Preview } from "@storybook/react";
import React from "react";


const withBoxSizing = (Story)=> {
    return (
        <div style={{padding:0,margin:0,boxSizing:'border-box'}}>
            <Story/>
        </div>
    )
}

const preview: Preview = {
  parameters: {
    actions : {argTypesRegex: "^on[A-Z].*"},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  } ,
  decorators : [withBoxSizing]
};


export default preview;
