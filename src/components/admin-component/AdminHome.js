import React, { useState } from "react";
import DATA from "../../Data.json";
import AdminPagination from "./AdminPagination";
import { useNavigate } from "react-router-dom";
import ButtonAddNewStudent from "./ButtonAddNewStudent";

export default function AdminHome() {
  const [data, setData] = useState(DATA);
  const navigate = useNavigate();
  return (
    <>
      <div className="container mx-auto">
        <ButtonAddNewStudent />
        <div className="laptop:grid laptop:grid-cols-5 grid grid-cols-1">
        <a
          href="#"
          class="mx-2 flex-1 block py-3 pl-4 pr-20 mt-5 max-w-sm bg-bg1 shadow-[0px_5px_5px_0px_rgba(0,0,0,0.3)] rounded-lg  hover:bg-ccon "
        >
          <p class="font-bold  text-white text-xl">560</p>
          <p className=" text-white">Total Alumni</p>
          <p className="flex items-center text-white font-bold mt-4 ">
            <svg
              class="h-4 text-white font-bold "
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
          class="mx-2 flex-1 block py-3 pl-4 pr-20 mt-5 max-w-sm bg-bg2 rounded-lg shadow-[0px_5px_5px_0px_rgba(0,0,0,0.3)]  hover:bg-ccon "
        >
          <p class="font-bold  text-white text-xl">53</p>
          <p className=" text-white">New Students</p>
          <p className="flex items-center text-white font-bold  mt-4">
            <svg
              class="h-4 text-w "
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
          class="mx-2 flex-1 block py-3 pl-4 pr-20 mt-5 max-w-sm bg-bg3 rounded-lg shadow-[0px_5px_5px_0px_rgba(0,0,0,0.3)]  hover:bg-ccon "
        >
          <p class="font-bold  text-white text-xl">35</p>
          <p className=" text-white">Student with portfolio</p>
          <p className="flex items-center text-white font-bold mt-4">
            <svg
              class="h-4 text-white font-bold "
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
          class="mx-2 flex-1 block py-3 pl-4 pr-20 mt-5 max-w-sm bg-bg4 rounded-lg  shadow-[0px_5px_5px_0px_rgba(0,0,0,0.3)]  hover:bg-ccon "
        >
          <p class="font-bold  text-white text-xl">13</p>
          <p className=" text-white">Student with Resume</p>
          <p className="flex items-center text-white font-bold mt-4">
            <svg
              class="h-4 text-white font-bold "
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
          class="mx-2 flex-1 block py-3 pl-4 pr-20 mt-5 max-w-sm bg-bg5 rounded-lg shadow-[0px_5px_5px_0px_rgba(0,0,0,0.3)] hover:bg-ccon "
        >
          <p class="font-bold  text-white text-xl">35</p>
          <p className=" text-white">Total Course</p>
          <p className="flex items-center text-white font-bold mt-4">
            <svg
              class="h-4 text-white font-bold "
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

      <div class="relative overflow-x-auto rounded-3xl shadow-[0px_5px_100px_10px_rgba(0,0,0,0.2)] mt-8">
        <div className="text-xl px-6 py-4 text-ccon font-bold border border-md  bg-white ">
          Total Alumni
        </div>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 ">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
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
                <tr key={key} class="bg-white border-b hover:bg-gray-50 ">
                  <td class="px-6 py-4">{item.first_name}</td>
                  <td class="px-6 py-4">{item.last_name}</td>
                  <td class="px-6 py-4">{item.gender}</td>
                  <td class="px-6 py-4">{item.generation}</td>
                  <td class="px-6 py-4">{item.email}</td>
                  <td class="px-6 py-4">{item.skill}</td>
                  <td class="px-6 py-4 text-right">
                    <button
                      onClick={() => {
                        navigate("/admin/view", { state: { item } });
                      }}
                      className="border rounded-lg bg-ccon  py-2 px-5 text-white hover:bg-cfoo"
                    >
                      View
                    </button>
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
      </div>
      
    </>
  );
}
