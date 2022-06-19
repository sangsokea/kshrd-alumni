import React, { useState } from "react";
import view_alumni from "../commons/images/Cover-dashboard.jpg";
import PaginationComponent from "../components/PaginationComponent";
import { setNumberOfLines } from "../commons/colors/colors";
import "../commons/styles/text.css";
import alumni1 from "../commons/images/Alumni/alumni1.jpg";
import alumni2 from "../commons/images/Alumni/alumni2.jpg";
import alumni3 from "../commons/images/Alumni/alumni3.jpg";
import alumni4 from "../commons/images/Alumni/alumni4.jpg";
import alumni5 from "../commons/images/Alumni/alumni5.jpg";
// import alumni6 from "../commons/images/Alumni/alumni6.jpg";

export default function ViewAlumniPage() {
  const [dropdown, setDropdown] = useState(false);

  const onClickDropdown = () => {
    setDropdown(!dropdown);
  };

  const [data, setData] = useState([
    {
      profile: alumni1,
      name: "Mr. Sang Sokea",
      bio: "Experienced programmer with serveral successful projects under my belt.",
    },
    {
      profile: alumni4,
      name: "Ms. Vong Yuoyi",
      bio: "I've been working in one of the BIG 4 companies for seven years, climbing ...",
    },
    {
      profile: alumni2,
      name: "Ms. Pol Paradis",
      bio: "I dream of working at Google, working on applications billions of people use ...",
    },
    {
      profile: alumni3,
      name: "Mr. Kong Sachayarith",
      bio: "Passionate coder, responsible father, best colleague ever.",
    },
    {
      profile: alumni3,
      name: "Mr. Em Boonlin",
      bio: "Well, I've been working on mobile app development for four years now, ...",
    },
    {
      profile: alumni5,
      name: "Ms. Stranger Khatia",
      bio: "Looking for a part time job I can do while still at school, ideally working ...",
    },
  ]);

  return (
    <div class="container mx-auto mt-3 body-font font-maven rounded-md shadow-lg">
      <div class="grid grid-cols-4">
        <div class="col-span-1">
          <div class="flex flex-col w-auto h-screen px-4 py-8 overflow-y-auto border-r ">
            <div class="shrink-0 mb-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                class="rounded-full w-10"
                alt="Avatar"
              />
            </div>
            <hr class="mb-5"></hr>
            <p class="text-2xl font-bold mb-5 mt-8">Filter</p>

            <form>
              <div class="relative mb-5 focus:border-none">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="text-lg block p-2 pl-10 w-full rounded-lg border border-black focus:ring-blue-600 focus:ring-2 dark:bg-gray-50 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none "
                  placeholder="Search any name"
                  required
                />
              </div>
            </form>

            <div class="flex flex-col">
              <button
                id="menu-btn"
                class="text-md desktop:text-lg py-2 rounded mb-2 flex"
                onClick={() => setDropdown(!dropdown)}
              >
                Skill{" "}
                <span class="ml-auto">
                  {dropdown ? (
                    <svg
                      class="h-auto w-6 text-gray-500"
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
                      <polyline points="6 15 12 9 18 15" />
                    </svg>
                  ) : (
                    <svg
                      class="h-auto w-6 text-gray-500"
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
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  )}
                </span>
              </button>

              <div
                id="dropdown"
                className={
                  !dropdown ? "hidden" : "flex flex-col rounded p-2"
                }
              >
                <a
                  href="#"
                  class="px-2 py-1 hover:bg-blue-200 rounded flex items-center"
                >
                  <span>
                    <svg
                      class="h-auto w-4 text-blue-500 mr-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {" "}
                      <polyline points="9 11 12 14 22 4" />{" "}
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                  </span>
                  Basic Java
                </a>
                <a
                  href="#"
                  class="px-2 py-1 hover:bg-blue-200 rounded flex items-center"
                >
                  <span>
                    <svg
                      class="h-auto w-4 text-blue-500 mr-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {" "}
                      <polyline points="9 11 12 14 22 4" />{" "}
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                  </span>
                  React
                </a>
                <a
                  href="#"
                  class="px-2 py-1 hover:bg-blue-200 rounded flex items-center"
                >
                  <span>
                    <svg
                      class="h-auto w-4 text-blue-500 mr-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {" "}
                      <polyline points="9 11 12 14 22 4" />{" "}
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                  </span>
                  Spring
                </a>
                <a
                  href="#"
                  class="px-2 py-1 hover:bg-blue-200 rounded flex items-center"
                >
                  <span>
                    <svg
                      class="h-auto w-4 text-blue-500 mr-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {" "}
                      <polyline points="9 11 12 14 22 4" />{" "}
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                  </span>
                  Angular
                </a>
                <a
                  href="#"
                  class="px-2 py-1 hover:bg-blue-200 rounded flex items-center"
                >
                  <span>
                    <svg
                      class="h-auto w-4 text-blue-500 mr-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {" "}
                      <polyline points="9 11 12 14 22 4" />{" "}
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                  </span>
                  Backend
                </a>
              </div>
            </div>

            <div class="mt-5">
              <div class="text-md desktop:text-lg flex flex-row">
                Generation
                <span class="ml-auto">
                  <input
                    type="text"
                    class="p-2 w-16 rounded-md border border-black bg-gray-50 focus:outline-none focus:ring-blue-600 focus:ring-2"
                  ></input>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="rounded-br-md col-span-3 hidden laptop:block bg-slate-200 laptop:text-md desktop:text-lg">
          <img src={view_alumni} alt="view alumni logo"></img>
          <div class="p-5">
            <div class="text-2xl mt-10 font-bold mb-5">Results</div>

            {/* card */}
            <div class="grid grid-cols-2 gap-5">
              {data.map((item) => (
                <div>
                  <a
                    href="#"
                    class="flex flex-col items-center bg-gray-50 rounded-lg border md:flex-row hover:bg-gray-100 hover:rounded-lg hover:shadow-md pl-5 "
                  >
                    <img
                      class="w-24 h-auto rounded-full"
                      src={item.profile}
                      alt="alumni"
                    />
                    <div class="flex flex-col justify-between pt-5 pl-5 leading-normal">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                        {item.name}
                      </h5>
                      <p class="font-normal text-black textLine w-52 mb-5">
                        {item.bio}
                      </p>
                    </div>
                    <button class="bg-blue-500 mt-auto rounded-md pl-2.5 pr-2.5 ml-auto">
                      View
                    </button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <PaginationComponent />
    </div>
  );
}
