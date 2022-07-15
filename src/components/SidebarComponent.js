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
import alumni4 from "../commons/images/Alumni/alumni4.webp";
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
  const ownProfiles = useSelector((state) => state?.ownProfiles, shallowEqual);
  const [personalDetails, setPersonalDetails] = useState({});
  const [isShowImg, setIsShowImg] = useState(false);
  const [isProfileEmpty, setIsProfileEmpty] = useState(true);
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
    return () => {
      setIsShowImg(false);
      setPersonalDetails({});
    };
  }, [location]);

  React.useEffect(() => {
    location.pathname.includes("/sidebar/aboutMe") && setIsShowImg(true);
    return () => {
      setIsShowImg(false);
    };
  }, [location]);

  React.useEffect(() => {
    if (isAuth) {
      const isEmpty = localStorage.getItem("isProfileEmpty");
      isEmpty && JSON.parse(isEmpty)
        ? setIsProfileEmpty(false)
        : setIsProfileEmpty(true);
    }
  return ()=>{
    setIsProfileEmpty(true)
  }
  },[ownProfiles, location, window.location.reload]);

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

      <div className="laptop:container  laptop:mx-auto body-font font-maven">
        {/* sideBar */}

        <div className="grid desktop:grid-cols-5  mt-1 bg-white laptop:grid-cols-3 tablet:grid-cols-2">
          <div>
            <div
              className={`h-screen bg-white   shadow-[-30px_0px_50px_1px_rgba(0,0,0,0.1)] tablet:rounded-lg  laptop:h-full top-0 desktop:relative fixed laptop:relative tablet:relative tablet:left-0 ${showSidebar} overflow-y-auto flex-row overflow-hidden w-64 z-10 transition-all duration-300`}
            >
              <div className="p-3 text-sm  laptop:text-md  desktop:text-lg font-light text-center text-white ">
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
                  <p className="mt-5 text-blue-500">Contact school’s infdo:</p>

                  <div className="flex justify-center pt-3">
                    <ButtonMailto
                      mailto="mailto:info.kshrd@gmail.com"
                      className="mr-2"
                    >
                      <img src="https://img.icons8.com/fluency/48/000000/new-message.png" className="w-8 h-auto"/>

                    </ButtonMailto>
                    <a
                      href="https://www.facebook.com/ksignhrd?_rdc=1&_rdr"
                      target={"_blank"}
                      className="ml-2 cursor-pointer"
                    >
                      <img src="https://img.icons8.com/fluency/48/000000/facebook-new.png" className="w-8 h-auto"/>
                    </a>
                    <a
                      href="https://www.youtube.com/c/KoreaSoftwareHRDCenter"
                      target={"_blank"}
                      className="ml-2 cursor-pointer"
                    >
                      <img src="https://img.icons8.com/fluency/48/000000/youtube-play.png" className="w-8 h-auto"/>
                    </a>
                  </div>

                  <hr className="mt-5"></hr>

                  {/* Link to about me page */}
                  {/* <NavLink to="/sidebar/aboutMe"> */}
                  <div className="mt-10 text-blue-500 hover:bg-gray-50 hover:rounded-md hover:text-blue-500 cursor-pointer">
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
                      <img src="https://img.icons8.com/fluency/48/000000/gender-neutral-user.png"  className="w-6 h-auto"/>
                      {/* <img className="mr-3 iCon" src={v2} /> */}
                      <div className="ml-5">About Me</div>
                    </NavLink>
                  </div>
                  {/* </NavLink> */}

                  {/* Link to portfolio page */}
                  {/* <NavLink to="/portfolio"> */}
                  {isProfileEmpty && (
                    <div className="mt-5 text-blue-500 hover:bg-gray-50 hover:rounded-md hover:text-blue-500 cursor-pointer">
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
                        <img src="https://img.icons8.com/fluency/48/000000/monitor.png" className="w-7 h-auto"/>
                        </span>
                        <div className="ml-5">Portfolio</div>
                      </NavLink>
                    </div>
                  )}
                  {/* </NavLink> */}

                  {/* Link to create new cv page */}
                  {/* <NavLink to="/sidebar/resume"> */}
                  {isAuth && (
                    <div className="mt-5 text-blue-500 hover:bg-gray-50 hover:rounded-md hover:text-blue-500 cursor-pointer">
                      <NavLink
                        onClick={() => {
                          setIsActive(3);
                          setShowSidebar("-left-64");
                        }}
                        to="/sidebar/resume"
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
                        <img src="https://img.icons8.com/fluency/48/000000/circled-play.png" className="w-7 h-auto"/>


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
                    <div className="mt-5 text-blue-500 hover:bg-gray-50 hover:rounded-md hover:text-blue-500 cursor-pointer">
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
                        <img src="https://img.icons8.com/fluency/48/000000/settings.png" className="w-7 h-auto"/>


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
                      className="flex text-sm text-blue-500 laptop:text-md desktop:text-lg items-center px-2 py-1.5 mt-5 cursor-pointer hover:bg-gray-50 hover:rounded-md hover:text-blue-500"
                    >
                      <span>
                      <img src="https://img.icons8.com/fluency/48/000000/exit.png" className="w-7 h-auto"/>
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
