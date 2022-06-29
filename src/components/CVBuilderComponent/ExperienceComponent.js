import React, { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDispatch } from "react-redux";
import { fetchExperience } from "../../redux/actions/localAction/ExperienceAction";
import EditorContainer from "../EditorContainer";
import { colors } from "../../commons/colors/colors";

export default function ExperienceComponent() {
  const [displayExperience, setDisplayExperience] = useState(false);

  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    console.log(experience);
    dispatch(fetchExperience(experience));
  };

  const onDropDwon = (id) => {
    setExperience(
      experience.map((x) => (x.id == id ? { ...x, isShow: !x.isShow } : x))
    );
  };

  const [experience, setExperience] = useState([
    {
      jobTitle: "",
      employee: "",
      startDate: "",
      endDate: "",
      city: "",
      description: "",
      isShow: false,
      id: 0,
    },
  ]);

  const handleExperienceChange = (index, event) => {
    console.log(event.target.value);
    let data = [...experience];
    data[index][event.target.name] = event.target.value;
    setExperience(data);
  };

  const addFieldsExperience = () => {
    setDisplayExperience(true);
    if (!displayExperience) {
      console.log("Hidden true");
    } else {
      let newData = {
        jobTitle: "",
        employee: "",
        startDate: "",
        endDate: "",
        city: "",
        description: "",
        isShow: !experience.isShow,
        id: experience.length,
      };
      setExperience([newData, ...experience]);
    }
  };

  const removeFieldsExperience = (index) => {
    let data = [...experience];
    data.splice(index, 1);
    setExperience(data);
  };

  return (
    <>
      {" "}
      {/* Experience */}
      <div className="mb-6">
        <label
          for="large-input"
          className="flex text-sm laptop:text-md desktop:text-lg flex-row mb-2 font-medium text-md dark:text-black items-center"
        >
          Experience
          <span onClick={addFieldsExperience}>
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

        {/*  Dynamic form for experience */}
        <div className={!displayExperience ? "hidden" : "block"}>
          {experience.map((input, index) => (
            <form onSubmit={submit} className="p-5 mt-5 bg-white rounded-md text-sm laptop:text-md desktop:text-lg">
              <div
                className="flex flex-row mb-5"
                onClick={() => onDropDwon(input.id)}
              >
                {input.jobTitle ? input.jobTitle : "(Not Specified)"}
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
                <div key={index} className="mb-3 ">
                  <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                      <label
                        for="jobTitle"
                        className="block mb-2 text-sm font-medium dark:text-black"
                      >
                        Job Title
                      </label>
                      <input
                        className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 block w-full p-2.5 dark:border-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        name="jobTitle"
                        placeholder="enter your dreamed job"
                        value={input.jobTitle}
                        onChange={(event) =>
                          handleExperienceChange(index, event)
                        }
                      ></input>
                    </div>
                    <div>
                      <label
                        for="employee"
                        className="block mb-2 text-sm font-medium dark:text-black"
                      >
                        Employee
                      </label>
                      <input
                        onChange={(event) =>
                          handleExperienceChange(index, event)
                        }
                        value={input.employee}
                        type="text"
                        name="employee"
                        className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 block w-full p-2.5 dark:border-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="employee name"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label
                          for="start_date"
                          className="block mb-2 text-sm font-medium dark:text-black"
                        >
                          Start Date
                        </label>
                        <input
                          onChange={(event) =>
                            handleExperienceChange(index, event)
                          }
                          value={input.startDate}
                          type="date"
                          name="startDate"
                          className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 block w-full p-2.5 dark:border-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="dd/mm/yy"
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="end_date"
                          className="block mb-2 text-sm font-medium dark:text-black"
                        >
                          End Date
                        </label>
                        <input
                          onChange={(event) =>
                            handleExperienceChange(index, event)
                          }
                          value={input.endDate}
                          type="date"
                          name="endDate"
                          className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 block w-full p-2.5 dark:border-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="dd/mm/yy"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1">
                      <div>
                        <label
                          for="city"
                          className="block mb-2 text-sm font-medium dark:text-black"
                        >
                          City
                        </label>
                        <input
                          onChange={(event) =>
                            handleExperienceChange(index, event)
                          }
                          value={input.city}
                          type="text"
                          name="city"
                          className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 block w-full p-2.5 dark:border-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <label
                      for="city"
                      className="block mb-2 text-sm font-medium dark:text-black"
                    >
                      Description
                    </label>
                    <div>
                      <EditorContainer
                        onChange={(event) =>
                          handleExperienceChange(index, event)
                        }
                        name="description"
                        value={input.description}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={submit}
                style={styles}
                className="px-5 py-2 mr-5 text-white rounded-md"
              >
                Submit
              </button>

              <button
                onClick={() => removeFieldsExperience(index)}
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
