import React, { Fragment, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as Add } from "../../commons/icon/add.svg";
import { ReactComponent as Removed } from "../../commons/icon/removed.svg";
import { ReactComponent as Remove } from "../../commons/icon/remove.svg";
import { Transition, Popover } from "@headlessui/react";
import { fetchGetUserProfileById } from "../../redux/actions/GetUerProfileByIdAction";
import { useDispatch, useSelector } from "react-redux";
import alumni4 from "../../commons/images/Alumni/alumni4.webp";
import Tables, { ActionPsill, StatusPill } from './ViewStudentTable'  
import { Pagination } from "@mui/material";

export default function ViewStudentProfile() {
  const dispatch = useDispatch();
  const pdfExportComponent = useRef(null);
  const location = useLocation()
  const [studentCv, setStudentCv] = useState([]);
  const image = useRef(null);
  const data = useSelector((state) => state?.getUserProfileById?.items);
  const [localData, setLocalData] = useState([data]);
  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
    // savePDF(image.current, { imageResolution: 36 });
  };
  const [del, setDel] = useState();
  const [resumes, setResumes] = useState([]);
  const [currentIndex, setcurrentIndex] = useState(0);
  const [currentStudent, setCurrentStudent] = useState({});
  const columns = React.useMemo(() => localData? [
    {
      Header: "Curriculum Vitae",
      accessor: 'cvTitle',
    },
    {
      Header: "Create Date",
      accessor: 'createdAt',
    },

    {
      Header: "Action",
      accessor: 'action',
      Cell: ActionPsill,
    },
  ]:[], [])

  React.useEffect(() => {
    const obj = localStorage.getItem("studentProfile");
    if (obj) {
      let student = JSON.parse(obj);
      let dumData = student && student.map((x, i) => {
        return {
          cvTitle: x.profileDetails?.cvTitle ??
          "Curriculum Vitae" + (i + 1),
          createdAt: x.createdAt 
          // moment(x.createdAt).format("MMM Do YY")
        }
        console.log(x.profileDetails?.cvTitle);
      })
      setLocalData(student?dumData : [])
      setStudentCv(student);
      setCurrentStudent(student[0]);
    }
  }, []);

  const handleChange = (event, value) => {
    let obj = studentCv[value - 1];
    obj && setCurrentStudent(obj);
  };

  const navigate = useNavigate();

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
            src={
              currentStudent?.profileDetails?.personalDetails?.profile
                ? currentStudent?.profileDetails?.personalDetails?.profile
                : alumni4
            }
            alt="Bordered avatar"
          />
        </div>
        <div className="mt-19 ml-11  font-maven grid grid-cols-6 font-bold text-ch text-xl">
          <div className="col-span-5">
            <p className="mb-3">Name : {currentStudent?.username}</p>
            <div class="flex items-center">
              <div class="">
                <label
                  class="block text-gray-500 font-bold tablet:text-right  pr-4"
                  for="inline-full-name"
                >
                  ID : {currentStudent?.authUserId}
                </label>
              </div>
              {/* {data?.id?.map((item, key) => (
                <div class="" key={key}>
                  <input
                    class="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 mt-2 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="inline-full-name"
                    type="text"
                    placeholder={item?.authUserId}
                  />
                </div>
              ))} */}
            </div>
          </div>

          <div className="flex items-center justify-end flex-col">
          </div>
        </div>
        <br></br>
        <hr></hr>
        <div className=" text-gray-900">
      <main className="px-4 w-full container mx-auto">
        <div className="">
        </div>
        <div className="mt-20">
        {localData && <Tables columns={columns} data={localData} />}
        </div>
      </main>
    </div>

      </div>
    </div>
  );
}
