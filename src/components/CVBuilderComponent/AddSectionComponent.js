import React, { useState, useEffect } from "react";
import { colors } from "../../commons/colors/colors";
import { fetchAddSection } from "../../redux/actions/localAction/AddSectionAction";
import { useDispatch } from "react-redux";

export default function AddSectionComponent() {
  const [displaySection, setDisplaySection] = useState(false);
  const dispatch = useDispatch();

  const [section, setSection] = useState([
    {
      customSection: "",
      isShow: false,
      id: 0,
    },
  ]);

  const handleSectionChange = (index, event) => {
    console.log(event.target.value);
    let data = [...section];
    data[index][event.target.name] = event.target.value;
    setSection(data);
  };

  const addFieldsSection = () => {
    setDisplaySection(true);
    if (!displaySection) {
      console.log("Hidden true");
    } else {
      let newData = {
        customSection: "",
        isShow: !section.isShow,
        id: section.length,
      };
      setSection([newData, ...section]);
    }
  };

  const removeFieldsSection = (index) => {
    let data = [...section];
    data.splice(index, 1);
    setSection(data);
  };

  const onDropDown = (id) => {
    setSection(
      section.map((x) => (x.id == id ? { ...x, isShow: !x.isShow } : x))
    );
  };

  const submit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    console.log(section);
    // dispatch(fetchExperience(experience));
  };

  useEffect(()=> {
    section? dispatch(fetchAddSection(section)): alert("empty field")
  },[displaySection, section])

  return (
    <>
      {/* Add Section */}
      <div className="mb-6">
        <label
          for="large-input"
          className="flex flex-row mb-2 font-medium text-sm laptop:text-md desktop:text-lg dark:text-black items-center"
        >
          Add Section
          <span onClick={addFieldsSection}>
            <svg
              className="w-4 latpop:w-6 h-auto ml-2 text-black"
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
        <div className={!displaySection ? "hidden" : "block"}>
          {section.map((input, index) => (
            <form onSubmit={submit} className="p-5 mt-5 bg-white rounded-md text-sm laptop:text-md desktop:text-lg">
              <div
                className="flex flex-row mb-5"
                onClick={() => onDropDown(input.id)}
              >
                {input.customSection ? input.customSection : "(Not Specified)"}
                <span className="ml-auto">
                  {!input.isShow ? (
                    <svg
                      className="w-4 laptop:w-6 h-auto text-gray-500"
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
                      className="w-4 laptop:w-6 h-auto text-gray-500"
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

              <div className={input.isShow ? "hidden" : "block"}>
                <div key={index} className="mb-5">
                  <div>
                    <label
                      for="customSection"
                      className="block mb-2 text-sm font-medium dark:text-black"
                    >
                      Please input your title
                    </label>
                    <textarea
                      className="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      name="customSection"
                      placeholder="Spring Framework"
                      value={input.customSection}
                      onChange={(event) => handleSectionChange(index, event)}
                    />
                  </div>
                </div>
              </div>

              {/* <button
                onClick={submit}
                style={styles}
                className="px-5 py-2 mr-5 text-white rounded-md"
              >
                Submit
              </button> */}

              <button
                onClick={() => removeFieldsSection(index)}
                className="px-5 py-2 text-white bg-red-600 rounded-md"
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