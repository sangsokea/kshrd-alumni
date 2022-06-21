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
      <div className="mb-6">
        <label
          for="large-input"
          className="flex flex-row mb-2 font-medium text-md dark:text-black"
        >
          Education
          <span onClick={addFieldsEducation}>
            <svg
              className="w-6 h-auto ml-2 text-black"
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
            <form onSubmit={submit} className="p-5 mt-5 bg-white rounded-md">
              <div
                className="flex flex-row mb-5"
                onClick={() => onDropDwon(input.id)}
              >
                {input.school ? input.school : "(Not Specified)"}
                <span className="ml-auto">
                  {!input.isShow ? (
                    <svg
                      className="w-6 h-auto text-gray-500"
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
                      className="w-6 h-auto text-gray-500"
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
                        for="school"
                        className="block mb-2 text-sm font-medium dark:text-black"
                      >
                        School
                      </label>
                      <input
                        className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 block w-full p-2.5 dark:border-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                        className="block mb-2 text-sm font-medium dark:text-black"
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
                        className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 block w-full p-2.5 dark:border-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""
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
                            handleEducationChange(index, event)
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
                            handleEducationChange(index, event)
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
                            handleEducationChange(index, event)
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
                className="px-5 py-2 mr-5 text-white rounded-md"
              >
                Submit
              </button>

              <button
                onClick={() => removeFieldsEducation(index)}
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
