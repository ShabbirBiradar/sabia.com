import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { AppContainer } from "./views/app.container";
import { Dashboard } from "./views/components/dashboard.js/dashboard";
import "antd/dist/antd.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          component={(props) => (
            <AppContainer>
              <Dashboard {...props} />
            </AppContainer>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
