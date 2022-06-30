import React, { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import EditorContainer from "../components/EditorContainer";
import { colors } from "../commons/colors/colors";
import ExperienceComponent from "../components/CVBuilderComponent/ExperienceComponent";
import { useSelector } from "react-redux";
import EducationComponent from "../components/CVBuilderComponent/EducationComponent";
import LicensesComponent from "../components/CVBuilderComponent/LicensesComponent";
import SkillsComponent from "../components/CVBuilderComponent/SkillsComponent";
import AddSectionComponent from "../components/CVBuilderComponent/AddSectionComponent";
import { useNavigate } from "react-router-dom";
import sample_image from "../commons/images/sample image.jpg";

export default function CVBuilderPage() {
  const navigate = useNavigate();

  const payload = useSelector((state) => state);
  console.log("==> payload in CVBuilderPage");
  console.log(payload);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [summary, setSummary] = useState("");

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
    setImageUrl(URL.createObjectURL(e.target.files[0]));

    const formData = new FormData();
    formData.append("image", e.target.files[0]);
  };

  return (
    <div className="h-full mb-10 pl-10 pt-10 pr-10 rounded-tr-lg rounded-br-lg body-font font-maven bg-slate-100 w-full">
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
        <form>
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
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 block w-full p-2.5 dark:border-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                onChange={handleChangeLastName}
                type="text"
                id="last_name"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 block w-full p-2.5 dark:border-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                onChange={handleChangeEmail}
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 block w-full p-2.5 dark:border-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                onChange={handleChangePhoneNumber}
                type="tel"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 block w-full p-2.5 dark:border-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="123-45-678"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              />
            </div>
          </div>

          {/* Address */}
          <div className="mb-6">
            <label
              for="large-input"
              className="block mb-2 font-medium text-sm laptop:text-md desktop:text-lg dark:text-black"
            >
              Address
            </label>
            <textarea
              onChange={handleChangeAddress}
              type="text"
              id="large-input"
              className="block w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          {/* Summary */}
          <div className="mb-6">
            <label
              for="large-input-summary"
              className="block mb-2 font-medium text-sm laptop:text-md desktop:text-lg dark:text-black"
            >
              Summary
            </label>
            <textarea
              onChange={handleChangeSummary}
              type="text"
              id="large-input-summary"
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
            onClick={() => navigate("/sidebar/cvTemplate")}
          >
            Save
          </button>

          <button
            className="px-10 py-2 ml-3 text-sm laptop:text-md desktop:text-lg text-blue-600 bg-transparent border rounded-md hover:border-transparent"
            onClick={() => navigate("/")}
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
