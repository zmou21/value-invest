import React from "react";
import QuickSearch from "./pages/QuickSearch";
import Analysis from "./pages/Analysis";
import Div from "./components/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
  <Router>
    <div className="grid-container">
      <Div />
      <Switch>
        <Route exact path="/" component={QuickSearch}/>
        <Route exact path="/search" component={QuickSearch}/>
        <Route exact path="/intrinsic" component={Analysis}/>
      </Switch>
    </div>
  </Router>

);

export default App;
