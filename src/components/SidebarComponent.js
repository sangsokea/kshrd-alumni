import React, { useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { colors } from "../commons/colors/colors";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import alumni1 from "../commons/images/Alumni/alumni1.jpg";
import { fetchIsAucthenticated } from "../redux/actions/IsAuthenticationAction";
import alumni4 from "../commons/images/Alumni/alumni4.jpg";
import ReNavbarComponent from "./ReNavbarComponent";
import Swal from "sweetalert2";
import { fetchLogout } from "../redux/actions/LogoutAction";

const ButtonMailto = ({ mailto, children }) => {
  return (
    <Link
      to="/alumni"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      {children}
    </Link>
  );
};

// const sideBarStyles = ({isActive}) => {
//   return {
//     color: isActive ? 'blue' : 'white',
//     fontWeight: isActive ? 'bold' : 'normal',
//     textDecoration: isActive ? 'underline' : 'none',
//     backgroundColor: isActive ? 'gray' : 'orange'
//   }
// }

export default function SidebarComponent() {
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();
  const [showSidebar, setShowSidebar] = useState("-left-64");
  const [isActive, setIsActive] = useState(1);
  const isAuth = useSelector((state) => state?.isAuth, shallowEqual);
  const [personalDetails, setPersonalDetails] = useState({});
  const [isShowImg, setIsShowImg] = useState(false);
  React.useEffect(() => {
    const localObj = localStorage.getItem("ownProfile");
    let isFromAlumni = location?.state?.fromViewAlumni;
    const localViewObj = localStorage.getItem("view");
    if (localViewObj && isFromAlumni) {
      const profile = JSON?.parse(localViewObj);
      profile?.personalDetails && setPersonalDetails(profile?.personalDetails);
    } else if (localObj) {
      const profile = JSON?.parse(localObj);
      profile?.profileDetails &&
        setPersonalDetails(profile?.profileDetails?.personalDetails);
    }

    
  }, [isShowImg]);

  React.useEffect(() => {
    location.pathname.includes("/sidebar/aboutMe") && setIsShowImg(true);
    return ()=>{
      setIsShowImg(false)
      
    }
  }, [location]);

  const logOut = () => {
    setShowSidebar("-left-64");
    Swal.fire({
      title: "Sign Out from Moment",
      text: "Are you sure you would like to sign out from your moment account?",
      // icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sign Out",
      customClass: "swal-wide",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(fetchLogout());
        navigate("/");
      }
    });
  };

  return (
    <body>
      <header class="">
        <ReNavbarComponent
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        ></ReNavbarComponent>
      </header>

      <div className="laptop:container laptop:mx-auto body-font font-maven">
        {/* sideBar */}

        <div className="grid desktop:grid-cols-5 mt-1 laptop:grid-cols-3 tablet:grid-cols-2">
          <div style={styles}>
            <div
              className={`h-screen laptop:h-full top-0 desktop:relative fixed laptop:relative tablet:relative tablet:left-0 ${showSidebar} overflow-y-auto flex-row overflow-hidden w-64 z-10 transition-all duration-300`}
              style={styles}
            >
              <div className="p-3 text-sm laptop:text-md desktop:text-lg font-light text-center text-white ">
                <div className="flex justify-center mt-5">
                  <img
                    className=" w-36 h-36  object-cover rounded-full ring-2  bg-gray-300 "
                    src={
                      personalDetails?.profile
                        ? personalDetails?.profile
                        : alumni4
                    }
                  />
                </div>
                {/* <p className="divide-y-3"></p> */}
                <hr className="mt-10"></hr>
                <p className="mt-5">Contact school’s info:</p>

                <div className="flex justify-center pt-3">
                  <ButtonMailto
                    mailto="mailto:info.kshrd@gmail.com"
                    className="mr-2"
                  >
                    <svg
                      className="h-auto text-white w-7"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </ButtonMailto>
                  <a
                    href="https://www.facebook.com/ksignhrd?_rdc=1&_rdr"
                    target={"_blank"}
                    className="ml-2 cursor-pointer"
                  >
                    <svg
                      className="h-auto text-white border rounded-full w-7"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="1"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/c/KoreaSoftwareHRDCenter"
                    target={"_blank"}
                    className="ml-2 cursor-pointer"
                  >
                    <svg
                      className="h-auto text-white w-7"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {" "}
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />{" "}
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                    </svg>
                  </a>
                </div>

                <hr className="mt-5"></hr>

                {/* Link to about me page */}
                {/* <NavLink to="/sidebar/aboutMe"> */}
                <div className="mt-10 hover:bg-gray-50 hover:rounded-md hover:text-blue-500 cursor-pointer">
                  <NavLink
                    onClick={() => {
                      setIsActive(1);
                      setShowSidebar("-left-64");
                    }}
                    to="/sidebar/aboutMe"
                    className={({ isActive }) =>
                      [
                        "flex items-center text-sm laptop:text-md desktop:text-lg px-2 py-1.5 rounded-md ",
                        isActive
                          ? "bg-gray-50 text-blue-500 shadow-md w-full"
                          : null,
                      ]
                        .filter(Boolean)
                        .join(" ")
                    }
                  >
                    <span>
                      <svg
                        className="w-6 h-auto "
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <circle cx="12" cy="7" r="4" />{" "}
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                      </svg>
                    </span>
                    {/* <img className="mr-3 iCon" src={v2} /> */}
                    <div className="ml-5">About Me</div>
                  </NavLink>
                </div>
                {/* </NavLink> */}

                {/* Link to portfolio page */}
                {/* <NavLink to="/portfolio"> */}
                <div className="mt-5 hover:bg-gray-50 hover:rounded-md hover:text-blue-500 cursor-pointer">
                  <NavLink
                    onClick={() => setIsActive(2)}
                    to="/portfolio"
                    className={({ isActive }) =>
                      [
                        "flex items-center text-sm laptop:text-md desktop:text-lg px-2 py-1.5 rounded-md",
                        isActive
                          ? "bg-gray-50 text-blue-500 shadow-md w-full"
                          : null,
                      ]
                        .filter(Boolean)
                        .join(" ")
                    }
                  >
                    <span>
                      <svg
                        className="w-6 h-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1"
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </span>
                    <div className="ml-5">Portfolio</div>
                  </NavLink>
                </div>
                {/* </NavLink> */}

                {/* Link to create new cv page */}
                {/* <NavLink to="/sidebar/resume"> */}
                {isAuth && (
                  <div className="mt-5 hover:bg-gray-50 hover:rounded-md hover:text-blue-500 cursor-pointer">
                    <NavLink
                      onClick={() => {
                        setIsActive(3);
                        setShowSidebar("-left-64");
                      }}
                      to="/sidebar/createNewCV"
                      className={({ isActive }) =>
                        [
                          "flex items-center text-sm laptop:text-md desktop:text-lg px-2 py-1.5 rounded-md",
                          isActive
                            ? "bg-gray-50 text-blue-500 shadow-md w-full"
                            : null,
                        ]
                          .filter(Boolean)
                          .join(" ")
                      }
                    >
                      <span>
                        <svg
                          className="w-6 h-auto"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          {" "}
                          <polygon points="19 20 9 12 19 4 19 20" />{" "}
                          <line x1="5" y1="19" x2="5" y2="5" />
                        </svg>
                      </span>
                      <p className="ml-5">Resume</p>
                      <span className="ml-auto">
                        <svg
                          className="w-6 h-auto"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="1"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          {" "}
                          <path stroke="none" d="M0 0h24v24H0z" />{" "}
                          <rect x="5" y="11" width="14" height="10" rx="2" />{" "}
                          <circle cx="12" cy="16" r="1" />{" "}
                          <path d="M8 11v-5a4 4 0 0 1 8 0" />
                        </svg>
                      </span>
                    </NavLink>
                  </div>
                )}
                {/* </NavLink> */}

                {/* Link to account setting page */}
                {/* <NavLink to="/sidebar/accountSetting"> */}
                {isAuth && (
                  <div className="mt-5 hover:bg-gray-50 hover:rounded-md hover:text-blue-500 cursor-pointer">
                    <NavLink
                      onClick={() => {
                        setIsActive(4);
                        setShowSidebar("-left-64");
                      }}
                      to="/sidebar/accountSetting"
                      className={({ isActive }) =>
                        [
                          "flex items-center text-sm laptop:text-md desktop:text-lg px-2 py-1.5 rounded-md",
                          isActive
                            ? "bg-gray-50 text-blue-500 shadow-md w-full"
                            : null,
                        ]
                          .filter(Boolean)
                          .join(" ")
                      }
                    >
                      <span>
                        <svg
                          className="w-6 h-auto"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="1"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          {" "}
                          <path stroke="none" d="M0 0h24v24H0z" />{" "}
                          <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />{" "}
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </span>

                      <div className="ml-5">Account Setting</div>
                    </NavLink>
                  </div>
                )}
                {/* </NavLink> */}

                {/* Log out */}
                {isAuth && (
                  <div
                    onClick={logOut}
                    // onClick={() => {
                    //   dispatch(fetchIsAucthenticated(false));
                    //   localStorage.setItem("isAuth", false);
                    //   navigate("/");

                    // }}
                    className="flex text-sm laptop:text-md desktop:text-lg items-center px-2 py-1.5 mt-5 cursor-pointer hover:bg-gray-50 hover:rounded-md hover:text-blue-500"
                  >
                    <span>
                      <svg
                        className="w-6 h-auto"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />{" "}
                        <path d="M7 12h14l-3 -3m0 6l3 -3" />
                      </svg>
                    </span>
                    <p className="ml-5">Log Out</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="tablet:col-span-1 laptop:col-span-2 desktop:col-span-4">
            <Outlet />
          </div>
        </div>
      </div>
    </body>
  );
}

const styles = {
  backgroundColor: colors.content,
  // logoSize: myStyles.logoSize
};
