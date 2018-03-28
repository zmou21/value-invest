import React from "react";
import QuickSearch from "./pages/QuickSearch";
import Div from "./components/Dashboard";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
  // <Router>
  //   <div>
  //     <Nav />
  //     <Switch>
  //       <Route exact path="/" component={Books}/>
  //       <Route component={NoMatch}/>
  //     </Switch>
  //   </div>
  // </Router>
  <div>
    <Div />
    <QuickSearch />
  </div>
);

export default App;
