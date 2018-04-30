import React from "react";
import QuickSearch from "./pages/QuickSearch";
import Analysis from "./pages/Analysis";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
// import Div from "./components/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
  <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/search" component={QuickSearch}/>
        <Route exact path="/intrinsic" component={Analysis}/>
        <Route exact path="/profile" component={Profile}/>
      </Switch>
  </Router>

);

export default App;
