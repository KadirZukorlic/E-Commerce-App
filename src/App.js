import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { auth } from "./firebase/utils";

// layouts
import MainLayout from "./components/layouts/MainLayout";
import HomepageLayout from "./components/layouts/HomepageLayout";

// pages
import Homepage from "././pages/Homepage";
import Registration from "./pages/Registration";
import Login from "./pages/Login";

import "./default.scss";

const initialState = {
  currentUser: null,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
  }

  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged((userAuth) => {
      if (!userAuth) return;

      this.setState({
        currentUser: userAuth,
      });
    });
  }

  componentWillUnmount() {
    this.authListener();
  }

  render() {
    const { currentUser } = initialState;

    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <HomepageLayout currentUser={currentUser}>
                <Homepage />
              </HomepageLayout>
            )}
          />
          <Route
            exact
            path="/registration"
            render={() => (
              <MainLayout currentUser={currentUser}>
                <Registration />
              </MainLayout>
            )}
          />
          <Route
            exact
            path="/login"
            render={() => (
              <MainLayout currentUser={currentUser}>
                <Login />
              </MainLayout>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
