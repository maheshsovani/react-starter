import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import { install } from "redux-loop";
import createRootReducer from "../reducers";

export const history = createBrowserHistory();

export default function configureStore(initialState) {
  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    createRootReducer(history),
    initialState,
    composeEnhancer(applyMiddleware(routerMiddleware(history)), install())
  );

  // Hot reloading
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("../reducers", () => {
      store.replaceReducer(createRootReducer(history));
    });
  }

  return store;
}
