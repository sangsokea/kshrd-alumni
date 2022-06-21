import React, { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDispatch } from "react-redux";
import { fetchExperience } from "../../redux/actions/localAction/ExperienceAction";
import EditorContainer from "../EditorContainer";
import { colors } from "../../commons/colors/colors";

export default function EducationComponent() {
  const [displayEducation, setDisplayEducation] = useState(false);

  const [education, setEducation] = useState([
    {
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      city: "",
      description: "",
      isShow: false,
      id: 0,
    },
  ]);

  const handleEducationChange = (index, event) => {
    console.log(event.target.value);
    let data = [...education];
    data[index][event.target.name] = event.target.value;
    setEducation(data);
  };

  const addFieldsEducation = () => {
    setDisplayEducation(true);
    if (!displayEducation) {
      console.log("Hidden true");
    } else {
      let newData = {
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        city: "",
        description: "",
        isShow: !education.isShow,
        id: education.length,
      };
      setEducation([newData, ...education]);
    }
  };

  const submit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    console.log(education);
    // dispatch(fetchExperience(experience));
  };

  const removeFieldsEducation = (index) => {
    let data = [...education];
    data.splice(index, 1);
    setEducation(data);
  };

  const onDropDwon = (id) => {
    setEducation(
      education.map((x) => (x.id == id ? { ...x, isShow: !x.isShow } : x))
    );
  };

  return (
    <>
      {/* Education */}
      <div class="mb-6">
        <label
          for="large-input"
          class="mb-2 text-md font-medium dark:text-black flex flex-row"
        >
          Education
          <span onClick={addFieldsEducation}>
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

        {/* Dynamic form for Education */}
        <div className={!displayEducation ? "hidden" : "block"}>
          {education.map((input, index) => (
            <form onSubmit={submit} class="bg-white mt-5 p-5 rounded-md">
              <div
                class="mb-5 flex flex-row"
                onClick={() => onDropDwon(input.id)}
              >
                {input.school ? input.school : "(Not Specified)"}
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
                <div key={index} class="mb-3 ">
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
                        onChange={(event) =>
                          handleEducationChange(index, event)
                        }
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
                        onChange={(event) =>
                          handleEducationChange(index, event)
                        }
                        value={input.degree}
                        type="text"
                        name="degree"
                        class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 block w-full p-2.5 dark:border-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""
                        required
                      />
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                      <div>
                        <label
                          for="start_date"
                          class="block mb-2 text-sm font-medium dark:text-black"
                        >
                          Start Date
                        </label>
                        <input
                          onChange={(event) =>
                            handleEducationChange(index, event)
                          }
                          value={input.startDate}
                          type="date"
                          name="startDate"
                          class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 block w-full p-2.5 dark:border-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="dd/mm/yy"
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="end_date"
                          class="block mb-2 text-sm font-medium dark:text-black"
                        >
                          End Date
                        </label>
                        <input
                          onChange={(event) =>
                            handleEducationChange(index, event)
                          }
                          value={input.endDate}
                          type="date"
                          name="endDate"
                          class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 block w-full p-2.5 dark:border-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="dd/mm/yy"
                          required
                        />
                      </div>
                    </div>

                    <div class="grid grid-cols-1">
                      <div>
                        <label
                          for="city"
                          class="block mb-2 text-sm font-medium dark:text-black"
                        >
                          City
                        </label>
                        <input
                          onChange={(event) =>
                            handleEducationChange(index, event)
                          }
                          value={input.city}
                          type="text"
                          name="city"
                          class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 block w-full p-2.5 dark:border-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="w-full">
                    <label
                      for="city"
                      class="block mb-2 text-sm font-medium dark:text-black"
                    >
                      Description
                    </label>
                    <div>
                      <EditorContainer onChange={(event) => handleEducationChange(index, event)}/>
                    </div>
                  </div>
                  {/* <Button onClick={() => removeFields(index)} variant="danger">
          Remove Field
        </Button> */}
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
                onClick={() => removeFieldsEducation(index)}
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
