import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Add } from "../../commons/icon/add.svg";
import { ReactComponent as Removed } from "../../commons/icon/removed.svg";
import { ReactComponent as Remove } from "../../commons/icon/remove.svg";
import { Transition, Popover } from "@headlessui/react";
import { fetchGetUserProfileById } from "../../redux/actions/GetUerProfileByIdAction";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "@mui/material";

export default function ViewStudentProfile() {
  const data = useSelector((state) => state?.getUserProfileById?.items);
  console.log(data);
  const [addSkill, setAddSkill] = useState("");
  const [display, setDisplay] = useState(false);
  const [vall, setTitle] = useState(true);
  const [valls, setTitles] = useState(true);
  const [studentCv, setStudentCv] = useState([]);
  const [currentIndex, setcurrentIndex] = useState(0);
  const [currentStudent, setCurrentStudent] = useState({});
  const [title, setTitleValues] = useState(
    "I am gratuated student from HRD and have more than 2 years' experience building software for clients. Below is a quick overview of my main technical skill sets and technologies I use.  ",
  );
  const [test, setTest] = useState(true);
  const [summary, setSummary] = useState(
    "I'm a Junior Developer in frontend and backend development for complex scalable web apps. If you want to know how I may help your project? Check out my project portfolio and online resume.",
  );
  const handleTitleChange = (e) => {
    let titleFormValues = e.target.value;
    setTitleValues(titleFormValues);
    console.log(titleFormValues);
  };
  const [major, setMajor] = useState([
    {
      data: "React JS",
      id: 1,
      isShow: false,
    },

    {
      data: "Java Programming",
      id: 2,
      isShow: false,
    },
    {
      data: "Tailwind React",
      id: 3,
      isShow: false,
    },
    {
      data: "UX/UI",
      id: 4,
      isShow: false,
    },
    {
      data: "Computer Science",
      id: 5,
      isShow: false,
    },
    {
      data: "Korean Language",
      id: 6,
      isShow: false,
    },
  ]);

  const [selectedMajor, setSelectedMajor] = useState("");

  const [inputField, setInputField] = useState([
    {
      newMajor: "",
      isShow: false,
      id: 0,
    },
  ]);
  const removeInputField = (index, e) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    console.log("Error");

    let object = [...inputField];
    object.splice(index, 1);
    setInputField(object);
  };

  const addInputFields = (item) => {
    let newData = {
      newMajor: item.data,
      isShow: !major.isShow,
      id: major.length,
    };
    setInputField([...inputField, newData]);

    setMajor(
      major.map((obj) =>
        obj.id === item?.id ? { ...obj, isShow: !obj.isShow } : obj,
      ),
    );

    setSelectedMajor(item.data);
    // }
  };

  console.log(inputField);

  const handleInputFieldChange = (index, event) => {
    console.log(event.target.value);
    let data = [...inputField];
    data[index][event.target.name] = event.target.value;
    setInputField(data);
  };
  const handleSummarChange = (e) => {
    setSummary(e.target.value);
    console.log(e.target.value);
  };
  const resetInputTitle = () => {
    setTitleValues("");
  };
  const navigate = useNavigate();

  React.useEffect(() => {
    const obj = localStorage.getItem("studentProfile");
    if (obj) {
      let student = JSON.parse(obj);
      setStudentCv(student);
      setCurrentStudent(student[0]);
    }
  }, []);

  const handleChange = (event, value) => {
    let obj = studentCv[value - 1];
    obj && setCurrentStudent(obj);
  };

  console.log("CurrentStudent: ", currentStudent);
  return (
    <div className="body-font font-maven container mx-auto">
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
            class="w-36 h-36 p-1 absolute top-56 object-cover rounded-full ring-2  ml-5 bg-gray-300 "
            src="https://www.biography.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTg1NjUzOTgxOTk1ODY5ODI0/johnnydepp.jpg"
            alt="Bordered avatar"
          />
        </div>
        <div className="mt-19 ml-11  font-maven grid grid-cols-6 font-bold text-ch text-xl">
          <div className="col-span-5">
            <p className="mb-3"></p>
            <div class="flex items-center">
              <div class="">
                <label
                  class="block text-gray-500 font-bold tablet:text-right  pr-4"
                  for="inline-full-name"
                >
                  ID : {currentStudent?.authUserId}
                </label>
              </div>
              {data?.id?.map((item, key) => (
                <div class="" key={key}>
                  <input
                    class="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 mt-2 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="inline-full-name"
                    type="text"
                    placeholder={item?.authUserId}
                  />
                </div>
              ))}
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

                            <button
                              className="font-maven text-md text-[#035397] font-bold"
                              onClick={() => navigate("edite")}
                            >
                              Education
                            </button>
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

                            <button
                              className="ml-1 font-maven text-md text-[#035397] font-bold"
                              onClick={() => navigate("editem")}
                            >
                              Employment
                            </button>
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

        <div className="flex justify-center mt-5">
          <Pagination
            defaultPage={1}
            value={currentIndex + 1}
            count={studentCv.length}
            onChange={handleChange}
            variant="outlined"
            color="primary"
          />
        </div>
        <section class=" p-6 mx-auto  rounded-md  ">
          <h2 class="text-2xl font-bold  capitalize mb-5">
            Personal Information{" "}
          </h2>
          <div class="grid grid-cols-1 gap-6 mt-4 laptop:grid-cols-3  font-maven ">
            <div>
              <label class="font-bold" for="username">
                First Name <span className="text-red-700">*</span>
              </label>
              <input
                id="username"
                value={
                  currentStudent?.profileDetails?.personalDetails?.firstName
                }
                type="text"
                class="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 mt-2 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div>
              <label class="font-bold" for="emailAddress">
                Last Name <span className="text-red-700">*</span>
              </label>
              <input
                id="emailAddress"
                value={
                  currentStudent?.profileDetails?.personalDetails?.lastName
                }
                type="text"
                class="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 mt-2 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div>
              <label class="text-gray-700 font-bold" for="password">
                Phone Number <span className="text-red-700">*</span>
              </label>
              <input
                value={
                  currentStudent?.profileDetails?.personalDetails?.phoneNumber
                }
                id=""
                type="tel"
                class="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 mt-2 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div>
              <label class="font-bold" for="passwordConfirmation">
                Date of Birth
              </label>
              <input
                id="passwordConfirmation"
                type="date"
                value={currentStudent?.profileDetails?.personalDetails?.dob}
                class="block w-full border p-2 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 mt-2 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label class="font-bold" for="passwordConfirmation">
                Email
              </label>
              <input
                id="passwordConfirmation"
                type="email"
                value={currentStudent?.profileDetails?.personalDetails?.email}
                class="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 mt-2 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label class="font-bold " for="passwordConfirmation">
                Place of Birth
              </label>
              <input
                id="passwordConfirmation"
                type='text'
                value={currentStudent?.profileDetails?.personalDetails?.pob}
                class="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 mt-2 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <br></br>
          <hr></hr>
          <br></br>
          {/* <h2 class="text-2xl font-bold  capitalize mb-5 ">Basic Course</h2> */}
          {/* <div class="grid grid-cols-1 gap-6 mt-4 laptop:grid-cols-3 mb-5">
            <div>
              <label class="font-bold" for="username">
                Class Name <span className="text-red-700">*</span>
              </label>
              <input
                id="username"
                type="text"
                value=""
                class="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 mt-2 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div>
              <label class="font-bold" for="emailAddress">
                Group Name <span className="text-red-700">*</span>
              </label>
              <input
                id="emailAddress"
                type="email"
                value=""
                class="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 mt-2 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div>
              <label class="font-bold" for="password">
                Subject Name
              </label>
              <input
                id="password"
                type="text"
                value=""
                class="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 mt-2 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div> */}
          <br></br>
          {/* <h2 class="text-2xl font-semibold mb-5">Advance Course</h2> */}
          {/* <div class="grid grid-cols-1 gap-6 mt-4 laptop:grid-cols-3 ">
            <div>
              <label class="font-bold" for="passwordConfirmation">
                Class Name <span className="text-red-700">*</span>
              </label>
              <input
                id="passwordConfirmation"
                type="text"
                value=""
                class="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 mt-2 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label class="font-bold" for="passwordConfirmation">
                Group Name <span className="text-red-700">*</span>
              </label>
              <input
                value=""
                id="passwordConfirmation"
                type="text"
                class="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 mt-2 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label class="font-bold" for="passwordConfirmation">
                Subject Name
              </label>
              <input
                id="passwordConfirmation"
                type=""
                value=""
                class="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 mt-2 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>{" "} */}
          <br></br>
          {/* <h2 class="text-lg  text-[#A098AE] capitalize  mb-3">About</h2> */}
          {/* <div className="grid grid-2">
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
                      class="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 mt-2 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
          </div> */}
          {/* <div className="flex mt-12 font-maven text-[#255FAB] mb-5">
            <p className="h-10 w-1   bg-[#255FAB]"></p>
            <p className="ml-2 text-4xl font-bold  text-cB">What I can do </p>
          </div> */}
          {/* <div className="grid grid-2">
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
            <div>
              <button
                class="rounded-md desktop:text-xl laptop:text-lg  inline-flex  justify-between content-center mt-3"
                onClick={() => setAddSkill((Prev) => !Prev)}
              >
                {addSkill ? (
                  <Add className="w-6 mt-1 laptop:mr-1 desktop:mr-2"></Add>
                ) : (
                  <Removed className="w-6 mt-1 laptop:mr-1 desktop:mr-2"></Removed>
                )}
                Skills{""}
              </button>

              <div className="mt-3">
                {addSkill ? null : (
                  <div>
                    <div className="flex laptop:flex-row laptop:gap-2 flex-col">
                      {major.map((item, index) => (
                        <div className="mb-5">
                          <button
                            key={index}
                            className="border bg-bgSkill text-center rounded-lg py-2 px-2"
                            onClick={() => addInputFields(item)}
                          >
                            {item.data}
                          </button>
                        </div>
                      ))}
                    </div>

                    <div
                      className="flex flex-col"
                      onClick={!display ? "hidden" : "block"}
                    >
                      {inputField.map((input, index) => (
                        <form onSubmit={(e) => removeInputField(index, e)}>
                          {/* return ( */}
                          {/* <div key={index}>
                            <div className={!input.isShow ? "hidden" : "block"}>
                              <button type="submit" className="float-right">
                                <Remove className="w-5"></Remove>
                              </button>
                              <textarea
                                className="mblock w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 mt-2 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                                name="newMajor"
                                placeholder={input.newMajor}
                          
                                onChange={(event) =>
                                  handleInputFieldChange(index, event)
                                }
                              ></textarea>
                            </div>
                          </div> */}
                          {/* ); 
                        </form>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div> */}
          {/* <div classname="">
            <div className="flex items-center laptop:justify-end justify-center ">
              <button
                class="hover:border-transparent mt-6 hover:bg-[#194f95] bg-[#255FAB] text-white mr-3 py-2 px-4 w-36 h-12 rounded mb-6"
                onClick={() => navigate("/admin/manageStudent")}
              >
                Save
              </button>
              <button
                class="bg-transparent  w-36 h-12 hover:bg-slate-400 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                onClick={() => navigate("/admin/manageStudent")}
              >
                Cancel
              </button>
            </div>
          </div> */}
        </section>
      </div>
    </div>
  );
}
