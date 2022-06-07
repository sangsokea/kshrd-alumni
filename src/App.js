import { Route, Routes } from "react-router-dom";
import CenteredTabs from "./components/CenteredTabs";
import LoginPage from "./pages/authentication/LoginPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/authentication/RegisterPage";
import ConfirmPage from "./pages/authentication/ConfirmPage";
import BasicRoute from "./Router/BasicRoute";


function App() {
  return (
    <>
    {console.log( `runing on ${process.env.NODE_ENV}`)}
    {console.log(` ${process.env.REACT_APP_BASE_URL}`)}
      <BasicRoute/>
    </>
  );
}

export default App;
