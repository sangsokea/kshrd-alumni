import React, { useState } from "react";
import "../commons/styles/SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { createRoot } from "react-dom/client";
import Highlighter from "react-highlight-words";
import AdminHome from "./admin-component/AdminHome";
import PaginationComponent from "./PaginationComponent";
import TableComponent from "./TableComponent";
import Modal from "./Modal";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [items, setItems] = useState(data);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    // const newFilter = data.filter((value) => {
    //   return value.first_name.toLowerCase().includes(searchWord.toLowerCase());
    // });

    // const newFilter = wordEntered.every((data) =>
    //   [
    //     "first_name",
    //     "last_name",
    //     "email",
    //     "gender",
    //     "generation",
    //     "city",
    //     "phone",
    //     "country",
    //     "profile",
    //     "dob",
    //     "jobHistory",
    //     "education",
    //     "skill",
    //   ].some(
    //     (attribute) => data.Attributes[attribute].indexOf(wordEntered) !== -1,
    //   ),
    // );

    const newFilter = data.filter((item) =>
      Object.keys(item).some((key) =>
        String(item[key]).toLowerCase().includes(wordEntered.toLowerCase()),
      ),
    );

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  console.log(filteredData);

  const onChangeStatus = (isEnalbe, id) => {
    setItems(
      items.map((x) => (x.id === id ? { ...x, isEnalbe: !isEnalbe } : x)),
    );
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <>
      <div class="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
        <div class="p-4">
          <label for="table-search" class="sr-only">
            Search
          </label>
          <div class="relative flex mt-1 w">
            <div class="flex justify-end my-auto pr-5">
              {wordEntered.length === 0 ? (
                <svg
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              ) : (
                <button onClick={clearInput}>
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              )}
            </div>
            <input
              placeholder={placeholder}
              value={wordEntered}
              onChange={handleFilter}
              type="text"
              id="table-search"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
        <div className="overflow-x">
          <TableComponent
            data={filteredData}
            baseData={items}
            wordEntered={wordEntered}
            onClick={onChangeStatus}
          />
        </div>
      </div>
    </>
  );
}

export default SearchBar;
