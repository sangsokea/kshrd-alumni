import React, { useState } from "react";
import DATA from "../../Data.json";
import AdminPagination from "./AdminPagination";

export default function AdminHome() {
  const [data, setData] = useState(DATA);
  return (
    <>
      <div className="flex flex-wrap justify-around">
        <a
          href="#"
          class="mx-2 flex-1 block py-3 pl-4 pr-20 max-w-sm bg-bg1 rounded-lg border border-gray-200 s hover:bg-ccon dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <p class="font-bold  text-white text-xl">560</p>
          <p className=" text-white">Total Alumni</p>
          <p className="flex items-center text-red-700 mt-4">
            <svg
              class="h-4 text-red-700 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
            13.8%
          </p>
        </a>
        <a
          href="#"
          class="mx-2 flex-1 block py-3 pl-4 pr-20 max-w-sm bg-bg2 rounded-lg border border-gray-200 s hover:bg-ccon dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <p class="font-bold  text-white text-xl">53</p>
          <p className=" text-white">New Students</p>
          <p className="flex items-center text-red-700 mt-4">
            <svg
              class="h-4 text-red-700 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
            13.8%
          </p>
        </a>
        <a
          href="#"
          class="mx-2 flex-1 block py-3 pl-4 pr-20 max-w-sm bg-bg3 rounded-lg border border-gray-200 s hover:bg-ccon dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <p class="font-bold  text-white text-xl">35</p>
          <p className=" text-white">Student with portfolio</p>
          <p className="flex items-center text-red-700 mt-4">
            <svg
              class="h-4 text-red-700 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
            13.8%
          </p>
        </a>
        <a
          href="#"
          class="mx-2 flex-1 block py-3 pl-4 pr-20 max-w-sm bg-bg4 rounded-lg border border-gray-200 s hover:bg-ccon dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <p class="font-bold  text-white text-xl">13</p>
          <p className=" text-white">Student with Resume</p>
          <p className="flex items-center text-red-700 mt-4">
            <svg
              class="h-4 text-red-700 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
            13.8%
          </p>
        </a>
        <a
          href="#"
          class="mx-2 flex-1 block py-3 pl-4 pr-20 max-w-sm bg-bg5 rounded-lg border border-gray-200 s hover:bg-ccon dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <p class="font-bold  text-white text-xl">35</p>
          <p className=" text-white">Total Course</p>
          <p className="flex items-center text-red-700 mt-4">
            <svg
              class="h-4 text-red-700 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
            13.8%
          </p>
        </a>
      </div>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
        <div className="text-xl px-6 py-4 text-ccon font-bold border border-md  bg-white ">
          Total Alumni
        </div>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Fist Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Last Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Gender
                </th>
                <th scope="col" class="px-6 py-3">
                  Generation
                </th>
                <th scope="col" class="px-6 py-3">
                  Email
                </th>

                <th scope="col" class="px-6 py-3">
                  Skill
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                  <span class="sr-only">Action</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.slice(0, 10).map((item, key) => (
                <tr
                  key={key}
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td class="px-6 py-4">{item.first_name}</td>
                  <td class="px-6 py-4">{item.last_name}</td>
                  <td class="px-6 py-4">{item.gender}</td>
                  <td class="px-6 py-4">{item.generation}</td>
                  <td class="px-6 py-4">{item.email}</td>
                  <td class="px-6 py-4">{item.skill}</td>
                  <td class="px-6 py-4 text-right">
                  <button className='border rounded-lg bg-ccon  py-2 px-5 text-white hover:bg-cfoo'>View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center my-5">
        <AdminPagination />
      </div>
    </>
  );
}
