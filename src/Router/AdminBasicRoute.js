import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminHome from "../components/admin-component/AdminHome";
import AdminManageStudentComponent from "../components/admin-component/AdminManageStudentComponent";
import AdminSidebarsComponent from "../components/admin-component/AdminSidebarsComponent";
import AdminLogInPage from "../pages/admin-page/admin-authentication/AdminLogInPage";
import AdminHomePage from "../pages/admin-page/AdminHomePage";
import ManageStudentPage from "../pages/admin-page/ManageStudentPage";
import AdminFootersComponent from "../components/admin-component/AdminFootersComponent";
import AdminManageCV from "../components/admin-component/AdminManageCV";

export default function AdminBasicRoute() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <Routes>
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
      </div>
      <AdminFootersComponent />
    </div>
  );
}
