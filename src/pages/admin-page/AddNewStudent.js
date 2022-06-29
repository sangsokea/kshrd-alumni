import React, { useState } from "react";
import { ReactComponent as Img } from "../../commons/icon/Vectors.svg";
export default function AddNewStudent() {
  const [file, setFile] = useState("");
  const handleChange = (e) => {
    console.log("e.target.files[0] " + e.target.files[0]);
    console.log(URL.createObjectURL(e.target.files[0]));
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div>
      <div className="laptop:ml-72 laptop:mr-8 tablet:ml-64">
        <div className="flex flex-row px-3 mb-3"></div>

        <section class=" flex justify-between items-center p-6 mx-auto  rounded-t-lg h-2    shadow-2xl bg-blue-800 laptop:px-20  dark:bg-gray-800">
          <p className="font-maven text-white text-xl  font-bold">
            Personal Details
          </p>
          <p className="font-maven text-white text-xl font-bold">ID: 001</p>
        </section>
        <section class=" p-6 mx-auto w-full rounded-md shadow-2xl laptop:px-20  dark:bg-gray-800">
          <div class=" gap-6 mt-4 grid grid-cols-1 laptop:grid-cols-6 tablet:grid tablet:grid-cols-1">
            <div className="flex flex-col">
              <label
                class="text-[#303972] font-maven font-bold dark:text-gray-200"
                for="username"
              >
                Photo *
              </label>
              <div
                className={
                  file
                    ? "upload-btn-wrapper border-dashed  border-2 w-36 border-indigo-600 "
                    : "upload-btn-wrapper border-dashed border-2 w-36 h-36 border-indigo-600 "
                }
              >
                {file ? (
                  <button class=""></button>
                ) : (
                  <button class=" font-maven text-sm mt-10 text-[#A098AE]">
                    {" "}
                    Drag and drop or 
click here to select file
                  </button>
                )}
                <input type="file" name="myfile" onChange={handleChange} />
                <img
                  src={file}
                  
                  className={file? "object-contain -mt-6 w-36 h-36" : null}
                />
              </div>
            </div>
            <div className="col-span-4">
              <div class=" border-slate-200 flex flex-col ">
                <div>
                  <label
                    class="text-[#303972] font-maven font-bold dark:text-gray-200"
                    for="username"
                  >
                    First Name *
                  </label>
                  <input
                    id="username"
                    type="text"
                    placeholder="Maria"
                    class="block w-full  px-4 py-2 mt-2 text-gray-700  border border-[#255FAB] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>
                <div className="mt-6">
                  <label
                    class="text-[#303972] font-maven font-bold dark:text-gray-200"
                    for="username"
                  >
                    Last Name *
                  </label>
                  <input
                    id="username"
                    type="text"
                    placeholder="Historia"
                    class="block w-full  px-4 py-2 mt-2 text-gray-700  border border-[#255FAB] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>
              </div>
            </div>
            <div>
              <div class=" border-slate-200 flex flex-col ">
                <div>
                  <label
                    class="text-[#303972] font-maven font-bold dark:text-gray-200"
                    for="username"
                  >
                    Gender *
                  </label>
                  <div class="flex justify-start">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input  form-check-input appearance-none rounded-full h-4 w-4 border border-[#255FAB] bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="option1"
                      />
                      <label
                        class="form-check-label inline-block text-gray-800"
                        for="inlineRadio10"
                      >
                        Male
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input form-check-input ml-3 appearance-none rounded-full h-4 w-4 border border-[#255FAB] bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="option2"
                      />
                      <label
                        class="form-check-label inline-block text-gray-800"
                        for="inlineRadio20"
                      >
                        Female
                      </label>
                    </div>
                  </div>
                </div>
                <div className="laptop:mt-12 mt-5">
                  <label
                    class="text-[#303972] font-maven font-bold dark:text-gray-200"
                    for="username"
                  >
                    Course Name
                  </label>
                  <select
                    id="countries"
                    class=" border border-[#255FAB]  text-gray-900 text-sm rounded-lg mt-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="gap-6 mt-4 tablet:grid tablet:grid-cols-1 laptop:grid-cols-2">
            <div>
              <label
                class="text-[#303972] font-maven font-bold dark:text-gray-200"
                for="username"
              >
                Email *
              </label>
              <input
                id="username"
                type="email"
                placeholder="Historia@mail.com"
                class="block w-full  px-4 py-2 mt-2 text-gray-700  border border-[#255FAB] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                class="text-[#303972] font-maven font-bold dark:text-gray-200"
                for="username"
              >
                Phone *
              </label>
              <input
                id="username"
                type="number"
                placeholder="+1234567890"
                class="block w-full  px-4 py-2 mt-2 text-gray-700  border border-[#255FAB] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div className="gap-6 mt-4 grid grid-cols-1 laptop:grid-cols-5">
            <div>
              <label
                class="text-[#303972] font-maven font-bold dark:text-gray-200"
                for="username"
              >
                Date of Birth *
              </label>
              <input
                id="username"
                type="date"
                class="block w-full  px-4 py-2 mt-2 text-gray-700  border  border-[#255FAB] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div className="col-span-4">
              <label
                class="text-[#303972] font-maven font-bold dark:text-gray-200"
                for="username"
              >
                Place of Birth *
              </label>
              <input
                id="username"
                type="text"
                placeholder="Jakarta, Indonesia"
                class="block w-full  px-4 py-2 mt-2 text-gray-700  border  border-[#255FAB] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div className="gap-6 mt-4 grid grid-cols-1 tablet:grid-cols-1">
            <div>
              <label
                class="text-[#303972] font-maven font-bold dark:text-gray-200"
                for="username"
              >
                Address *
              </label>
              <textarea
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                id="username"
                type="text"
                class="block w-full text-sm  px-4 py-2 mt-2 h-56 text-gray-700  border border-[#255FAB] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div classname="">
            <div className="flex items-center laptop:justify-end justify-center ">
              <button
                class=" mt-6 hover:bg-blue-500 bg-[#255FAB] text-white mr-3 py-2 px-4 w-36 h-12 rounded mb-6"
                // onClick={handleSubmit}
              >
                Save
              </button>
              <button class="bg-transparent  w-36 h-12 hover:bg-slate-400 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-800 hover:border-transparent rounded">
                Cancel
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
