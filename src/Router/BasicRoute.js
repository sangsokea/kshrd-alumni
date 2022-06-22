import { Route, Routes } from "react-router-dom";
import CenteredTabs from "../components/CenteredTabs";
import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import SidebarComponent from "../components/SidebarComponent";
import AccountSettingPage from "../pages/AccountSettingPage";
import ConfirmPage from "../pages/authentication/ConfirmPage";
import CreateNewPasswordPage from "../pages/authentication/CreateNewPasswordPage";
import FormRegisterPage from "../pages/authentication/FormRegisterPage";
import LoginPage from "../pages/authentication/LoginPage";
import RegisterPage from "../pages/authentication/RegisterPage";
import ResetPasswordPage from "../pages/authentication/ResetPasswordPage";
import CVBuilderPage from "../pages/CVBuilderPage";
import HomePage from "../pages/HomePage";
import PorfolioEdit from "../pages/PorfolioEdit";
import PorfolioPage from "../pages/PorfolioPage";
import CvTemplate from "../pages/template/CvTemplate";
import ViewAlumniPage from "../pages/ViewAlumniPage";
import ViewOwnerProfilePage from "../pages/ViewOwnerProfilePage";

function BasicRoute() {
  return (
    <>
      <NavbarComponent />

      {/* <CenteredTabs /> */}
      <Routes>
        <Route path="/sidebar" element={<SidebarComponent />}>
          <Route path="createNewCV" element={<CVBuilderPage />}></Route>
          <Route path="accountSetting" element={<AccountSettingPage />}></Route>
          <Route path="aboutMe" element={<ViewOwnerProfilePage />}></Route>
          {/* <Route path="portfolio" element={<PortfolioPage/>}></Route> */}
          <Route path="cvTemplate" element={<CvTemplate />}></Route>
        </Route>

        <Route path="/" element={<HomePage />} />
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

        <Route path="/portfolio" element={<PorfolioPage/>}></Route>
        <Route path="/portfolioedit" element={<PorfolioEdit/>}></Route>
      </Routes>
      <FooterComponent />
    </>
  );
}

export default BasicRoute;
