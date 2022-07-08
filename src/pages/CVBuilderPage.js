import React, { useState, useEffect } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import EditorContainer from "../components/EditorContainer";
import { colors } from "../commons/colors/colors";
import ExperienceComponent from "../components/CVBuilderComponent/ExperienceComponent";

import EducationComponent from "../components/CVBuilderComponent/EducationComponent";
import LicensesComponent from "../components/CVBuilderComponent/LicensesComponent";
import SkillsComponent from "../components/CVBuilderComponent/SkillsComponent";
import AddSectionComponent from "../components/CVBuilderComponent/AddSectionComponent";
import { useNavigate } from "react-router-dom";
import sample_image from "../commons/images/sample image.jpg";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import LinearProgress from "@material-ui/core/LinearProgress";
import { fetchCVBuilder } from "../redux/actions/CVBuilderAction";
import { makeStyles } from "@material-ui/core/styles";
import { LoadingLinePrimary } from "../components/LoadingLine";
import LoadingOverlay from "react-loading-overlay";

import { api } from "../api";
import { fetchUploadImage } from "../redux/actions/UploadImageAction";
import Swal from "sweetalert2";

export default function CVBuilderPage() {
  const inputFile = React.useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const experiences = useSelector(
    (state) => state?.localExperience,
    shallowEqual,
  );
  const education = useSelector((state) => state?.educations, shallowEqual);
  const license = useSelector(
    (state) => state?.licenseAndCertificate,
    shallowEqual,
  );
  const skills = useSelector((state) => state?.skill, shallowEqual);
  const section = useSelector((state) => state?.addSection, shallowEqual);
  const uploadImage = useSelector((state) => state?.uploadImage, shallowEqual);
  const cvBuilder = useSelector((state) => state?.cvBuilder, shallowEqual);

  // const token =
  //   "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJibGFjay5tb25zdGVyLm1ha2VyQGdtYWlsLmNvbSIsImlhdCI6MTY1NjgyOTYyNSwiZXhwIjoxNjU5NDU5NDI1fQ.hrszo7Cb8m-8-D_UxrCe4jy2jME12Dk1z9fJpgBw4u1sm0Do-leAt6g9i-VJmgKh_Vx3CdmuUtWXaZnL5s_kRw";

  // const payload = useSelector((state) => state);
  // console.log("==> payload in CVBuilderPage");
  // console.log(payload);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [summary, setSummary] = useState("");

  const [image, setImage] = useState(
    "https://www.publishsquare.com/wp-content/uploads/2021/12/Untitled-design36.png",
  );
  const [imageUrl, setImageUrl] = useState(
    JSON.parse(localStorage.getItem("images"))?.profile,
  );
  const [formData, setformData] = useState("");
  const [gender, setgender] = useState("other");
  const [generation, setgeneration] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [nationality, setNationality] = useState("");
  const [isPublic, setIsPublic] = useState(true);

  const handleChangeFirstName = (e) => {
    console.log(e.target.value);
    setFirstName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    console.log(e.target.value);
    setLastName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleChangePhoneNumber = (e) => {
    console.log(e.target.value);
    setPhoneNumber(e.target.value);
  };

  const handleChangeGender = (e) => {
    console.log(e.target.value);
    setgender(e.target.value);
  };

  const handleChangeGeneration = (e) => {
    console.log(e.target.value);
    setgeneration(e.target.value);
  };

  const handleChangeDateOfBirth = (e) => {
    console.log(e.target.value);
    setDateOfBirth(e.target.value);
  };

  const handleChangePlaceOfBirth = (e) => {
    console.log(e.target.value);
    setPlaceOfBirth(e.target.value);
  };

  const handleChangeAddress = (e) => {
    console.log(e.target.value);
    setAddress(e.target.value);
  };

  const handleChangeSummary = (e) => {
    console.log(e.target.value);
    setSummary(e.target.value);
  };

  const handleChangeNationality = (e) => {
    console.log(e.target.value);
    setNationality(e.target.value);
  }

  const handleImageChange = (e) => {
    console.log("e.target.files[0] " + e.target.files[0]);
    // console.log(URL.createObjectURL(e.target.files[0]));
    // setImageUrl(URL.createObjectURL(e.target.files[0]));

    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    console.log("FormData : ", formData.get("file"));
    console.log(formData);
    dispatch(fetchUploadImage(e.target.files[0], "profile"));
    // formData && setformData(formData)
    // api.post("/files/single", formData).then((res) => console.log(res));
  };

  useEffect(() => {
    let reduxImage = uploadImage?.items?.profile?.fileUrl;
    let images = localStorage.getItem("images");
    let localImage = JSON.parse(images);

    let finalImage = localImage?.profile?.fileUrl;
    console.log("reduxImage: " + reduxImage);
    console.log("localImage: " + finalImage);
    setImageUrl(reduxImage ?? finalImage);
  }, [uploadImage, imageUrl, window.localStorage.onChange]);

  console.log(imageUrl);
  const handleCancel = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    Swal.fire({
      title: "Cancel!",
      text: "Are you sure? You would like to cancel.",
      // icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      customClass: "swal-wide",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/sidebar/resume");
      }
    });
  };
  const submit = (e) => {
    // navigate("/sidebar/cvTemplate")
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    // console.log(cvBuilderObject);

    Swal.fire({
      title: "Save!",
      text: "Are you sure? You would like to submit this data",
      // icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Save",
      customClass: "swal-wide",
    }).then((result) => {
      if (result.isConfirmed) {
        let finalData = {
          personalDetails: {
            firstName,
            lastName,
            gender,
            generation,
            dateOfBirth,
            placeOfBirth,
            nationality,
            email,
            phoneNumber,
            address,
            summary,
            profile: imageUrl,
          },
          employmentHistory: experiences,

          education: education,

          license: license,

          skill: skills,

          addSection: section,
        };
        console.log("==== final data =====");
        console.log(finalData);
        // console.log(education)
        // dispatch(fetchExperience(experience));
        finalData && dispatch(fetchCVBuilder(finalData, isPublic));
      }
    });
  };

  // useEffect(() => {
  //   cvBuilder.items
  //     ? navigate("/sidebar/aboutMe", {
  //         state: { cvBuilder: cvBuilder?.items ?? null },
  //       })
  //     : navigate("/sidebar/createNewCV");
  // }, [cvBuilder]);

  return (
    <>
      {(uploadImage?.loading || cvBuilder?.loading) && (
        <div className="absolute top-2/4 left-2/4">
          <img src="https://i.stack.imgur.com/hzk6C.gif" />
        </div>
      )}
      <div
        style={{
          opacity: uploadImage?.loading || cvBuilder?.loading ? "20%" : "100%",
        }}
        className="laptop:ml-0 h-full mb-10 pl-10 pt-10 pr-10 rounded-tr-lg rounded-br-lg body-font font-maven bg-slate-100 w-full"
      >
        <div className="flex flex-row">
          <h1 className="text-2xl font-bold hidden laptop:block">
            Create New Curriculum Vitae
          </h1>

          <div className="w-auto laptop:ml-auto ml-5 ">
            <div
              onClick={() => {
                inputFile.current.click();
              }}
              class="w-64 h-64 bg-red-100 relative rounded-2xl"
            >
              <div
                class="absolute inset-0 bg-cover bg-center z-0 rounded-2xl"
                style={{
                  backgroundImage: `url('${imageUrl?.toString() ?? image}')`,
                }}
              >
                <input
                  type="file"
                  ref={inputFile}
                  className="hidden"
                  id="upload-image"
                  onChange={handleImageChange}
                ></input>
              </div>
              <label class="rounded-2xl cursor-pointer opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-3xl bg-gray-600 bg-opacity-75 text-white font-semibold">
                image 3x4/4x6
              </label>
              {!imageUrl && (
                <label class="rounded-2xl  cursor-pointer opacity- absolute inset-0 z-10 flex justify-center items-center text-3xl bg-gray-600 bg-opacity-75 text-white font-semibold">
                  image 3x4/4x6
                </label>
              )}
            </div>
          </div>
        </div>

        <div className="flex">
          <h1 className="text-md laptop:text-lg desktop:text-xl font-bold mb-7">
            Personal Information
          </h1>
          {isPublic ? (
            <span
              onClick={() => setIsPublic(!isPublic)}
              className="ml-5 cursor-pointer"
            >
              <svg
                class="w-6 h-6 cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                ></path>
              </svg>
            </span>
          ) : (
            <span
              onClick={() => setIsPublic(!isPublic)}
              className="ml-5 cursor-pointer"
            >
              <svg
                class="w-6 h-6 cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                ></path>
              </svg>
            </span>
          )}
        </div>

        <div>
          <form onSubmit={submit}>
            <div className="grid gap-6 mt-2 mb-5 laptop:grid-cols-2">
              {/* First Name */}
              <div>
                <label
                  for="first_name"
                  className="block mb-2 font-medium text-sm laptop:text-md desktop:text-lg dark:text-black"
                >
                  First name
                </label>
                <input
                  name="firstName"
                  value={firstName}
                  className="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={handleChangeFirstName}
                  type="text"
                  id="first_name"
                  placeholder="John"
                  required
                />
              </div>

              {/* Last Name */}
              <div>
                <label
                  for="last_name"
                  className="block mb-2 font-medium text-sm laptop:text-md desktop:text-lg dark:text-black"
                >
                  Last name
                </label>
                <input
                  name="lastName"
                  value={lastName}
                  onChange={handleChangeLastName}
                  type="text"
                  id="last_name"
                  className="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Doe"
                  required
                />
              </div>

              {/* gender */}
              <div>
                <label
                  for="gender"
                  className="block mb-2 font-medium text-sm laptop:text-md desktop:text-lg dark:text-black"
                >
                  Gender
                </label>

                <select
                  value={gender}
                  onChange={handleChangeGender}
                  className="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>other</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              {/* generation */}
              <div>
                <label
                  for="generation"
                  className="block mb-2 font-medium text-sm laptop:text-md desktop:text-lg dark:text-black"
                >
                  Generation
                </label>
                <input
                  name="generation"
                  value={generation}
                  onChange={handleChangeGeneration}
                  type="number"
                  id="generation"
                  className="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="10"
                />
              </div>

              {/* Nationality */}
              <div>
                <label
                  for="nationality"
                  className="block mb-2 font-medium text-sm laptop:text-md desktop:text-lg dark:text-black"
                >
                  Nationality
                </label>
                <input
                  name="nationality"
                  value={nationality}
                  className="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={handleChangeNationality}
                  type="text"
                  id="nationality"
                  placeholder="Khmer"
                  required
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label
                  for="dob"
                  className="block mb-2 font-medium text-sm laptop:text-md desktop:text-lg dark:text-black"
                >
                  Date of Birth
                </label>
                <input
                  name="dateOfBirth"
                  value={dateOfBirth}
                  className="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={handleChangeDateOfBirth}
                  type="date"
                  id="dob"
                  placeholder="dd/mm/yy"
                  required
                />
              </div>

              {/* Place of Birth */}
              <div>
                <label
                  for="placeOfBirth"
                  className="block mb-2 font-medium text-sm laptop:text-md desktop:text-lg dark:text-black"
                >
                  Place of Birth
                </label>
                <input
                  name="placeOfBirth"
                  value={placeOfBirth}
                  className="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={handleChangePlaceOfBirth}
                  type="text"
                  id="placeOfBirth"
                  placeholder="phnom penh"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  for="email"
                  className="block mb-2 font-medium text-sm laptop:text-md desktop:text-lg dark:text-black"
                >
                  Email
                </label>
                <input
                  name="email"
                  value={email}
                  onChange={handleChangeEmail}
                  type="email"
                  id="email"
                  className="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="john.doe@company.com"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label
                  for="phone"
                  className="block mb-2 font-medium text-sm laptop:text-md desktop:text-lg dark:text-black"
                >
                  Phone number
                </label>
                <input
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={handleChangePhoneNumber}
                  type="number"
                  id="phone"
                  className="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="123-45-678"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                />
              </div>
            </div>

            {/* Address */}
            <div className="mb-6">
              <label
                // for="large-input"
                className="block mb-2 font-medium text-sm laptop:text-md desktop:text-lg dark:text-black"
              >
                Address
              </label>
              <textarea
                name="address"
                value={address}
                onChange={handleChangeAddress}
                type="text"
                // id="large-input"
                className="block w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            {/* Summary */}
            <div className="mb-6">
              <label
                // for="large-input-summary"
                className="block mb-2 font-medium text-sm laptop:text-md desktop:text-lg dark:text-black"
              >
                Summary
              </label>
              <textarea
                name="summary"
                value={summary}
                onChange={handleChangeSummary}
                type="text"
                // id="large-input-summary"
                className="block w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <ExperienceComponent />

            <EducationComponent />

            <LicensesComponent />

            <SkillsComponent />

            <AddSectionComponent />
          </form>
        </div>

        <div className="flex flex-row">
          <div className="laptop:ml-auto">
            <button
              className="px-12 py-2 text-sm laptop:text-md desktop:text-lg text-white bg-transparent border rounded-md hover:border-transparent"
              style={styles}
              // onClick={() => navigate("/sidebar/cvTemplate")}
              onClick={submit}
            >
              Save
            </button>

            <button
              className="px-10 py-2 ml-3 text-sm laptop:text-md desktop:text-lg text-blue-600 bg-transparent border rounded-md hover:border-transparent"
              onClick={(e) => handleCancel(e)}
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
  backgroundColor: colors.content,
  // logoSize: myStyles.logoSize
};
