import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ReactComponent as Add } from "../commons/icon/add.svg";
import { ReactComponent as Removed } from "../commons/icon/removed.svg";
import { ReactComponent as Remove } from "../commons/icon/remove.svg";
import { colors } from "../commons/colors/colors";

export default function ViewOwnerProfileEdit() {
  const navigate = useNavigate();

  const [sum, setsummary] = useState(true);
  const [summary, setSummaryValues] = useState("");

  const [addSummary, setAddSummary] = useState(true);
  const [resetSummary, setResetSummaryValues] = useState("");

  const [addSkill, setAddSkill] = useState("");
  const [resetAddSkill, setResetAddSkillValues] = useState("");

  const [displayReactJS, setDisplayReactJS] = useState(false);
  const [displayJavaProgramming, setDisplayJavaProgramming] = useState(false);
  const [displayTailwindReact, setDisplayTailwindReact] = useState(false);
  const [displayUX, setDisplayUX] = useState(false);
  const [displayComputerScience, setDisplayComputerScience] = useState(false);
  const [displayKoreanLanguage, setDisplayKoreanLanguage] = useState(false);

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

  const handleSkillChange = (e) => {
    console.log(e.target.value);
    setResetAddSkillValues(e.target.value);
  };

  const resetSkill = () => {
    setResetAddSkillValues("");
  };

  return (
    <>
      <div class="mt-5 mx-10 body-font font-maven ">
        <div>
          <img
            class="w-full h-72"
            src="https://www.online-4-business.de/img/dummies/slides/01.jpg"
            alt="Image"
          />
        </div>

        <div class="flex justify-between mt-5 mb-5 text-sm laptop:text-md desktop:text-lg ">
          <input
            type="text"
            placeholder="User Information"
            class="input input-bordered w-[306px] max-w-xs px py-1 px-3 bg-slate-50 rounded-md border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:outline-none"
          />
          {/* <NavLink to="profileViewEdit">
            <svg
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </NavLink> */}
        </div>

        {/* First Name, Last Name, Skill input form */}
        <div class="flex justify-between mt-3 gap-3 text-sm laptop:text-md desktop:text-lg ">
          <div class="form-control w-full max-w-xs ">
            <label class="label ">
              <span class="label-text">First Name</span>
            </label>
            <input
              type="text"
              placeholder="Boonlin"
              class="mt-3 input input-bordered w-full max-w-xs border border-solid rounded-md py-1 px-3 bg-slate-50  focus:ring-2 focus:ring-blue-600 focus:outline-none"
            />
          </div>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Last Name</span>
            </label>
            <input
              type="text"
              placeholder="Em"
              class="mt-3 input input-bordered w-full max-w-xs border border-solid rounded-md py-1 px-3  bg-slate-50 focus:ring-2 focus:ring-blue-600 focus:outline-none"
            />
          </div>
          <div class="form-control w-full max-w-xs ">
            <label class="label">
              <span class="label-text">Skill</span>
            </label>
            <input
              type="text"
              placeholder="Web Development"
              class="mt-3 input input-bordered w-full max-w-xs border border-solid rounded-md py-1 px-3  bg-slate-50 focus:ring-2 focus:ring-blue-600 focus:outline-none"
            />
          </div>
        </div>

        <div class="inline-block text-sm laptop:text-md desktop:text-lg ">
          <input
            type="text"
            placeholder="About"
            class="input w-full max-w-xs px mt-5 py-1 px-3 mr-2 bg-slate-50 rounded-md border border-gray-200  focus:ring-2 focus:ring-blue-600 focus:outline-none"
          />

          {/* Add Summary section */}
          <div>
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
                      class=" ml-10 laptop:w-96 tablet:w-96 desktop:w-222 outline outline-offset-2 outline-1 laptop:py-1 desktop:py-2 py-1 px-3 rounded text-gray-700 leading-tight focus:outline-blue-700  bg-slate-50 text-left inline-flex justify-between content-center lap"
                      id="password"
                      // type="text"
                      name="summary"
                      value={summary}
                      onChange={handleSummaryChange}
                      placeholder=""
                    />
                  </div>
                  <div className="flex justify-center">
                    <button
                      class="desktop:ml-24 tablet:ml-10 ml-20 mb-5"
                      onClick={resetInputSummary}
                    >
                      <Remove className=""></Remove>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <p class="border border-solid border-gray-400 w-full mt-12"></p>
        <div class="flex mt-12">
          <p class="border border-solid h-10 border-3" style={borderStyle}></p>
          <p class="font-bold ml-4 text-4xl" style={styles}>
            What I can do{" "}
          </p>
        </div>

        <div class=" mt-5 text-sm laptop:text-md desktop:text-lg">
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
                      class=" ml-10 laptop:w-96 tablet:w-96 desktop:w-222 outline outline-offset-2 outline-1 laptop:py-1 desktop:py-2 py-1 px-3 rounded text-gray-700 leading-tight focus:outline-blue-700  bg-slate-50 text-left inline-flex justify-between content-center lap"
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
                      class="desktop:ml-24 tablet:ml-10 ml-20 mb-5"
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
                  <div className="flex flex-row mb-5">
                    <button
                      className="ml-10 border bg-slate-200 w-24 text-center rounded-md"
                      onClick={() => setDisplayReactJS(!displayReactJS)}
                    >
                      ReactJS +
                    </button>

                    <button
                      className="border bg-slate-200 w-52 text-center rounded-md ml-5"
                      onClick={() =>
                        setDisplayJavaProgramming(!displayJavaProgramming)
                      }
                    >
                      Java Programming +
                    </button>

                    <button
                      className="border bg-slate-200 w-40 text-center rounded-md ml-5"
                      onClick={() =>
                        setDisplayTailwindReact(!displayTailwindReact)
                      }
                    >
                      Tailwind React +
                    </button>

                    <button
                      className="border bg-slate-200 w-40 text-center rounded-md ml-5"
                      onClick={() => setDisplayUX(!displayUX)}
                    >
                      UX / UI +
                    </button>

                    <button
                      className="border bg-slate-200 w-40 text-center rounded-md ml-5"
                      onClick={() =>
                        setDisplayComputerScience(!displayComputerScience)
                      }
                    >
                      Computer Science +
                    </button>

                    <button
                      className="border bg-slate-200 w-40 text-center rounded-md ml-5"
                      onClick={() =>
                        setDisplayKoreanLanguage(!displayKoreanLanguage)
                      }
                    >
                      Korean Language +
                    </button>
                  </div>

                  <div className="flex flex-col ">
                    <form
                      className={!displayJavaProgramming ? "hidden" : "block"}
                    >
                      <textarea
                        class="mt-3 ml-10 laptop:w-96 tablet:w-96 desktop:w-222 laptop:py-1 desktop:py-2 py-1 px-3 rounded text-gray-700 leading-tight border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50 text-left inline-flex justify-between content-center"
                        id="skill"
                        // type="text"
                        name="react"
                        // value="ReactJS"
                        onChange={handleSkillChange}
                        placeholder="Java Programming"
                      />
                    </form>

                    <form className={!displayReactJS ? "hidden" : "block"}>
                      <textarea
                        class="mt-3 ml-10 laptop:w-96 tablet:w-96 desktop:w-222 laptop:py-1 desktop:py-2 py-1 px-3 rounded text-gray-700 leading-tight border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50 text-left inline-flex justify-between content-center"
                        id="skill"
                        // type="text"
                        name="react"
                        // value="ReactJS"
                        onChange={handleSkillChange}
                        placeholder="ReactJS"
                      />
                    </form>

                    <form
                      className={!displayTailwindReact ? "hidden" : "block"}
                    >
                      <textarea
                        class="mt-3 ml-10 laptop:w-96 tablet:w-96 desktop:w-222 laptop:py-1 desktop:py-2 py-1 px-3 rounded text-gray-700 leading-tight border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50 text-left inline-flex justify-between content-center"
                        id="skill"
                        // type="text"
                        name="react"
                        // value="ReactJS"
                        onChange={handleSkillChange}
                        placeholder="Tailwind React"
                      />
                    </form>

                    <form className={!displayUX ? "hidden" : "block"}>
                      <textarea
                        class="mt-3 ml-10 laptop:w-96 tablet:w-96 desktop:w-222 laptop:py-1 desktop:py-2 py-1 px-3 rounded text-gray-700 leading-tight border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50 text-left inline-flex justify-between content-center"
                        id="skill"
                        // type="text"
                        name="react"
                        // value="ReactJS"
                        onChange={handleSkillChange}
                        placeholder="UX / UI"
                      />
                    </form>

                    <form
                      className={!displayComputerScience ? "hidden" : "block"}
                    >
                      <textarea
                        class="mt-3 ml-10 laptop:w-96 tablet:w-96 desktop:w-222 laptop:py-1 desktop:py-2 py-1 px-3 rounded text-gray-700 leading-tight border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50 text-left inline-flex justify-between content-center"
                        id="skill"
                        // type="text"
                        name="react"
                        // value="ReactJS"
                        onChange={handleSkillChange}
                        placeholder="Computer Science"
                      />
                    </form>

                    <form
                      className={!displayKoreanLanguage ? "hidden" : "block"}
                    >
                      <textarea
                        class="mt-3 ml-10 laptop:w-96 tablet:w-96 desktop:w-222 laptop:py-1 desktop:py-2 py-1 px-3 rounded text-gray-700 leading-tight border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50 text-left inline-flex justify-between content-center"
                        id="skill"
                        // type="text"
                        name="react"
                        // value="ReactJS"
                        onChange={handleSkillChange}
                        placeholder="Korean Language"
                      />
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="ml-auto">
            <button
              className="px-10 py-2 text-lg text-white bg-transparent border rounded-md hover:border-transparent"
              style={saveBackground}
              onClick={() => navigate("/")}
            >
              Save
            </button>

            <button
              className="px-10 py-2 mt-10 ml-10 text-lg text-blue-600 bg-transparent border rounded-md hover:border-transparent"
              onClick={() => navigate("/sidebar/aboutMe")}
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
