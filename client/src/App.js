import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Planner from "./components/Planner";

export default () => {
  return (
    <Router>
      <Route path="/" exact component={Planner} />
    </Router>
  );
};
