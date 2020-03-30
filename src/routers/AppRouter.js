import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../components/HomePage";
import Header from "../components/Header";
import CountryPage from "../components/CountryPage";

const AppRouter = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/country" component={CountryPage} />
      </Switch>
    </>
  );
};

export default AppRouter;
