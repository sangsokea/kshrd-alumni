import { Route, Routes } from "react-router-dom";
import AdminManageStudentComponent from "../components/admin-component/AdminManageStudentComponent";
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
import ViewAlumniPage from "../pages/ViewAlumniPage";
import ViewOwnerProfilePage from "../pages/ViewOwnerProfilePage";
import CVTemplate from "../templates/CVTemplate";

function SokeaRoute() {
  return (
    <>
      <NavbarComponent />

      {/* <CenteredTabs /> */}
      <Routes>
        <Route path="/admin" element={<SidebarComponent />}>
          <Route
            path="manage/student"
            element={<AdminManageStudentComponent />}
          />
        </Route>
      </Routes>
      <FooterComponent />
    </>
  );
}

export default SokeaRoute;
