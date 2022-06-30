import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

export default function PaginationComponent() {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 tablet:px-6">
      {/* <div className="flex justify-between flex-1 tablet:hidden">
        <a
          href="#"
          className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Next
        </a>
      </div> */}
      <div className="hidden laptop:flex-1 laptop:flex laptop:items-center laptop:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to{" "}
            <span className="font-medium">10</span> of{" "}
            <span className="font-medium">97</span> results
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <a
              href="#"
              class="py-2 px-3 ml-0 leading-tight text-black rounded-l-lg"
            >
              First
            </a>

            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
            </a>
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-600 border border-indigo-500 bg-indigo-50"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-gray-50"
            >
              2
            </a>

            <span className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300">
              ...
            </span>

            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-gray-50"
            >
              9
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-gray-50"
            >
              10
            </a>

            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
            </a>

            <a
              href="#"
              class="py-2 px-3 ml-0 leading-tight text-black rounded-l-lg"
            >
              Last
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
