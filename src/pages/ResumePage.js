import React, { Fragment, useRef, useState } from "react";
import SidebarComponent from "../components/SidebarComponent";
import { colors } from "../commons/colors/colors";
import { Navigate, useNavigate } from "react-router-dom";
import { Transition, Popover } from "@headlessui/react";

export default function ResumePage() {
  const navigate = useNavigate();
  const pdfExportComponent = useRef(null);
  const image = useRef(null);

  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
    // savePDF(image.current, { imageResolution: 36 });
  };

  return (
    <div className="mx-10 mt-5 body-font font-maven ">
      {/* content */}
      <div className="col-span-4">
        <div className="body-font font-maven p-10 rounded-tr-lg rounded-br-lg h-full grid-cols-2">
          <div className="flex flex-row portolio-header">
            <div>
              <p className="text-xl font-normal">Portfolio</p>
              <p className="text-2xl font-bold mb-5" style={textStyle}>Vong Yuoyi</p>
            </div>

            {/* Insert image of QR Code */}

            <span className="w-14 ml-auto mt-0">
              <img src="https://www.qrcode-monkey.com/img/default-preview-qr.svg"></img>
            </span>
          </div>

          {/* Table */}
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg list-resume">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              {/* Column1 <Curriculumn Vitae */}
              <thead className="text-m text-white uppercase	background-color: rgb(2 132 199);" style={styles}>
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Curriculum Vitae
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Create Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b text-black dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-black whitespace-nowrap"
                  >
                    <div className="flex flex-row">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="1"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                          />
                        </svg>
                      </div>
                      <span>Curriculum Vitae1</span>
                    </div>
                  </th>
                  <td className="px-6 py-4">13/02/2022</td>

                  <td className="px-1 py-4 text-right">
                    <div className="flex flex-row cover-action">
                      <span>
                        <div className="mr-3">
                          <Popover className="relative">
                            {({ open }) => (
                              <>

                                <label for="my-modal-3" class=""><svg
                                  xmlns="https://www.basecampcountry.com/wp-content/uploads/2019/09/Downloadable-PDF-Button-PNG-HD-Image.png"
                                  className="h-6 w-6 text-blue-600"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  stroke-width="2"
                                >

                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                  />
                                </svg></label>
                                <Popover.Button>

                                </Popover.Button>
                                <div className="bg-cyan-700">
                                  <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                                  >
                                    <Popover.Panel className="absolute -left-10  z-10 mt-3 w-52 h-270 max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                        <div className="relative  gap-8 bg-white p-7 ">
                                          {/* {solutions.map((item) => ( */}
                                          <div>
                                            <div className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out -mt-4  focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                                              <div className="flex items-center pdf-download">
                                                <p className="text-xl font-maven font-extrabold text-gray-900 export-as">
                                                  Export as
                                                </p>
                                                <hr class="mt-10"></hr>
                                              </div>
                                            </div>
                                          </div>
                                          <div>
                                            <div className="flex text-left mt-3 ml-3">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                stroke-width="2"
                                              >
                                                <path
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                                />
                                              </svg>
                                              PDF
                                            </div>
                                          </div>
                                          {/* ))} */}
                                        </div>
                                        {/* <div className="bg-gray-50 p-4"></div> */}
                                      </div>
                                    </Popover.Panel>
                                  </Transition>
                                </div>
                              </>
                            )}
                          </Popover>
                        </div>
                      </span>
                      <span className="mr-3">
                        <button
                          className=""
                          onClick={() => navigate("/sidebar/createNewCV")}

                        >
                          <a><svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="#2563eb"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                            />
                          </svg></a>
                        </button>
                        <a
                          href="/CreateNewCV"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >

                        </a>
                      </span>
                      <span>
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </a>
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="btn-resume">
            <div className="flex flex-row">
              <div className="ml-auto ">
                <button
                  className="px-12 text-lg py-2 text-white rounded-md "
                  onClick={() => navigate("/sidebar/createNewCV")}
                  style={styles}
                >
                  Add New
                </button>
                {/* <button className="px-10 text-lg py-2 border border-blue-600 text-blue-600 rounded-md" onClick={() => navigate("/sidebar/changeCVTemplate")}>
                  Change Templates
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>


      <input type="checkbox" id="my-modal-3" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 class="text-lg font-bold">Generate PDF and Download</h3>
          <p class="py-4">Do you want to download this file as PDF?</p>
          <div className="flex flex-row">
            <div className="laptop:m-auto">


              <div class="col-span-2 mt-2 ml-2 hidden laptop:block">
                <button
                  class="mb-2 py-2 text-white text-lg rounded-lg w-56"
                  style={styles}
                  onClick={handleExportWithComponent}
                >
                  Export as PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  backgroundColor: colors.content,
  // logoSize: myStyles.logoSize
};

const textStyle = {
  color: colors.content
}
