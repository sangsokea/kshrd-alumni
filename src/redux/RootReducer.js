import { combineReducers } from "redux";
import EmailReducer from "./reducer/EmailReducer";
import IsAuthenticationReducer from "./reducer/IsAuthenticationReducer";
import AboutMePageReducer from "./reducer/localReducer/AboutMePageReducer";
import ExperienceReducer from "./reducer/localReducer/ExperienceReducer";
import PortfolioPageReducer from "./reducer/localReducer/PortfolioPageReducer";
import LoginReducer from "./reducer/LoginReducer";
import RegisterReducer from "./reducer/RegisterReducer";

export default combineReducers({
  register: RegisterReducer,
  email: EmailReducer,
  login: LoginReducer,
  isAuth: IsAuthenticationReducer,
  localExperience: ExperienceReducer,
  aboutMePage: AboutMePageReducer,
  portfolioPage: PortfolioPageReducer,
  
});
