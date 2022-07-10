import React, { useEffect, useState } from "react";

import AdminPagination from "./AdminPagination";
import SearchBarTemplate from "./SearchBarTemplate";
import CV_HRD from "../../commons/images/cvhrd.png";
import CV_ALUMNI from "../../commons/images/cvAlumni.png";
import PORTFOLIO_ALUMNI from "../../commons/images/portfolio.png";

export default function AdminManageCV() {
  const [data, setData] = useState([
    {
      id: 1,
      template: "CV HRD",
      status: true,
      type: "CV",
      image: CV_HRD
    },
    {
      id: 2,
      template: "CV ALUMNI",
      status: true,
      type: "CV",
      image: CV_ALUMNI
    },
    {
      id: 3,
      template: "PORTFOLIO ALUMNI",
      status: true,
      type: "portfolio",
      image: PORTFOLIO_ALUMNI
    },
  ]);

  const [showModal, setShowModal] = React.useState(false);
  const onChangeModel = (value) => {
    setShowModal(value);
  };

  const getItemsAsync = (searchValue, cb) => {
    let url = `https://api.github.com/search/repositories?q=${searchValue}&language=javascript`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((results) => {
        if (results.items != undefined) {
          let items = results.items.map((res, i) => {
            return { id: i, value: res.full_name };
          });
          setData(items);
          cb(searchValue);
        }
      });
  };

  return (
    <>
      <div className="relative container mx-auto shadow-[0_4px_100px_10px_rgba(0,0,0,0.1)] m-5 body-font  font-maven">
        <SearchBarTemplate placeholder={"Search templates..."} data={data} />
      </div>
      <div className="flex justify-center">
        <AdminPagination />
      </div>
    </>
  );
}
