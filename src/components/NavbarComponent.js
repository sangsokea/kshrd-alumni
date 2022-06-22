
// import React from "react";

// export default function NavbarComponent() {
//   return (
//     <div>
//       <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
//         <div class="container flex flex-wrap justify-between items-center mx-auto">
//           <a href="https://flowbite.com" class="flex items-center">
//             {/* <img
//               src="/docs/images/logo.svg"
//               class="mr-3 h-6 sm:h-9"
//               alt="Flowbite Logo"
//             /> */}
//             <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
//               KSHRD ALUMNI
//             </span>
//           </a>
//           <button
//             data-collapse-toggle="mobile-menu"
//             type="button"
//             class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//             aria-controls="mobile-menu"
//             aria-expanded="false"
//           >
//             <span class="sr-only">Open main menu</span>
//             <svg
//               class="w-6 h-6"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fill-rule="evenodd"
//                 d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//                 clip-rule="evenodd"
//               ></path>
//             </svg>
//             <svg
//               class="hidden w-6 h-6"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fill-rule="evenodd"
//                 d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                 clip-rule="evenodd"
//               ></path>
//             </svg>
//           </button>
//           <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
//             <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
//               <li>
//                 <a
//                   href="#"
//                   class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
//                   aria-current="page"
//                 >
//                   ALUMNI
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   class="self-center block text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   RESUME
//                 </a>
//               </li>
//               <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

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

export default function NavbarComponent() {
  const navigate = useNavigate();

  const [openNavbar, setOpenNavbar] = useState(false);
  const isAuth = useSelector((state) => state.isAuth);

  return (
    <div style={logoBackground}>
      <div className="container mx-auto">
        <div className="">
          <img
            src={logo}
            alt="logo homepage"
            style={{ ...styles, ...logoStyle }}
            className="border-none"
          />
        </div>
      </div>

      <div className="relative body-font font-maven">
        <nav
          className="bg-white px-4 py-2.5 text-white body-font font-maven tablet:text-sm overflow-hidden"
          style={styles}
        >
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <button onClick={() => navigate("/")} className="items-center">
              <span className="self-center text-3xl font-bold tracking-wider whitespace-nowrap">
                KSHRD ALUMNI
              </span>
            </button>
            <button
              onClick={() => setOpenNavbar(!openNavbar)}
              data-collapse-toggle="mobile-menu"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg laptop:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div>
              <div
                className={
                  openNavbar
                    ? "hidden"
                    : "w-full flex justify-start"
                }
                id="mobile-menu"
              >
                <ul className="flex flex-col mt-4 text-sm laptop:text-md desktop:text-lg laptop:flex-row laptop:space-x-8 laptop:mt-0 laptop:font-medium laptop:items-center">
                  <li>
                    <button
                      onClick={() => navigate("/viewAlumni")}
                      className="inline-flex w-full px-2 py-2 text-sm text-white rounded-md shadow-sm laptop:text-md desktop:text-lg laptop:font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-900 focus:ring-offset-gray-100"
                      aria-current="page"
                    >
                      ALUMNI
                    </button>
                  </li>

                  <div className="z-10 block py-2 text-white rounded laptop:bg-transparent laptop:p-0 dark:text-white">
                    <Menu as="div" className="inline-block text-left">
                      <Menu.Button className="inline-flex justify-center w-full px-2 py-2 text-sm text-white rounded-md shadow-sm laptop:text-md desktop:text-lg laptop:font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
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
                                        "Please! login to access more feature",
                                      );
                                    isAuth
                                      ? navigate("/sidebar/createNewCV")
                                      : navigate("/login");
                                  }}
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700 bg-white rounded",
                                    "block px-4 py-2 text-sm",
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
                                        "Please! login to access more feature",
                                      );
                                    isAuth
                                      ? navigate("/sidebar/cvTemplate")
                                      : navigate("/login");
                                  }}
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700 bg-white rounded",
                                    "block px-4 py-2 text-sm",
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
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
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

