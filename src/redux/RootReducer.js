import { combineReducers } from "redux";
import CVBuilderReducer from "./reducer/CVBuilderReducer";
import EmailReducer from "./reducer/EmailReducer";
import FetchExperienceReducer from "./reducer/OwnProfilesReducer";
import IsAuthenticationReducer from "./reducer/IsAuthenticationReducer";
import AboutMePageReducer from "./reducer/localReducer/AboutMePageReducer";
import AddSectionReducer from "./reducer/localReducer/AddSectionReducer";
import EditorComponentReducer from "./reducer/localReducer/EditorComponentReducer";
import EducationReducer from "./reducer/localReducer/EducationReducer";
import ExperienceReducer from "./reducer/localReducer/ExperienceReducer";
import LicenseAndCertificateReducer from "./reducer/localReducer/LicenseAndCertificateReducer";
import PortfolioPageReducer from "./reducer/localReducer/PortfolioPageReducer";
import SkillsReducer from "./reducer/localReducer/SkillsReducer";
import LoginReducer from "./reducer/LoginReducer";
import RegisterReducer from "./reducer/RegisterReducer";
import UploadImageReducer from "./reducer/UploadImageReducer";
import OwnProfilesReducer from "./reducer/OwnProfilesReducer";
import ChangeCVTemplateReducer from "./reducer/localReducer/ChangeCVTemplateReducer"
import LanguageReducer from "./reducer/localReducer/LanguageReducer";

export default combineReducers({
  register: RegisterReducer,
  email: EmailReducer,
  login: LoginReducer,
  isAuth: IsAuthenticationReducer,
  localExperience: ExperienceReducer,
  aboutMePage: AboutMePageReducer,
  portfolioPage: PortfolioPageReducer,
  cvBuilder: CVBuilderReducer,
  educations: EducationReducer,
  licenseAndCertificate: LicenseAndCertificateReducer,
  skill: SkillsReducer,
  addSection: AddSectionReducer,
  languages: LanguageReducer,
  changeCVTemplate: ChangeCVTemplateReducer,
  uploadImage: UploadImageReducer,
  editor: EditorComponentReducer,
  ownProfiles : OwnProfilesReducer

});
