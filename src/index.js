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
      </Helmet>
      <App />
    </>
  );
};

ReactDOM.render(<AppWithHelmet />, document.getElementById("root"));
