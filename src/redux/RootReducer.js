import { combineReducers } from "redux";
import EmailReducer from "./reducer/EmailReducer";
import RegisterReducer from "./reducer/RegisterReducer";

export default combineReducers({
  register: RegisterReducer,
  email: EmailReducer
});
