import GlobalStyles from "./styles/global";
import React from "react";
import ReactDOM from "react-dom/client";
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { SignOut } from "./pages/SignOut";
import { NewTask } from "./pages/NewTask";
import { Details } from "./pages/Details";
import { UpdateTask } from "./pages/UpdateTask";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Details />
    </ThemeProvider>
  </React.StrictMode>
);
