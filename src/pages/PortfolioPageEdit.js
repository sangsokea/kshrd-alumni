import React, { Fragment, useState } from "react";

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
import { useDispatch } from "react-redux";
import { fetchPortfolioPage } from "../redux/actions/localAction/PortfolioPageAction";
import { colors } from "../commons/colors/colors";

export default function PortfolioEdite() {
  const dispatch = useDispatch();

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
    <div className="container mx-auto mt-10 body-font font-maven">
      <div className="container grid grid-cols-2 mx-auto desktop:w-1341 desktop:container desktop:mx-auto laptop:w-1200 w-350 tablet:container tablet:mx-auto laptop:container laptop:mx-auto desktop:grid desktop:grid-cols-3 tablet:grid tablet:grid-cols-2 laptop:grid laptop:grid-cols-2">
        <div className="desktop:col-span-2 ">
          <p className="text-2xl font-normal">Portfolio</p>
          <p className="text-2xl font-bold text-blue-500">Vong Yuoyi</p>
        </div>
        <div className="flex flex-row ">
          <p className="container mx-auto desktop:container desktop:mx-auto laptop:container laptop:mx-auto tablet:container tablet:mx-auto"></p>
          <button onClick={() => dispatch(fetchPortfolioPage(false))}>
            <Arrow className="w-6 mr-3 mt-7" />
          </button>

          <div className="">
            <div className="">
            <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button>
                      <Vector className="w-5 mr-2 mt-7"></Vector>
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
                                  class="ml-2 text-md font-light font-maven "
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
            <Group
              className="mt-7 w-7"
              onClick={() => dispatch(fetchPortfolioPage(false))}
            ></Group>
          </button>
        </div>
      </div>

      <section class=" p-6 mx-auto  rounded-md shadow-[0_4px_100px_10px_rgba(0,0,0,0.1)] laptop:px-20">
        <div class="grid grid-cols-1 gap-6 mt-4 desktop:grid-cols-3">
          <div className="col-span-2">
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
                        class="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 mt-2 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                        class="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 mt-2 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                        class="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 mt-2 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                ? "upload-btn-wrapper w-fit h-48   shadow-[0_1px_5px_0px_rgba(0,0,0,0.1)] rounded-tl-tl-lgs"
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
                          class="block w-full h-40 border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 mt-2 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
        <div className="flex flex-row ">
          <div className="ml-auto">
            <button
              className="mb-10 laptop:mb-0 laptop:ml-72 px-12 py-2 text-sm laptop:text-md desktop:text-lg text-white bg-transparent border rounded-md hover:border-transparent"
              style={styles}
            >
              Save
            </button>

            <button
              className="px-10 py-2 mt-5 laptop:mt-10 ml-3 text-sm laptop:text-md desktop:text-lg text-blue-600 bg-transparent border rounded-md hover:border-transparent"
              onClick={() => dispatch(fetchPortfolioPage(false))}
            >
              Cancel
            </button>
          </div>
        </div>
      </section>
      <div className="mt-5"></div>
    </div>
  );
}

const styles = {
    backgroundColor: colors.content
}