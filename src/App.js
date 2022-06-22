import BasicRoute from "./Router/BasicRoute";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchIsAucthenticated } from "./redux/actions/IsAuthenticationAction";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const isAuth = useSelector((state) => state.isAuth, shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    const getIsAuth = localStorage.getItem("isAuth");
    getIsAuth && JSON.parse(getIsAuth)
      ? dispatch(fetchIsAucthenticated(true))
      : dispatch(fetchIsAucthenticated(false));
  }, []);

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
      <BasicRoute />

    </>
  );
}

export default App;
