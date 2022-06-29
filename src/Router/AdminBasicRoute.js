import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminSidebarComponent from "../components/admin-component/AdminSidebarComponent";
import AdminSidebarsComponent from "../components/admin-component/AdminSidebarsComponent";
import AdminLogInPage from "../pages/admin-page/admin-authentication/AdminLogInPage";
import AdminHomePage from "../pages/admin-page/AdminHomePage";
import ManageStudentPage from "../pages/admin-page/ManageStudentPage";
import AdminFootersComponent from "../components/admin-component/AdminFootersComponent";
import ViewStudentProfile from "../pages/admin-page/ViewStudentProfile";
import EditEducationStudent from "../pages/admin-page/EditEducationStudent";
import EditEmploymentHistoryStudent from "../pages/admin-page/EditEmploymentHistoryStudent";
import AccuntSettingPage from "../pages/admin-page/AccuntSettingPage";
import AccountChangePassword from "../pages/admin-page/AccountChangePassword";
import AddNewStudent from "../pages/admin-page/AddNewStudent";

export default function AdminBasicRoute() {
  return (
    <>
      <Routes>
        <Route path="/admin/login" element={<AdminLogInPage />} />
        <Route path="/admin" element={<AdminSidebarsComponent />}>
          <Route path="homePage" element={<AdminHomePage />}></Route>
          <Route path="manageStudent" element={<ManageStudentPage />}></Route>
          <Route path="viewstudentProfile" element={<ViewStudentProfile />}></Route>
          <Route path="viewstudentProfile/editeducationStudent" element={<EditEducationStudent />}></Route>
          <Route path="editemploymenthistoryStudent" element={<EditEmploymentHistoryStudent />}></Route>
          <Route path="filterAlumin" element={<AdminHomePage />}></Route>
          <Route path="manageCv" element={<AdminHomePage />}></Route>
          <Route path="accut" element={<AddNewStudent />}></Route>
        </Route>
      </Routes>
      <AdminFootersComponent />
    </>
  );
}
