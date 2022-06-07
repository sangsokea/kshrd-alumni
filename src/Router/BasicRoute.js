import { Route, Routes } from "react-router-dom";
import CenteredTabs from "../components/CenteredTabs";
import ConfirmPage from "../pages/authentication/ConfirmPage";
import LoginPage from "../pages/authentication/LoginPage";
import RegisterPage from "../pages/authentication/RegisterPage";
import HomePage from "../pages/HomePage";

function BasicRoute() {
  return (
    <>
      <CenteredTabs />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/confirm" element={<ConfirmPage />}/>
      </Routes>
    </>
  );
}

export default BasicRoute;
