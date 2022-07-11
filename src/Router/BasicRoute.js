import { Route, Routes } from "react-router-dom";
import AdminManageStudentComponent from "../components/admin-component/AdminManageStudentComponent";
import CenteredTabs from "../components/CenteredTabs";
import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import BankAndFinanceComponent from "../components/partner-section/BankAndFinanceComponent";
import GlobalCompaniesComponent from "../components/partner-section/GlobalCompaniesComponent";
import LocalCompaniesComponent from "../components/partner-section/LocalCompaniesComponent";
import PartnerSideComponent from "../components/partner-section/PartnerSideComponent";
import PublicSectorComponent from "../components/partner-section/PublicSectorComponent";
import UniversitiesComponent from "../components/partner-section/UniversitiesComponent";
import SidebarComponent from "../components/SidebarComponent";
import AccountSettingPage from "../pages/AccountSettingPage";
import EditEducationStudent from "../pages/admin-page/EditEducationStudent";
import ViewStudentProfile from "../pages/admin-page/ViewStudentProfile";
import ConfirmPage from "../pages/authentication/ConfirmPage";
import CreateNewPasswordPage from "../pages/authentication/CreateNewPasswordPage";
import FormRegisterPage from "../pages/authentication/FormRegisterPage";
import LoginPage from "../pages/authentication/LoginPage";
import RegisterPage from "../pages/authentication/RegisterPage";
import ResetPasswordPage from "../pages/authentication/ResetPasswordPage";
import CVBuilderPage from "../pages/CVBuilderPage";
import HomePage from "../pages/HomePage";
import ViewAlumniPage from "../pages/ViewAlumniPage";
import ViewOwnerProfileEdit from "../pages/ViewOwnerProfileEdit";
import ViewOwnerProfilePage from "../pages/ViewOwnerProfilePage";
import AdminBasicRoute from "./AdminBasicRoute";
import ResumePage from "../pages/ResumePage";
import ChangeTemplatePage from "../pages/ChangeTemplatePage";
import PortfolioPage from "../pages/PortfolioPage";
import CvTemplate from "../pages/template/CvTemplate";
import HrdCvTemplate from "../pages/template/HrdCvTemplate";
import EditCVBuilderPage from "../pages/EditCVBuilderPage";

function BasicRoute() {
  return (
    <>
      <NavbarComponent />
      {/* <CenteredTabs /> */}
      <Routes>
        <Route path="/sidebar" element={<SidebarComponent />}>
          <Route path="createNewCV" element={<CVBuilderPage />}></Route>
          <Route path="editNewCV/:uuid" element={<EditCVBuilderPage />}></Route>
          <Route path="resume" element={<ResumePage />}></Route>
          <Route path="accountSetting" element={<AccountSettingPage />}></Route>
          <Route path="aboutMe" element={<ViewOwnerProfilePage />}></Route>
          {/* <Route path="aboutMeEdit" element={<ViewOwnerProfileEdit />}></Route> */}
          {/* <Route path="portfolio" element={<PortfolioPage/>}></Route> */}
          <Route path="cvTemplate" element={<CvTemplate/>}></Route>
          <Route path="hrdCvTemplate" element={<HrdCvTemplate/>}></Route>

          {/* <Route path="changeCVTemplate" element={<ChangeTemplatePage/>}></Route> */}
        </Route>

        {/* Partner Section */}
        <Route path="/" element={<HomePage />}></Route>
        {/* <Route path="/sidebars" element={<UserSidebarComponent />}></Route> */}

        <Route path="/login" element={<LoginPage />} />
        <Route path="/formRegister" element={<FormRegisterPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/confirm" element={<ConfirmPage />} />
        <Route path="/reset" element={<ResetPasswordPage />}></Route>
        <Route
          path="/createNewPassword"
          element={<CreateNewPasswordPage />}
        ></Route>
        <Route path="/viewAlumni" element={<ViewAlumniPage />}></Route>
        <Route path="/portfolio" element={<PortfolioPage />}></Route>
        {/* <Route path="/portfolioedit" element={<PorfolioEdit />}></Route> */}
        {/* <Route path="/partner" element={<PartnerSideComponent />}>
          <Route
            path="publicSector"
            element={<PublicSectorComponent />}
          ></Route>
        </Route>{" "} */}
      </Routes>
      <FooterComponent />
      {/* <FooterComponent /> */}
    </>
  );
}

export default BasicRoute;
