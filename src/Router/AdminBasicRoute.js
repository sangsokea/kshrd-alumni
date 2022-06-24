import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminHome from "../components/admin-component/AdminHome";
import AdminManageStudentComponent from "../components/admin-component/AdminManageStudentComponent";
import AdminSidebarComponent from "../components/admin-component/AdminSidebarComponent";
import AdminLogInPage from "../pages/admin-page/admin-authentication/AdminLogInPage";

export default function AdminBasicRoute() {
  return (
    <>
      <Routes>
        <Route path="/admin/login" element={<AdminLogInPage />} />
        <Route path="/admin" element={<AdminSidebarComponent />}>
          <Route path="home" element={<AdminHome />} />
          <Route
            path="manageStudent"
            element={<AdminManageStudentComponent />}
          />
        </Route>
      </Routes>
    </>
  );
}
