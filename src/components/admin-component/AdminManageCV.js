import React, { useEffect, useState } from "react";

import AdminPagination from "./AdminPagination";
import SearchBarTemplate from "./SearchBarTemplate";

export default function AdminManageCV() {
  const [data, setData] = useState(
  [{
    id: 1,
    template: "CV_HRD",
    status: true,
    type: "CV"
  }, {
    id: 2,
    template: "CV_ALUMNI",
    status: true,
    type: "CV"
  },
  {
    id: 3,
    template: "PORTFOLIO_ALUMNI",
    status: true,
    type: "portfolio"
  }]
  );


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
      <div className="relative flex justify-center m-5">
        <SearchBarTemplate placeholder={"Search templates..."} data={data} />

      </div>
      <div className="flex justify-center">
        <AdminPagination />
      </div>

    </>
  );
}
