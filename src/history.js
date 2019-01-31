let _history;

if (typeof document !== "undefined") {
  const createBrowserHistory = require("history/createBrowserHistory").default;

  _history = createBrowserHistory();
}

export default _history;