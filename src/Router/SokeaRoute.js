import { Route, Routes } from "react-router-dom";
import AdminManageStudentComponent from "../components/admin-component/AdminManageStudentComponent";
import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import SidebarComponent from "../components/SidebarComponent";

function SokeaRoute() {
  return (
    <>
      <NavbarComponent />

      {/* <CenteredTabs /> */}
      <Routes>
        <Route path="/admin" element={<SidebarComponent />}>
          <Route
            path="manage/student"
            element={<AdminManageStudentComponent />}
          />
        </Route>
      </Routes>
      <FooterComponent />
    </>
  );
}

export default SokeaRoute;
