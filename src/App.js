import BasicRoute from "./Router/BasicRoute";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchIsAucthenticated } from "./redux/actions/IsAuthenticationAction";
import { ToastContainer, toast } from "react-toastify";
import SokeaRoute from "./Router/SokeaRoute";
import AdminBasicRoute from "./Router/AdminBasicRoute";
import { useLocation } from "react-router-dom";


function App() {
  const isAuth = useSelector((state) => state.isAuth, shallowEqual);
  const dispatch = useDispatch();
  const [routeName, setRouteName] = useState('')
  useEffect(() => {
    const getIsAuth = localStorage.getItem("isAuth");
    getIsAuth && JSON.parse(getIsAuth)
      ? dispatch(fetchIsAucthenticated(true))
      : dispatch(fetchIsAucthenticated(false));
  }, []);

  // listen route
  const location = useLocation();
  
    useEffect(() => {
      console.log("=========================================================")
      console.log(location.pathname)
      setRouteName(location.pathname)
    }, [location]);

  useEffect(() => {
    isAuth ? localStorage.setItem("isAuth", true) : console.log("");
  }, [isAuth]);

  return (
    <>

      {/* <CenteredTabs />
      {/* <NavbarComponent/> *
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/confirm" element={<ConfirmPage />}/>
        <Route path="/reset" element={<ResetPasswordPage/>} />
        <Route path="/cvtemplate" element={<CvTemplate/>} />
        <Route path="/hrdcv" element={<HrdCvTemplate/>} />
        <Route path="/porfolio" element={<PorfolioPage />} />
        <Route path="/porfolioedit" element={<PorfolioEdit />} />
      </Routes> */}


      {console.log(`runing on ${process.env.NODE_ENV}`)}
      {console.log(` ${process.env.REACT_APP_BASE_URL}`)}
      <ToastContainer />

      {routeName.includes('/admin')? <AdminBasicRoute/> : <BasicRoute/>}
      {/* <SokeaRoute /> */}
    {console.log( `runing on ${process.env.NODE_ENV}`)}
    {console.log(` ${process.env.REACT_APP_BASE_URL}`)}
      {/* <BasicRoute/> */}
      {/* <AdminBasicRoute/> */}

      <BasicRoute />

    </>
  );
}

export default App;
