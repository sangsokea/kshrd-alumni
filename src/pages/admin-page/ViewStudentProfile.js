import React, { useState } from "react";
import { ReactComponent as Add } from "../../commons/icon/add.svg";
import { ReactComponent as Removed } from "../../commons/icon/removed.svg";
import { ReactComponent as Remove } from "../../commons/icon/remove.svg";

export default function ViewStudentProfile() {
  const [vall, setTitle] = useState(true);
  const [title, setTitleValues] = useState(
    "I am gratuated student from HRD and have more than 2 years' experience building software for clients. Below is a quick overview of my main technical skill sets and technologies I use.  "
  );
  const handleTitleChange = (e) => {
    let titleFormValues = e.target.value;
    setTitleValues(titleFormValues);
    console.log(titleFormValues);
  };
  const resetInputTitle = () => {
    setTitleValues("");
  };
  return (
    <div className="laptop:ml-72 laptop:mr-8 tablet:ml-64">
      <div>
        <div className="mt-10 w-full h-40 bg-[#255FAB] ">
          <div className="absolute left-[1411px] top-[195px] hidden ">
            <svg
              width="423"
              height="109"
              viewBox="0 0 423 109"
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
            class="w-36 h-36 p-1 absolute top-56 rounded-full ring-2  ml-5 ring-gray-300 dark:ring-gray-500"
            src="https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2017-05/0x060a2b340101010201010f12137d2fd93d247e043378058064fc000D3A162A40.jpeg?itok=NWxmiYtZ"
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
                  class="block w-20 h-10 bg-[#F5F5F6] px-4 py-2 mt-2 text-gray-700  border border-blue-800 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  id="inline-full-name"
                  type="text"
                  value="10"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <svg
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.6758 13.9058L23.0942 15.3242L9.12667 29.2917H7.70833V27.8733L21.6758 13.9058V13.9058ZM27.2258 4.625C26.8404 4.625 26.4396 4.77917 26.1467 5.07208L23.3254 7.89333L29.1067 13.6746L31.9279 10.8533C32.5292 10.2521 32.5292 9.28083 31.9279 8.67958L28.3204 5.07208C28.0121 4.76375 27.6267 4.625 27.2258 4.625V4.625ZM21.6758 9.54292L4.625 26.5937V32.375H10.4063L27.4571 15.3242L21.6758 9.54292V9.54292Z"
                fill="#255FAB"
              />
            </svg>

            <svg
              width="48"
              height="48"
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
                class="block w-full bg-[#F5F5F6] px-4 py-2 mt-2 text-gray-700  border border-blue-800 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
                class="block w-full  px-4 py-2 mt-2 text-gray-700 bg-[#F5F5F6] border border-blue-800 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-gray-700 dark:text-gray-200" for="password">
                Phone Number
              </label>
              <input
                id="password"
                type="number"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-[#F5F5F6] border border-blue-800 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-[#F5F5F6] border border-blue-800 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-[#F5F5F6] border border-blue-800 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-[#F5F5F6] border border-blue-800 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-[#F5F5F6] border border-blue-800 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-[#F5F5F6] border border-blue-800 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-gray-700 dark:text-gray-200" for="password">
                Subject Name
              </label>
              <input
                id="password"
                type="password"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-[#F5F5F6] border border-blue-800 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-[#F5F5F6] border border-blue-800 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-[#F5F5F6] border border-blue-800 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-[#F5F5F6] border border-blue-800 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
                      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-[#F5F5F6] border border-blue-800 rounded-md  dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
                      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-[#F5F5F6] border border-blue-800 rounded-md  dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
          </div>
        </section>
      </div>
    </div>
  );
}
