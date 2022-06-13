import { Route, Routes } from "react-router-dom";
import CenteredTabs from "./components/CenteredTabs";
import LoginPage from "./pages/authentication/LoginPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/authentication/RegisterPage";
import ConfirmPage from "./pages/authentication/ConfirmPage";
import NavbarComponent from "./components/NavbarComponent";
import ResetPasswordPage from "./pages/authentication/ResetPasswordPage";
import CvTemplate from "./pages/template/CvTemplate";
import HrdCvTemplate from "./pages/template/HrdCvTemplate";
function App() {
  return (
    <>
      <CenteredTabs />
      <NavbarComponent/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/confirm" element={<ConfirmPage />}/>
        <Route path="/reset" element={<ResetPasswordPage/>} />
        <Route path="/cvtemplate" element={<CvTemplate/>} />
        <Route path="/hrdcv" element={<HrdCvTemplate/>} />
      </Routes>
    </>
  );
}

export default App;
