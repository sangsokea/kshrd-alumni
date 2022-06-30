import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ReactComponent as Add } from "../commons/icon/add.svg";
import { ReactComponent as Removed } from "../commons/icon/removed.svg";
import { ReactComponent as Remove } from "../commons/icon/remove.svg";
import { colors } from "../commons/colors/colors";
import { useDispatch } from "react-redux";
import { fetchAboutMePage } from "../redux/actions/localAction/AboutMePageAction";

export default function ViewOwnerProfileEdit() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [sum, setsummary] = useState(true);
  const [summary, setSummaryValues] = useState("");

  const [addSummary, setAddSummary] = useState(true);
  const [resetSummary, setResetSummaryValues] = useState("");

  const [addSkill, setAddSkill] = useState("");
  const [resetAddSkill, setResetAddSkillValues] = useState("");

  const [display, setDisplay] = useState(false);

  const handleSummaryChange = (e) => {
    setSummaryValues(e.target.value);
    console.log(e.target.value);
  };

  const resetInputSummary = () => {
    setSummaryValues("");
  };

  const handleAddSummaryChange = (e) => {
    console.log(e.target.value);
    setResetSummaryValues(e.target.value);
  };

  const resetAddSummary = () => {
    setResetSummaryValues("");
  };

  const [major, setMajor] = useState([
    {
      data: "React JS",
      id: 1,
      isShow: false,
    },

    {
      data: "Java Programming",
      id: 2,
      isShow: false,
    },
    {
      data: "Tailwind React",
      id: 3,
      isShow: false,
    },
    {
      data: "UX/UI",
      id: 4,
      isShow: false,
    },
    {
      data: "Computer Science",
      id: 5,
      isShow: false,
    },
    {
      data: "Korean Language",
      id: 6,
      isShow: false,
    },
  ]);

  const [selectedMajor, setSelectedMajor] = useState("");

  const [inputField, setInputField] = useState([
    {
      newMajor: "",
      isShow: false,
      id: 0,
    },
  ]);

  const removeInputField = (index, e) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    console.log("Error");

    let object = [...inputField];
    object.splice(index, 1);
    setInputField(object);
  };

  const addInputFields = (item) => {
    let newData = {
      newMajor: item.data,
      isShow: !major.isShow,
      id: major.length,
    };
    setInputField([...inputField, newData]);

    setMajor(
      major.map((obj) =>
        obj.id === item?.id ? { ...obj, isShow: !obj.isShow } : obj
      )
    );

    setSelectedMajor(item.data);
    // }
  };

  console.log(inputField);

  const handleInputFieldChange = (index, event) => {
    console.log(event.target.value);
    let data = [...inputField];
    data[index][event.target.name] = event.target.value;
    setInputField(data);
  };

  return (
    <>
      <div class="laptop:mt-5 ml-10 body-font font-maven">
        <div>
          <img
            class="w-[300px] laptop:w-full h-auto"
            src="https://i.pinimg.com/originals/a6/cd/63/a6cd63445858ab32de5a829c1d22b77c.png"
            alt="Image"
          />
        </div>

        <p className="text-sm laptop:text-md desktop:text-lg mt-5 text-gray-400">
          User Information
        </p>

        {/* First Name, Last Name, Skill input form */}
        <div class="block laptop:flex justify-between mt-3 gap-2 text-sm laptop:text-md desktop:text-lg ">
          <div class="form-control laptop:w-full w-[300px] mb-5">
            <label class="label">
              <span class="label-text">First Name</span>
            </label>
            <input
              type="text"
              placeholder="Yuoyi"
              class="mt-2 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 block w-full p-2.5 dark:border-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div class="form-control laptop:w-full w-[300px] mb-5">
            <label class="label">
              <span class="label-text">Last Name</span>
            </label>
            <input
              type="text"
              placeholder="Vong"
              class="mt-2 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 block w-full p-2.5 dark:border-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div class="form-control laptop:w-full w-[300px] mb-5">
            <label class="label">
              <span class="label-text">Skill</span>
            </label>
            <input
              type="text"
              placeholder="Web Development"
              class="mt-2 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 block w-full p-2.5 dark:border-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>

        <p className="text-sm laptop:text-md desktop:text-lg mt-5 text-gray-400">
          About
        </p>

        {/* Add Summary section */}
        <div className="inline-block text-sm laptop:text-md desktop:text-lg ">
          <button
            class="rounded-md inline-flex justify-between content-center mt-3"
            onClick={() => setsummary((Prev) => !Prev)}
          >
            {sum ? (
              <Add className="w-6 mt-1 laptop:mr-1 desktop:mr-2"></Add>
            ) : (
              <Removed className="w-6 mt-1 laptop:mr-1 desktop:mr-2"></Removed>
            )}
            Add Summary{""}
          </button>

          <div className="mt-3">
            {sum ? null : (
              <div className="grid grid-cols-2 ">
                <div className="mb-5 ">
                  <textarea
                    class="laptop:w-96 w-[300px] h-[100px] desktop:w-222 outline outline-offset-2 outline-1 laptop:py-1 desktop:py-2 py-1 px-3 rounded text-gray-700 leading-tight focus:outline-blue-700  bg-bgText text-left inline-flex justify-between content-center lap"
                    // id="password"
                    // type="text"
                    name="summary"
                    value={summary}
                    onChange={handleSummaryChange}
                    placeholder=""
                  />
                </div>
                <div className="laptop:flex justify-center hidden">
                  <button
                    class="desktop:ml-10 tablet:ml-10 ml-10 mb-5 w-4 laptop:w-6"
                    onClick={resetInputSummary}
                  >
                    <Remove className=""></Remove>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <p class="border-[1px] border-solid border-bgSkill laptop:w-full mt-12 w-[300px]"></p>
        <div class="flex mt-12 items-center">
          <p
            class="border-[1px] border-solid h-10 border-3"
            style={borderStyle}
          ></p>
          <p
            class="font-bold ml-4 text-xl laptop:text-2xl desktop:text-4xl"
            style={styles}
          >
            What I can do{" "}
          </p>
        </div>

        <div class="mt-5 text-sm laptop:text-md desktop:text-lg">
          <div>
            <button
              class="rounded-md inline-flex justify-between content-center mt-3"
              onClick={() => setAddSummary((Prev) => !Prev)}
            >
              {addSummary ? (
                <Add className="w-6 mt-1 laptop:mr-1 desktop:mr-2"></Add>
              ) : (
                <Removed className="w-6 mt-1 laptop:mr-1 desktop:mr-2"></Removed>
              )}
              Add Summary{""}
            </button>

            <div className="mt-3">
              {addSummary ? null : (
                <div className="grid grid-cols-2 ">
                  <div className="mb-5 ">
                    <textarea
                      class="laptop:w-96 w-[300px] h-[100px] desktop:w-222 outline outline-offset-2 outline-1 laptop:py-1 desktop:py-2 py-1 px-3 rounded text-gray-700 leading-tight focus:outline-blue-700  bg-bgText text-left inline-flex justify-between content-center lap"
                      id="summary"
                      // type="text"
                      name="resetSummary"
                      value={resetSummary}
                      onChange={handleAddSummaryChange}
                      placeholder=""
                    />
                  </div>
                  <div className="flex justify-center">
                    <button
                      class="desktop:ml-24 tablet:ml-10 ml-20 mb-5 hidden laptop:block"
                      onClick={resetAddSummary}
                    >
                      <Remove className=""></Remove>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div>
            <button
              class="rounded-md inline-flex justify-between content-center mt-3"
              onClick={() => setAddSkill((Prev) => !Prev)}
            >
              {addSkill ? (
                <Add className="w-6 mt-1 laptop:mr-1 desktop:mr-2"></Add>
              ) : (
                <Removed className="w-6 mt-1 laptop:mr-1 desktop:mr-2"></Removed>
              )}
              Skills{""}
            </button>

            <div className="mt-3">
              {addSkill ? null : (
                <div>
                  <div className="flex laptop:flex-row laptop:gap-2 flex-col">
                    {major.map((item, index) => (
                      <div className="mb-5">
                        <button
                          key={index}
                          className="border bg-bgSkill text-center rounded-lg py-2 px-2"
                          onClick={() => addInputFields(item)}
                        >
                          {item.data}
                        </button>
                      </div>
                    ))}
                  </div>

                  <div
                    className="flex flex-col"
                    onClick={!display ? "hidden" : "block"}
                  >
                    {inputField.map((input, index) => (
                      <form onSubmit={(e) => removeInputField(index, e)}>
                        {/* return ( */}
                        <div
                          key={index}

                          // onClick={() => onShowForm(input.id)}
                          // className="mb-3 border border-gray-300 text-sm rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 block p-2.5 dark:border-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <div className={!input.isShow ? "hidden" : "block"}>
                            <button type="submit" className="float-right">
                              <Remove className="w-5"></Remove>
                            </button>
                            <textarea
                              className="mb-3 border border-gray-300 bg-bgText text-sm laptop:text-md desktop:text-lg rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 block w-full p-2.5 dark:border-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              name="newMajor"
                              placeholder={input.newMajor}
                              // value={input.newMajor}
                              onChange={(event) =>
                                handleInputFieldChange(index, event)
                              }
                            ></textarea>
                          </div>
                        </div>
                        {/* ); */}
                      </form>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-row mb-10">
          <div className="laptop:ml-auto">
            <button
              className="ml-12 px-12 py-2 text-sm laptop:text-md desktop:text-lg text-white bg-transparent border rounded-md hover:border-transparent"
              style={saveBackground}
              onClick={() => dispatch(fetchAboutMePage(false))}
            >
              Save
            </button>

            <button
              className="px-10 py-2 mt-10 ml-3 text-sm laptop:text-md desktop:text-lg text-blue-600 bg-transparent border rounded-md hover:border-transparent"
              onClick={() => dispatch(fetchAboutMePage(false))}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  color: colors.content,
  // logoSize: myStyles.logoSize
};

const borderStyle = {
  borderColor: colors.content,
};

const saveBackground = {
  backgroundColor: colors.content,
};
