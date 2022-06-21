import React from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { colors } from "../commons/colors/colors";
import { useDispatch } from "react-redux";

import alumni1 from "../commons/images/Alumni/alumni1.jpg";
import { fetchIsAucthenticated } from "../redux/actions/IsAuthenticationAction";

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

export default function SidebarComponent() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  return (
    <div class="container mx-auto body-font font-maven">
      {/* sideBar */}
      <div class="mt-5 grid grid-cols-5 min-h-screen">
        <div style={styles}>
          <div class=" text-white font-light text-center text-lg p-3 ">
            <div class="flex justify-center mt-5">
              <img class="rounded-full p-5" src={alumni1} />
            </div>

            <p class="p-5">
              Hi, my name is Vong Yuoyi and I'm a senior software engineer.
              Welcome to my personal website!
            </p>
            {/* <p class="divide-y-3"></p> */}
            <hr class="mt-10"></hr>
            <p class="mt-5">Contact school’s info:</p>

            <div class="flex pt-3 justify-center">
              <ButtonMailto mailto="mailto:info.kshrd@gmail.com" class="mr-2">
                <svg
                  class="h-auto w-7 text-white"
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
                class="mr-2 cursor-pointer"
              >
                <svg
                  class="h-auto w-7 text-white border rounded-full"
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
                class="mr-2 cursor-pointer"
              >
                <svg
                  class="h-auto w-7 text-white"
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

            <hr class="mt-5"></hr>

            <div class="flex items-center mt-5 px-2 py-2 hover:bg-gray-50 hover:rounded-md hover:text-blue-500">
              <span>
                <svg
                  class="h-auto w-6 "
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
              {/* <img class="mr-3 iCon" src={v2} /> */}
              <div class="ml-5">
                <NavLink to="/sidebar/aboutMe">About Me</NavLink>
              </div>
            </div>

            <div class="flex items-center mt-5 px-2 py-2 hover:bg-gray-50 hover:rounded-md hover:text-blue-500">
              <span>
                <svg
                  class="h-auto w-6"
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
              <div class="ml-5">
                <NavLink to="">Portfolio</NavLink>
              </div>
            </div>

            <div class="flex items-center mt-5 px-2 py-2 hover:bg-gray-50 hover:rounded-md hover:text-blue-500 cursor-pointer">
              <span>
                <svg
                  class="h-auto w-6"
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
              <p class="ml-5">Resume</p>
              <span class="ml-auto">
                <svg
                  class="h-auto w-6 "
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
            </div>

            <div class="flex items-center mt-5 px-2 py-2 hover:bg-gray-50 hover:rounded-md hover:text-blue-500">
              <span>
                <svg
                  class="h-auto w-6"
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

              <div class="ml-5">
                <NavLink to="/sidebar/accountSetting">Account Setting</NavLink>
              </div>
              {/* <NavLink to="account-setting "> Account Setting</NavLink> */}
            </div>

            <div
              onClick={() => {
                dispatch(fetchIsAucthenticated(false));
                localStorage.setItem("isAuth", false)
                navigate("/");
              }}
              class="flex items-center mt-5 px-2 py-2 hover:bg-gray-50 hover:rounded-md hover:text-blue-500 cursor-pointer"
            >
              <span>
                <svg
                  class="h-auto w-6"
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
              <p class="ml-5">Log Out</p>
            </div>
          </div>
        </div>

        {/* Result */}
        <div class="col-span-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

const styles = {
  backgroundColor: colors.content,
  // logoSize: myStyles.logoSize
};
