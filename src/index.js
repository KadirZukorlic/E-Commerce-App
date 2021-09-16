import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Route } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Route>
      <App name="kadir" />
    </Route>
  </React.StrictMode>,
  document.getElementById("root")
);
