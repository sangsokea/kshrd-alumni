import React, { useEffect, useState } from "react";
import Tables, {  ActionPsill, StatusPill } from './AdminTables' 
import DATA from "../../Data.json";
import AdminPagination from "./AdminPagination";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import ButtonAddNewStudent from "./ButtonAddNewStudent";
import { fetchGetUserProfile } from "../../redux/actions/GetAuthUserProfileAction";
import { fetchGetAllUserProfle } from "../../redux/actions/GetAllUserProfileAction";
import { fetchGetUserProfileById } from "../../redux/actions/GetUerProfileByIdAction";

export default function AdminHome() {
  // const [data, setData] = useState();
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.getalluserProfile?.items);
  const location = useLocation()
  const [localData , setLocalData] = useState([data])

  const columns = React.useMemo(() => localData? [
    {
      Header: "UserName",
      accessor: 'username',
    },
    {
      Header: "Email",
      accessor: 'email',
    },
    {
      Header: "Status",
      accessor: 'status',
      Cell: StatusPill
      
    },
    {
      Header: "CV",
      accessor: 'cv',
    },
    {
      Header: "Action",
      accessor: 'action',
      Cell: ActionPsill,
    },
  ]:[], [])


  useEffect(()=>{
    const obj = localStorage.getItem('userInfo')
    const object = obj && JSON.parse(obj)
    let dumData = object && object.map(x => {
      return {
        username: x.username,
        email: x.email,
        status: x.status? 'Enabled':"Disabled",
        cv: x.cv,
        action: x.id
      }
    })
    setLocalData(object?dumData : [])
  },[data, location])
  
  useEffect(() => {
    dispatch(fetchGetAllUserProfle(10, 1));
  }, [dispatch]);

  console.log(data);

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

        <div class="relative overflow-x-auto ml-4 mt-8">
          <div className=" text-2xl text-ccon  font-bold  min-w-full ">
            Total Alumni
          </div>

        </div>
        <div className="px-4 text-gray-900">
      <main className="">
        <div className="">
        </div>
        <div className="">
        {localData && <Tables columns={columns} data={localData} />}
        </div>
      </main>
    </div>
      </div>
    </>
  );
}
