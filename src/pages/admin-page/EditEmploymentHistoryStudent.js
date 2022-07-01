import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
// import PorfolioEdit from "../PorfolioEdit";
import img3 from "../../images/Group.png";
import { ReactComponent as Img } from "../../commons/icon/Vectors.svg";
import { ReactComponent as Arrow } from "../../commons/icon/ri_arrow-go-back-fill .svg";
import { ReactComponent as Add } from "../../commons/icon/add.svg";
import { ReactComponent as Removed } from "../../commons/icon/removed.svg";
import { ReactComponent as Vector } from "../../commons/icon/Vector.svg";
import { ReactComponent as Counter } from "../../commons/icon_admin/Counter.svg";
import { Transition, Popover } from "@headlessui/react";

export default function EditEmploymentHistoryStudent() {
  const [file, setFile] = useState("");
  const navigate = useNavigate();
  const [desc, setDescValues] = useState(
    "I have a deep interest in Science with the intention to bring the world to a new evolution of technology. "
  );
  const [status, setStatusValues] = useState(
    "Looking for a Summer 2022 Internship"
  );
  const [school, setEducationValues] = useState("");
  const [technology, setTechnologyValues] = useState("");
  const [study, setStudyValues] = useState("");

  const [vall, setTitle] = useState(true);
  const [Desc, setDesc] = useState(true);
  const [Status, setStatus] = useState(true);
  const [Technology, setTechnology] = useState(true);
  const [title, setTitleValues] = useState(
    "Full Stack + UI designer from KSHRD .   "
  );
  const handleChange = (e) => {
    console.log("e.target.files[0] " + e.target.files[0]);
    console.log(URL.createObjectURL(e.target.files[0]));
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  const handleSchoolChange = (e) => {
    setEducationValues(e.target.value);
    console.log(e.target.value);
  };
  const handleDescChange = (e) => {
    setDescValues(e.target.value);
    console.log(e.target.value);
  };
  const handleTechnologyChange = (e) => {
    setTechnologyValues(e.target.value);
    console.log(e.target.value);
  };
  const handleTitleChange = (e) => {
    let titleFormValues = e.target.value;
    setTitleValues(titleFormValues);
    console.log(titleFormValues);
  };
  const resetInputTitle = () => {
    setTitleValues("");
  };
  const resetInputEdu = () => {
    setEducationValues("");
    setStudyValues("");
  };
  const resetInputTechnology = () => {
    setTechnologyValues("");
  };
  return (
    <div className="body-font font-maven container mx-auto">
      <div className="flex flex-row px-3 mb-3">
        <div className="basis-1/2 font-maven text-xl font-extrabold">
          <p className="text-[#919EAB]">Employment History</p>
          <p className="text-[#255FAB]">Vong Yuoyi</p>
        </div>
        <div className="basis-1/2 flex items-center justify-end">
          <button onClick={() => navigate("/admin/view")}>
            <Arrow className="w-6 mr-2 " />
          </button>
          <div className="">
            <div className="">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button>
                      <Vector className="w-5 mr-2"></Vector>
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
                      <Popover.Panel className="absolute z-10 max-w-sm px-4 mt-3 transform -translate-x-1/2 -left-32 w-80 h-270 sm:px-0 lg:max-w-3xl">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative gap-8 bg-white p-7 ">
                            <div>
                              <div className="flow-root px-2 py-2 -mt-4 transition duration-150 ease-in-out rounded-md focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                                <div className="flex items-center">
                                  <p className="text-xl font-bold text-gray-900 font-maven">
                                    Show Profile
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div class="flex items-center mt-3 ml-7">
                                <input
                                  id="default-radio-1"
                                  type="radio"
                                  value=""
                                  name="default-radio"
                                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2 "
                                />
                                <label
                                  for="default-radio-1"
                                  class="ml-2 text-md font-light font-maven text-gray-900"
                                >
                                  Public
                                </label>
                              </div>
                              <div class="flex items-center mt-3 ml-7">
                                <input
                                  id="default-radio-2"
                                  type="radio"
                                  value=""
                                  name="default-radio"
                                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2 "
                                />
                                <label
                                  for="default-radio-2"
                                  class="ml-2 text-md font-light font-maven text-gray-900"
                                >
                                  Private
                                </label>
                              </div>
                              <div className="flex items-baseline justify-center">
                                <button class=" mt-10 bg-[#255FAB] w-1/2 hover:bg-blue-700 text-white font-maven  mr-3 py-2 px-4  h-12 rounded mb-6">
                                  Update
                                </button>
                                <button class="bg-transparent  w-1/2 h-12 hover:bg-blue-500 text-blue-700 font-semibold font-maven hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </div>
          </div>
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button>
                  <Counter className="w-8 mt-2" />
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

                          <p className="font-maven text-md text-[#035397] font-bold">
                            Education
                          </p>
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

                          <p className="ml-1 font-maven text-md text-[#035397] font-bold">
                            Employment
                          </p>
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

      <section class=" p-6 mx-auto  rounded-md shadow-[0_4px_100px_10px_rgba(0,0,0,0.1)] laptop:px-20 ">
        <div class="grid grid-cols-1 gap-6 mt-4 desktop:grid-cols-3">
          <div className="col-span-2">
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
                  Title{""}
                </button>
              </div>

              <div className="">
                {vall ? null : (
                  <div className="grid grid-cols-1">
                    <div className="">
                      <input
                        class="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 mt-2 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            <div className="grid grid-2 mt-2">
              <div>
                <button
                  class="rounded-md desktop:text-xl laptop:text-lg  inline-flex  justify-between content-center"
                  onClick={() => setDesc((Prev) => !Prev)}
                >
                  {Desc ? (
                    <Add className="w-6 mt-1 laptop:mr-1 desktop:mr-2"></Add>
                  ) : (
                    <Removed className="w-6 mt-1 laptop:mr-1 desktop:mr-2"></Removed>
                  )}
                  Company Name{""}
                </button>
              </div>

              <div className="">
                {Desc ? null : (
                  <div className="grid grid-cols-1">
                    <div className="">
                      <textarea
                        class="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 mt-2 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        id="password"
                        name="title"
                        value={desc}
                        onChange={handleDescChange}
                        placeholder=""
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="grid grid-2 mt-2">
              <div>
                <button
                  class="rounded-md desktop:text-xl laptop:text-lg  inline-flex  justify-between content-center"
                  onClick={() => setStatus((Prev) => !Prev)}
                >
                  {Status ? (
                    <Add className="w-6 mt-1 laptop:mr-1 desktop:mr-2"></Add>
                  ) : (
                    <Removed className="w-6 mt-1 laptop:mr-1 desktop:mr-2"></Removed>
                  )}
                  Status{""}
                </button>
              </div>

              <div className="">
                {Status ? null : (
                  <div className="grid grid-cols-1">
                    <div className="">
                      <select
                        id="countries"
                        class=" w-1/3  border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 mt-2 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500 inline-flex justify-between content-center"
                      >
                        <option selected>Start year</option>
                        <option value="US">2019</option>
                        <option value="CA">2020</option>
                        <option value="FR">2021</option>
                        <option value="DE">2022</option>
                      </select>
                      <select
                        id="countries"
                        class="ml-3  w-1/3  border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 mt-2 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500 inline-flex justify-between content-center"
                      >
                        <option selected>End year</option>
                        <option value="US">2019</option>
                        <option value="CA">2020</option>
                        <option value="FR">2021</option>
                        <option value="DE">2022</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="">
          <div
            className={
              file
                ? "upload-btn-wrapper w-full h-48 laptop:-mt-2  shadow-[0_1px_5px_0px_rgba(0,0,0,0.1)] rounded-tl-tl-lgs"
                : "upload-btn-wrapper shadow-[0_2px_5px_0px_rgba(0,0,0,0.1)] w-full   border rounded-tl-tl-lgs border-slate-100 h-40"
            }
          >
            {file ? (
              <button class="desktop:-ml-56 laptop:-ml-20 desktop:mt-0"></button>
            ) : (
              <button class="object-contain w-full h-40 rounded-tl-tl-lgs">
                <Img className="w-6 inline-flex  mr-2 -mt-1 rounded-lg"></Img>+
                Click to add image
              </button>
            )}
            <input type="file" name="myfile" onChange={handleChange} />
            <img
              src={file}
              className={file ? "object-contain w-full h-48 laptop:-mt-6 rounded-tl-tl-lgs" : null}
            />
          </div>
          </div>
          
        </div>
        <hr className=" my-14 bg-[#BDBDBD] "></hr>
        <div class="grid grid-cols-1 gap-6 mt-4 desktop:grid-cols-3">
          <div className="col-span-2">
            <div className="grid grid-2">
              <div>
                <button
                  class="rounded-md desktop:text-xl laptop:text-lg  inline-flex justify-between content-center"
                  onClick={() => setTechnology((Prev) => !Prev)}
                >
                  {Technology ? (
                    <Add className="w-6 mt-1 desktop:mr-2 laptop:mr-1"></Add>
                  ) : (
                    <Removed className="w-6 mt-1 desktop:mr-2 laptop:mr-1"></Removed>
                  )}
                  Technology Used{""}
                </button>

                <div className="mt-3">
                  {Technology ? null : (
                    <div className="">
                      <div className="mb-5">
                        <textarea
                          class="block w-full border p-2.5 text-sm h-40 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 mt-2 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          id="password"
                          type="text"
                          name="school"
                          value={school}
                          onChange={handleTechnologyChange}
                          placeholder="Write your programs and tools here!"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <img
              className="mt-3 desktop:-ml-56 laptop:-ml-20 desktop:mt-0 "
              src={img3}
            ></img>
          </div>
        </div>
      </section>
      <div classname="">
        <div className="flex items-center laptop:justify-end justify-center ">
          <button
            class="hover:border-transparent mt-6 hover:bg-[#194f95] bg-[#255FAB] text-white mr-3 py-2 px-4 w-36 h-12 rounded mb-6"
            onClick={()=>navigate('/admin/manageStudent')}
          >
            Save
          </button>
          <button 
          class="bg-transparent  w-36 h-12 hover:bg-slate-400 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={()=>navigate('/admin/manageStudent')}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
