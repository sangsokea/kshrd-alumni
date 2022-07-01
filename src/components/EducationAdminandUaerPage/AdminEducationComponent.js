import React, { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDispatch } from "react-redux";
import { fetchExperience } from "../../redux/actions/localAction/ExperienceAction";
import EditorContainer from "../EditorContainer";
import { colors } from "../../commons/colors/colors";

export default function AdminEducationComponent() {
  const [displayEducation, setDisplayEducation] = useState(false);

  const [education, setEducation] = useState([
    {
      school: "",
      study: "",
      startDate: "",
      endDate: "",
      city: "",
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
        study: "",
        startDate: "",
        endDate: "",
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
      <div className="mb-6 body-font font-maven">
        {/* Dynamic form for Education */}
        <div>
          {education.map((input, index) => (
            <form
              onSubmit={submit}
              className=" bg-white rounded-md flex items-center"
            >
              <div
                class="collapse collapse-arrow w-full border border-base-300 mt-5 bg-base-100 rounded-box"
                onClick={() => onDropDwon(input.id)}
              >
                <input type="checkbox" />
                <div class="collapse-title  text-xl font-medium">Education</div>
                <div class="collapse-content">
                  <div className="mt-3">
                    <div className="">
                      <div className="mb-5">
                        <input
                          class=" block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 mt-2 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          id="password"
                          type="text"
                          name="school"
                          value={input.school}
                          onChange={(event) =>
                            handleEducationChange(index, event)
                          }
                          placeholder="School Name"
                        />
                        <input
                          class=" block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 mt-2 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          id="password"
                          type="text"
                          name="study"
                          value={input.study}
                          onChange={(event) =>
                            handleEducationChange(index, event)
                          }
                          placeholder="Field of study"
                        />
                        <div className="">
                          <select
                            id="countries"
                            class="inline-flex justify-between content-center mt-5  laptop:w-1/3 w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1  bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          >
                            <option selected>Start year</option>
                            <option value="US">2019</option>
                            <option value="CA">2020</option>
                            <option value="FR">2021</option>
                            <option value="DE">2022</option>
                          </select>
                          <select
                            id="countries"
                            class="inline-flex justify-between content-center mt-5 laptop:ml-3 laptop:w-1/3 w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1  bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          >
                            <option selected>End year</option>
                            <option value="US">2019</option>
                            <option value="CA">2020</option>
                            <option value="FR">2021</option>
                            <option value="DE">2022</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 ml-5">
                <button onClick={() => removeFieldsEducation(index)}>
                  <svg
                    width="26"
                    height="29"
                    viewBox="0 0 26 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.33464 9.66675H21.668V25.3751C21.668 25.6955 21.5538 26.0029 21.3507 26.2295C21.1475 26.4561 20.872 26.5834 20.5846 26.5834H5.41797C5.13065 26.5834 4.8551 26.4561 4.65194 26.2295C4.44877 26.0029 4.33464 25.6955 4.33464 25.3751V9.66675ZM6.5013 12.0834V24.1667H19.5013V12.0834H6.5013ZM9.7513 14.5001H11.918V21.7501H9.7513V14.5001ZM14.0846 14.5001H16.2513V21.7501H14.0846V14.5001ZM7.58463 6.04175V3.62508C7.58463 3.30461 7.69877 2.99727 7.90194 2.77066C8.1051 2.54405 8.38065 2.41675 8.66797 2.41675H17.3346C17.622 2.41675 17.8975 2.54405 18.1007 2.77066C18.3038 2.99727 18.418 3.30461 18.418 3.62508V6.04175H23.8346V8.45841H2.16797V6.04175H7.58463ZM9.7513 4.83341V6.04175H16.2513V4.83341H9.7513Z"
                      fill="#255FAB"
                    />
                  </svg>
                </button>
              </div>
            </form>
          ))}
        </div>
        <button
          className="flex items-center mt-4 font-medium text-md text-blue-900"
          onClick={addFieldsEducation}
        >
          Add Education
          <span>
            <svg
              className="w-5  ml-2 text-blue-900"
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
        </button>
      </div>
    </>
  );
}

const styles = {
  backgroundColor: colors.content,
  // logoSize: myStyles.logoSize
};
