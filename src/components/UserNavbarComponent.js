import React, { useState } from "react";
import { colors, myStyles } from "../commons/colors/colors";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import logo from "../commons/images/logo.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CUSTOM_WARNING } from "../commons/notify/Notify";

function classNames(...classNamees) {
  return classNamees.filter(Boolean).join(" ");
}

export default function UserNavbarComponent() {
  const navigate = useNavigate();
  const [show, setshow] = useState(false);
  const [openNavbar, setOpenNavbar] = useState(false);
  const isAuth = useSelector((state) => state.isAuth);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={logoBackground}>
      <div className="ml-48">
        <div className="">
          <img
            src={logo}
            alt="logo homepage"
            className="border-none w-24 bg-[#255FAB]"
          />
        </div>
      </div>

      <nav className="bg-[#255FAB] ">
        <div className=" mx-auto  px-4 tablet:px-10 desktop:px-24">
          <div className="grid grid-cols-2">
            <div className="flex items-center justify-start w-full">
              <span className=" hidden tablet:inline-block self-center text-white text-3xl font-bold tracking-wider">
                KSHRD ALUMNI
              </span>
            </div>
            <div>
              <div className="flex items-center justify-end h-16">
                <div className="flex items-center">
                  <div className="hidden laptop:block tablet:block">
                    <div className="ml-10 flex items-center  space-x-4">
                      <button
                        onClick={() => navigate("/viewAlumni")}
                        className="text-white hover:text-green-300 transition duration-300 px-3 py-2 rounded-md text-sm font-medium"
                        aria-current="page"
                      >
                        ALUMNI
                      </button>

                      <Menu as="div" className="inline-block text-left">
                        <Menu.Button className="inline-flex justify-center w-full tablet:text-xs hover:text-green-300  px-2 py-2 text-sm text-white rounded-md shadow-sm  laptop:font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                          NEW RESUME
                          <ChevronDownIcon
                            className="w-5 h-5 ml-2 -mr-1"
                            aria-hidden="true"
                          />
                        </Menu.Button>

                        <Transition
                          className="absolute"
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="right-0 w-56 mt-2  origin-top-right bg-white shadow-lg rounded-laptop ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <button className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    onClick={() => {
                                      !isAuth &&
                                        CUSTOM_WARNING(
                                          "Please! login to access more feature"
                                        );
                                      isAuth
                                        ? navigate("/sidebar/createNewCV")
                                        : navigate("/login");
                                    }}
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700 bg-white rounded",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    Create New CV
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    onClick={() => {
                                      !isAuth &&
                                        CUSTOM_WARNING(
                                          "Please! login to access more feature"
                                        );
                                      isAuth
                                        ? navigate("/sidebar/cvTemplate")
                                        : navigate("/login");
                                    }}
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700 bg-white rounded",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    CV Templates
                                  </a>
                                )}
                              </Menu.Item>
                            </button>
                          </Menu.Items>
                        </Transition>
                      </Menu>

                      <div className="px-2 py-2">
                        {isAuth ? (
                          <div
                            onClick={() => navigate("/sidebar/aboutMe")}
                            className="flex cursor-pointer"
                          >
                            <img
                              className="w-10 h-10 rounded-full"
                              src="https://w7.pngwing.com/pngs/636/702/png-transparent-computer-icons-user-profile-avatar-black-man-heroes-desktop-wallpaper-silhouette-thumbnail.png"
                              alt="Rounded avatar"
                            ></img>
                            <p className="inline-flex items-center justify-between px-2 py-1 text-white rounded-md">
                              Vong Yuoyi
                            </p>
                          </div>
                        ) : (
                          <button
                            onClick={() => navigate("/login")}
                            // style={styles}
                            className="inline-flex items-center justify-between px-2 py-1 text-white border rounded-md"
                          >
                            LOG IN{" "}
                            <span>
                              <svg
                                className="h-auto pl-2 text-white w-7"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                {" "}
                                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                                <rect
                                  x="5"
                                  y="11"
                                  width="14"
                                  height="10"
                                  rx="2"
                                />{" "}
                                <circle cx="12" cy="16" r="1" />{" "}
                                <path d="M8 11v-5a4 4 0 0 1 8 0" />
                              </svg>
                            </span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-mr-2 flex tablet:hidden">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className=" inline-flex items-center justify-center p-2 rounded-md "
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Open main menu</span>
                    {!isOpen ? (
                      <svg
                        class="h-7 w-7 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        {" "}
                        <polyline points="7 13 12 18 17 13" />{" "}
                        <polyline points="7 6 12 11 17 6" />
                      </svg>
                    ) : (
                      <svg
                        className="text-white h-7 w-7"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="laptop:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <button
                  onClick={() => navigate("/viewAlumni")}
                  className="inline-flex w-full px-2 py-2 text-sm text-white rounded-md shadow-sm laptop:text-md desktop:text-lg laptop:font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-900 focus:ring-offset-gray-100"
                  aria-current="page"
                >
                  ALUMNI
                </button>

                <div>
                  <Menu as="div" className="inline-block text-left">
                    <Menu.Button className="inline-flex justify-center w-full  px-2 py-2 text-sm text-white rounded-md shadow-sm  laptop:font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                      NEW RESUME
                      <ChevronDownIcon
                        className="w-5 h-5 ml-2 -mr-1"
                        aria-hidden="true"
                      />
                    </Menu.Button>

                    <Transition
                      className="absolute"
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="right-0 w-56 mt-2 origin-top-right bg-white shadow-lg rounded-laptop ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <button className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                onClick={() => {
                                  !isAuth &&
                                    CUSTOM_WARNING(
                                      "Please! login to access more feature"
                                    );
                                  isAuth
                                    ? navigate("/sidebar/createNewCV")
                                    : navigate("/login");
                                }}
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700 bg-white rounded",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Create New CV
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                onClick={() => {
                                  !isAuth &&
                                    CUSTOM_WARNING(
                                      "Please! login to access more feature"
                                    );
                                  isAuth
                                    ? navigate("/sidebar/cvTemplate")
                                    : navigate("/login");
                                }}
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700 bg-white rounded",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                CV Templates
                              </a>
                            )}
                          </Menu.Item>
                        </button>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>

                <div className="px-2 py-2">
                  {isAuth ? (
                    <div
                      onClick={() => navigate("/sidebar/aboutMe")}
                      className="flex cursor-pointer"
                    >
                      <img
                        className="w-10 h-10 rounded-full"
                        src="https://w7.pngwing.com/pngs/636/702/png-transparent-computer-icons-user-profile-avatar-black-man-heroes-desktop-wallpaper-silhouette-thumbnail.png"
                        alt="Rounded avatar"
                      ></img>
                      <p className="inline-flex items-center justify-between px-2 py-1 text-white rounded-md">
                        Vong Yuoyi
                      </p>
                    </div>
                  ) : (
                    <button
                      onClick={() => navigate("/login")}
                      // style={styles}
                      className="inline-flex items-center justify-between px-2 py-1 text-white border rounded-md"
                    >
                      LOG IN{" "}
                      <span>
                        <svg
                          className="h-auto pl-2 text-white w-7"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
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
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

const styles = {
  backgroundColor: colors.content,
  // logoSize: myStyles.logoSize
};

const logoStyle = {
  width: myStyles.logoWidth,
  height: myStyles.logoHeight,
  marginLeft: myStyles.logoMargin,
};

const logoBackground = {
  backgroundColor: colors.footer,
};
