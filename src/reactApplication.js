import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import _history from "./history";
import Layout from "./components/layout";

class ReactApp extends Component {
  render() {
    return (
      <Router history={_history}>
        <Route component={Layout} path="/" />
      </Router>
    );
  }
}

export default ReactApp;
