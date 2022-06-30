import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Add } from "../../commons/icon/add.svg";
import { ReactComponent as Removed } from "../../commons/icon/removed.svg";
import { ReactComponent as Remove } from "../../commons/icon/remove.svg";
import { Transition, Popover } from "@headlessui/react";

export default function ViewStudentProfile() {
  const [skill, setSkill] = useState([
    {
      id: 1,
      title: "Java",
      desc: "This is Java book",
    },
    {
      id: 1,
      title: "Java",
      desc: "This is Java book",
    },
    {
      id: 2,
      title: "Javascript",
      desc: "This is Javascript Book",
    },
    {
      id: 3,
      title: "Spring",
      desc: "This is Spring Book",
    },
  ]);
  const [vall, setTitle] = useState(true);
  const [valls, setTitles] = useState(true);
  const [title, setTitleValues] = useState(
    "I am gratuated student from HRD and have more than 2 years' experience building software for clients. Below is a quick overview of my main technical skill sets and technologies I use.  "
  );
  const [test, setTest] = useState(true);
  const [summary, setSummary] = useState(
    "I'm a Junior Developer in frontend and backend development for complex scalable web apps. If you want to know how I may help your project? Check out my project portfolio and online resume."
  )
  const handleTitleChange = (e) => {
    let titleFormValues = e.target.value;
    setTitleValues(titleFormValues);
    console.log(titleFormValues);
  };
  const handleSummarChange = (e) => {
    setSummary( e.target.value);
    console.log(e.target.value);
  };
  const resetInputTitle = () => {
    setTitleValues("");
  };
  const navigate = useNavigate();
  return (
    <div className="">
      <div>
        <div className="mt-10 w-full h-40 bg-[#255FAB] ">
          <div className="flex items-end justify-end ">
            <svg
            className="mt-[50px]"
              width="423"
              height="109"
              viewBox="0 0 423 109  "
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="8"
                y="58.5645"
                width="247.592"
                height="259.13"
                rx="123.796"
                stroke="#FB7D5B"
                stroke-width="16"
              />
              <rect
                x="167.011"
                y="8.65234"
                width="247.592"
                height="259.13"
                rx="123.796"
                stroke="#FCC43E"
                stroke-width="16"
              />
            </svg>
          </div>
          <img
            class="w-36 h-36 p-1 absolute top-56 object-cover rounded-full ring-2  ml-5 bg-gray-300 dark:ring-gray-500"
            src="https://www.biography.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTg1NjUzOTgxOTk1ODY5ODI0/johnnydepp.jpg"
            alt="Bordered avatar"
          />
        </div>
        <div className="mt-19 ml-11 font-maven grid grid-cols-6 font-bold text-ch text-xl">
          <div className="col-span-5">
            <p className="mb-3">Vong Yuoyi</p>
            <div class="flex items-center">
              <div class="">
                <label
                  class="block text-gray-500 font-bold tablet:text-right  pr-4"
                  for="inline-full-name"
                >
                  ID :
                </label>
              </div>
              <div class="">
                <input
                  class="block w-20 h-10 bg-[#F5F5F6] px-4 py-2 mt-2 text-gray-700  border border-[#255FAB] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  id="inline-full-name"
                  type="text"
                  value="10"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end flex-col">
            <button>
              <svg
                onClick={() => navigate("edite")}
                width="38px"
                height="38px"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.6758 13.9058L23.0942 15.3242L9.12667 29.2917H7.70833V27.8733L21.6758 13.9058V13.9058ZM27.2258 4.625C26.8404 4.625 26.4396 4.77917 26.1467 5.07208L23.3254 7.89333L29.1067 13.6746L31.9279 10.8533C32.5292 10.2521 32.5292 9.28083 31.9279 8.67958L28.3204 5.07208C28.0121 4.76375 27.6267 4.625 27.2258 4.625V4.625ZM21.6758 9.54292L4.625 26.5937V32.375H10.4063L27.4571 15.3242L21.6758 9.54292V9.54292Z"
                  fill="#255FAB"
                />
              </svg>
            </button>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button>
                    <svg
                      width="36px"
                      height="36px"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.07399 13.25H35.9252C36.8604 13.25 37.6255 14.015 37.6255 14.9503V15.133C37.6255 16.0683 36.8604 16.8333 35.9252 16.8333H7.07399C6.13874 16.8333 5.37549 16.0683 5.37549 15.133V14.9503C5.37549 14.015 6.13874 13.25 7.07399 13.25ZM35.9252 22.2083H7.07399C6.13874 22.2083 5.37549 22.9734 5.37549 23.9086V24.0914C5.37549 25.0266 6.13874 25.7917 7.07399 25.7917H35.9252C36.8604 25.7917 37.6255 25.0266 37.6255 24.0914V23.9086C37.6255 22.9734 36.8604 22.2083 35.9252 22.2083ZM35.9252 31.1667H7.07399C6.13874 31.1667 5.37549 31.9317 5.37549 32.867V33.0497C5.37549 33.985 6.13874 34.75 7.07399 34.75H35.9252C36.8604 34.75 37.6255 33.985 37.6255 33.0497V32.867C37.6255 31.9317 36.8604 31.1667 35.9252 31.1667Z"
                        fill="#035397"
                      />
                    </svg>
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 max-w-sm px-4 mt-3 transform -translate-x-1/2 -left-24 w-[279px] h-270 sm:px-0 lg:max-w-3xl">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative gap-8 bg-white p-7 ">
                          {/* {solutions.map((item) => ( */}
                          <div>
                            <div className="flow-root px-2 py-2 -mt-4 transition duration-150 ease-in-out rounded-md focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                              <div className="flex items-center">
                                <p className="text-2xl text-gray-900 font-maven ">
                                  Menu
                                </p>
                              </div>
                              <hr className="w-full mt-5"></hr>
                            </div>
                          </div>
                          <button className="flex items-center justify-center ml-5 mt-3">
                            <div className="mr-5">
                              <svg
                                width="15"
                                height="18"
                                viewBox="0 0 15 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M13.75 17.5H12.5V15.625C12.499 14.7965 12.1694 14.0022 11.5836 13.4164C10.9978 12.8306 10.2035 12.501 9.375 12.5H5.625C4.7965 12.501 4.00222 12.8306 3.41639 13.4164C2.83055 14.0022 2.50099 14.7965 2.5 15.625V17.5H1.25V15.625C1.25132 14.4651 1.71268 13.3531 2.53287 12.5329C3.35305 11.7127 4.46508 11.2513 5.625 11.25H9.375C10.5349 11.2513 11.6469 11.7127 12.4671 12.5329C13.2873 13.3531 13.7487 14.4651 13.75 15.625V17.5ZM0.625 2.5C0.45924 2.5 0.300269 2.56585 0.183058 2.68306C0.0658481 2.80027 0 2.95924 0 3.125V8.75H1.25V3.125C1.25 2.95924 1.18415 2.80027 1.06694 2.68306C0.949731 2.56585 0.79076 2.5 0.625 2.5Z"
                                  fill="#699BF7"
                                />
                                <path
                                  d="M0 0V1.25H3.125V5.625C3.125 6.78532 3.58594 7.89812 4.40641 8.71859C5.22688 9.53906 6.33968 10 7.5 10C8.66032 10 9.77312 9.53906 10.5936 8.71859C11.4141 7.89812 11.875 6.78532 11.875 5.625V1.25H15V0H0ZM4.375 1.25H10.625V3.125H4.375V1.25ZM7.5 8.75C6.6712 8.75 5.87634 8.42076 5.29029 7.83471C4.70424 7.24866 4.375 6.4538 4.375 5.625V4.375H10.625V5.625C10.625 6.4538 10.2958 7.24866 9.70971 7.83471C9.12366 8.42076 8.3288 8.75 7.5 8.75Z"
                                  fill="#699BF7"
                                />
                              </svg>
                            </div>

                            <p className="font-maven text-md text-[#035397] font-bold">Education</p>
                          </button>
                          <hr className="w-44 mt-4 mx-auto"></hr>
                          <button className="flex items-center justify-center ml-5 mt-5">
                            <div className="mr-5">
                              <svg
                                width="12"
                                height="15"
                                viewBox="0 0 12 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5 0V5.59H1.5L6 10.09L10.5 5.59H7V0H5ZM0 9C0 12.31 2.69 15 6 15C9.31 15 12 12.31 12 9H10C10 11.21 8.21 13 6 13C3.79 13 2 11.21 2 9H0Z"
                                  fill="#699BF7"
                                />
                              </svg>
                            </div>

                            <p className="ml-1 font-maven text-md text-[#035397] font-bold">Employment</p>
                          </button>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </div>
        </div>
        <br></br>
        <hr></hr>

        <section class=" p-6 mx-auto  rounded-md  dark:bg-gray-800">
          <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">
            Personal Information{" "}
          </h2>
          <div class="grid grid-cols-1 gap-6 mt-4 tablet:grid-cols-3">
            <div>
              <label class="text-gray-700 dark:text-gray-200" for="username">
                First Name
              </label>
              <input
                id="username"
                type="text"
                class="block w-full bg-[#F5F5F6] px-4 py-2 mt-2 text-gray-700  border border-[#255FAB] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                class="text-gray-700 dark:text-gray-200"
                for="emailAddress"
              >
                Last Name
              </label>
              <input
                id="emailAddress"
                type="text"
                class="block w-full  px-4 py-2 mt-2 text-gray-700 bg-[#F5F5F6] border border-[#255FAB] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-gray-700 dark:text-gray-200" for="password">
                Phone Number
              </label>
              <input
                id="password"
                type="number"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-[#F5F5F6] border border-[#255FAB] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                class="text-gray-700 dark:text-gray-200"
                for="passwordConfirmation"
              >
                Date of Birth
              </label>
              <input
                id="passwordConfirmation"
                type="date"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-[#F5F5F6] border border-[#255FAB] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                class="text-gray-700 dark:text-gray-200"
                for="passwordConfirmation"
              >
                Email
              </label>
              <input
                id="passwordConfirmation"
                type="email"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-[#F5F5F6] border border-[#255FAB] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                class="text-gray-700 dark:text-gray-200"
                for="passwordConfirmation"
              >
                Place of Birth
              </label>
              <input
                id="passwordConfirmation"
                type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-[#F5F5F6] border border-[#255FAB] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>
          <br></br>
          <hr></hr>
          <br></br>
          <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">
            Basic Course
          </h2>
          <div class="grid grid-cols-1 gap-6 mt-4 tablet:grid-cols-3">
            <div>
              <label class="text-gray-700 dark:text-gray-200" for="username">
                Class Name
              </label>
              <input
                id="username"
                type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-[#F5F5F6] border border-[#255FAB] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                class="text-gray-700 dark:text-gray-200"
                for="emailAddress"
              >
                Group Name
              </label>
              <input
                id="emailAddress"
                type="email"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-[#F5F5F6] border border-[#255FAB] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-gray-700 dark:text-gray-200" for="password">
                Subject Name
              </label>
              <input
                id="password"
                type="password"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-[#F5F5F6] border border-[#255FAB] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>
          <br></br>
          <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">
            Advance Course
          </h2>
          <div class="grid grid-cols-1 gap-6 mt-4 tablet:grid-cols-3">
            <div>
              <label
                class="text-gray-700 dark:text-gray-200"
                for="passwordConfirmation"
              >
                Class Name
              </label>
              <input
                id="passwordConfirmation"
                type="password"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-[#F5F5F6] border border-[#255FAB] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                class="text-gray-700 dark:text-gray-200"
                for="passwordConfirmation"
              >
                Group Name
              </label>
              <input
                id="passwordConfirmation"
                type="password"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-[#F5F5F6] border border-[#255FAB] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                class="text-gray-700 dark:text-gray-200"
                for="passwordConfirmation"
              >
                Subject Name
              </label>
              <input
                id="passwordConfirmation"
                type="password"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-[#F5F5F6] border border-[#255FAB] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>{" "}
          <br></br>
          <h2 class="text-lg  text-[#A098AE] capitalize dark:text-white mb-3">
            About
          </h2>
          <div className="grid grid-2">
            <div>
              <button
                class="rounded-md desktop:text-xl laptop:text-lg  inline-flex  justify-between content-center"
                onClick={() => setTest((Prev) => !Prev)}
              >
                {test ? (
                  <Add className="w-6 mt-1 laptop:mr-1 desktop:mr-2"></Add>
                ) : (
                  <Removed className="w-6 mt-1 laptop:mr-1 desktop:mr-2"></Removed>
                )}
                Add summary{""}
              </button>
            </div>

            <div className="">
              {test ? null : (
                <div className="grid grid-cols-1">
                  <div className="">
                    <textarea
                      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-[#F5F5F6] border border-[#255FAB] rounded-md  dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      id="password"
                      name="summary"
                      value={summary}
                      onChange={handleSummarChange}
                      placeholder=""
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex mt-12 font-maven text-[#255FAB] mb-5">
            <p className="h-10 w-1   bg-[#255FAB]"></p>
            <p className="ml-2 text-4xl font-bold  text-cB">What I can do </p>
          </div>
          <div className="grid grid-2">
            <div>
              <button
                class="rounded-md desktop:text-xl laptop:text-lg  inline-flex  justify-between content-center"
                onClick={() => setTitle((Prev) => !Prev)}
              >
                {vall ? (
                  <Add className="w-6 mt-1 laptop:mr-1 desktop:mr-2"></Add>
                ) : (
                  <Removed className="w-6 mt-1 laptop:mr-1 desktop:mr-2"></Removed>
                )}
                Add summary{""}
              </button>
            </div>

            <div className="">
              {vall ? null : (
                <div className="grid grid-cols-1">
                  <div className="">
                    <textarea
                      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-[#F5F5F6] border border-[#255FAB] rounded-md  dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      id="password"
                      name="title"
                      value={title}
                      onChange={handleTitleChange}
                      placeholder=""
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="mt-3">
              <button
                class="rounded-md desktop:text-xl laptop:text-lg  inline-flex  justify-between content-center"
                onClick={() => setTitle((Prev) => !Prev)}
              >
                {vall ? (
                  <Add className="w-6 mt-1 laptop:mr-1 desktop:mr-2"></Add>
                ) : (
                  <Removed className="w-6 mt-1 laptop:mr-1 desktop:mr-2"></Removed>
                )}
                skill{""}
              </button>
            </div>
            <div className="laptop:grid grid-cols-3">
              {vall ? null : (
                <div className="">
                  <div className="flex  flex-wrap">
                    {skill?.map((item) => (
                      <button
                        key={item.id}
                        class="flex  flex-wrap pl-4 pr-2 py-2 m-1  justify-center items-center text-sm font-medium rounded-md cursor-pointer bg-[#D9D9D9] font-maven hover:bg-slate-400 hover:text-gray-100 dark:bg-gray-300 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100"
                        onClick={() => setTitles((Prev) => !Prev)}
                      >
                        {item.title}
                        <svg
                          class="h-4 w-4 text-black ml-2 hover:text-white"
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
                          <line x1="12" y1="5" x2="12" y2="19" />{" "}
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </button>
                    ))}
                  </div>

                  <div className="">
                    {valls ? null : (
                      <div className="">
                        <input
                          class="block laptop:w-[1157px] w-full px-4 py-2 mt-2 text-gray-700 bg-[#F5F5F6] border border-[#255FAB] rounded-md  dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                          id="password"
                          name="title"
                          value={title}
                          onChange={handleTitleChange}
                          placeholder=""
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div></div>
          </div>
        </section>
      </div>
    </div>
  );
}
