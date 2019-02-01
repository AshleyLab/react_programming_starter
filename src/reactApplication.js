import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";
import browserHistory from "./history";
import Layout from "./components/layout";

class ReactApp extends Component {
  render() {
    let _history = (typeof history === "object") ? browserHistory : createMemoryHistory("/");
    return (
      <Router history={_history}>
        <Route component={Layout} path="/" />
      </Router>
    );
  }
}

export default ReactApp;
