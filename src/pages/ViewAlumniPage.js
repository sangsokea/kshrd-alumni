import React, { useState } from "react";
import view_alumni from "../commons/images/Cover-dashboard.jpg";
import PaginationComponent from "../components/PaginationComponent";
import { setNumberOfLines } from "../commons/colors/colors";
import { colors } from "../commons/colors/colors";
import "../commons/styles/text.css";
import alumni1 from "../commons/images/Alumni/alumni1.jpg";
import alumni2 from "../commons/images/Alumni/alumni2.jpg";
import alumni3 from "../commons/images/Alumni/alumni3.jpg";
import alumni4 from "../commons/images/Alumni/alumni4.webp";
import alumni5 from "../commons/images/Alumni/alumni5.jpg";
import { useNavigate } from "react-router-dom";
import { api } from "../api";
import axios from "axios";
import { Pagination } from "@mui/material";
// import alumni6 from "../commons/images/Alumni/alumni6.jpg";

export default function ViewAlumniPage() {
  const [dropdown, setDropdown] = useState(false);
  const [username, setUsername] = useState();
  const [elasticData, setElasticData] = useState([]);
  const [totalHits, setTotalHits] = useState(0);
  const [from, setFrom] = useState(0);
  const [size, setSize] = useState(10);

  const navigate = useNavigate();

  const onClickDropdown = () => {
    setDropdown(!dropdown);
  };

  const onSearch = (searchKey) => {
    console.log(searchKey);
    var config = {
      method: "get",
      url: `http://18.142.237.124:9200/person/_search?pretty=true&q=*${searchKey}*&from=${from}&size=${size}`,
      headers: {
        Authorization: "Basic ZWxhc3RpYzpLZHB2eFM5aVRaUzJkb0prQ0JYbw==",
      },
    };

    axios(config)
      .then(({ data }) => {
        console.log(data?.hits?.total?.value);
        setTotalHits(data?.hits?.total?.value);
        setElasticData(data?.hits?.hits);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleView = (item) => {
    localStorage.setItem("view", JSON.stringify(item));
    navigate("/sidebar/aboutMe", {
      state: {
        fromViewAlumni: true,
      },
    });
  };

  React.useEffect(() => {
    let username = localStorage.getItem("username");
    setUsername(username);
    var config = {
      method: "get",
      url: `http://18.142.237.124:9200/person/_search?pretty=true&q=*:*&from=${from}&size=${size}`,
      headers: {
        Authorization: "Basic ZWxhc3RpYzpLZHB2eFM5aVRaUzJkb0prQ0JYbw==",
      },
    };

    axios(config)
      .then(({ data }) => {
        console.log(data?.hits?.total?.value);
        setTotalHits(data?.hits?.total?.value);
        setElasticData(data?.hits?.hits);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [size]);

  const handleChange = (event, value) => {
    setSize(value);
  };

  console.log(size)
  console.log(totalHits)
  return (
    <div className="desktop:container h-full desktop:mx-auto mt-5 rounded-md shadow-lg body-font font-maven">
      <div className="grid grid-cols-4">
        {/* <div className="laptop:block laptop:col-span-1">
          <div className="flex flex-col w-auto h-screen px-4 py-8 overflow-y-auto border-r ">
            <div className="mb-5 shrink-0 flex flex-row ">
              <img src={alumni4} className="w-10 rounded-full" alt="Avatar" />
              <p className="ml-5 mt-2 text-sm laptop:text-md desktop:text-lg">
                {username ?? ""}
              </p>
            </div>
            <hr className="mb-5"></hr>
            <p className="mt-8 mb-5 text-2xl font-bold">Search</p>

           
          </div>
        </div> */}
      </div>
      <div className="col-span-3 laptop:col-span-2 desktop:col-span-3 rounded-br-md desktop:block bg-slate-200 text-sm laptop:text-md desktop:text-lg">
        <img src={view_alumni} alt="view alumni logo"></img>
        <div className="p-5">
        <div>
          <h4 className="p-1 text-blue-900 font-light">➡️ Set number of cards to display :</h4>
        <Pagination defaultPage={10} value={size} count={20} onChange={handleChange} variant="outlined" color="primary" />
        </div>
          <div className="mt-5 mb-3 text-2xl font-bold">Results ({totalHits})</div>
          <form>
            <div className="relative mb-5 focus:border-none desktop::w-1/3 laptop:w-1/3 tablet:w-1/2 w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                onChange={(e) => onSearch(e.target.value)}
                type="search"
                id="default-search"
                className="block w-full p-2 pl-10 text-lg border border-black rounded-lg focus:ring-blue-600 focus:ring-2 dark:bg-gray-50 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none "
                placeholder="Search students..."
                required
              />
            </div>
          </form>
          {/* card */}
          <div className="grid gap-2 grid-cols-1 desktop:grid-cols-2 desktop:gap-2 laptop:grid-cols-2 laptop:gap-2 tablet:grid-cols-2 tablet:gap-2 ">
            {elasticData?.slice(0, size).map(({ _source: { object: item } }, index) => (
              <div className="w-full">
                <div className="desktop:flex-row p-0 flex items-center laptop:p-2 laptop:pl-5 border rounded-lg bg-gray-50 tablet:flex-row hover:bg-gray-100 hover:rounded-lg hover:shadow-md">
                  <div className="tablet:h-32 h-24 w-36">
                    <img
                      className=" desktop:h-32 tablet:h-32 desktop:w-36 laptop:w-36 laptop:32 h-24 w-24 rounded"
                      src={item?.personalDetails?.profile ?? alumni4}
                      alt="alumni"
                    />
                  </div>
                  <div className="flex flex-col justify-between mt-5 ml-5 leading-normal w-full">
                    <h6 className="mb-2 text-md laptop:text-lg desktop:text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                      {item?.personalDetails?.firstName}{" "}
                      {item?.personalDetails?.lastName}
                    </h6>
                    <p className="text-sm laptop:text-md desktop:text-lg mb-7 font-normal text-black textLine w-52">
                      {item?.personalDetails?.summary
                        ? item?.personalDetails?.summary
                        : "No Summary"}
                    </p>
                  </div>
                  <button
                    onClick={() => handleView(item)}
                    style={{ backgroundColor: colors.footer, color: "white" }}
                    className="ml-[-70px] mb-1 mt-auto rounded pl-5 pr-5 laptop:ml-auto"
                  >
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
