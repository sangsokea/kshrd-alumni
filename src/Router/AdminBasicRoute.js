import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AdminHome from "../components/admin-component/AdminHome";
import AdminManageStudentComponent from "../components/admin-component/AdminManageStudentComponent";
import AdminSidebarsComponent from "../components/admin-component/AdminSidebarsComponent";
import AdminLogInPage from "../pages/admin-page/admin-authentication/AdminLogInPage";
import AdminHomePage from "../pages/admin-page/AdminHomePage";
import ManageStudentPage from "../pages/admin-page/ManageStudentPage";
import AdminFootersComponent from "../components/admin-component/AdminFootersComponent";
import AdminManageCV from "../components/admin-component/AdminManageCV";
import ErrorPage from "../pages/ErrorPage";

export default function AdminBasicRoute() {
  const [routeName, setRouteName] = useState("");
  const [isAuth, setIsAuth] = useState();

  const location = useLocation();
  console.log(JSON.parse(localStorage.getItem("adminAuth")));
  console.log(isAuth);
  useEffect(() => {
    console.log(location.pathname);
    setRouteName(location.pathname);
  }, [location]);

  useEffect(() => {
    const getIsAuth = localStorage.getItem("adminAuth");
    getIsAuth && JSON.parse(getIsAuth) ? setIsAuth(true) : setIsAuth(false);
  }, [location]);
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        {isAuth ? (
          <Routes>
            {isAuth ? null : (
              <Route path="/admin/login" element={<AdminLogInPage />} />
            )}

            <Route path="/admin" element={<AdminSidebarsComponent />}>
              <Route path="home" element={<AdminHomePage />}></Route>
              <Route
                path="manageStudent"
                element={<AdminManageStudentComponent />}
              ></Route>
              <Route path="filterAlumin" element={<AdminHomePage />}></Route>
              <Route path="manageCV" element={<AdminManageCV />}></Route>
            </Route>
          </Routes>
        ) : (
          <AdminLogInPage />
        )}
      </div>

      {routeName.includes("/admin/login") || !isAuth ? (
        ""
      ) : (
        <AdminFootersComponent />
      )}

      {routeName.includes("/admin/login") && isAuth && <ErrorPage />}
    </div>
  );
}
