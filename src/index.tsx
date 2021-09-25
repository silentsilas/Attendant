import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyle } from "../src/shared/global";
import App from "./App";
import App2 from "./App2";
import SplashPage from "./SplashPage";
import SecretCreationPage1 from "./SecretCreationPage1";
import SecretCreationPage2 from "./SecretCreationPage2";
import SecretCreationPage3 from "./SecretCreationPage3";
import VerifyPage from "./VerifyPage";
import SecretRevealPage from "./SecretRevealPage";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    {/* <App /> */}
    {/* <App2 /> */}
    {/* <SplashPage /> */}
    {/* <SecretCreationPage1 /> */}
    {/* <SecretCreationPage2 /> */}
    {/* <SecretCreationPage3 /> */}
    {/* <VerifyPage /> */}
    <SecretRevealPage />
  </React.StrictMode>,
  document.getElementById("root")
);
