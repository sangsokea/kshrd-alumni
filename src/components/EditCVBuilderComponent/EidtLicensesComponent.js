import { listIcons } from "@iconify/react";
import React, { useEffect, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { fetchExperience } from "../../redux/actions/localAction/ExperienceAction";
import { colors } from "../../commons/colors/colors";
import sample_image from "../../commons/images/sample image.jpg";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchLicense } from "../../redux/actions/localAction/LicenseAndCertificateAction";
import { fetchUploadImage } from "../../redux/actions/UploadImageAction";
import { LoadingLinePrimary } from "../LoadingLine";
import { useLocation } from "react-router-dom";

export default function EditLicensesComponent() {
  const dispatch = useDispatch();
  const location = useLocation();
  const uploadImage = useSelector((state) => state?.uploadImage, shallowEqual);
  const [displayLicenses, setDisplayLicenses] = useState(location.state.profileDetails?.license.length? true:false);
  const [image, setImage] = useState(sample_image);
  const [imageUrl, setImageUrl] = useState("");
  const [currentIndex, setcurrentIndex] = useState(0);
  const [currentValue, setcurrentValue] = useState("");
  const [currentName, setcurrentName] = useState("");
  const inputFile = React.useRef(null);

  const [licenses, setLicenses] = useState([
    {
      school: "",
      degree: "",
      image: "",
      isShow: true,
      id: 0,
    },
  ]);

  const handleLicensesChange = (index, event) => {
    console.log("handleLicensesChange");
    console.log(event.target.value);
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
        image: "",
        isShow: true,
        id: licenses.length,
      };
      const oldData = licenses.map((x) => {
        return {
          ...x,
          isShow: false,
        };
      });
      setLicenses([...oldData, newData]);
    }
  };

  const submit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    console.log(licenses);

    dispatch(fetchLicense(licenses));
  };

  const removeFieldsLicensesAndCertifications = (index, e) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    let data = [...licenses];
    data.splice(index, 1);
    setLicenses(data);
  };

  const onDropDwon = (id) => {
    setLicenses(
      licenses.map((x) => (x.id == id ? { ...x, isShow: !x.isShow } : x)),
    );
  };

  const handleImageChange = (index, e) => {
    console.log("index ", index);
    console.log(e.target.files[0]);

    setcurrentName(e.target.name);
    setcurrentValue(e.target.value);
    console.log(URL.createObjectURL(e.target.files[0]));
    setImageUrl(URL.createObjectURL(e.target.files[0]));

    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    dispatch(fetchUploadImage(e.target.files[0], "licence"));
  };

  useEffect(() => {
    licenses ? dispatch(fetchLicense(licenses)) : alert("empty field");
  }, [displayLicenses, licenses]);

  useEffect(() => {
    let reduxImage = uploadImage?.items?.licence?.fileUrl;
    let images = localStorage.getItem("images");
    let localImage = JSON.parse(images);
    let finalImage = localImage?.licence?.fileUrl;
    let data = [...licenses];

    data[currentIndex].image = reduxImage ?? finalImage?.toString();
    console.log(currentIndex);
    setLicenses(data);
  }, [uploadImage, window.localStorage.onChange]);

  useEffect(() => {
    let images = localStorage.getItem("images");
    let localImage = images && JSON.parse(images);

    licenses.length === 0 &&
      localImage &&
      localStorage.setItem(
        "images",
        JSON.stringify({
          ...localImage,
          licence: "",
        }),
      );
  }, [licenses]);

  useEffect(() => {
    let images = localStorage.getItem("images");
    let localImage = JSON.parse(images);

    window.onbeforeunload = function () {
      localImage &&
        localStorage.setItem(
          "images",
          JSON.stringify({
            ...localImage,
            licence: "",
            profile: "",
          }),
        );
      return "Are you sure you want to refresh? current data maybe losts!";
    };
  }, []);


  useEffect(() => {
    setLicenses(location.state.profileDetails?.license)
  }, [location]);

  return (
    <>
      {/* Licenses and Certifications */}
      {uploadImage?.loading && <LoadingLinePrimary />}
      <div className="mb-6">
        <label
          for="large-input"
          className="flex flex-row mb-2 font-medium text-sm laptop:text-md desktop:text-lg dark:text-black items-center"
        >
          Licenses & Cerifications
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
          {licenses?.map((input, index) => (
            <form
              onSubmit={submit}
              className="p-5 mt-5 bg-white rounded-md text-sm laptop:text-md desktop:text-lg"
            >
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

              <div className={!input.isShow ? "hidden" : "block"}>
                <div key={index} className="mb-3 flex justify-center">
                  <div
                    onClick={() => {
                      inputFile.current.click();
                      setcurrentIndex(index);
                    }}
                    class="w-64 h-64 bg-red-100 relative rounded-2xl"
                  >
                    <div
                      class="absolute inset-0 bg-cover bg-center z-0 rounded-2xl"
                      style={{
                        backgroundImage: `url('${
                          input?.image?.toString() ?? image
                        }')`,
                      }}
                    >
                      <input
                        type="file"
                        ref={inputFile}
                        className="hidden"
                        id="upload-image"
                        onChange={(e) => handleImageChange(index, e)}
                      ></input>
                    </div>
                    <label class="rounded-2xl cursor-pointer opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-3xl bg-gray-600 bg-opacity-75 text-white font-semibold">
                      Upload image
                    </label>
                    {!imageUrl && (
                      <label class="cursor-pointer opacity- absolute inset-0 z-10 flex justify-center items-center text-3xl bg-gray-600 bg-opacity-75 text-white font-semibold">
                        Upload image
                      </label>
                    )}
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
                      className="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                      className="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required
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
                onClick={(e) => removeFieldsLicensesAndCertifications(index, e)}
                className="px-5 py-2 text-white bg-red-600 rounded-md"
              >
                Remove
              </button>
            </form>
          ))}
        </div>
        {licenses.length >= 1 && displayLicenses && (
          <div
            onClick={addFieldsLicensesAndCertifications}
            className="m-2 w-full cursor-pointer text-blue-900 hover:text-blue-500 font-bold text-right"
          >
            + Add more Licenses/Certifications
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
