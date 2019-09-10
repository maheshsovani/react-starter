import { combineReducers } from "redux-loop";
import { connectRouter } from "connected-react-router";

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
  });

export default rootReducer;
