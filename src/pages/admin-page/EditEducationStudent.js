import React, { Fragment, useState } from "react";
import PorfolioEdit from "../PorfolioEdit";
import img3 from "../../images/Group.png";
import { ReactComponent as Remove } from "../../commons/icon/remove.svg";
import { ReactComponent as Arrow } from "../../commons/icon/ri_arrow-go-back-fill .svg";
import { ReactComponent as Add } from "../../commons/icon/add.svg";
import { ReactComponent as Removed } from "../../commons/icon/removed.svg";
import { ReactComponent as Vector } from "../../commons/icon/Vector.svg";
import { ReactComponent as Counter } from "../../commons/icon_admin/Counter.svg";
import { Transition, Popover } from "@headlessui/react";

export default function EditEducationStudent() {
  const [file, setFile] = useState("");

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
  const [Education, setEducation] = useState(true);
  const [Technology, setTechnology] = useState(true);
  const [title, setTitleValues] = useState(
    "Full Stack + UI designer from KSHRD .   "
  );
  const handleSchoolChange = (e) => {
    setEducationValues(e.target.value);
    console.log(e.target.value);
  };
  const handleTechnologyChange = (e) => {
    setTechnologyValues(e.target.value);
    console.log(e.target.value);
  };
  const handleStudyChange = (e) => {
    setStudyValues(e.target.value);
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
    <div className="laptop:ml-72 laptop:mr-8 tablet:ml-64">
      <div className="flex flex-row px-3 mb-3">
      <div className="basis-1/2 font-maven text-xl font-extrabold">
          <p className="text-[#919EAB]">Education</p>
          <p className="text-[#255FAB]">Vong Yuoyi</p>
      </div>
      <div className="basis-1/2 flex items-center justify-end">
      <button>
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
                        <Popover.Panel className="absolute z-10 max-w-sm px-4 mt-3 transform -translate-x-1/2 -left-40 w-423 h-270 sm:px-0 lg:max-w-3xl">
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative gap-8 bg-white p-7 ">
                              
                              <div>
                                <div className="flow-root px-2 py-2 -mt-4 transition duration-150 ease-in-out rounded-md focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                                  <div className="flex items-center">
                                    <p className="text-xl font-extrabold text-gray-900 font-maven">
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
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                  <label
                                    for="default-radio-1"
                                    class="ml-2 text-xl font-bold font-maven text-gray-900"
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
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                  <label
                                    for="default-radio-2"
                                    class="ml-2 text-xl font-bold font-maven text-gray-900"
                                  >
                                    Private
                                  </label>
                                </div>
                                <div className="text-center">
                                  <button
                                    class=" mt-10 bg-blue-500 hover:bg-blue-700 text-white font-maven w-28 mr-3 py-2 px-4  h-12 rounded mb-6"
                                    
                                  >
                                    Update
                                  </button>
                                  <button class="bg-transparent  w-28 h-12 hover:bg-blue-500 text-blue-700 font-semibold font-maven hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
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
      <button>
              <Counter className="w-8" />
        </button>
      </div>
      </div>
     
     

      <section class=" p-6 mx-auto  rounded-md shadow-2xl laptop:px-20  dark:bg-gray-800">
        <div class="grid grid-cols-1 gap-6 mt-4 desktop:grid-cols-2">
          <div>
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
                      <input
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
            <div className="grid grid-2 mt-2">
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
                  Description{""}
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
            <div className="grid grid-2 mt-2">
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
                  Status{""}
                </button>
              </div>

              <div className="">
                {vall ? null : (
                  <div className="grid grid-cols-1">
                    <div className="">
                      <input
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
          </div>
          <div className="flex items-center justify-end">
            <img
              className=" shadow-lg h-52  rounded-tl-tl-lgs "
              src="https://wallpaperaccess.com/full/6235574.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="h-1 my-14 bg-[#BDBDBD] "></div>
        <div class="grid grid-cols-1 gap-6 mt-4 desktop:grid-cols-2">
          <div>
            <div className="grid grid-2">
              <div>
                <button
                  class="rounded-md desktop:text-xl laptop:text-lg  inline-flex justify-between content-center"
                  onClick={() => setEducation((Prev) => !Prev)}
                >
                  {Education ? (
                    <Add className="w-6 mt-1 desktop:mr-2 laptop:mr-1"></Add>
                  ) : (
                    <Removed className="w-6 mt-1 desktop:mr-2 laptop:mr-1"></Removed>
                  )}
                  Education{""}
                </button>

                <div className="mt-3">
                  {Education ? null : (
                    <div className="">
                      <div className="mb-5">
                        <input
                          class=" w-3/4 outline outline-offset-2 outline-1 laptop:py-1 desktop:py-2 px-3 py-1 rounded text-gray-700 leading-tight focus:outline-blue-700 focus:shadow-outline bg-slate-50 text-left inline-flex justify-between content-center"
                          id="password"
                          type="text"
                          name="school"
                          value={school}
                          onChange={handleSchoolChange}
                          placeholder="School Name"
                        />
                        <input
                          class=" w-3/4  mt-5  outline outline-offset-2 outline-1 laptop:py-1 desktop:py-2 py-1 px-3 rounded text-gray-700 leading-tight focus:outline-blue-700 focus:shadow-outline bg-slate-50 text-left inline-flex justify-between content-center"
                          id="password"
                          type="text"
                          name="study"
                          value={study}
                          onChange={handleStudyChange}
                          placeholder="Field of study"
                        />
                        <div className="">
                          <select
                            id="countries"
                            class="mt-5 w-1/4  outline outline-offset-2 outline-1 laptop:py-1 desktop:py-2 py-1 px-3 rounded text-gray-700 leading-tight focus:outline-blue-700 focus:shadow-outline bg-slate-50 text-left inline-flex justify-between content-center"
                          >
                            <option selected>Start year</option>
                            <option value="US">2019</option>
                            <option value="CA">2020</option>
                            <option value="FR">2021</option>
                            <option value="DE">2022</option>
                          </select>
                          <select
                            id="countries"
                            class="ml-3  w-1/4  mt-5 outline outline-offset-2 outline-1 laptop:py-1 desktop:py-2 px-3  py-1 rounded text-gray-700 leading-tight focus:outline-blue-700 focus:shadow-outline bg-slate-50 text-left dark:text-placeholder-blue-500 inline-flex justify-between content-center"
                          >
                            <option selected>End year</option>
                            <option value="US">2019</option>
                            <option value="CA">2020</option>
                            <option value="FR">2021</option>
                            <option value="DE">2022</option>
                          </select>
                        </div>
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
    </div>
  );
}
