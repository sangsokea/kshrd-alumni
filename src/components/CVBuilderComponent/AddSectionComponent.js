import React, { useState } from "react";
import { colors } from "../../commons/colors/colors";

export default function AddSectionComponent() {
  const [displaySection, setDisplaySection] = useState(false);

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

  const onDropDwon = (id) => {
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

  return (
    <>
      {/* Add Section */}
      <div class="mb-6">
        <label
          for="large-input"
          class="mb-2 text-md font-medium dark:text-black flex flex-row"
        >
          Add Section
          <span onClick={addFieldsSection}>
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
        <div className={!displaySection ? "hidden" : "block"}>
          {section.map((input, index) => (
            <form onSubmit={submit} class="bg-white mt-5 p-5 rounded-md">
              <div
                class="mb-5 flex flex-row"
                onClick={() => onDropDwon(input.id)}
              >
                {input.customSection ? input.customSection : "(Not Specified)"}
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

              <div className={input.isShow ? "hidden" : "block"}>
                <div key={index} class="mb-5">
                  <div>
                    <label
                      for="customSection"
                      class="block mb-2 text-sm font-medium dark:text-black"
                    >
                      Please input your title
                    </label>
                    <textarea
                      class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 block w-full p-2.5 dark:border-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      name="customSection"
                      placeholder="Spring Framework"
                      value={input.customSection}
                      onChange={(event) => handleSectionChange(index, event)}
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={submit}
                style={styles}
                class="mr-5 text-white rounded-md px-5 py-2"
              >
                Submit
              </button>

              <button
                onClick={() => removeFieldsSection(index)}
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