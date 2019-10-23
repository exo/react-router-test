import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StaticPage from "./StaticPage";
import DynamicPage from "./DynamicPage";
import HomePage from "./HomePage";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/static">Static</Link>
            </li>
            <li>
              <Link to="/15">Dynamic</Link>
            </li>
            <li>
              <Link to="/16">Redirect via Dynamic</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/static">
            <StaticPage />
          </Route>
          <Route path="/:id">
            <DynamicPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
