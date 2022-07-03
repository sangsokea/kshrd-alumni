import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./RootReducer";
import logger from "redux-logger";
const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk)),
);
export default store;
