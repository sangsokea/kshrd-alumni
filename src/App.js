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
import { Button } from "@material-ui/core";
import { fetchTesting } from "./redux/actions/TestingAction";
import { decryptToken } from "./redux/actions/LoginAction";

function App() {

  const isAuth = useSelector((state) => state.isAuth, shallowEqual);
  const dispatch = useDispatch();
  const [routeName, setRouteName] = useState("");
  useEffect(() => {
    const getIsAuth = localStorage.getItem("isAuth");
    getIsAuth && JSON.parse(getIsAuth)
      ? dispatch(fetchIsAucthenticated(true))
      : dispatch(fetchIsAucthenticated(false));
  }, []);

  // listen route
  const location = useLocation();

    useEffect(() => {
      console.log(location.pathname)
      setRouteName(location.pathname)
    }, [location]);

  useEffect(() => {
    isAuth ? localStorage.setItem("isAuth", true) : console.log("");
  }, [isAuth]);

  return (
    <>
      {/* {console.log(`runing on ${process.env.NODE_ENV}`)}
      {console.log(` ${process.env.REACT_APP_BASE_URL}`)} */}
      <ToastContainer />
      {/* <Button onClick={() => onSubmit()}>Submit</Button> */}
      {/* {routeName.includes("/admin") ? <AdminBasicRoute /> : <BasicRoute />} */}
      {/* <SokeaRoute /> */}
      {/* {console.log( `runing on ${process.env.NODE_ENV}`)}
    {console.log(` ${process.env.REACT_APP_BASE_URL}`)} */}
      {/* <BasicRoute/> */}
      {/* <AdminBasicRoute/> */}

      <BasicRoute />
    </>
  );
}

export default App;
