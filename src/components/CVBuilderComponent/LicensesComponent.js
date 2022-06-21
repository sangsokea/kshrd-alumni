import { listIcons } from "@iconify/react";
import React, { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDispatch } from "react-redux";
import { fetchExperience } from "../../redux/actions/localAction/ExperienceAction";
import { colors } from "../../commons/colors/colors";

export default function LicensesComponent() {
  const [displayLicenses, setDisplayLicenses] = useState(false);
  const [image, setImage] = useState("https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png");
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
      <div class="mb-6">
        <label
          for="large-input"
          class="mb-2 text-md font-medium dark:text-black flex flex-row"
        >
          Licenses & cerifications
          <span onClick={addFieldsLicensesAndCertifications}>
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
        <div className={!displayLicenses ? "hidden" : "block"}>
          {licenses.map((input, index) => (
            <form onSubmit={submit} class="bg-white mt-5 p-5 rounded-md">
              {/* Image and Upload Certificate Button */}
              <div onClick={() => onDropDwon(input.id)}>
                <div class="mb-5 flex flex-row">
                  {input.school
                    ? "License or Certificate at " + input.school
                    : "(Not Specified)"}
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
              </div>

              <div className={input.isShow ? "hidden" : "block"}>
                <div key={index} class="mb-3 text-center">
                  <img
                    class="m-auto rounded-lg mb-3"
                    src={imageUrl ? imageUrl : image}
                    alt="preview"
                    style={{height: "200px"}}
                  ></img>
                  <div>
                    <input id="upload-certificate" type="file" class="hidden" onChange={handleImageChange}/>
                    <button type="button" class="border border-blue-600 shadow-md rounded-md text-blue-500 h-[50px] w-[200px]">
                      <label for="upload-certificate" class="w-full h-auto block cursor-pointer">Upload Certificate</label>
                    </button>
                  </div>
                </div>
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
                      onChange={(event) => handleLicensesChange(index, event)}
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
                      onChange={(event) => handleLicensesChange(index, event)}
                      value={input.degree}
                      type="text"
                      name="degree"
                      class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 block w-full p-2.5 dark:border-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required
                    />
                  </div>
                </div>

                {/* <div class="text-center">
                  <button
                    class="text-white px-10 py-3 rounded-md"
                    style={styles}
                  >
                    Save Image
                  </button>
                </div> */}
              </div>

              <button
                onClick={submit}
                style={styles}
                class="mr-5 text-white rounded-md px-5 py-2"
              >
                Submit
              </button>

              <button
                onClick={() => removeFieldsLicensesAndCertifications(index)}
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
