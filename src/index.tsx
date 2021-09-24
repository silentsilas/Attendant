import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import App2 from "./App2";
import { GlobalStyle } from "../src/shared/global";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    {/* <App /> */}
    <App2 />
  </React.StrictMode>,
  document.getElementById("root")
);
