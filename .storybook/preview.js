import React from "react";

import { GlobalStyle } from "../src/shared/global";
// Global decorator to apply the styles to all stories
export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <div
        style={{
          padding: "20px",
          background: "linear-gradient(180deg, #060b2e 0%, #051745 100%)",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Story />
      </div>
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
