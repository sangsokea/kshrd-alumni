import React, { useState } from "react";
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

import { api } from "../api";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CVBuilderPage() {
  const { loading } = useSelector((state) => state.cvBuilder, shallowEqual);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const experiences = useSelector(
    (state) => state?.localExperience,
    shallowEqual
  );
  const education = useSelector((state) => state?.educations, shallowEqual);
  const license = useSelector(
    (state) => state?.licenseAndCertificate,
    shallowEqual
  );
  const skills = useSelector((state) => state?.skill, shallowEqual);
  const section = useSelector((state) => state?.addSection, shallowEqual);
  // const uploadImage = useSelector((state) => state?.uploadImage, shallowEqual);

  // const token =
  //   "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJibGFjay5tb25zdGVyLm1ha2VyQGdtYWlsLmNvbSIsImlhdCI6MTY1NjgyOTYyNSwiZXhwIjoxNjU5NDU5NDI1fQ.hrszo7Cb8m-8-D_UxrCe4jy2jME12Dk1z9fJpgBw4u1sm0Do-leAt6g9i-VJmgKh_Vx3CdmuUtWXaZnL5s_kRw";

  // const payload = useSelector((state) => state);
  // console.log("==> payload in CVBuilderPage");
  // console.log(payload);

  const classes = useStyles();

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [address, setAddress] = useState();
  const [summary, setSummary] = useState();

  const [image, setImage] = useState(sample_image);
  const [imageUrl, setImageUrl] = useState("");

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

  const handleChangeAddress = (e) => {
    console.log(e.target.value);
    setAddress(e.target.value);
  };

  const handleChangeSummary = (e) => {
    console.log(e.target.value);
    setSummary(e.target.value);
  };

  const handleImageChange = (e) => {
    console.log("e.target.files[0] " + e.target.files[0]);
    console.log(URL.createObjectURL(e.target.files[0]));
    setImageUrl(URL.createObjectURL(e.target.files[0]));

    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    console.log("FormData : ", formData.get("file"));
    // api.post("/files/single", formData).then((res) => console.log(res));
  };

  const submit = (e) => {
    // navigate("/sidebar/cvTemplate")
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    // console.log(cvBuilderObject);
    let finalData = {
      personalDetails: {
        firstName,
        lastName,
        email,
        phoneNumber,
        address,
        summary,
        // profile: uploadImage,
      },
      employmentHistory: [
        {
          ...experiences,
        },
      ],

      education: [
        {
          ...education,
        },
      ],

      license: [
        {
          // ...license
          "school": license.school,
          "degree": license.degree
        },
      ],

      skills: [
        {
          ...skills
          // skill: skills.skill,
          // levelExpert: skills.levelExpert
        },
      ],
      
      addSection: [
        {
          ...section
          // addSection: section.addSection,
        },
      ],
    };
    console.log("==== final data =====");
    console.log(finalData);
    // console.log(education)
    // dispatch(fetchExperience(experience));
    finalData && dispatch(fetchCVBuilder(finalData, true));
  };

  return (
    <div className="laptop:ml-0 h-full mb-10 pl-10 pt-10 pr-10 rounded-tr-lg rounded-br-lg body-font font-maven bg-slate-100 w-full">
      {loading ? (
        <div className={classes.root} style={{ marginTop: "10px" }}>
          <LinearProgress color="secondary" />
        </div>
      ) : (
        ""
      )}
      <div className="flex flex-row ">
        <h1 className="text-2xl font-bold hidden laptop:block">
          Create New Curriculum Vitae
        </h1>
        <div className="w-auto laptop:ml-auto ml-5">
          <input
            type="file"
            className="hidden"
            id="upload-image"
            onChange={handleImageChange}
          ></input>
          <label for="upload-image">
            <img
              src={imageUrl ? imageUrl : image}
              className="rounded-lg cursor-pointer"
              style={{ height: "200px", width: "300px" }}
            ></img>
          </label>
        </div>
      </div>

      <h1 className="text-md laptop:text-lg desktop:text-xl font-bold mb-7">
        Personal Information
      </h1>

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
            onClick={() => navigate("/sidebar/resume")}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  backgroundColor: colors.content,
  // logoSize: myStyles.logoSize
};
