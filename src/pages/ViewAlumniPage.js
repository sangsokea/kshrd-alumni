import React, { useState } from "react";
import view_alumni from "../commons/images/view alumni.jpg";
import PaginationComponent from "../components/PaginationComponent";

export default function ViewAlumniPage() {
  const [dropdown, setDropdown] = useState(false);

  const [data, setData] = useState([
    {
      profile:
        "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-suliman-sallehi-1704488.jpg&fm=jpg",
      name: "Mr. Sang Sokea",
      bio: "Experienced programmer with serveral successful projects under my belt.",
    },
    {
      profile:
        "https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/11/alone-Best-Dp-Profile-Images-For-Instagram-photo.gif",
      name: "Ms. Pol Paradis",
      bio: "I dream of working at Google, working on applications billions of people use.",
    },
  ]);

  return (
    <div class="container mx-auto bg-slate-300 mt-3 body-font font-maven">
      <div class="grid grid-cols-5">
        <div class="col-span-1">
          <div class="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto border-r">
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
                  class="text-lg block p-2 pl-10 w-full rounded-lg border border-blue-400 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                  placeholder="Search any name"
                  required
                />
              </div>
            </form>

            <div>
              <button
                id="menu-btn"
                class="text-md desktop:text-lg py-2 rounded mb-2 flex"
                onClick={() => setDropdown(!dropdown)}
              >
                Skill{" "}
                <span class="ml-36">
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
                </span>
              </button>

              <div
                id="dropdown"
                className={
                  !dropdown ? "hidden" : "bg-gray-200 flex flex-col rounded p-2"
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

            <div class="text-md desktop:text-lg mt-5">
              Generation
              <span class="ml-16">
                <input
                  type="text"
                  class="p-2 w-16 rounded-md border border-blue-500 bg-gray-200"
                ></input>
              </span>
            </div>
          </div>
        </div>
        <div class="laptop:ml-20 col-span-4 mr-5 mt-5 hidden laptop:block">
          <img
            src="https://kshrd.com.kh/static/media/about2.eb34674d.jpg"
            alt="view alumni logo"
          ></img>
          <div class="text-lg mt-5 font-bold mb-5">Results</div>

          {/* card */}
          {/* <div>
            {data.map((item, index) => {
              <div> */}
          <div class="grid grid-cols-2 gap-5">
            {/* {data.map((item) => {
              <a
                href="#"
                class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <img
                  class="w-16 h-auto rounded"
                  src={item.profile}
                  alt=""
                />
                <div class="flex flex-col justify-between p-4 leading-normal">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.name}
                  </h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.bio}
                  </p>
                </div>
                <button class="bg-blue-500 rounded px-2 mt-auto mr-2 ">
                  View
                </button>
              </a>;
            })} */}

            <a
              href="#"
              class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-100"
            >
              <img
                class="w-16 h-auto rounded"
                src="https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/11/alone-Best-Dp-Profile-Images-For-Instagram-photo.gif"
                alt=""
              />
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                  Ms. Pol Paradis
                </h5>
                <p class="mb-3 font-normal text-black">
                  Experienced programmer with serveral successful projects under
                  my belt.
                </p>
              </div>
              <button class="bg-blue-500 rounded px-2 mt-auto mr-1 ">
                View
              </button>
            </a>

            <a
              href="#"
              class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-100 "
            >
              <img
                class="w-16 h-auto rounded"
                src="https://i.pinimg.com/originals/bc/af/18/bcaf18ce6054768da1628a939e2b4f65.jpg"
                alt=""
              />
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                  Mr.Sang Sokea
                </h5>
                <p class="mb-3 font-normal text-black">
                  Experienced programmer with serveral successful projects under
                  my belt.
                </p>
              </div>
              <button class="bg-blue-500 rounded px-2 mt-auto mr-1 ">
                View
              </button>
            </a>

            <a
              href="#"
              class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-100"
            >
              <img
                class="w-16 h-auto rounded"
                src="https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/11/alone-Best-Dp-Profile-Images-For-Instagram-photo.gif"
                alt=""
              />
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                  Ms. Pol Paradis
                </h5>
                <p class="mb-3 font-normal text-black">
                  Experienced programmer with serveral successful projects under
                  my belt.
                </p>
              </div>
              <button class="bg-blue-500 rounded px-2 mt-auto mr-1 ">
                View
              </button>
            </a>

            <a
              href="#"
              class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-100 "
            >
              <img
                class="w-16 h-auto rounded"
                src="https://i.pinimg.com/originals/bc/af/18/bcaf18ce6054768da1628a939e2b4f65.jpg"
                alt=""
              />
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                  Mr.Sang Sokea
                </h5>
                <p class="mb-3 font-normal text-black">
                  Experienced programmer with serveral successful projects under
                  my belt.
                </p>
              </div>
              <button class="bg-blue-500 rounded px-2 mt-auto mr-1 ">
                View
              </button>
            </a>

            <a
              href="#"
              class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-100 "
            >
              <img
                class="w-16 h-auto rounded"
                src="https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/11/alone-Best-Dp-Profile-Images-For-Instagram-photo.gif"
                alt=""
              />
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                  Ms. Pol Paradis
                </h5>
                <p class="mb-3 font-normal text-black">
                  Experienced programmer with serveral successful projects under
                  my belt.
                </p>
              </div>
              <button class="bg-blue-500 rounded px-2 mt-auto mr-1 ">
                View
              </button>
            </a>

            <a
              href="#"
              class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-100 "
            >
              <img
                class="w-16 h-auto rounded"
                src="https://i.pinimg.com/originals/bc/af/18/bcaf18ce6054768da1628a939e2b4f65.jpg"
                alt=""
              />
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                  Mr.Sang Sokea
                </h5>
                <p class="mb-3 font-normal text-black">
                  Experienced programmer with serveral successful projects under
                  my belt.
                </p>
              </div>
              <button class="bg-blue-500 rounded px-2 mt-auto mr-1 ">
                View
              </button>
            </a>
        
          </div>

          {/* </div>;
            })}
          </div> */}
        </div>
      </div>

      <PaginationComponent />
    </div>
  );
}
