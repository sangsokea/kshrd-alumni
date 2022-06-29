import { listIcons } from "@iconify/react";
import React, { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDispatch } from "react-redux";
import { fetchExperience } from "../../redux/actions/localAction/ExperienceAction";
import { colors } from "../../commons/colors/colors";

export default function SkillsComponent() {
  const [displaySkill, setDisplaySkill] = useState(false);

  const [skill, setSkill] = useState([
    {
      skill: "",
      levelExpert: "",
      isShow: false,
      id: 0,
    },
  ]);

  const handleSkillsChange = (index, event) => {
    console.log(event.target.value);
    let data = [...skill];
    data[index][event.target.name] = event.target.value;
    setSkill(data);
  };

  const addFieldsSkill = () => {
    setDisplaySkill(true);
    if (!displaySkill) {
      console.log("Hidden true");
    } else {
      let newData = {
        skill: "",
        levelExpert: "",
        isShow: !skill.isShow,
        id: skill.length,
      };
      setSkill([newData, ...skill]);
    }
  };

  const onDropDown = (id) => {
    setSkill(skill.map((x) => (x.id == id ? { ...x, isShow: !x.isShow } : x)));
  };

  const submit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    console.log(skill);
    // dispatch(fetchExperience(experience));
  };

  const removeFieldsSkills = (index) => {
    let data = [...skill];
    data.splice(index, 1);
    setSkill(data);
  };

  return (
    <>
      {/* Skills */}
      <div className="mb-6">
        <label
          for="large-input"
          className="flex flex-row mb-2 font-medium text-sm laptop:text-md desktop:text-lg dark:text-black items-center"
        >
          Skills
          <span onClick={addFieldsSkill}>
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

        {/* Dynamic form for Skill section */}
        <div className={!displaySkill ? "hidden" : "block"}>
          {skill.map((input, index) => (
            <form onSubmit={submit} className="p-5 mt-5 bg-white rounded-md text-sm laptop:text-md desktop:text-lg">
              <div
                className="flex flex-row mb-5"
                onClick={() => onDropDown(input.id)}
              >
                {input.skill ? input.skill : "(Not Specified)"}
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
                        for="skill"
                        className="block mb-2 text-sm font-medium dark:text-black"
                      >
                        Skill
                      </label>
                      <input
                        className="border border-gray-300 text-sm rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 block w-full p-2.5 dark:border-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        name="skill"
                        placeholder="Spring Framework"
                        value={input.skill}
                        onChange={(event) =>
                          handleSkillsChange(index, event)
                        }
                      ></input>
                    </div>
                    <div>
                      <label
                        for="levelExpert"
                        className="block mb-2 text-sm font-medium dark:text-black"
                      >
                        Level Expert
                      </label>
                      <input
                        onChange={(event) =>
                          handleSkillsChange(index, event)
                        }
                        value={input.levelExpert}
                        type="text"
                        name="levelExpert"
                        className="border border-gray-300 text-sm rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 block w-full p-2.5 dark:border-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""
                        required
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
                onClick={() => removeFieldsSkills(index)}
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