import { useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
export default function AdminNavbarComponent({ showSidebar, setShowSidebar }) {
  const location = useLocation().pathname;
  const [show, setshow] = useState(false);
  const navigate = useNavigate()
  return (
    <div className="body-font font-maven bg-gradient-to-b from-blue-200 to-white  laptop:ml-[330px]   tablet:ml-[330px]">
      <nav className="desktop:container desktop:mx-auto tablet:py-6 tablet:px-7 py-5 px-4 ">
        <div className="tablet:hidden">
          <button
            color="transparent"
            buttonType="link"
            size="lg"
            iconOnly
            rounded
            ripple="light"
            className="animate-pulse"
            onClick={() => setShowSidebar("left-0")}
          >
            <svg
              class="h-8 w-8 text-red-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <polyline points="13 17 18 12 13 7" />{" "}
              <polyline points="6 17 11 12 6 7" />
            </svg>
          </button>
          <div
            className={`absolute top-2 tablet:hidden ${
              showSidebar === "left-0" ? "left-[330px]" : "-left-[330px]"
            } z-50 transition-all duration-300`}
          >
            <button
              color="transparent"
              buttonType="link"
              size="lg"
              iconOnly
              rounded
              ripple="light"
              className="animate-pulse"
              onClick={() => setShowSidebar("-left-[330px]")}
            >
              <svg
                class="h-8 w-8 text-red-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <polyline points="11 17 6 12 11 7" />{" "}
                <polyline points="18 17 13 12 18 7" />
              </svg>
            </button>
          </div>
        </div>
        {/* For large and Medium-sized Screen */}
        <div className="flex justify-between ">
          <div className=" flex space-x-3  items-center">
            <h1 className=" text-4xl leading-6 font-maven font-f36 font-bold text-ch">
              {location === "/admin/manageStudent"
                ? "Manage Student"
                : location === "/admin/filterAlumin"
                ? "Filter Alumni"
                : location === "/admin/manageCv"
                ? "Manage CVs"
                : "Welcome back, Admin!"}
            </h1>
          </div>
          <div className="hidden tablet:flex flex-row space-x-4">
            <div>
              <button
                type="button"
                class="bg-[#DFE3E8] p-1  rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                onClick={() => navigate('accunt')}
              >
                <span class="sr-only">View notifications</span>

                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.2627 2.66602L11.4163 6.46549C10.935 6.69713 10.4748 6.96393 10.0335 7.26497L6.31999 6.0957L2.58301 12.5697L5.39811 15.1478C5.28813 15.9641 5.33794 16.3666 5.39811 16.8509L2.58301 19.429L6.31999 25.903L10.0335 24.7337C10.4748 25.0348 10.935 25.3016 11.4163 25.5332L12.2627 29.3327H19.7367L20.583 25.5332C21.0644 25.3016 21.5245 25.0348 21.9658 24.7337L25.6794 25.903L29.4163 19.429L26.6012 16.8509C26.6242 16.5675 26.6661 16.2839 26.6663 15.9993C26.6674 15.7062 26.6212 15.4101 26.6012 15.1478L29.4163 12.5697L25.6794 6.0957L21.9658 7.26497C21.5245 6.96393 21.0644 6.69713 20.583 6.46549L19.7367 2.66602H12.2627ZM14.4033 5.33268H17.596L18.2549 8.29102L18.9163 8.55143C19.6646 8.84446 20.364 9.2478 20.9919 9.74935L21.5492 10.1921L24.4398 9.2832L26.0361 12.0488L23.8018 14.0983L23.9085 14.8014C24.0342 15.579 24.0098 16.4739 23.9085 17.1973L23.8018 17.9004L26.0361 19.9499L24.4398 22.7155L21.5492 21.8066L20.9919 22.2493C20.364 22.7509 19.6646 23.1542 18.9163 23.4473L18.2549 23.7077L17.596 26.666H14.4033L13.7445 23.7077L13.083 23.4473C12.3348 23.1542 11.6353 22.7509 11.0075 22.2493L10.4502 21.8066L7.55957 22.7155L5.96322 19.9499L8.19759 17.9004L8.09082 17.1973C7.96059 16.404 7.98058 15.4961 8.09082 14.8014L8.19759 14.0983L5.96322 12.0488L7.55957 9.2832L10.4502 10.1921L11.0075 9.74935C11.6353 9.2478 12.3348 8.84446 13.083 8.55143L13.7445 8.29102L14.4033 5.33268ZM15.9997 10.666C13.0699 10.666 10.6663 13.0696 10.6663 15.9993C10.6663 18.9291 13.0699 21.3327 15.9997 21.3327C18.9294 21.3327 21.333 18.9291 21.333 15.9993C21.333 13.0696 18.9294 10.666 15.9997 10.666ZM15.9997 13.3327C17.4882 13.3327 18.6663 14.5108 18.6663 15.9993C18.6663 17.4879 17.4882 18.666 15.9997 18.666C14.5111 18.666 13.333 17.4879 13.333 15.9993C13.333 14.5108 14.5111 13.3327 15.9997 13.3327Z"
                    fill="#255FAB"
                  />
                </svg>
              </button>
            </div>

            <div>
              <p className="font-maven text-md font-bold text-ch">Nabila A.</p>
              <p className="text-right font-maven">Admin</p>
            </div>
            <div>
              <button
                type="button"
                class="bg-gray-800 flex w-14 h-14 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="w-14 h-14 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </button>
            </div>
          </div>
          {/* Burger Icon */}
          <div
            id="bgIcon"
            onClick={() => setshow(!show)}
            className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  justify-center items-center tablet:hidden cursor-pointer`}
          >
            <svg
              className={`${show ? "hidden" : ""}`}
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className=" transform duration-150"
                d="M4 6H20"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 12H20"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className=" transform duration-150"
                d="M4 18H20"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              className={`${show ? "block" : "hidden"}`}
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        {/* Mobile and small-screen devices (toggle Menu) */}
        <div
          id="MobileNavigation"
          className={`${show ? "block" : "hidden"} tablet:hidden mt-4 mx-auto`}
        >
          <div className="flex flex-col gap-4 mt-4 w-80 laptop:ml-96 mx-auto ">
            <div className="flex-shrink-0 flex items-center">
              <div className="mr-2">
                <button
                  type="button"
                  class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span class="sr-only">View notifications</span>

                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.2627 2.66602L11.4163 6.46549C10.935 6.69713 10.4748 6.96393 10.0335 7.26497L6.31999 6.0957L2.58301 12.5697L5.39811 15.1478C5.28813 15.9641 5.33794 16.3666 5.39811 16.8509L2.58301 19.429L6.31999 25.903L10.0335 24.7337C10.4748 25.0348 10.935 25.3016 11.4163 25.5332L12.2627 29.3327H19.7367L20.583 25.5332C21.0644 25.3016 21.5245 25.0348 21.9658 24.7337L25.6794 25.903L29.4163 19.429L26.6012 16.8509C26.6242 16.5675 26.6661 16.2839 26.6663 15.9993C26.6674 15.7062 26.6212 15.4101 26.6012 15.1478L29.4163 12.5697L25.6794 6.0957L21.9658 7.26497C21.5245 6.96393 21.0644 6.69713 20.583 6.46549L19.7367 2.66602H12.2627ZM14.4033 5.33268H17.596L18.2549 8.29102L18.9163 8.55143C19.6646 8.84446 20.364 9.2478 20.9919 9.74935L21.5492 10.1921L24.4398 9.2832L26.0361 12.0488L23.8018 14.0983L23.9085 14.8014C24.0342 15.579 24.0098 16.4739 23.9085 17.1973L23.8018 17.9004L26.0361 19.9499L24.4398 22.7155L21.5492 21.8066L20.9919 22.2493C20.364 22.7509 19.6646 23.1542 18.9163 23.4473L18.2549 23.7077L17.596 26.666H14.4033L13.7445 23.7077L13.083 23.4473C12.3348 23.1542 11.6353 22.7509 11.0075 22.2493L10.4502 21.8066L7.55957 22.7155L5.96322 19.9499L8.19759 17.9004L8.09082 17.1973C7.96059 16.404 7.98058 15.4961 8.09082 14.8014L8.19759 14.0983L5.96322 12.0488L7.55957 9.2832L10.4502 10.1921L11.0075 9.74935C11.6353 9.2478 12.3348 8.84446 13.083 8.55143L13.7445 8.29102L14.4033 5.33268ZM15.9997 10.666C13.0699 10.666 10.6663 13.0696 10.6663 15.9993C10.6663 18.9291 13.0699 21.3327 15.9997 21.3327C18.9294 21.3327 21.333 18.9291 21.333 15.9993C21.333 13.0696 18.9294 10.666 15.9997 10.666ZM15.9997 13.3327C17.4882 13.3327 18.6663 14.5108 18.6663 15.9993C18.6663 17.4879 17.4882 18.666 15.9997 18.666C14.5111 18.666 13.333 17.4879 13.333 15.9993C13.333 14.5108 14.5111 13.3327 15.9997 13.3327Z"
                      fill="#255FAB"
                    />
                  </svg>
                </button>
              </div>
              <div className="mr-2">
                <p className="font-maven text-md font-bold text-ch">
                  Nabila A.
                </p>
                <p className="text-right font-maven">Admin</p>
              </div>
              <div>
                <button
                  type="button"
                  class="bg-gray-800 w-14 h-14 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="h-14 w-14 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
