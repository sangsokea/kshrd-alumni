import React from "react";
import {colors} from '../../commons/colors/colors'

export default function AdminManageStudentComponent() {
  return (
    <div class="flex justify-center m-5">
      <form class="m-1 flex-1">
        <div class="mb-6 w-100">
         
          <input
            type="name"
            id="name"
            class="shadow-sm bg-gray-50 border border-blue-900 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-900 dark:shadow-sm-light"
            placeholder="Filter by name"
            required
          ></input>
        </div>
      </form>
      <form class="m-1 flex-1">
        <div class="mb-6 w-100">
        
          <input
            type="text"
            id="subject"
            class="shadow-sm bg-gray-50 border border-blue-900 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-900 dark:shadow-sm-light"
            placeholder="Filter by Subject"
            required
          ></input>
        </div>
      </form>
      <form class="m-1 flex-1">
        <div class="mb-6 w-100">
         
          <input
            type="text"
            id="generation"
            class="shadow-sm bg-gray-50 border border-blue-900 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-900 dark:shadow-sm-light"
            placeholder="Filter by generation"
            required
          ></input>
        </div>
      </form>
    </div>
  );
}
