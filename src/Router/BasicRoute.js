import { Route, Routes } from "react-router-dom";
import CenteredTabs from "../components/CenteredTabs";
import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import ConfirmPage from "../pages/authentication/ConfirmPage";
import CreateNewPasswordPage from "../pages/authentication/CreateNewPasswordPage";
import LoginPage from "../pages/authentication/LoginPage";
import RegisterPage from "../pages/authentication/RegisterPage";
import ResetPasswordPage from "../pages/authentication/ResetPasswordPage";
import HomePage from "../pages/HomePage";

function BasicRoute() {
  return (
    <>
      <NavbarComponent/>
      {/* <CenteredTabs /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/confirm" element={<ConfirmPage />}/>
        <Route path="/reset" element={<ResetPasswordPage/>}></Route>
        <Route path="/createNewPassword" element={<CreateNewPasswordPage/>}></Route>
      </Routes>
      <FooterComponent/>
    </>
  );
}

export default BasicRoute;