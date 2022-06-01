import { Route, Routes } from "react-router-dom";
import CenteredTabs from "./components/CenteredTabs";
import LoginPage from "./pages/authentication/LoginPage";
import HomePage from "./pages/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterPage from "./pages/authentication/RegisterPage";
function App() {
  return (
    <>
      <CenteredTabs />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
