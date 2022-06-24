import React, { useEffect, useState } from "react";
import { colors } from "../../commons/colors/colors";
import Search from "react-search";
import SearchBar from "../SearchBar";
import profileDetail from '../../Data.json'

export default function AdminManageStudentComponent() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json));
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
      <div class="flex justify-center w-1200 h-100 m-5">
        <SearchBar placeholder={"Search user profile..."} data={profileDetail}/>
        {/* <form class="m-1 flex-1">
          <div class="mb-6 w-100">
            <input
              type="name"
              id="name"
              class="shadow-sm bg-gray-50 border border-blue-900 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-900 dark:shadow-sm-light"
              placeholder="Filter by name"
              required
              onChange={handleChange}
            ></input>
          </div>
        </form> */}
        {/* <form class="m-1 flex-1">
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
        </form> */}
      </div>

      {/* <div class="shadow-sm bg-gray-50 border border-blue-900 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-900 dark:shadow-sm-light">
        <input type="text" value={value} onChange={handleChange} />
        <Search
          items={data}
          multiple={true}
          getItemsAsync={getItemsAsync}
          onItemsChanged={HiItems}
        />
      </div> */}
    </>
  );
}
