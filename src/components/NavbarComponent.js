import React, { useState } from "react";
import { colors, myStyles } from "../commons/colors/colors";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import logo from "../commons/images/KSHRD Alumni_Logo_Final-Whtie.png";
import { useNavigate } from "react-router-dom";

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
            alt="..."
            style={{ ...styles, ...logoStyle }}
            class="border-none"
          />
        </div>
      </div>

      <div>
        <nav
          class="bg-white px-2 tablet:px-4 py-2.5 text-white body-font font-maven tablet:text-sm"
          style={styles}
        >
          <div class="container flex flex-wrap justify-between items-center mx-auto">
            <a href="http://localhost:3000/" class="flex items-center">
              <span class="self-center text-2xl font-bold whitespace-nowrap tracking-wider">
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
                (openNavbar ? "laptop:block laptop:w-auto" : " hidden")
              }
              class="hidden w-full laptop:block laptop:w-auto"
              id="mobile-menu"
            >
              <ul class="flex flex-col mt-4 laptop:flex-row laptop:space-x-8 laptop:mt-0 laptop:text-sm laptop:font-medium items-center">
                <li>
                  <a
                    href="#"
                    class="block py-2 pr-4 pl-3 text-white rounded laptop:bg-transparent laptop:p-0 dark:text-white"
                    aria-current="page"
                  >
                    ALUMNI
                  </a>
                </li>
                <div class="block py-2 pr-4 pl-3 text-white rounded laptop:bg-transparent laptop:p-0 dark:text-white">
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="inline-flex justify-center w-full rounded-laptop shadow-sm px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                        NEW RESUME
                        <ChevronDownIcon
                          className="-mr-1 ml-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-laptop shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-500",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                New Resume
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
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
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
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

                <div>
                  <button
                    onClick={() => navigate("/register")}
                    // style={styles}
                    class="text-white py-1 px-2 rounded-md inline-flex justify-between border items-center"
                  >
                    SIGN UP{" "}
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
