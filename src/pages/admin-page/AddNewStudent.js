import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Img } from "../../commons/icon/Vectors.svg";
export default function AddNewStudent() {
  const [file, setFile] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    console.log("e.target.files[0] " + e.target.files[0]);
    console.log(URL.createObjectURL(e.target.files[0]));
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div className="body-font font-maven mt-10">
      <div className="">
        <div className="flex flex-row px-3 mb-3"></div>

        <section class=" flex justify-between container items-center p-6 mx-auto  rounded-t-lg h-2 shadow-2xl bg-[#255FAB] laptop:px-20 ">
          <p className="font-maven text-white text-xl  font-bold">
            Personal Details
          </p>
          <p className="font-maven text-white text-xl font-bold">ID: 001</p>
        </section>
        <section class=" p-6 container mx-auto w-full rounded-md shadow-[0_4px_100px_10px_rgba(0,0,0,0.1)]  laptop:px-20  ">
          <div class=" gap-6 mt-4 grid grid-cols-1 laptop:grid-cols-6 tablet:grid tablet:grid-cols-1">
            <div className="flex flex-col">
              <label
                class="text-[#303972] font-maven font-bold "
                for="username"
              >
                Photo <span className="text-red-700">*</span>
              </label>
              <div
                className={
                  file
                    ? "upload-btn-wrapper  w-36 "
                    : "upload-btn-wrapper border-dashed border-2 w-36 h-36 border-gray-300 "
                }
              >
                {file ? (
                  <button class=""></button>
                ) : (
                  <button class=" font-maven text-sm mt-10 text-[#A098AE]">
                    {" "}
                    Drag and drop or click here to select file
                  </button>
                )}
                <input type="file" name="myfile" onChange={handleChange} />
                <img
                  src={file}
                  className={file ? "object-contain -mt-6 w-36 h-36" : null}
                />
              </div>
            </div>
            <div className="col-span-4">
              <div class=" border-slate-200 flex flex-col ">
                <div>
                  <label
                    class="text-[#303972] font-maven font-bold "
                    for="username"
                  >
                    First Name <span className="text-red-700">*</span>
                  </label>
                  <input
                    id="username"
                    type="text"
                    placeholder="Maria"
                    class="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 mt-2 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="mt-6">
                  <label
                    class="text-[#303972] font-maven font-bold "
                    for="username"
                  >
                    Last Name <span className="text-red-700">*</span>
                  </label>
                  <input
                    id="username"
                    type="text"
                    placeholder="Historia"
                    class="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 mt-2 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
            <div>
              <div class=" border-slate-200 flex flex-col ">
                <div>
                  <label
                    class="text-[#303972] font-maven font-bold "
                    for="username"
                  >
                    Gender <span className="text-red-700">*</span>
                  </label>
                  <div class="flex justify-start mt-2">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input  form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
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
                        class="form-check-input form-check-input ml-3 appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
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
                <div className=" tablet:mt-[43px]">
                  <label
                    class="text-[#303972] font-maven font-bold "
                    for="username"
                  >
                    Course Name <span className="text-red-700">*</span>
                  </label>
                  <select
                    id="countries"
                    class="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 mt-2 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Choose a Course</option>
                    <option value="US">Basic Course</option>
                    <option value="CA">Advance Course</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="gap-6 mt-4 tablet:grid tablet:grid-cols-1 laptop:grid-cols-2">
            <div>
              <label
                class="text-[#303972] font-maven font-bold "
                for="username"
              >
                Email <span className="text-red-700">*</span>
              </label>
              <input
                id="username"
                type="email"
                placeholder="Historia@mail.com"
                class="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 mt-2 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                class="text-[#303972] font-maven font-bold "
                for="username"
              >
                Phone <span className="text-red-700">*</span>
              </label>
              <input
                id="username"
                type="tel"
                placeholder="123-45-678"
                 pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                class="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 mt-2 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div className="gap-6 mt-4 grid grid-cols-1 laptop:grid-cols-5">
            <div>
              <label
                class="text-[#303972] font-maven font-bold "
                for="username"
              >
                Date of Birth <span className="text-red-700">*</span>
              </label>
              <input
                id="username"
                type="date"
                class="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 mt-2 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="col-span-4">
              <label
                class="text-[#303972] font-maven font-bold "
                for="username"
              >
                Place of Birth <span className="text-red-700">*</span>
              </label>
              <input
                id="username"
                type="text"
                placeholder="Jakarta, Indonesia"
                class="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 mt-2 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div className="gap-6 mt-4 grid grid-cols-1 tablet:grid-cols-1">
            <div>
              <label
                class="text-[#303972] font-maven font-bold "
                for="username"
              >
                Address <span className="text-red-700">*</span>
              </label>
              <textarea
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                id="username"
                type="text"
                class="block w-full border h-24 p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 mt-2 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div classname="">
            <div className="flex items-center laptop:justify-end justify-center ">
              <button
                class=" hover:border-transparent mt-6 hover:bg-[#194f95] bg-[#255FAB] text-white mr-3 py-2 px-4 w-36 h-12 rounded mb-6"
                onClick={() => navigate("/admin/manageStudent")}
              >
                Save
              </button>
              <button 
              class="bg-transparent  w-36 h-12 hover:bg-slate-400 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-800 hover:border-transparent rounded"
              onClick={() => navigate("/admin/manageStudent")}
              >
                Cancel
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
