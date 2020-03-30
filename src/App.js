import React, { useState } from "react";
import { Router } from "react-router-dom";
import AppRouter from "./routers/AppRouter";
import { createBrowserHistory } from "history";
import { GlobalStyle } from "./utils/global";
import { lightTheme, darkTheme } from "./utils/theme";
import { ThemeProvider } from "styled-components";

const history = createBrowserHistory();

export default () => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <Router history={history}>
          <AppRouter toggleTheme={toggleTheme} theme={theme} />
        </Router>
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
};
