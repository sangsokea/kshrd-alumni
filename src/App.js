import { Route, Routes } from "react-router-dom";
import CenteredTabs from "./components/CenteredTabs";
import LoginPage from "./pages/authentication/LoginPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/authentication/RegisterPage";
import ConfirmPage from "./pages/authentication/ConfirmPage";
function App() {
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

export default App;
