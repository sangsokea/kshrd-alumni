import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../../commons/images/logo.png";
import AdminNavbarComponent from "./AdminNavbarComponent";

export default function AdminSidebarsComponent() {
  const [showSidebar, setShowSidebar] = useState("-left-[330px]");
  return (
    <>
      <AdminNavbarComponent
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
      <div
        className={`h-screen fixed top-0 tablet:left-0 ${showSidebar} overflow-y-auto h flex-row flex-nowrap overflow-hidden shadow-xl bg-[#255FAB]  w-[330px] z-10 py-4 px-6 transition-all duration-300`}
      >
        <div className="flex-col items-stretch min-h-full  flex-nowrap px-0 relative">
          <div className="flex flex-col">
            <img
              src={logo}
              alt="logo homepage"
              className="border-none w-32 mt-7 mx-auto"
            />
            <hr className="my-4 min-w-full mt-10" />

            <ul className="flex-col min-w-full mt-10  flex list-none">
              <li className="rounded-lg mb-4">
                <NavLink
                  to="homePage"
                  className={({ isActive }) =>
                    [
                      "flex items-center gap-4 text-md text-white font-maven font-light px-4 py-3 rounded-lg ",
                      isActive
                        ? "bg-gradient-to-tr from-red-700 to-yellow-500 text-white shadow-md"
                        : null,
                    ]
                      .filter(Boolean)
                      .join(" ")
                  }
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.7941 1.52803L12.4406 1.17423L12.0869 1.52791L0.9516 12.6632C0.89973 12.7032 0.835352 12.7238 0.769609 12.7213C0.69903 12.7186 0.63208 12.6893 0.582138 12.6394C0.532194 12.5894 0.502936 12.5225 0.500209 12.4519C0.49767 12.3862 0.518325 12.3218 0.558296 12.2699L12.2467 0.581548C12.2468 0.581412 12.2469 0.581276 12.2471 0.58114C12.2996 0.529164 12.3705 0.5 12.4444 0.5C12.5183 0.5 12.5892 0.529164 12.6417 0.58114C12.6418 0.581276 12.6419 0.581412 12.6421 0.581548L24.233 12.1725L24.3135 12.2665C24.3594 12.3201 24.3834 12.3891 24.3807 12.4597C24.378 12.5303 24.3487 12.5972 24.2988 12.6472C24.2488 12.6971 24.1819 12.7264 24.1113 12.7291C24.0456 12.7316 23.9812 12.711 23.9294 12.6711L12.7941 1.52803Z"
                      fill="white"
                      stroke="white"
                    />
                    <path
                      d="M20.2447 23.9141H20.7447V23.4141V13.5079L21.3056 14.0688V23.4141C21.3056 23.6955 21.1938 23.9653 20.9949 24.1643C20.7959 24.3632 20.5261 24.475 20.2447 24.475H15.2817V17.1707V16.6707H14.7817H10.0991H9.59909V17.1707V24.475H4.63606C4.3547 24.475 4.08487 24.3632 3.88592 24.1643C3.68697 23.9653 3.5752 23.6955 3.5752 23.4141V14.2561L4.13606 13.6952V23.4141V23.9141H4.63606H8.53823H9.03823V23.4141V16.1098H15.8426V23.4141V23.9141H16.3426H20.2447Z"
                      fill="white"
                      stroke="white"
                    />
                  </svg>
                  Home
                </NavLink>
              </li>
              <li className="rounded-lg mb-2">
                <NavLink
                  to="filterAlumin"
                  className={({ isActive }) =>
                    [
                      "flex items-center gap-4 text-md text-white font-maven font-light px-4 py-3 rounded-lg ",
                      isActive
                        ? "bg-gradient-to-tr from-red-700 to-yellow-500 text-white shadow-md"
                        : null,
                    ]
                      .filter(Boolean)
                      .join(" ")
                  }
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.75 2.5H21.25V1.25C21.25 0.918479 21.1183 0.600537 20.8839 0.366117C20.6495 0.131696 20.3315 0 20 0C19.6685 0 19.3505 0.131696 19.1161 0.366117C18.8817 0.600537 18.75 0.918479 18.75 1.25V2.5H15V1.25C15 0.918479 14.8683 0.600537 14.6339 0.366117C14.3995 0.131696 14.0815 0 13.75 0C13.4185 0 13.1005 0.131696 12.8661 0.366117C12.6317 0.600537 12.5 0.918479 12.5 1.25V2.5H8.75V1.25C8.75 0.918479 8.6183 0.600537 8.38388 0.366117C8.14946 0.131696 7.83152 0 7.5 0C7.16848 0 6.85054 0.131696 6.61612 0.366117C6.3817 0.600537 6.25 0.918479 6.25 1.25V2.5H3.75C2.75544 2.5 1.80161 2.89509 1.09835 3.59835C0.395088 4.30161 0 5.25544 0 6.25V23.75C0 24.7446 0.395088 25.6984 1.09835 26.4017C1.80161 27.1049 2.75544 27.5 3.75 27.5H23.75C24.7446 27.5 25.6984 27.1049 26.4017 26.4017C27.1049 25.6984 27.5 24.7446 27.5 23.75V6.25C27.5 5.25544 27.1049 4.30161 26.4017 3.59835C25.6984 2.89509 24.7446 2.5 23.75 2.5ZM2.5 6.25C2.5 5.91848 2.6317 5.60054 2.86612 5.36612C3.10054 5.1317 3.41848 5 3.75 5H6.25V6.25C6.25 6.58152 6.3817 6.89946 6.61612 7.13388C6.85054 7.3683 7.16848 7.5 7.5 7.5C7.83152 7.5 8.14946 7.3683 8.38388 7.13388C8.6183 6.89946 8.75 6.58152 8.75 6.25V5H12.5V6.25C12.5 6.58152 12.6317 6.89946 12.8661 7.13388C13.1005 7.3683 13.4185 7.5 13.75 7.5C14.0815 7.5 14.3995 7.3683 14.6339 7.13388C14.8683 6.89946 15 6.58152 15 6.25V5H18.75V6.25C18.75 6.58152 18.8817 6.89946 19.1161 7.13388C19.3505 7.3683 19.6685 7.5 20 7.5C20.3315 7.5 20.6495 7.3683 20.8839 7.13388C21.1183 6.89946 21.25 6.58152 21.25 6.25V5H23.75C24.0815 5 24.3995 5.1317 24.6339 5.36612C24.8683 5.60054 25 5.91848 25 6.25V10H2.5V6.25ZM25 23.75C25 24.0815 24.8683 24.3995 24.6339 24.6339C24.3995 24.8683 24.0815 25 23.75 25H3.75C3.41848 25 3.10054 24.8683 2.86612 24.6339C2.6317 24.3995 2.5 24.0815 2.5 23.75V12.5H25V23.75Z"
                      fill="white"
                    />
                  </svg>
                  Filter Alumin
                </NavLink>
              </li>
              <li className="rounded-lg mb-2 ">
                <NavLink
                  to="manageStudent"
                  className={({ isActive }) =>
                    [
                      "flex items-center gap-4 text-md text-white font-maven font-light px-4 py-3 rounded-lg ",
                      isActive
                        ? "bg-gradient-to-tr from-red-700 to-yellow-500 text-white shadow-md"
                        : null,
                    ]
                      .filter(Boolean)
                      .join(" ")
                  }
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M23.2499 12.9167C23.2499 12.205 22.6713 11.625 21.9583 11.625C21.2453 11.625 20.6666 12.205 20.6666 12.9167C20.6666 13.6284 21.2453 14.2083 21.9583 14.2083C22.6713 14.2083 23.2499 13.6284 23.2499 12.9167ZM25.8333 12.9167C25.8333 15.0531 24.0947 16.7917 21.9583 16.7917C19.8218 16.7917 18.0833 15.0531 18.0833 12.9167C18.0833 10.7803 19.8218 9.04167 21.9583 9.04167C24.0947 9.04167 25.8333 10.7803 25.8333 12.9167ZM14.2083 9.04167C14.2083 7.61696 13.0496 6.45833 11.6249 6.45833C10.2002 6.45833 9.04159 7.61696 9.04159 9.04167C9.04159 10.4664 10.2002 11.625 11.6249 11.625C13.0496 11.625 14.2083 10.4664 14.2083 9.04167ZM16.7916 9.04167C16.7916 11.8911 14.4743 14.2083 11.6249 14.2083C8.7755 14.2083 6.45825 11.8911 6.45825 9.04167C6.45825 6.19225 8.7755 3.875 11.6249 3.875C14.4743 3.875 16.7916 6.19225 16.7916 9.04167ZM18.0058 19.4344C19.1282 18.5664 20.5103 18.0833 21.9583 18.0833C25.5194 18.0833 28.4166 20.9805 28.4166 24.5417C28.4166 25.2547 27.8392 25.8333 27.1249 25.8333C26.4106 25.8333 25.8333 25.2547 25.8333 24.5417C25.8333 22.4053 24.0947 20.6667 21.9583 20.6667C21.076 20.6667 20.2378 20.9689 19.5609 21.505C20.2636 22.7915 20.6666 24.2665 20.6666 25.8333C20.6666 26.5463 20.0892 27.125 19.3749 27.125C18.6606 27.125 18.0833 26.5463 18.0833 25.8333C18.0833 22.2722 15.186 19.375 11.6249 19.375C8.06379 19.375 5.16659 22.2722 5.16659 25.8333C5.16659 26.5463 4.58921 27.125 3.87492 27.125C3.16063 27.125 2.58325 26.5463 2.58325 25.8333C2.58325 20.8475 6.64038 16.7917 11.6249 16.7917C14.114 16.7917 16.3692 17.803 18.0058 19.4344Z"
                      fill="white"
                    />
                  </svg>
                  Manage Student
                </NavLink>
              </li>
              <li className="rounded-lg mb-2 text-gray-700">
                <NavLink
                  to="manageCv"
                  className={({ isActive }) =>
                    [
                      "flex items-center gap-4 text-md text-white font-maven font-light px-4 py-3 rounded-lg ",
                      isActive
                        ? "bg-gradient-to-tr from-red-700 to-yellow-500 text-white shadow-md"
                        : null,
                    ]
                      .filter(Boolean)
                      .join(" ")
                  }
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.125 7.91704V6.08304H24.9795V2.29692C24.9762 1.93482 24.8293 1.58884 24.5711 1.3349C24.313 1.08096 23.9646 0.93981 23.6025 0.942418H4.39748C4.03538 0.93981 3.68703 1.08096 3.42888 1.3349C3.17072 1.58884 3.02386 1.93482 3.02051 2.29692V25.8125C3.02386 26.1746 3.17072 26.5206 3.42888 26.7746C3.68703 27.0285 4.03538 27.1697 4.39748 27.167H23.6025C23.9646 27.1697 24.313 27.0285 24.5711 26.7746C24.8293 26.5206 24.9762 26.1746 24.9795 25.8125V21.917H27.125V20.083H24.9795V14.917H27.125V13.083H24.9795V7.91704H27.125ZM23.1455 13.083H20.5625V14.917H23.1455V20.083H20.5625V21.917H23.1455V25.333H4.85451V2.77642H23.1455V6.08304H20.5625V7.91704H23.1455V13.083Z"
                      fill="white"
                    />
                    <path
                      d="M13 8C13.7956 8 14.5587 8.31607 15.1213 8.87868C15.6839 9.44129 16 10.2044 16 11C16 11.7956 15.6839 12.5587 15.1213 13.1213C14.5587 13.6839 13.7956 14 13 14C12.2044 14 11.4413 13.6839 10.8787 13.1213C10.3161 12.5587 10 11.7956 10 11C10 10.2044 10.3161 9.44129 10.8787 8.87868C11.4413 8.31607 12.2044 8 13 8ZM13 15.5C16.315 15.5 19 16.8425 19 18.5V20H7V18.5C7 16.8425 9.685 15.5 13 15.5Z"
                      fill="#255FAB"
                    />
                  </svg>
                  Manage CV
                </NavLink>
              </li>
            </ul>
            <ul className="flex-col min-w-full flex list-none absolute bottom-0">
              <li className="rounded-lg mb-2 ">
                <NavLink
                  to="/tables"
                  className={({ isActive }) =>
                    [
                      "flex items-center gap-4 text-md text-white font-maven font-light px-4 py-3 rounded-lg ",
                      isActive
                        ? "bg-gradient-to-tr from-red-700 to-yellow-500 text-white shadow-md"
                        : null,
                    ]
                      .filter(Boolean)
                      .join(" ")
                  }
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.6 0H14.3C14.9896 0 15.6509 0.273928 16.1385 0.761522C16.6261 1.24912 16.9 1.91044 16.9 2.6V5.2H14.3V2.6H2.6V23.4H14.3V20.8H16.9V23.4C16.9 24.0896 16.6261 24.7509 16.1385 25.2385C15.6509 25.7261 14.9896 26 14.3 26H2.6C1.91044 26 1.24912 25.7261 0.761522 25.2385C0.273928 24.7509 0 24.0896 0 23.4V2.6C0 1.91044 0.273928 1.24912 0.761522 0.761522C1.24912 0.273928 1.91044 0 2.6 0Z"
                      fill="white"
                    />
                    <path
                      d="M15.717 17.667L17.55 19.5L24.05 13L17.55 6.5L15.717 8.333L19.071 11.7H6.5V14.3H19.071L15.717 17.667Z"
                      fill="white"
                    />
                  </svg>
                  Sign Out
                </NavLink>
              </li>
              <li className=" text-xs text-white">
                KSHRD ALUMNI - School Admission Dashboard Made with ♥ by 10th
                generation
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="laptop:ml-[360px] laptop:mr-8 tablet:ml-[330px]">
        <Outlet></Outlet>
      </div>
    </>
  );
}
