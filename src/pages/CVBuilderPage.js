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

  const [image, setImage] = useState(
    "https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png"
  );
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
    <div class="body-font font-maven p-10 bg-slate-100 rounded-tr-lg rounded-br-lg h-full">
      <div class="flex flex-row ">
        <h1 class="font-bold text-2xl">Create New Curriculum Vitae</h1>
        <div class="w-64 ml-auto mt-0 ">
          <img src={imageUrl ? imageUrl : image} class="rounded-lg" style={{height: "200px"}}></img>
          <input
            type="file"
            class="hidden"
            id="upload-image"
            onChange={handleImageChange}
          ></input>
          <button
            type="button"
            class="bg-blue-500 h-[50px] w-full rounded-md mt-2 text-white"
          >
            <label class="w-full h-auto block cursor-pointer" for="upload-image">
              Upload Image
            </label>
          </button>
        </div>
      </div>

      <h1 class="font-bold text-xl">Personal Information</h1>

      <div>
        <form>
          <div class="grid gap-6 mb-6 lg:grid-cols-2 mt-2">
            {/* First Name */}
            <div>
              <label
                for="first_name"
                class="block mb-2 text-md font-medium dark:text-black"
              >
                First name
              </label>
              <input
                class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 block w-full p-2.5 dark:border-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                class="block mb-2 text-md font-medium dark:text-black"
              >
                Last name
              </label>
              <input
                onChange={handleChangeLastName}
                type="text"
                id="last_name"
                class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 block w-full p-2.5 dark:border-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Doe"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label
                for="email"
                class="block mb-2 text-md font-medium dark:text-black"
              >
                Email
              </label>
              <input
                onChange={handleChangeEmail}
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 block w-full p-2.5 dark:border-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="john.doe@company.com"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                for="phone"
                class="block mb-2 text-md font-medium dark:text-black"
              >
                Phone number
              </label>
              <input
                onChange={handleChangePhoneNumber}
                type="tel"
                id="phone"
                class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 block w-full p-2.5 dark:border-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="123-45-678"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              />
            </div>
          </div>

          {/* Address */}
          <div class="mb-6">
            <label
              for="large-input"
              class="block mb-2 text-md font-medium dark:text-black"
            >
              Address
            </label>
            <textarea
              onChange={handleChangeAddress}
              type="text"
              id="large-input"
              class="focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 block p-4 w-full bg-gray-50 rounded-lg border border-gray-300 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          {/* Summary */}
          <div class="mb-6">
            <label
              for="large-input-summary"
              class="mb-2 text-md font-medium dark:text-black flex flex-row"
            >
              Summary
            </label>
            <textarea
              onChange={handleChangeSummary}
              type="text"
              id="large-input-summary"
              class="focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 block p-4 w-full bg-gray-50 rounded-lg border border-gray-300 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <ExperienceComponent />

          <EducationComponent />

          <LicensesComponent />

          <SkillsComponent />

          <AddSectionComponent />
        </form>
      </div>

      <div class="flex flex-row">
        <div class="ml-auto ">
          <button class="px-12 text-lg py-2 bg-blue-600 text-white rounded-md mr-5" onClick={() => navigate("/sidebar/cvTemplate")}>
            Save
          </button>
          <button class="px-10 text-lg py-2 border border-blue-600 text-blue-600 rounded-md" onClick={() => navigate("/")}>
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
