import React, { useState } from "react";
import "../commons/styles/SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

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

    const newFilter = data.map((item, i) => {
      Object.keys(item).some((key) => {
        if (
          String(item[key])
            .toLocaleLowerCase()
            .includes(wordEntered.toLocaleLowerCase())
        ) {
          setFilteredData([item]);
        }
      });
    });

    if (searchWord === "") {
      setFilteredData([]);
    }
  };

  console.log(filteredData);

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div >
      <div class="shadow-sm bg-gray-50 border border-blue-900 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-900 dark:shadow-sm-light"
              >
        <input
        
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a
                key={key}
                className="dataItem"
                // href={value.link}
                target="_blank"
              >
                <p>
                  Username: {value?.first_name} {value?.last_name}{" "}
                </p>
                <p>City {value?.city} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
