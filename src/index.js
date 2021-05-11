import React from "react";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hydrate, render } from "react-dom";
import Home from "./pages/Home";
import CreateMeal from "./pages/Meal/Create";
import PatchMeal from "./pages/Meal/Patch";
import Navbar from "./components/Navbar";
import "semantic-ui-css/semantic.min.css";
import Meals from "./pages/Meals";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Navbar>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/meals">
              <Meals />
            </Route>
            <Route exact path="/meals/create">
              <CreateMeal />
            </Route>
            <Route exact path="/meals/:mealId">
              <PatchMeal />
            </Route>
            <Route exact path="/settings">
              <Settings />
            </Route>
          </Switch>
        </Navbar>
      </Router>
    </React.StrictMode>
  );
};

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
