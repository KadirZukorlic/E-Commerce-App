import React from "react";
import { Switch, Route } from "react-router-dom";

// layouts
import MainLayout from "./components/layouts/MainLayout";

// pages
import Homepage from "././pages/Homepage";
import Registration from "./pages/Registration";

import "./default.scss";

function App(props) {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <MainLayout>
              <Homepage />
            </MainLayout>
          )}
        />
        <Route
          exact
          path="/registration"
          render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
