import { combineReducers } from "redux";
import AccessTokenReducer from "./reducer/GetUserProfileReducer";
import EmailReducer from "./reducer/EmailReducer";
import IsAuthenticationReducer from "./reducer/IsAuthenticationReducer";
import AboutMePageReducer from "./reducer/localReducer/AboutMePageReducer";
import ExperienceReducer from "./reducer/localReducer/ExperienceReducer";
import PortfolioPageReducer from "./reducer/localReducer/PortfolioPageReducer";
import LoginReducer from "./reducer/LoginReducer";
import RegisterReducer from "./reducer/RegisterReducer";
import GetUserProfileReducer from "./reducer/GetUserProfileReducer";
import UpdateProfileStatusReducer from "./reducer/UpdateProfileStatusReducer";

export default combineReducers({
  register: RegisterReducer,
  email: EmailReducer,
  login: LoginReducer,
  isAuth: IsAuthenticationReducer,
  localExperience: ExperienceReducer,
  aboutMePage: AboutMePageReducer,
  portfolioPage: PortfolioPageReducer,
  getuserProfile: GetUserProfileReducer,
  updatestatusUser : UpdateProfileStatusReducer,
});
