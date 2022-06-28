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
      <div class="relative container w-full shadow-md sm:rounded-lg">
        <div className="fixed top-24 bg-white">
          <div class="p-4">
            <label for="table-search" class="sr-only">
              Search
            </label>
            <div class="relative flex mt-1 w">
              <div class="flex justify-end my-auto pr-5">
                {wordEntered.length === 0 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    />
                  </svg>
                ) : (
                  <button onClick={clearInput}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
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
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-fixed mt-3">
            <tbody class="text-xs text-gray-700 uppercase bg-white dark:bg-gray-700 dark:text-gray-400 font-bold">
              <tr>
                <td scope="col" class="px-6 py-3">
                  First Name
                </td>
                <td scope="col" class="px-6 py-3">
                  Last Name
                </td>
                <td scope="col" class="px-5 py-3">
                  Gender
                </td>
                <td scope="col" class="px-15 py-3">
                  Email
                </td>
                <td scope="col" class="px-5 py-3 text-center">
                  Generation
                </td>
                <td scope="col" class="px-6 py-3">
                  Skill
                </td>

                <td scope="col" class="px-6 py-3">
                  Action
                </td>
                <td scope="col" class="px-6 py-3">
                  <span class="sr-only">Edit</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="overflow-auto">
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
