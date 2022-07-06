import React, { useState } from "react";
import view_alumni from "../commons/images/Cover-dashboard.jpg";
import PaginationComponent from "../components/PaginationComponent";
import { setNumberOfLines } from "../commons/colors/colors";
import { colors } from "../commons/colors/colors";
import "../commons/styles/text.css";
import alumni1 from "../commons/images/Alumni/alumni1.jpg";
import alumni2 from "../commons/images/Alumni/alumni2.jpg";
import alumni3 from "../commons/images/Alumni/alumni3.jpg";
import alumni4 from "../commons/images/Alumni/alumni4.jpg";
import alumni5 from "../commons/images/Alumni/alumni5.jpg";
import { useNavigate } from "react-router-dom";
// import alumni6 from "../commons/images/Alumni/alumni6.jpg";

export default function ViewAlumniPage() {
  const [dropdown, setDropdown] = useState(false);

  const navigate = useNavigate();

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
    <div className="desktop:container desktop:mx-auto mt-5 rounded-md shadow-lg body-font font-maven">
      <div className="grid grid-cols-4">
        <div className="hidden laptop:block laptop:col-span-1">
          <div className="flex flex-col w-auto h-screen px-4 py-8 overflow-y-auto border-r ">
            <div className="mb-5 shrink-0 flex flex-row ">
              <img
                src={alumni4}
                className="w-10 rounded-full"
                alt="Avatar"
              />
              <p className="ml-5 mt-2 text-sm laptop:text-md desktop:text-lg">Ms. Vong Yuoyi</p>
            </div>
            <hr className="mb-5"></hr>
            <p className="mt-8 mb-5 text-2xl font-bold">Filter</p>

            <form>
              <div className="relative mb-5 focus:border-none">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
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
                  className="block w-full p-2 pl-10 text-lg border border-black rounded-lg focus:ring-blue-600 focus:ring-2 dark:bg-gray-50 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none "
                  placeholder="Search any name"
                  required
                />
              </div>
            </form>

            {/* <div className="flex flex-col">
              <button
                id="menu-btn"
                className="flex py-2 mb-2 rounded text-md desktop:text-lg"
                onClick={() => setDropdown(!dropdown)}
              >
                Skill{" "}
                <span className="ml-auto">
                  {dropdown ? (
                    <svg
                      className="w-6 h-auto text-gray-500"
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
                      className="w-6 h-auto text-gray-500"
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
                className={!dropdown ? "hidden" : "flex flex-col rounded p-2"}
              >
                <p className="flex items-center px-2 py-1 rounded hover:bg-blue-200">
                  <span>
                    <svg
                      className="w-4 h-auto mr-3 text-blue-500"
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
                </p>
                <p className="flex items-center px-2 py-1 rounded hover:bg-blue-200">
                  <span>
                    <svg
                      className="w-4 h-auto mr-3 text-blue-500"
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
                </p>
                <p className="flex items-center px-2 py-1 rounded hover:bg-blue-200">
                  <span>
                    <svg
                      className="w-4 h-auto mr-3 text-blue-500"
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
                </p>
                <p className="flex items-center px-2 py-1 rounded hover:bg-blue-200">
                  <span>
                    <svg
                      className="w-4 h-auto mr-3 text-blue-500"
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
                </p>
                <p className="flex items-center px-2 py-1 rounded hover:bg-blue-200">
                  <span>
                    <svg
                      className="w-4 h-auto mr-3 text-blue-500"
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
                </p>
              </div>
            </div> */}

          
          </div>
        </div>
        <div className="col-span-3 laptop:col-span-2 desktop:col-span-3 rounded-br-md desktop:block bg-slate-200 text-sm laptop:text-md desktop:text-lg">
          <img src={view_alumni} alt="view alumni logo"></img>
          <div className="p-5">
            <div className="mt-5 mb-3 text-2xl font-bold">Results</div>

            {/* card */}
            <div className="grid grid-cols-1 gap-5 desktop:grid-cols-2">
              {data?.map((item) => (
                <div className="w-full">
                  <div className="desktop:flex-row p-0 flex items-center laptop:p-2 laptop:pl-5 border rounded-lg bg-gray-50 tablet:flex-row hover:bg-gray-100 hover:rounded-lg hover:shadow-md">
                    <img
                      className="w-24 h-auto rounded-full"
                      src={item.profile}
                      alt="alumni"
                    />
                    <div className="flex flex-col justify-between mt-5 ml-5 leading-normal">
                      <h5 className="mb-2 text-md laptop:text-lg desktop:text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                        {item.name}
                      </h5>
                      <p className="text-sm laptop:text-md desktop:text-lg mb-7 font-normal text-black textLine w-52">
                        {item.bio}
                      </p>
                    </div>
                    <button
                      onClick={() => navigate("/sidebar/aboutMe")}
                      style={{ backgroundColor: colors.footer, color: "white" }}
                      className="ml-[-70px] mb-1 mt-auto rounded pl-5 pr-5 laptop:ml-auto"
                    >
                      View
                    </button>
                  </div>
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
