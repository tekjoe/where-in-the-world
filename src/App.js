import React from "react";
import { Router } from "react-router-dom";
import AppRouter from "./routers/AppRouter";
import { createBrowserHistory } from "history";
import { createGlobalStyle } from "styled-components";

const history = createBrowserHistory();

export default () => {
  return (
    <>
      <Router history={history}>
        <AppRouter />
      </Router>
      <GlobalStyle />
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:300,600,800&display=swap');
  *,*::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };
  html {
    font-family: 'Helvetica Neue', sans-serif;
  }
  body {
    background: hsl(207, 26%, 17%);
    color: hsl(0, 0%, 100%);
    font-size: 1rem;
  }
`;
