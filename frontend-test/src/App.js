import React from "react";
import { BrowserRouter as Switch, useLocation, Route } from "react-router-dom";
import Main from "./page/Main";
import "./App.css";

function App() {
  const location = useLocation();
  return (
    <div>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
