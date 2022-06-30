import React, { Fragment, useState } from "react";
import { Navigate } from "react-router-dom";
import img3 from "../images/Group.png";
import { ReactComponent as Img } from "../commons/icon/Vectors.svg";
import { ReactComponent as Group } from "../commons/icon/Group.svg";
import { ReactComponent as Remove } from "../commons/icon/remove.svg";
import { ReactComponent as Arrow } from "../commons/icon/ri_arrow-go-back-fill .svg";
import { ReactComponent as Add } from "../commons/icon/add.svg";
import { ReactComponent as Removed } from "../commons/icon/removed.svg";
import { ReactComponent as Vector } from "../commons/icon/Vector.svg";
import { Transition, Popover } from "@headlessui/react";
import UserEducationComponent from "../components/EducationAdminandUaerPage/UserEducationComponent";

export default function PorfolioEdite() {
  const [file, setFile] = useState("");
  const [desc, setDescValues] = useState(
    "I have a deep interest in Science with the intention to bring the world to a new evolution of technology. "
  );
  const [status, setStatusValues] = useState(
    "Looking for a Summer 2022 Internship"
  );

  const [technology, setTechnologyValues] = useState("");

  const [vall, setTitle] = useState(true);
  const [Desc, setDesc] = useState(true);
  const [Status, setStatus] = useState(true);
  const [Education, setEducation] = useState(true);
  const [Technology, setTechnology] = useState(true);
  const [title, setTitleValues] = useState(
    "Full Stack + UI designer from KSHRD .   "
  );
  const resetInputDesc = () => {
    setDescValues("");
  };
  const resetInputStatus = () => {
    setStatusValues("");
  };
  const handleChange = (e) => {
    console.log("e.target.files[0] " + e.target.files[0]);
    console.log(URL.createObjectURL(e.target.files[0]));
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  const handleStatusChange = (e) => {
    setStatusValues(e.target.value);
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
  const resetInputTechnology = () => {
    setTechnologyValues("");
  };
  return (
    <div className="laptop:px-24">
      <div className="flex flex-row px-3 mb-3">
        <div className="basis-1/2 font-maven text-xl font-extrabold">
          <p className="text-[#919EAB]">Porfolio</p>
          <p className="text-[#255FAB]">Vong Yuoyi</p>
        </div>
        <div className="basis-1/2 flex items-center justify-end">
          <button onClick={() => Navigate("/portfolio")}>
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
                                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
                                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
          <button>
              <Group className="w-7"></Group>
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
                    <Add className="w-6 mt-1  laptop:mr-1 desktop:mr-2"></Add>
                  ) : (
                    <Removed className="w-6 mt-1 laptop:mr-1 desktop:mr-2"></Removed>
                  )}
                  Title{""}
                </button>
              </div>

              <div className="">
                {vall ? null : (
                  <div className="grid grid-cols-12">
                    <div className="col-span-11">
                      <input
                        class="block w-full  px-4 py-2 mt-2 text-gray-700 bg-[#F5F5F6] border border-blue-800 rounded-md  dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        id="password"
                        name="title"
                        value={title}
                        onChange={handleTitleChange}
                        placeholder=""
                      />
                    </div>
                    <div className="flex justify-end items-center">
                      <button class="" onClick={resetInputTitle}>
                        <Remove className=""></Remove>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="grid grid-2 mt-2">
              <div>
                <button
                  class="rounded-md desktop:text-xl laptop:text-lg inline-flex justify-between content-center"
                  onClick={() => setDesc((Prev) => !Prev)}
                >
                  {Desc ? (
                    <Add className="w-6 mt-1 desktop:mr-2 laptop:mr-1"></Add>
                  ) : (
                    <Removed className="w-6 mt-1 desktop:mr-2 laptop:mr-1"></Removed>
                  )}
                  Description{""}
                </button>
              </div>

              <div className="">
                {Desc ? null : (
                  <div className="grid grid-cols-12">
                    <div className="col-span-11">
                      <textarea
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-[#F5F5F6] border border-blue-800 rounded-md  dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        id="password"
                        value={desc}
                        name="desc"
                        onChange={handleDescChange}
                        placeholder=""
                      />
                    </div>
                    <div className="flex justify-end">
                      <button class="" onClick={resetInputDesc}>
                        <Remove className=""></Remove>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="grid grid-2 mt-2">
              <div>
                <button
                  class="rounded-md desktop:text-xl laptop:text-lg  inline-flex justify-between content-center"
                  onClick={() => setStatus((Prev) => !Prev)}
                >
                  {Status ? (
                    <Add className="w-6 mt-1 desktop:mr-2 laptop:mr-1"></Add>
                  ) : (
                    <Removed className="w-6 mt-1 desktop:mr-2 laptop:mr-1"></Removed>
                  )}
                  Status{""}
                </button>
              </div>

              <div className="">
                {Status ? null : (
                  <div className="grid grid-cols-12">
                    <div className="col-span-11">
                      <input
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-[#F5F5F6] border border-blue-800 rounded-md  dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        id="password"
                        name="status"
                        value={status}
                        onChange={(e) => handleStatusChange(e)}
                        placeholder=""
                      />
                    </div>
                    <div className="flex justify-end">
                      <button class="" onClick={resetInputStatus}>
                        <Remove className=""></Remove>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div
            className={
              file
                ? "upload-btn-wrapper  border-dashed laptop:ml-72  "
                : "upload-btn-wrapper  shadow-md laptop:w-1/2 tablet:w-1/2  h-40 laptop:ml-72 "
            }
          >
            {file ? (
              <button class="mt-3 desktop:-ml-56 laptop:-ml-20 desktop:mt-0"></button>
            ) : (
              <button class=" mt-12 flex items-center justify-start ml-14 font-maven text-xl ">
              <Img className="w-6 inline-flex  mr-2 -mt-1 rounded-lg"></Img>+ Click to
              add image
            </button>
            )}
            <input type="file" name="myfile" onChange={handleChange} />
            <img
              src={file}
              className={file ? "shadow-lg h-52  rounded-tl-tl-lgs" : null}
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
                <div className="">
                  {Education ? null : (
                    <div className="grid grid-cols-1">
                      <div className="">
                        <UserEducationComponent />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="grid grid-2 mt-5">
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

                <div className=" mt-3">
                  {Technology ? null : (
                    <div className="grid grid-cols-12">
                      <div className="col-span-11 mb-5">
                        <textarea
                          class="outline w-full h-32 outline-offset-2 outline-1 laptop:py-1 desktop:py-2 px-3 py-1 rounded text-gray-700 leading-tight focus:outline-blue-700 focus:shadow-outline bg-slate-50 text-left inline-flex justify-between content-center"
                          id="password"
                          type="text"
                          name="technology"
                          value={technology}
                          onChange={handleTechnologyChange}
                        />
                      </div>
                      <div className="flex justify-end">
                        <button class="" onClick={resetInputTechnology}>
                          <Remove className=""></Remove>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="laptop:flex laptop:items-center laptop:justify-end flex items-center justify-center">
            <img
              className="mt-3 desktop:-ml-56 laptop:-ml-20 desktop:mt-0 "
              src={img3}
            ></img>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-6  desktop:grid-cols-2"></div>
        <div classname="">
          <div className="flex items-center laptop:justify-end justify-center ">
            <button
              class=" mt-6 hover:bg-blue-500 bg-[#255FAB] text-white mr-3 py-2 px-4 w-36 h-12 rounded mb-6"
              // onClick={handleSubmit}
            >
              Save
            </button>
            <button class="bg-transparent  w-36 h-12 hover:bg-slate-400 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Cancel
            </button>
          </div>
        </div>
      </section>
      <div className="mt-5"></div>
    </div>
  );
}
