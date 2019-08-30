import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./store/configure-store";
import "../assets/_overrideBootstrap.scss";
import App from "./pages/app";

const initialState = {
  sample: {
    name: "ThoughtWorks",
    data: []
  }
};

const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
