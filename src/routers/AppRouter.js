import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "../components/HomePage";
import Header from "../components/Header";
import CountryPage from "../components/CountryPage";

const AppRouter = ({ toggleTheme, theme }) => {
  return (
    <>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/country/:alpha3Code" component={CountryPage} />
      </Switch>
    </>
  );
};

export default AppRouter;
