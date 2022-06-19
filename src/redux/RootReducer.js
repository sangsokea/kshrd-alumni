import { combineReducers } from "redux";
import EmailReducer from "./reducer/EmailReducer";
import ExperienceReducer from "./reducer/localReducer/ExperienceReducer";
import LoginReducer from "./reducer/LoginReducer";
import RegisterReducer from "./reducer/RegisterReducer";

export default combineReducers({
  register: RegisterReducer,
  email: EmailReducer,
  login: LoginReducer,
  localExperience: ExperienceReducer
});
