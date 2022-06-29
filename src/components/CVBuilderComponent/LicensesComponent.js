import { listIcons } from "@iconify/react";
import React, { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDispatch } from "react-redux";
import { fetchExperience } from "../../redux/actions/localAction/ExperienceAction";
import { colors } from "../../commons/colors/colors";
import sample_image from "../../commons/images/sample image.jpg"

export default function LicensesComponent() {
  const [displayLicenses, setDisplayLicenses] = useState(false);
  const [image, setImage] = useState(
    sample_image
  );
  const [imageUrl, setImageUrl] = useState("");

  const [licenses, setLicenses] = useState([
    {
      school: "",
      degree: "",
      isShow: false,
      id: 0,
    },
  ]);

  const handleLicensesChange = (index, event) => {
    console.log(event.target.value);
    let data = [...licenses];
    data[index][event.target.name] = event.target.value;
    setLicenses(data);
  };

  const addFieldsLicensesAndCertifications = () => {
    setDisplayLicenses(true);
    if (!displayLicenses) {
      console.log("Hidden true");
    } else {
      let newData = {
        school: "",
        degree: "",
        isShow: !licenses.isShow,
        id: licenses.length,
      };
      setLicenses([newData, ...licenses]);
    }
  };

  const submit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    console.log(licenses);
    // dispatch(fetchExperience(experience));
  };

  const removeFieldsLicensesAndCertifications = (index) => {
    let data = [...licenses];
    data.splice(index, 1);
    setLicenses(data);
  };

  const onDropDwon = (id) => {
    setLicenses(
      licenses.map((x) => (x.id == id ? { ...x, isShow: !x.isShow } : x))
    );
  };

  const handleImageChange = (e) => {
    console.log(e.target.files[0]);
    console.log(URL.createObjectURL(e.target.files[0]));
    setImageUrl(URL.createObjectURL(e.target.files[0]));

    const formData = new FormData();
    formData.append("image", e.target.files[0]);
  };

  return (
    <>
      {/* Licenses and Certifications */}
      <div className="mb-6">
        <label
          for="large-input"
          className="flex flex-row mb-2 font-medium text-sm laptop:text-md desktop:text-lg dark:text-black items-center"
        >
          Licenses & cerifications
          <span onClick={addFieldsLicensesAndCertifications}>
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
        <div className={!displayLicenses ? "hidden" : "block"}>
          {licenses.map((input, index) => (
            <form onSubmit={submit} className="p-5 mt-5 bg-white rounded-md text-sm laptop:text-md desktop:text-lg">
              {/* Image and Upload Certificate Button */}
              <div onClick={() => onDropDwon(input.id)}>
                <div className="flex flex-row mb-5">
                  {input.school
                    ? "License or Certificate at " + input.school
                    : "(Not Specified)"}
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
              </div>

              <div className={input.isShow ? "hidden" : "block"}>
                <div key={index} className="mb-3 text-center">
                  <div>
                    <input
                      id="upload-certificate"
                      type="file"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                    {/* <button type="button" className="border border-blue-600 shadow-md rounded-md text-blue-500 h-[50px] w-[200px]"> */}
                    <label for="upload-certificate">
                      {" "}
                      <img
                        className="m-auto mb-3 rounded-lg cursor-pointer"
                        src={imageUrl ? imageUrl : image}
                        alt="preview"
                        style={{ height: "200px" , width: "300px"}}
                      ></img>
                    </label>
                    {/* </button> */}
                  </div>
                </div>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <label
                      for="school"
                      className="block mb-2 text-sm font-medium dark:text-black"
                    >
                      School
                    </label>
                    <input
                      className="border border-gray-300 text-sm rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 block w-full p-2.5 dark:border-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      name="school"
                      placeholder="RUPP"
                      value={input.school}
                      onChange={(event) => handleLicensesChange(index, event)}
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
                      onChange={(event) => handleLicensesChange(index, event)}
                      value={input.degree}
                      type="text"
                      name="degree"
                      className="border border-gray-300 text-sm rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 block w-full p-2.5 dark:border-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required
                    />
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
                onClick={() => removeFieldsLicensesAndCertifications(index)}
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
