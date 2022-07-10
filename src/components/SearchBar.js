import React, { Fragment, useEffect, useRef, useState } from "react";
import "../commons/styles/SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { createRoot } from "react-dom/client";
import Highlighter from "react-highlight-words";
import AdminHome from "./admin-component/AdminHome";
import PaginationComponent from "./PaginationComponent";
import TableComponent from "./TableComponent";
import Modal from "./Modal";
import { useNavigate, useParams } from "react-router-dom";
import { Transition, Popover, Dialog } from "@headlessui/react";
import { ReactComponent as More } from "../commons/icon/More.svg";
import { fetchUpdateStatusUser } from "../redux/actions/UpdateStatusUserAction";
import { useDispatch, useSelector } from "react-redux";
import { ExclamationIcon } from "@heroicons/react/solid";
import { fetchGetAuthUserProfile } from "../redux/actions/GetAuthUserProfileAction";

function SearchBar({ placeholder, data }) {
  
  const dispatch = useDispatch();
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [items, setItems] = useState(data);

  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    const newFilter = data.filter((item) =>
      Object.keys(item).some((key) =>
        String(item[key]).toLowerCase().includes(wordEntered.toLowerCase())
      )
    );

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  console.log(filteredData);

  const onChangeStatus = (isEnable, id) => {
    if (filteredData === 0) {
      setItems(
        items.map((x) => (x.id === id ? { ...x, isEnable: !isEnable } : x))
      );
    } else {
      setFilteredData(
        filteredData.map((x) =>
          x.id === id ? { ...x, isEnable: !isEnable } : x
        )
      );
      setItems(
        items.map((x) => (x.id === id ? { ...x, isEnable: !isEnable } : x))
      );
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <>
      <div class="relative container w-full shadow-md tablet:rounded-lg body-font font-maven">
        <div>
          <div class="p-4">
            <label for="table-search" class="sr-only">
              Search
            </label>
            <div class="relative flex mt-1 w">
              <div class="flex justify-end my-auto pr-2">
                {wordEntered.length === 0 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    />
                  </svg>
                ) : (
                  <button onClick={clearInput}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                )}
              </div>
              <input
                placeholder={placeholder}
                value={wordEntered}
                onChange={handleFilter}
                type="text"
                id="table-search"
                class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  "
              />
            </div>
          </div>
          <div class="relative overflow-x-auto shadow-md tablet:rounded-lg mt-8">
            <div className="text-xl px-6 py-4 text-ccon font-bold border border-md  bg-white ">
              List of Students
            </div>

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left ">
                <thead class="text-xs  uppercase bg-gray-50 ">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Username
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Email
                    </th>
                    <th scope="col" class="px-6 py-3">
                      CVs
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Portfolio
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Action
                      <span class="sr-only">Action</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.length === 0 ? (
                    <>
                      {" "}
                      {data &&
                        data?.map((item, key) => (
                          <tr
                            key={key}
                            class="bg-white border-b hover:bg-gray-50 "
                          >
                            <td class="px-6 py-4">{item?.username}</td>
                            <td class="px-6 py-4">{item?.email}</td>
                            <td class="px-6 py-4">1</td>
                            <td class="px-6 py-4">2</td>
                            <td class="px-6 py-4 text-right flex justify-between">
                              {item?.status ? "Enable" : "Disable"}

                              <Popover className="relative">
                                {({ open }) => (
                                  <>
                                    <Popover.Button>
                                      <More className="w-5 mr-2"></More>
                                    </Popover.Button>
                                    <Transition.Root show={open} as={Fragment}>
                                      <Dialog
                                        as="div"
                                        className="relative z-10"
                                        initialFocus={cancelButtonRef}
                                        onClose={setOpen}
                                      >
                                        <Transition.Child
                                          as={Fragment}
                                          enter="ease-out duration-300"
                                          enterFrom="opacity-0"
                                          enterTo="opacity-100"
                                          leave="ease-in duration-200"
                                          leaveFrom="opacity-100"
                                          leaveTo="opacity-0"
                                        >
                                          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                                        </Transition.Child>

                                        <div className="fixed z-10 inset-0 overflow-y-auto">
                                          <div className="flex items-center tablet:items-center justify-center min-h-full p-4 text-center tablet:p-0">
                                            <Transition.Child
                                              as={Fragment}
                                              enter="ease-out duration-300"
                                              enterFrom="opacity-0 translate-y-4 translate-y-0 scale-95"
                                              enterTo="opacity-100 translate-y-0 scale-100"
                                              leave="ease-in duration-200"
                                              leaveFrom="opacity-100 translate-y-0 scale-100"
                                              leaveTo="opacity-0 translate-y-4 translate-y-0 scale-95"
                                            >
                                              <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all tablet:my-8 max-w-lg tablet:w-full">
                                                <div className="bg-white px-4 pt-5 pb-4 p-6 tablet:pb-4">
                                                  <div className="tablet:flex tablet:items-start">
                                                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 ">
                                                      <ExclamationIcon
                                                        className="h-6 w-6 text-red-600"
                                                        aria-hidden="true"
                                                      />
                                                    </div>
                                                    <div className="mt-3 text-center  tablet:ml-4 tablet:text-left">
                                                      <Dialog.Title
                                                        as="h3"
                                                        className="text-lg leading-6 font-medium text-gray-900"
                                                      >
                                                        Deactivate account
                                                      </Dialog.Title>
                                                      <div className="mt-2">
                                                        <p className="text-sm text-gray-500">
                                                          Are you sure you want
                                                          to deactivate your
                                                          account? All of your
                                                          data will be
                                                          permanently removed.
                                                          This action cannot be
                                                          undone.
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="bg-gray-50 px-4 py-3 tablet:px-6 flex flex-row-reverse">
                                                  <button
                                                    type="button"
                                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 ml-3 sm:w-auto sm:text-sm"
                                                    onClick={() =>
                                                      {setOpen(false)
                                                        dispatch(fetchUpdateStatusUser(item.id, false))
                                                        }
                                                    }
                                                  >
                                                    Disable
                                                  </button>
                                                  <button
                                                    type="button"
                                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500  sm:ml-3 sm:w-auto sm:text-sm"
                                                    onClick={() =>
                                                      {setOpen(false)
                                                      dispatch(fetchUpdateStatusUser(item.id, true))
                                                      }
                                                      
                                                    }
                                                    ref={cancelButtonRef}
                                                  >
                                                    Enable
                                                  </button>
                                                </div>
                                              </Dialog.Panel>
                                            </Transition.Child>
                                          </div>
                                        </div>
                                      </Dialog>
                                    </Transition.Root>
                                  </>
                                )}
                              </Popover>
                            </td>
                          </tr>
                        ))}
                    </>
                  ) : (
                    <>
                      {" "}
                      {filteredData.map((item, key) => (
                        <tr
                          key={key}
                          class="bg-white border-b hover:bg-gray-50 "
                        >
                          <td class="px-6 py-4">
                            {item?.profileDetails?.personalDetails?.firstName}
                          </td>
                          <td class="px-6 py-4">
                            {item?.profileDetails?.personalDetails?.lastName}
                          </td>
                          <td class="px-6 py-4">
                            {item?.profileDetails?.personalDetails?.gender}
                          </td>
                          <td class="px-6 py-4">1</td>
                          <td class="px-6 py-4">2</td>
                          <td class="px-6 py-4 text-right flex justify-between">
                            Enable
                            <Popover className="relative">
                              {({ open }) => (
                                <>
                                  <Popover.Button>
                                    <More className="w-5 mr-2"></More>
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
                                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2 "
                                              />
                                              <label
                                                for="default-radio-1"
                                                class="ml-2 text-xl font-bold font-maven "
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
                                                class="ml-2 text-xl font-bold font-maven text-gray-900"
                                              >
                                                Private
                                              </label>
                                            </div>
                                            <div className="text-center">
                                              <button class=" mt-10 bg-blue-500 hover:bg-blue-700 text-white font-maven w-28 mr-3 py-2 px-4  h-12 rounded mb-6">
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
                          </td>
                        </tr>
                      ))}{" "}
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
