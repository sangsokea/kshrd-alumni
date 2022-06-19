import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import img3 from "../images/Group.png";
import { ReactComponent as Arrow } from "../commons/icon/ri_arrow-go-back-fill .svg";
import { ReactComponent as Vector } from "../commons/icon/Vector.svg";
import { ReactComponent as Img } from "../commons/icon/Vectors.svg";
import { ReactComponent as Remove } from "../commons/icon/remove.svg";
import { ReactComponent as Group } from "../commons/icon/Group.svg";
import { ReactComponent as Add } from "../commons/icon/add.svg";
import { ReactComponent as Removed } from "../commons/icon/removed.svg";
import { colors } from "../commons/colors";
import { Transition, Popover } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PorfolioEdit() {
  const [file, setFile] = useState("");
  const [title, setTitleValues] = useState(
    "Full Stack + UI designer from KSHRD . "
  );
  const [desc, setDescValues] = useState(
    "I have a deep interest in Science with the intention to bring the world to a new evolution of technology. "
  );
  const [status, setStatusValues] = useState(
    "Looking for a Summer 2022 Internship"
  );
  const [school, setEducationValues] = useState("");
  const [technology, setTechnologyValues] = useState("");
  const [study, setStudyValues] = useState("");
  const [start, setStartValues] = useState("");
  const [vall, setTitle] = useState(true);
  const [Desc, setDesc] = useState(true);
  const [Status, setStatus] = useState(true);
  const [Education, setEducation] = useState(true);
  const [Technology, setTechnology] = useState(true);

  const handleChange = (e) => {
    console.log("e.target.files[0] " + e.target.files[0]);
    console.log(URL.createObjectURL(e.target.files[0]));
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const handleTitleChange = (e) => {
    let titleFormValues = e.target.value;
    setTitleValues(titleFormValues);
    console.log(titleFormValues);
  };
  const handleDescChange = (e) => {
    setDescValues(e.target.value);
    console.log(e.target.value);
  };
  const handleStatusChange = (e) => {
    setStatusValues(e.target.value);
    console.log(e.target.value);
  };
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
  const resetInputTitle = () => {
    setTitleValues("");
  };
  const resetInputStart = () => {
    setStartValues("Start year");
  };
  const resetInputDesc = () => {
    setDescValues("");
  };
  const resetInputStatus = () => {
    setStatusValues("");
  };
  const resetInputEdu = () => {
    setEducationValues("");
    setStudyValues("");
  };
  const resetInputTechnology = () => {
    setTechnologyValues("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, desc, status, school, study, technology, file });
    alert(
      JSON.stringify({ title, desc, status, school, study, technology, file })
    );
    // ... submit to API or something
  };

  const navigate = useNavigate();
  return (
    <div className="h-screen">
      <div class="py-12">
        <div className="md:w-1341  md:container md:mx-auto  ml-4 md:grid md:grid-cols-3 grid grid-cols-2">
          <div className="md:col-span-2">
            <p className="text-2xl font-normal">Portfolio</p>
            <p className="text-2xl font-bold text-blue-500">Sang Sokea</p>
          </div>
          <div className="flex flex-row ">
            <p className="md:container md:mx-auto "></p>
            <button onClick={() => navigate("/porfolio")}>
              <Arrow className="mt-7 mr-3 w-6" />
            </button>

            <div className="">
              <div className="">
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button>
                        <Vector className="mt-7 mr-3 w-5"></Vector>
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
                        <Popover.Panel className="absolute -left-40  z-10 mt-3 w-423 h-270 max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative  gap-8 bg-white p-7 ">
                              {/* {solutions.map((item) => ( */}
                              <div>
                                <div className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out -mt-4  focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                                  <div className="flex items-center">
                                    <p className="text-xl font-maven font-extrabold text-gray-900">
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
                                    class=" mt-10 bg-blue-500 hover:bg-blue-700 text-white font-maven mr-3 py-2 px-4 w-36 h-12 rounded mb-6"
                                    onClick={handleSubmit}
                                  >
                                    Update
                                  </button>
                                  <button class="bg-transparent  w-36 h-12 hover:bg-blue-500 text-blue-700 font-semibold font-maven hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                    Cancel
                                  </button>
                                </div>
                              </div>

                              {/* ))} */}
                            </div>
                            {/* <div className="bg-gray-50 p-4">
                    
                  </div> */}
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </div>
            </div>

            <button>
              <Group className="mt-7 w-7"></Group>
            </button>
          </div>
        </div>
        <br />
        <center>
          <div className="md:w-1341 min-h-1/34 rounded shadow-2xl">
            <div className="md:grid md:grid-cols-3 relative flex flex-wrap-reverse">
              <div className="col-span-2  mt-14 text-left md:ml-20 ml-2  font-maven md:mr-">
                {/* {TitleValues.map((element, index) => ( */}
                <div>
                  <button
                    class="ml-8 rounded-md text-xl  inline-flex  justify-between content-center"
                    onClick={() => setTitle((Prev) => !Prev)}
                  >
                    {vall ? (
                      <Add className="mr-2 mt-1 w-6"></Add>
                    ) : (
                      <Removed className="mr-2 mt-1 w-6"></Removed>
                    )}
                    Title{""}
                  </button>

                  <div className="mt-3">
                    {vall ? null : (
                      <div className="grid grid-cols-2 ">
                        <div className="mb-5 ">
                          <input
                            class=" ml-10 w-222  outline outline-offset-2 outline-1 py-2 px-3  rounded text-gray-700 leading-tight focus:outline-blue-700  bg-slate-50 text-left inline-flex justify-between content-center"
                            id="password"
                            type="text"
                            name="title"
                            value={title}
                            onChange={handleTitleChange}
                            placeholder=""
                          />
                        </div>
                        <div className="flex justify-center">
                          <button class="ml-24 mb-5" onClick={resetInputTitle}>
                            <Remove className=""></Remove>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <button
                  class="ml-8 rounded-md text-xl mt-3  inline-flex justify-between content-center"
                  onClick={() => setDesc((Prev) => !Prev)}
                >
                  {Desc ? (
                    <Add className="mr-2 mt-1 w-6"></Add>
                  ) : (
                    <Removed className="mr-2 mt-1 w-6"></Removed>
                  )}
                  Description{""}
                </button>

                <div className="mt-3">
                  {Desc ? null : (
                    <div className="grid grid-cols-2 ">
                      <div className="">
                        <input
                          class=" ml-10 w-222 mb-5 outline outline-offset-2 h-14 outline-1 py-2 px-3 rounded text-gray-700 leading-tight focus:outline-blue-700 focus:shadow-outline bg-slate-50  inline-flex justify-between content-center"
                          value={desc}
                          name="desc"
                          onChange={handleDescChange}
                          type="text"
                          placeholder=""
                        />
                      </div>
                      <div className="flex justify-center">
                        <button class="ml-24 mb-5" onClick={resetInputDesc}>
                          <Remove className=""></Remove>
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <button
                  class="ml-8 rounded-md text-xl mt-3  inline-flex justify-between content-center"
                  onClick={() => setStatus((Prev) => !Prev)}
                >
                  {Status ? (
                    <Add className="mr-2 mt-1 w-6"></Add>
                  ) : (
                    <Removed className="mr-2 mt-1 w-6"></Removed>
                  )}
                  Status{""}
                </button>

                <div className="">
                  {Status ? null : (
                    <div className="grid grid-cols-2 ">
                      <div className="mt-3">
                        <input
                          class=" ml-10 w-222  outline outline-offset-2 outline-1 py-2 px-3 rounded text-gray-700 leading-tight focus:outline-blue-700 focus:shadow-outline bg-slate-50  inline-flex justify-between content-center"
                          id="password"
                          type="text"
                          name="status"
                          value={status}
                          onChange={(e) => handleStatusChange(e)}
                          placeholder=""
                        />
                      </div>
                      <div className="flex justify-center">
                        <button class="ml-24 mt-2" onClick={resetInputStatus}>
                          <Remove className=""></Remove>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div
                className={
                  file
                    ? "upload-btn-wrapper mr-24 md:mt-14  bg-cover bg-center rounded-tl-tl-lgs "
                    : "upload-btn-wrapper bg-white shadow-lg left-2 ml-2  md:mt-12 h-40 w-80  rounded-tl-lg"
                }
              >
                {file ? (
                  <button class="btn   inline-flex justify-center mb-20  content-center "></button>
                ) : (
                  <button class="  mt-12 inline-flex justify-between content-center font-maven text-xl ">
                    <Img className="w-6 mr-2 -mt-1 rounded-md"></Img>+ Click to
                    add image
                  </button>
                )}
                <input type="file" name="myfile" onChange={handleChange} />
                <img
                  src={file}
                  className="shadow-lg left-2   object-contain -mt-24 rounded-tl-lg"
                />
              </div>
            </div>
            <div className="bg-BDBDBD md:h-1 h-1 w-1179  mt-20  md:inline-block "></div>

            <div className="md:grid md:grid-cols-3 mt-2 relative flex flex-wrap-reverse">
              <div className="col-span-2  mt-14 text-left md:ml-20 ml-2  font-maven md:mr-">
                <button
                  class="ml-8 rounded-md mb-3 text-xl  inline-flex justify-between content-center"
                  onClick={() => setEducation((Prev) => !Prev)}
                >
                  {Education ? (
                    <Add className="mr-2 mt-1 w-6"></Add>
                  ) : (
                    <Removed className="mr-2 mt-1 w-6"></Removed>
                  )}
                  Education{""}
                </button>

                <div className="mt-3">
                  {Education ? null : (
                    <div className="grid grid-cols-2 ">
                      <div className="mb-5">
                        <input
                          class=" ml-10 w-570 outline outline-offset-2 outline-1 py-2 px-3 rounded text-gray-700 leading-tight focus:outline-blue-700 focus:shadow-outline bg-slate-50 text-left inline-flex justify-between content-center"
                          id="password"
                          type="text"
                          name="school"
                          value={school}
                          onChange={handleSchoolChange}
                          placeholder="School Name"
                        />
                        <input
                          class=" ml-10 w-570 mt-5 outline outline-offset-2 outline-1 py-2 px-3 rounded text-gray-700 leading-tight focus:outline-blue-700 focus:shadow-outline bg-slate-50 text-left inline-flex justify-between content-center"
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
                            class="ml-10 w-32 mt-5  outline outline-offset-2 outline-1 py-2 px-3 rounded text-gray-700 leading-tight focus:outline-blue-700 focus:shadow-outline bg-slate-50 text-left inline-flex justify-between content-center"
                          >
                            <option selected>Start year</option>
                            <option value="US">2019</option>
                            <option value="CA">2020</option>
                            <option value="FR">2021</option>
                            <option value="DE">2022</option>
                          </select>
                          <select
                            id="countries"
                            class="ml-2 w-32 mt-5 outline outline-offset-2 outline-1 py-2 px-3 rounded text-gray-700 leading-tight focus:outline-blue-700 focus:shadow-outline bg-slate-50 text-left dark:text-placeholder-blue-500 inline-flex justify-between content-center"
                          >
                            <option selected>End year</option>
                            <option value="US">2019</option>
                            <option value="CA">2020</option>
                            <option value="FR">2021</option>
                            <option value="DE">2022</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <button class="ml-24 mb-20" onClick={resetInputEdu}>
                          <Remove className=""></Remove>
                        </button>
                      </div>
                      <div className="bg-BDBDBD md:h-1 h-1 ml-10 w-570 mt-5  mb-5  md:inline-block "></div>
                    </div>
                  )}
                </div>

                <button
                  class="ml-8 rounded-md text-xl  inline-flex justify-between content-center"
                  onClick={() => setTechnology((Prev) => !Prev)}
                >
                  {Technology ? (
                    <Add className="mr-2 mt-1 w-6"></Add>
                  ) : (
                    <Removed className="mr-2 mt-1 w-6"></Removed>
                  )}
                  Technology Used{""}
                </button>

                <div className="mt-3">
                  {Technology ? null : (
                    <div className="grid grid-cols-2 ">
                      <div className="mb-5">
                        <textarea
                          class=" ml-10 w-222 outline outline-offset-2 h-40 outline-1 py-2 px-3 rounded text-gray-700 leading-tight focus:outline-blue-700 focus:shadow-outline bg-slate-50 text-left inline-flex justify-between content-center"
                          id="password"
                          type="textarea"
                          name="technology"
                          value={technology}
                          onChange={handleTechnologyChange}
                          placeholder="Write your programs and tools here!"
                        />
                      </div>
                      <div className="flex justify-center">
                        <button
                          class="ml-24 mb-6"
                          onClick={resetInputTechnology}
                        >
                          <Remove className=""></Remove>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="">
                <img className="md:-ml-56 mt-3 md:mt-14" src={img3}></img>
                <div classname="">
                  <button
                    class="-ml-20 mt-24 bg-blue-500 hover:bg-blue-700 text-white font-maven mr-3 py-2 px-4 w-36 h-12 rounded mb-6"
                    onClick={handleSubmit}
                  >
                    Save
                  </button>
                  <button class="bg-transparent  w-36 h-12 hover:bg-blue-500 text-blue-700 font-semibold font-maven hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
}
