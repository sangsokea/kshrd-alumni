import React, { useEffect, useState } from "react";
import { colors } from "../../commons/colors/colors";
import Search from "react-search";
import SearchBar from "../SearchBar";
import profileDetail from "../../Data.json";
import PaginationComponent from "../PaginationComponent";
import AdminPagination from "./AdminPagination";


export default function AdminManageStudentComponent() {
  const [data, setData] = useState(
    profileDetail.map((item) => {
      return {
        ...item,
        isEnable: true,
      };
    }),
  );
  const [value, setValue] = useState([]);

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((json) => setData(json));
  }, []);

  const handleChange = (event) => {
    const { value } = event.target;
    this.setState({ value });
  };

  const HiItems = (items) => {
    console.log(items);
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
      <div className="relative flex justify-center m-5 body-font font-maven">
        <SearchBar placeholder={"Search user profile..."} data={data} />
      </div>
      <div className="flex justify-center">
        <AdminPagination />
      </div>
    </>
  );
}
