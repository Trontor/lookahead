import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Planner from "./components/Planner";
import Header from "./components/Header";

export default () => {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Planner} />
    </Router>
  );
};
