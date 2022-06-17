import { Route, Routes } from "react-router-dom";
import CenteredTabs from "../components/CenteredTabs";
import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import SidebarComponent from "../components/SidebarComponent";
import ConfirmPage from "../pages/authentication/ConfirmPage";
import CreateNewPasswordPage from "../pages/authentication/CreateNewPasswordPage";
import LoginPage from "../pages/authentication/LoginPage";
import RegisterPage from "../pages/authentication/RegisterPage";
import ResetPasswordPage from "../pages/authentication/ResetPasswordPage";
import CVBuilderPage from "../pages/CVBuilderPage";
import HomePage from "../pages/HomePage";
import ViewAlumniPage from "../pages/ViewAlumniPage";

function BasicRoute() {
  return (
    <>
      <NavbarComponent/>
      {/* <SidebarComponent/> */}
      {/* <CenteredTabs /> */}
      <Routes>
        <Route path="/createNewCV" element={<SidebarComponent/>}></Route>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/confirm" element={<ConfirmPage />}/>
        <Route path="/reset" element={<ResetPasswordPage/>}></Route>
        <Route path="/createNewPassword" element={<CreateNewPasswordPage/>}></Route>
        <Route path="/viewAlumni" element={<ViewAlumniPage/>}></Route>

      </Routes>
      <FooterComponent/>
    </>
  );
}

export default BasicRoute;
