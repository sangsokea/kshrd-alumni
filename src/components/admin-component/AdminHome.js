import React from 'react'

export default function AdminHome() {
  return (
    <>
     <div className="flex">
            <a
              href="#"
              class=" block py-3 pl-4 pr-20 max-w-sm bg-bg1 rounded-lg border border-gray-200 s hover:bg-ccon dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
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
              class="block py-3 pl-4 pr-20 max-w-sm bg-bg2 rounded-lg border border-gray-200 s hover:bg-ccon dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
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
              class="block py-3 pl-4 pr-20 max-w-sm bg-bg3 rounded-lg border border-gray-200 s hover:bg-ccon dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
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
              class="block py-3 pl-4 pr-20 max-w-sm bg-bg4 rounded-lg border border-gray-200 s hover:bg-ccon dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
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
              class="block py-3 pl-4 pr-20 max-w-sm bg-bg5 rounded-lg border border-gray-200 s hover:bg-ccon dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
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
          </div> 

          <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
            <div className='text-xl px-6 py-4 text-ccon font-bold border border-md  bg-white '>
              Total Alumni
            </div> 
             <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400  bg-white">
              <thead class="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    First Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Last Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Gender
                  </th>
                  <th scope="col" class="px-6 py-3">
                    CVs
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Portfolio
                  </th>
                  <th scope="col" class="px-6 py-3 text-right">
                    Action
                  </th>
                  <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    Yuoyi
                  </th>
                  <td class="px-6 py-4">
                    Vong
                  </td>
                  <td class="px-6 py-4">
                    Female
                  </td>
                  <td class="px-6 py-4">
                    2
                  </td>
                  <td class="px-6 py-4">
                    1
                  </td>
                  <td class=" text-right ">
                    <button className='border rounded-lg bg-ccon  py-2 px-5 text-white hover:bg-cfoo'>View</button>
                  </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    Boonlin
                  </th>
                  <td class="px-6 py-4">
                    Em
                  </td>
                  <td class="px-6 py-4">
                    Male
                  </td>
                  <td class="px-6 py-4">
                    2
                  </td>
                  <td class="px-6 py-4">
                    2
                  </td>
                  <td class=" text-right ">
                    <button className='border rounded-lg bg-ccon  py-2 px-5 text-white hover:bg-cfoo'>View</button>
                  </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    Sokea
                  </th>
                  <td class="px-6 py-4">
                    Sang
                  </td>
                  <td class="px-6 py-4">
                    Male
                  </td>
                  <td class="px-6 py-4">
                    2
                  </td>
                  <td class="px-6 py-4">
                    2
                  </td>
                  <td class=" text-right ">
                    <button className='border rounded-lg bg-ccon  py-2 px-5 text-white hover:bg-cfoo'>View</button>
                  </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    Yarith
                  </th>
                  <td class="px-6 py-4">
                    Kong
                  </td>
                  <td class="px-6 py-4">
                    Male
                  </td>
                  <td class="px-6 py-4">
                    2
                  </td>
                  <td class="px-6 py-4">
                    2
                  </td>
                  <td class=" text-right ">
                    <button className='border rounded-lg bg-ccon  py-2 px-5 text-white hover:bg-cfoo'>View</button>
                  </td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    Paradis
                  </th>
                  <td class="px-6 py-4">
                    Pol
                  </td>
                  <td class="px-6 py-4">
                    Female
                  </td>
                  <td class="px-6 py-4">
                    3
                  </td>
                  <td class="px-6 py-4">
                    4
                  </td>
                  <td class=" text-right ">
                    <button className='border rounded-lg bg-ccon  py-2 px-5 text-white hover:bg-cfoo'>View</button>
                  </td>
                </tr>
              </tbody>

            </table>
          </div> 
          </>
  )
}
