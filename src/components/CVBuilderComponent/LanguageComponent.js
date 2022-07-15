import React, { useState, useEffect } from "react";
import { colors } from "../../commons/colors/colors";
import { fetchAddSection } from "../../redux/actions/localAction/AddSectionAction";
import { useDispatch } from "react-redux";
import { fetchLanguage } from "../../redux/actions/localAction/LanguageAction";

export default function LanguageComponent() {
  const [displayLanguage, setDisplayLanguage] = useState(false);
  const dispatch = useDispatch();

  const [language, setLanguage] = useState([
    {
      lang: "",
      languageLevel: "",
      isShow: true,
      id: 0,
    },
  ]);

  const handleLanguageChange = (index, event) => {
    console.log(event.target.value);
    let data = [...language];
    data[index][event.target.name] = event.target.value;
    setLanguage(data);
  };

  const addFieldsLanguage = () => {
    setDisplayLanguage(true);
    if (!displayLanguage) {
      console.log("Hidden true");
    } else {
      let newData = {
        lang: "",
        languageLevel: "",
        isShow: true,
        id: language.length,
      };
      const oldData = language.map((x) => {
        return {
          ...x,
          isShow: false,
        };
      });
      setLanguage([...oldData, newData]);
    }
  };

  const removeFieldsLanguage = (index, e) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    let data = [...language];
    data.splice(index, 1);
    setLanguage(data);
  };

  const onDropDown = (id) => {
    setLanguage(
      language.map((x) => (x.id == id ? { ...x, isShow: !x.isShow } : x))
    );
  };

  const submit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    console.log(language);
    // dispatch(fetchExperience(experience));
  };

  useEffect(() => {
    language ? dispatch(fetchLanguage(language)) : alert("empty field");
  }, [displayLanguage, language]);

  return (
    <>
      {/* Add Section */}
      <div className="mb-6">
        <label
          for="large-input"
          className="flex flex-row mb-2 font-medium text-sm laptop:text-md desktop:text-lg dark:text-black items-center"
        >
          Languages
          <span onClick={addFieldsLanguage}>
            <svg
              className="w-4 latpop:w-6 h-auto ml-2 text-blue-700"
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
        <div className={!displayLanguage ? "hidden" : "block"}>
          {language.map((input, index) => (
            <form
              onSubmit={submit}
              className="p-5 mt-5 border bg-white rounded-md text-sm laptop:text-md desktop:text-lg"
            >
              <div
                className="flex flex-row mb-5"
                onClick={() => onDropDown(input.id)}
              >
                {input.lang ? input.lang : "(Not Specified)"}
                <span className="ml-auto">
                  {!input.isShow ? (
                    <svg
                      className="w-4 laptop:w-6 h-auto text-blue-700"
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
                      className="w-4 laptop:w-6 h-auto text-blue-700"
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

              <div className={!input.isShow ? "hidden" : "block"}>
                <div key={index} className="mb-5">
                  <div>
                    <label
                      for="lang"
                      className="block mb-2 text-sm font-medium dark:text-black"
                    >
                      Language
                    </label>
                    <input
                      className="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      name="lang"
                      placeholder="Title"
                      value={input.lang}
                      onChange={(event) => handleLanguageChange(index, event)}
                    ></input>
                  </div>
                  <div>
                    <label
                      for="languageLevel"
                      className="block mt-5 mb-2 text-sm font-medium dark:text-black"
                    >
                      Description
                    </label>
                    <textarea
                      className="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      name="languageLevel"
                      placeholder="description"
                      value={input.languageLevel}
                      onChange={(event) => handleLanguageChange(index, event)}
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
                onClick={(e) => removeFieldsLanguage(index, e)}
                className="px-5 py-2 text-white bg-red-600 rounded-md"
              >
                Remove
              </button>
            </form>
          ))}
        </div>
        {language.length >= 1 && displayLanguage && (
          <div
            onClick={addFieldsLanguage}
            className="m-2 w-full cursor-pointer text-blue-900 hover:text-blue-500 font-bold text-right"
          >
            + Add more language
          </div>
        )}
      </div>
    </>
  );
}

const styles = {
  backgroundColor: colors.content,
  // logoSize: myStyles.logoSize
};
