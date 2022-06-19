import React, { useState } from "react";
import { colors, myStyles } from "../commons/colors/colors";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import logo from "../commons/images/logo.png";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-bootstrap";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavbarComponent() {
  const navigate = useNavigate();

  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <div style={logoBackground}>
      <div class="container mx-auto">
        <div class="">
          <img
            src={logo}
            alt="logo homepage"
            style={{ ...styles, ...logoStyle }}
            class="border-none"
          />
        </div>
      </div>

      <div class="body-font font-maven relative">
        <nav
          class="bg-white px-4 py-2.5 text-white body-font font-maven tablet:text-sm overflow-hidden"
          style={styles}
        >
          <div class="container flex flex-wrap justify-between items-center mx-auto">
            <a href="http://localhost:3000/" class="items-center">
              <span class="self-center text-3xl font-bold whitespace-nowrap tracking-wider">
                KSHRD ALUMNI
              </span>
            </a>
            <button
              onClick={() => setOpenNavbar(!openNavbar)}
              data-collapse-toggle="mobile-menu"
              type="button"
              class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg laptop:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
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
                class="hidden w-6 h-6"
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
            <div
              className={
                openNavbar
                  ? "hidden"
                  : "w-full flex justify-start laptop:w-auto"
              }
              id="mobile-menu"
            >
              <ul class="laptop:text-md desktop:text-lg flex flex-col mt-4 laptop:flex-row laptop:space-x-8 laptop:mt-0 text-sm laptop:text-md laptop:font-medium laptop:items-center">
                <li>
                  <a
                    href="http://localhost:3000/viewAlumni"
                    class="laptop:text-md desktop:text-lg inline-flex w-full px-2 py-2 text-sm laptop:font-medium text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-900 focus:ring-offset-gray-100"
                    aria-current="page"
                  >
                    ALUMNI
                  </a>
                </li>
                <div class="z-10 block py-2 text-white rounded laptop:bg-transparent laptop:p-0 dark:text-white">
                  <Menu as="div" className="inline-block text-left">
                    <Menu.Button className="inline-flex justify-center w-full px-2 py-2 text-sm text-white rounded-md shadow-sm laptop:text-md desktop:text-lg laptop:font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                      NEW RESUME
                      <ChevronDownIcon
                        className="w-5 h-5 ml-2 -mr-1"
                        aria-hidden="true"
                      />
                    </Menu.Button>

                    <Transition
                      class="absolute"
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="right-0 w-56 mt-2 origin-top-right bg-white shadow-lg rounded-laptop ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                onClick={() => navigate("/sidebar/createNewCV")}
                                
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
                                onClick={() => navigate("/sidebar/cvTemplate")}
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
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>

                <div class="py-2 px-2">
                  <button
                    onClick={() => navigate("/login")}
                    // style={styles}
                    class="text-white py-1 px-2 rounded-md inline-flex justify-between border items-center"
                  >
                    LOG IN{" "}
                    <span>
                      <svg
                        class="h-auto w-7 text-white pl-2"
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
                </div>
              </ul>
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
