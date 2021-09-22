import React from 'react';
import { Switch, Route } from 'react-router-dom';

// layouts
import MainLayout from './components/layouts/MainLayout';
import HomepageLayout from './components/layouts/HomepageLayout';


// pages
import Homepage from '././pages/Homepage';
import Registration from './pages/Registration';
import Login from './pages/Login';

import './default.scss';

function App(props) {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
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
        <Route
          exact
          path="/login"
          render={() => (
            <MainLayout>
              <Login />
            </MainLayout>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
