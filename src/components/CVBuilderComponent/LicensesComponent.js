import { listIcons } from "@iconify/react";
import React, { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDispatch } from "react-redux";
import { fetchExperience } from "../../redux/actions/localAction/ExperienceAction";
import { colors } from "../../commons/colors/colors";

export default function LicensesComponent() {
  const [displayLicenses, setDisplayLicenses] = useState(false);

  const [licenses, setLicenses] = useState([
    {
      school: "",
      degree: "",
      isShow: false,
      id: 0,
    },
  ]);

  const handleLicensesChange = (index, event) => {
    console.log(event.target.value);
    let data = [...licenses];
    data[index][event.target.name] = event.target.value;
    setLicenses(data);
  };

  const addFieldsLicensesAndCertifications = () => {
    setDisplayLicenses(true);
    if (!displayLicenses) {
      console.log("Hidden true");
    } else {
      let newData = {
        school: "",
        degree: "",
        isShow: !licenses.isShow,
        id: licenses.length,
      };
      setLicenses([newData, ...licenses]);
    }
  };

  const submit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    console.log(licenses);
    // dispatch(fetchExperience(experience));
  };

  const removeFieldsLicensesAndCertifications = (index) => {
    let data = [...licenses];
    data.splice(index, 1);
    setLicenses(data);
  };

  const onDropDwon = (id) => {
    setLicenses(
      licenses.map((x) => (x.id == id ? { ...x, isShow: !x.isShow } : x))
    );
  };

  return (
    <>
      {/* Licenses and Certifications */}
      <div class="mb-6">
        <label
          for="large-input"
          class="mb-2 text-md font-medium dark:text-black flex flex-row"
        >
          Licenses & cerifications
          <span onClick={addFieldsLicensesAndCertifications}>
            <svg
              class="h-auto w-6 text-black ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
        </label>

        {/* Dynamic form for Licenses and Certifications */}
        <div className={!displayLicenses ? "hidden" : "block"}>
          {licenses.map((input, index) => (
            <form onSubmit={submit} class="bg-white mt-5 p-5 rounded-md">
              {/* Image and Upload Certificate Button */}
              <div onClick={() => onDropDwon(input.id)}>
                <div class="mb-5 flex flex-row">
                  {input.school
                    ? "License or Certificate at " + input.school
                    : "(Not Specified)"}
                  <span class="ml-auto">
                    {!input.isShow ? (
                      <svg
                        class="h-auto w-6 text-gray-500"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <polyline points="6 15 12 9 18 15" />
                      </svg>
                    ) : (
                      <svg
                        class="h-auto w-6 text-gray-500"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    )}
                  </span>
                </div>
              </div>

              <div className={input.isShow ? "hidden" : "block"}>
                <div key={index} class="mb-3 text-center">
                  <img
                    class="m-auto"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAASFBMVEX///+hoaGenp729vb8/PyamprGxsbNzc3j4+P5+fnz8/Orq6ukpKS1tbW/v7/S0tLq6uqysrLb29vCwsLl5eW6urqVlZXQ0NC4CpzYAAACo0lEQVR4nO3b4XKCMBBGUYxEBEGo1fr+b1oQlQAhUpOOs5l7/pbJNF912Sw0SQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgetuw0k/v5w0XHZZqPr2jP9uqTVhq9+kt/dk2cARCM1B5GkqSKaEZBCxjZEAGHTKQn0GRVdXx7Lec8Axq1dFV7rOc7Axqfb+/f/ksJzqDoVdStcdyojOoh5754LGc6Ay+jXPD9v3lRGdwJIP2lx++Cx79gugMmmcGLzZRFK6fis7gWRBU6fwqHDebo6ODkJ1BctHqFoFzDtSVDVcHITyD5FSV5WHnbBP7RsqxTekZJEn+YiLaPErGfukK+Rm8kB4ehbNcKozRZzD0EIslIfYMTkYbpTL7NZFnUIzGx9o+aIg7g6EY3EuCtY2IO4Pd5GGMutiuijqD/ex5lHXOEHMGxTSBLgRLSYgog3Q/6Zi/bI8ly3lPGU8GxUGp0Ww1sz6ZVcfZctFkkHe3AGWMEc4LD6f1abpcNBlcbltW389rSnsE7TXTQ2YsGTzGq+rxV74svqOgpjOnSDIwJkr9yejqeE1j+LD04sjA6Af7k1HjfFNFjUtCHBmYQ/ZuP/nBFUFrdIyOIoOTNven945icM9p9Egmhgym/WBp7wxGIZibjiCDdNYPrnhtzZysRZDB9HC4jnGMlp/B/HC4ijFZE5/B2+8qDpM18RlUb7+z+jxGS8/g9S1g2aMkCM9g6XC47oNwn6zJziBfPByuC6GfrMnO4P1icA/hdowWnUHtGUHbM3eDJ8kZuA+H60LoJmuCM8g3Wnn7qUVnUOxDOAvOIOByUjPYZMFcK6kZ+JeCgcT/Z0qDJtDSPq87f0izC+v66Q0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwL/7BXcAHqZ+rh8wAAAAAElFTkSuQmCC"
                  ></img>
                  <div class="flex justify-center">
                    <div class="mb-3 w-80">

                    <input class="px-4 py-2 block w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-black cursor-pointer dark:text-gray-400 focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 dark:placeholder-gray-400" id="file_input" type="file"/>
                    </div>
                  </div>
                  {/* <div>
                    <button
                      for="file-upload"
                      class="border border-blue-600 shadow-md px-10 py-2 rounded-md text-blue-500"
                    >
                      Upload Certificate
                      <input id="file-upload" type="file" class="opacity-0" />
                    </button>
                   
                  </div> */}
                </div>
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <label
                      for="school"
                      class="block mb-2 text-sm font-medium dark:text-black"
                    >
                      School
                    </label>
                    <input
                      class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 block w-full p-2.5 dark:border-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      name="school"
                      placeholder="RUPP"
                      value={input.school}
                      onChange={(event) => handleLicensesChange(index, event)}
                    ></input>
                  </div>
                  <div>
                    <label
                      for="degree"
                      class="block mb-2 text-sm font-medium dark:text-black"
                    >
                      Degree
                    </label>
                    <input
                      onChange={(event) => handleLicensesChange(index, event)}
                      value={input.degree}
                      type="text"
                      name="degree"
                      class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 block w-full p-2.5 dark:border-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required
                    />
                  </div>
                </div>

                {/* <div class="text-center">
                  <button
                    class="text-white px-10 py-3 rounded-md"
                    style={styles}
                  >
                    Save Image
                  </button>
                </div> */}
              </div>

              <button
                onClick={submit}
                style={styles}
                class="mr-5 text-white rounded-md px-5 py-2"
              >
                Submit
              </button>

              <button
                onClick={() => removeFieldsLicensesAndCertifications(index)}
                class="bg-red-600 text-white rounded-md px-5 py-2"
              >
                Remove
              </button>
            </form>
          ))}
        </div>
      </div>
    </>
  );
}

const styles = {
  backgroundColor: colors.content,
  // logoSize: myStyles.logoSize
};
