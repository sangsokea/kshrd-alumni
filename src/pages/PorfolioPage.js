import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import img3 from "../images/Group.png";
import { ReactComponent as Arrow } from "../commons/icon/ri_arrow-go-back-fill .svg";
import { ReactComponent as Vector } from "../commons/icon/Vector.svg";
import { ReactComponent as Group } from "../commons/icon/Group.svg";
import { ReactComponent as Timeline } from "../commons/icon/timeline.svg";
import ellipes from "../commons/icon/Ellipse.svg";
import { colors } from "../commons/colors";
import { Transition, Popover } from "@headlessui/react";

export default function PorfolioPage() {
  const navigate = useNavigate();
  return (
    <div className="h-screen">
      <div class="py-12">
        <div className="desktop:w-1341 desktop:container desktop:mx-auto laptop:w-1200 w-350 tablet:container tablet:mx-auto container mx-auto laptop:container laptop:mx-auto  desktop:grid desktop:grid-cols-3 tablet:grid tablet:grid-cols-2 grid grid-cols-2 laptop:grid laptop:grid-cols-2">
          <div className="desktop:col-span-2 ">
            <p className="text-2xl font-normal">Portfolio</p>
            <p className="text-2xl font-bold text-blue-500">Sang Sokea</p>
          </div>
          <div className="flex flex-row ">
            <p className="desktop:container desktop:mx-auto laptop:container container mx-auto laptop:mx-auto tablet:container tablet:mx-auto"></p>
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
                                  <button class=" mt-10 bg-blue-500 hover:bg-blue-700 text-white font-maven mr-3 py-2 px-4 w-36 h-12 rounded mb-6">
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
              <Group
                className="mt-7 w-7"
                onClick={() => navigate("/porfolioedit")}
              ></Group>
            </button>
          </div>
        </div>
        <br />
        <center>
          <div className="w-350 desktop:w-1341 min-h-1079 laptop:w-1200 laptop:rounded laptop:shadow-2xl rounded shadow-2xl tablet:w-900 tablet:shadow-2xl ">
            <div className="desktop:grid desktop:grid-cols-3  laptop:grid laptop:grid-cols-3  flex flex-wrap-reverse">
              <div className="tablet:w-full desktop:col-span-2 desktop:mr-20  desktop:mt-20 desktop:text-left desktop:ml-20  ml-5  tablet:ml-20 tablet:col-span-2  tablet:mt-5 tablet:text-left laptop:col-span-2 mt-10 laptop:mt-5 laptop:text-left laptop:ml-10 text-left  font-maven">
                <p className="desktop:mt-0 desktop:text-4xl laptop:text-3xl tablet:text-4xl text-2xl mt-10 text-1xl font-extrabold ">
                  Full Stack + UI designer from KSHRD .
                </p>
                <p className="mt-4 desktop:text-xl laptop:text-xl tablet:text-xl max-w-[36rem] laptop:text-md text-sm ">
                  I have a deep interest in Science with the intention to bring
                  the world to a new evolution of technology.
                </p>

                <div className="text-left">
                  <div class="mt-4 flex flex-col">
                    <div class="mt-4 rounded desktop:w-404 laptop:w-404 tablet:w-404 w-60 bg-black_c px-14 py-2 text-sm font-bold">
                      <div className="flex items-center text-white justify-start">
                        <img className="desktop:mr-4 laptop:mr-4 tablet:mr-4 mr-4" src={ellipes} alt="" />
                        Looking for a Summer 2022 Internship
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <img
                  className="tablet:order-1 shadow-lg  desktop:-ml-4 laptop:-ml-10 desktop:mt-20 laptop:mt-14 tablet:mt-14  desktop:w-80 laptop:w-80 tablet:w-80 tablet:ml-40 desktop:rounded-tl-tl-lgs laptop:rounded-tl-tl-lgs tablet:rounded-tl-tl-lgs ml-4 mt-14 rounded-tl-tl-lgs w-80"
                  src="https://wallpaperaccess.com/full/6235574.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="desktop:grid desktop:grid-cols-8 laptop:grid laptop:grid-cols-8 desktop:mt-16 laptop:mt-16 ml-16 laptop:ml-0 desktop:ml-0">
              
              <div className="">
                <div className="bg-black_c desktop:ml-0 laptop:ml-0 -ml-80 h-6 w-6 mt-24 rounded-full ">
                <div className="bg-regal-bg desktop:h-1 laptop:h-1 desktop:w-970 laptop:w-785 h-785 w-1 tablet:ml-3 ml-3  mt-3 absolute -z-50"></div>
                </div>
                
                <div className="desktop:ml-16 desktop:min-h-1/24 desktop:mt-5 -mt-6 laptop:mt-5 laptop:min-h-1/24 laptop:ml-12">
                  <p className="desktop:ml-2 laptop:ml-2 -ml-122 font-maven font-bold  w-24">
                    2016 - 2020{" "}
                  </p>
                  <p className="font-maven desktop:text-md text-sm ml-3  text-left font-bold w-56">
                    Bachelor Degree,Computer Science and Engineering
                  </p>
                  <p className="font-maven desktop:text-sm text-tinys ml-3 text-left  w-56">
                    Royal University of Phnom Penh
                  </p>
                </div>
              </div>
              <div className=""> 
                <div className="desktop:ml-16 laptop:-ml-2  desktop:min-h-1/24 ml-3  laptop:min-h-1/24">
                  <p className="font-maven  text-sm ml-8 desktop:ml-3 break-words laptop:ml-16 desktop:mt-0 laptop:mt-0 mt-20 text-left  w-64">
                    Paññāsāstra University of Cambodia
                  </p>
                  <p className="font-maven text-md  desktop:ml-3 laptop:ml-16 text-left font-bold  w-56">
                    Graduated Diploma in English
                  </p>
                  <p className="font-maven text-md desktop:ml-3 laptop:ml-16 text-left font-bold  w-56">
                    2017 - 2018
                  </p>
                </div>
                <div className="bg-black_c h-6 w-6 desktop:mt-1 laptop:mt-1 laptop:ml-0 -mt-5 desktop:ml-0 -ml-80  rounded-full"></div>
              </div>
              <div className="">
                <div className="bg-black_c desktop:ml-0 laptop:ml-0 -ml-80 h-6 w-6 mt-24 rounded-full "></div>
                <div className="desktop:ml-16 desktop:min-h-1/24 desktop:mt-5 -mt-6 laptop:mt-5 laptop:min-h-1/24 laptop:ml-12">
                  <p className="desktop:ml-2 laptop:ml-2  -ml-122 font-maven font-bold  w-24">
                    2016 - 2020{" "}
                  </p>
                  <p className="font-maven desktop:text-md text-sm ml-3  text-left font-bold w-56">
                    Bachelor Degree,Computer Science and Engineering
                  </p>
                  <p className="font-maven desktop:text-sm text-tinys ml-3 text-left  w-56">
                    Royal University of Phnom Penh
                  </p>
                </div>
              </div>
              <div className=""> 
                <div className="desktop:ml-16 laptop:-ml-2   desktop:min-h-1/24 ml-3   laptop:min-h-1/24">
                  <p className="font-maven ml-8  text-sm  desktop:ml-3 laptop:ml-16 desktop:mt-0 laptop:mt-0 mt-20 text-left  w-64">
                    Paññāsāstra University of Cambodia
                  </p>
                  <p className="font-maven text-md  desktop:ml-3 laptop:ml-16 text-left font-bold  w-56">
                    Graduated Diploma in English
                  </p>
                  <p className="font-maven text-md desktop:ml-3 laptop:ml-16 text-left font-bold  w-56">
                    2017 - 2018
                  </p>
                </div>
                <div className="bg-black_c h-6 w-6 desktop:mt-1 laptop:mt-1 laptop:ml-0 -mt-5 desktop:ml-0 -ml-80  rounded-full"></div>
              </div>
              <div className="">
                <div className="bg-black_c desktop:ml-0 laptop:ml-0 -ml-80 h-6 w-6 mt-24 rounded-full "></div>
                <div className="desktop:ml-16 desktop:min-h-1/24 desktop:mt-5 -mt-6 laptop:mt-5 laptop:min-h-1/24 laptop:ml-12">
                  <p className="desktop:ml-2 laptop:ml-2  -ml-122 font-maven font-bold  w-24">
                    2016 - 2020{" "}
                  </p>
                  <p className="font-maven desktop:text-md text-sm ml-3  text-left font-bold w-56">
                    Bachelor Degree,Computer Science and Engineering
                  </p>
                  <p className="font-maven desktop:text-sm text-tinys ml-3 text-left  w-56">
                    Royal University of Phnom Penh
                  </p>
                </div>
              </div>
              <div className="">
                <div></div>
                <div className="bg-black_c desktop:ml-0 laptop:ml-0 -ml-80 h-6 w-6 mt-24 rounded-full"></div>
              </div>
              <div className="">
                <div></div>
                <div className="bg-black_c desktop:ml-0 laptop:ml-0 -ml-80 h-6 w-6 mt-24 rounded-full ">
                  
                </div>
              </div>
              <div className="">
                <div>
                  <p className="text-left desktop:mt-25 laptop:mt-25 tablet:ml-24 laptop:-ml-9 mt-2 desktop:text-2xl text-xl  desktop:-ml-11 -ml-10 font-bold font-maven">
                    TIMELINE
                  </p>
                </div>
              </div>
            </div>
            <div className="desktop:grid desktop:grid-cols-3 desktop:mt-24  laptop:grid laptop:grid-cols-3 laptop:mt-24 mt-10">
              <div className="text-left desktop:ml-20 laptop:ml-20 tablet:ml-20 ml-7 mt-4 col-span-2 ">
                <div className="gap-2 flex font-maven ">
                  <ul className="list-outside">
                  <li class="fff desktop:text-xl">
                    <span className="text-black">Web Application Development: Spring Framework, NodeJS,
                      ReactJS</span>
                    </li>
 
                    <li class="fff desktop:text-xl mt-2">
                      <span className="text-black">Web Service (API) Development: Spring Boot, NodeJS,
                      Express</span>
                      
                    </li>
                    <li class="fff desktop:text-xl mt-2">
                      <span className="text-black">
                      iOS Application Development: Swift
                      </span>
                     
                    </li>
                    <li class="fff desktop:text-xl mt-2">
                      <span className="text-black">
                      Hybrid Mobile Application Development: React Native
                      </span>
                      
                    </li>
                    <li class="fff desktop:text-xl mt-2">
                      <span className="text-black">
                      Database Management: PostgreSQL, MongoDB
                      </span>
                      
                    </li>
                    <li class="fff desktop:text-xl mt-2">
                      <span className="text-black">
                      Server and Tool: Docker, Linux, Jenkin
                      </span>
                      
                    </li>
                    <li class="fff desktop:text-xl mt-2">
                      <span className="text-black">
                      Others: Shell, Python
                      </span>
                     
                    </li>
                  </ul>
                </div>
              </div>
              <div className="">
                <img
                  className="desktop:-ml-56 laptop:-ml-20 mt-3 desktop:mt-0"
                  src={img3}
                ></img>
              </div>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
}
