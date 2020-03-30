import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import App from "./App";

const AppWithHelmet = () => {
  return (
    <>
      <Helmet>
        <title>Flaggy</title>
        <meta
          name="description"
          content="Flaggy – A Frontend Mentor Challenge"
        />
        <style>
          @import
          url('https://fonts.googleapis.com/css?family=Nunito+Sans:300,600,800&display=swap');
        </style>
      </Helmet>
      <App />
    </>
  );
};

ReactDOM.render(<AppWithHelmet />, document.getElementById("root"));
