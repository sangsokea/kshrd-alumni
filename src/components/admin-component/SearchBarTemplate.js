import React, { useState, Fragment } from "react";
import "../../commons/styles/SearchBar.css";
import TableTemplateComponent from "./TableTemplateComponent";
import { useNavigate } from "react-router-dom";
import { Transition, Popover } from "@headlessui/react";

import { ReactComponent as More } from "../../commons/icon/More.svg";
import CV_HRD from "../../commons/images/cvhrd.png";
import CV_ALUMNI from "../../commons/images/cvAlumni.png";
import PORTFOLIO_ALUMNI from "../../commons/images/portfolio.png";

function SearchBarTemplate({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [items, setItems] = useState(data);
  const [showModal, setShowModal] = React.useState(false);
  const [tempItem, setTempItem] = useState();
  const navigate = useNavigate();
  const onChangeModel = (value) => {
    setShowModal(!showModal);
    switch (value.id) {
      case 1:
        setTempItem(CV_HRD);
        break;
      case 2:
        setTempItem(CV_ALUMNI);
        break;
      case 3:
        setTempItem(PORTFOLIO_ALUMNI);
        break;
      default:
        setTempItem(CV_HRD);
    }
  };

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    const newFilter = data.filter((item) =>
      Object.keys(item).some((key) =>
        String(item[key]).toLowerCase().includes(wordEntered.toLowerCase()),
      ),
    );

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  console.log(filteredData);

  const onChangeStatus = (status, id) => {
    if (filteredData === 0) {
      setItems(items.map((x) => (x.id === id ? { ...x, status: !status } : x)));
    } else {
      setFilteredData(
        filteredData.map((x) => (x.id === id ? { ...x, status: !status } : x)),
      );
      setItems(items.map((x) => (x.id === id ? { ...x, status: !status } : x)));
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <>
      <div class="relative container w-full shadow-md tablet:rounded-lg body-font font-maven">
        {/* show modal */}
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative my-6 mx-auto max-w-sm">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold"></h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => {
                        onChangeModel(false);
                      }}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <img src={tempItem} className="w-full h-auto" />
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        onChangeModel(false);
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
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
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5 "
              />
            </div>
          </div>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
            <div className="text-xl px-6 py-4 text-ccon font-bold border border-md  bg-white ">
              List of Templates
            </div>

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left text-gray-500 ">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Template
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Type
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
                      {data.slice(0, 10).map((item, key) => (
                        <tr
                     
                          key={key}
                          class="bg-white border-b  hover:bg-gray-50 "
                        >
                          <td class="px-6 py-4">{item.template}</td>
                          <td class="px-6 py-4">{item.type}</td>
                          <td class="px-6 py-4 text-right flex justify-between">
                            {item.status ? "Enable" : "Disable"}

                            <button
                             onClick={() => onChangeModel(item)}
                              className="border rounded-lg bg-ccon  py-2 px-5 text-white hover:bg-cfoo"
                            >
                              View
                            </button>
                          </td>
                        </tr>
                      ))}
                    </>
                  ) : (
                    <>
                      {" "}
                      {filteredData.slice(0, 10).map((item, key) => (
                        <tr
                          
                          key={key}
                          class="bg-white border-b hover:bg-gray-50 "
                        >
                          <td class="px-6 py-4">{item.template}</td>
                          <td class="px-6 py-4">{item.type}</td>
                          <td class="px-6 py-4 text-right flex justify-between">
                            {item.status ? "Enable" : "Disable"}
                            <button
                              onClick={() => onChangeModel(item)}
                              className="border rounded-lg bg-ccon  py-2 px-5 text-white hover:bg-cfoo"
                            >
                              View
                            </button>
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

export default SearchBarTemplate;
