import React, { useState, useEffect } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import EditorContainer from "../components/EditorContainer";
import { colors } from "../commons/colors/colors";
import ExperienceComponent from "../components/CVBuilderComponent/ExperienceComponent";

import EducationComponent from "../components/CVBuilderComponent/EducationComponent";
import LicensesComponent from "../components/CVBuilderComponent/LicensesComponent";
import SkillsComponent from "../components/CVBuilderComponent/SkillsComponent";
import AddSectionComponent from "../components/CVBuilderComponent/AddSectionComponent";
import { useLocation, useNavigate, useParams } from "react-router-dom";
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
import LanguageComponent from "../components/CVBuilderComponent/LanguageComponent";
import { CUSTOM_WARNING } from "../commons/notify/Notify";
import moment from "moment";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { YouTube } from "@material-ui/icons";
import { fetchUpdateUserByUuid } from "../redux/actions/UpdateUserByUuidAction";
import EditExperienceComponent from "../components/EditCVBuilderComponent/EditExperienceComponent";
import EditEducationComponent from "../components/EditCVBuilderComponent/EditEducationComponent";
import EditLanguageComponent from "../components/EditCVBuilderComponent/EditLanguageComponent";
import EditSkillsComponent from "../components/EditCVBuilderComponent/EditSkillsComponent";
import EditLicensesComponent from "../components/EditCVBuilderComponent/EidtLicensesComponent";
import EditSectionComponent from "../components/EditCVBuilderComponent/EditSectionComponent";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  generation: Yup.number()
    .min(1, "value > 1")
    .max(50, "invalid generation")
    .required("Required"),
  dob: Yup.string()
    .required("DOB is Required")
    .test("DOB", "Please choose a valid date of birth", (value) => {
      return moment().diff(moment(value), "years") >= 10;
    }),
  pob: Yup.string()
    .min(4, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  nationality: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required"),
  address: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function EditCVBuilderPage() {
  const ref = React.useRef(null);
  const updateUser = useSelector((state) => state?.updateUserByUuid);

  const inputFile = React.useRef(null);
  const inputFistNameRef = React.useRef(null);
  const [isFirstNameFocus, setIsFirstNameFocus] = useState(false);

  const scrollRef = React.useRef(null);
  const executeScroll = () => scrollToRef(scrollRef);
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
  const languages = useSelector((state) => state?.languages, shallowEqual);
  const section = useSelector((state) => state?.addSection, shallowEqual);
  const uploadImage = useSelector((state) => state?.uploadImage, shallowEqual);
  const cvBuilder = useSelector((state) => state?.cvBuilder, shallowEqual);

  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [generation, setgeneration] = useState("");
  const [nationality, setNationality] = useState("");
  const [pob, setpob] = useState("");
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

  const [gender, setgender] = useState("");

  const [dob, setdob] = useState("");

  const [isPublic, setIsPublic] = useState(true);

  const [finalData, setFinalData] = useState({});

  const handleChangeGender = (e) => {
    console.log(e.target.value);
    setgender(e.target.value);
  };

  const handleChangeSummary = (e) => {
    console.log(e.target.value);
    setSummary(e.target.value);
  };

  const handleImageChange = (e) => {
    executeScroll();
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

  const location = useLocation();

  useEffect(() => {
    setEmail(location.state.profileDetails?.personalDetails?.email);
    setTitle(location.state.profileDetails?.cvTitle);
    setFirstName(location.state.profileDetails?.personalDetails?.firstName);
    setLastName(location.state.profileDetails?.personalDetails?.lastName);
    setgender(location.state.profileDetails?.personalDetails?.gender);
    setdob(location.state.profileDetails?.personalDetails?.dob);
    setpob(location.state.profileDetails?.personalDetails?.pob);
    setgeneration(location.state.profileDetails?.personalDetails?.generation);
    setPhoneNumber(location.state.profileDetails?.personalDetails?.phoneNumber);
    setAddress(location.state.profileDetails?.personalDetails?.address);
    setNationality(location.state.profileDetails?.personalDetails?.nationality);
    setSummary(location.state.profileDetails?.personalDetails?.summary);
    setImage(location.state.profileDetails?.personalDetails?.profile);

    console.log("Data : ", location.state);
  }, [location]);

  useEffect(() => {
    setImageUrl(location.state.profileDetails?.personalDetails?.profile);
  });

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
  const handleSubmit = (value) => {
    executeScroll();
    if (imageUrl !== null && imageUrl !== undefined) {
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
          let result = {
            cvTitle: title,
            personalDetails: {
              gender,
              ...value,
              summary,
              profile: imageUrl,
            },

            employmentHistory: experiences,

            education: education,

            license: license,

            skill: skills,

            languages: languages,

            addSection: section,
          };
          console.log("==== final data result =====", result);

          console.log(result, isPublic, location.state?.uuid);
          if (location.state?.uuid) {
            result &&
              dispatch(
                fetchUpdateUserByUuid(result, isPublic, location.state?.uuid),
              );
          } else {
            let localUuid = localStorage.getItem("currentUuid");
            const url = location.pathname;
            const matches = url?.match("/sidebar/editNewCV/");
            const uuid = url?.split(matches);
            

            result &&
              dispatch(
                fetchUpdateUserByUuid(
                  result,
                  isPublic,
                  localUuid ? localUuid : uuid[1],
                ),
              );
          }
        }
      });
    } else {
      CUSTOM_WARNING("Please upload your profile!");
    }
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
      {(uploadImage?.loading || updateUser?.loading) && (
        <div className="absolute top-2/4 left-2/4">
          <img src="https://i.stack.imgur.com/hzk6C.gif" />
        </div>
      )}
      <div
        ref={scrollRef}
        style={{
          opacity: uploadImage?.loading || updateUser?.loading ? "40%" : "100%",
        }}
        className="laptop:ml-0 h-full mb-10 pl-10 pt-10 pr-10 rounded-tr-lg rounded-br-lg body-font font-maven bg-slate-100 w-full"
      >
        <div className="flex flex-col ">
          <form className="flex justify-start laptop:w-1/2 w-full relative my-5">
            <span
              onClick={() => {
                ref.current.focus();
              }}
              className="absolute font-medium text-lg text-ccon hover:text-blue-500 flex transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </span>
            <div className="p-5 w-full h-8">
              <input
                ref={ref}
                className="text-2xl font-bold laptop:block mr-2 bg-transparent w-full"
                id="title"
                value={title}
                type="text"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </form>

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
                  backgroundImage: `url('${imageUrl ? imageUrl : image}')`,
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

        <Formik
          enableReinitialize
          initialValues={{
            firstName: firstName,
            lastName: lastName,
            generation: generation,
            dob: dob,
            pob: pob,
            email: email,
            nationality: nationality,
            phoneNumber: phoneNumber,
            address: address,
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
            setFinalData({ ...values });
            handleSubmit(values);
          }}
        >
          {({ errors, touched, values }) => (
            <>
              <Form className="grid gap-6 mt-2 mb-5 laptop:grid-cols-2">
                {/* firt name */}
                <div>
                  <label
                    for="first_name"
                    className="block mb-2 font-medium text-sm laptop:text-md desktop:text-lg dark:text-black"
                  >
                    First name
                  </label>
                  <Field
                    className="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="firstName"
                  />
                  {errors.firstName && touched.firstName ? (
                    <div className="text-red-600">{errors.firstName}</div>
                  ) : null}
                </div>

                {/* last name */}
                <div>
                  <label
                    for="last_name"
                    className="block mb-2 font-medium text-sm laptop:text-md desktop:text-lg dark:text-black"
                  >
                    Last name
                  </label>
                  <Field
                    className="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="lastName"
                  />
                  {errors.lastName && touched.lastName ? (
                    <div className="text-red-600">{errors.lastName}</div>
                  ) : null}
                </div>

                <div>
                  {/* gender */}
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
                  <Field
                    className="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="generation"
                    type="number"
                    placeholder="10"
                  />
                  {errors.generation && touched.generation ? (
                    <div className="text-red-600">{errors.generation}</div>
                  ) : null}
                </div>

                {/* date of birth */}
                <div>
                  <label
                    for="dob"
                    className="block mb-2 font-medium text-sm laptop:text-md desktop:text-lg dark:text-black"
                  >
                    Date of Birth
                  </label>

                  <Field
                    className="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="dob"
                    type="date"
                  />
                  {errors.dob && touched.dob ? (
                    <div className="text-red-600">{errors.dob}</div>
                  ) : null}
                </div>

                {/* Place of Birth */}
                <div>
                  <label
                    for="placeOfBirth"
                    className="block mb-2 font-medium text-sm laptop:text-md desktop:text-lg dark:text-black"
                  >
                    Place of Birth
                  </label>

                  <Field
                    className="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="pob"
                    type="text"
                    placeholder="Pailin"
                  />
                  {errors.pob && touched.pob ? (
                    <div className="text-red-600">{errors.pob}</div>
                  ) : null}
                </div>

                {/* Email */}
                <div>
                  <label
                    for="email"
                    className="block mb-2 font-medium text-sm laptop:text-md desktop:text-lg dark:text-black"
                  >
                    Email
                  </label>

                  <Field
                    className="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="email"
                    type="text"
                    placeholder="example@gmail.com"
                  />
                  {errors.email && touched.email ? (
                    <div className="text-red-600">{errors.email}</div>
                  ) : null}
                </div>

                {/* phone number */}
                <div>
                  <label
                    for="phone"
                    className="block mb-2 font-medium text-sm laptop:text-md desktop:text-lg dark:text-black"
                  >
                    Phone number
                  </label>

                  <Field
                    className="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="phoneNumber"
                    type="number"
                    placeholder="0987654321"
                  />
                  {errors.phoneNumber && touched.phoneNumber ? (
                    <div className="text-red-600">{errors.phoneNumber}</div>
                  ) : null}
                </div>

                {/* Nationality */}
                <div>
                  <label
                    for="nationality"
                    className="block mb-2 font-medium text-sm laptop:text-md desktop:text-lg dark:text-black"
                  >
                    Nationality
                  </label>

                  <Field
                    className="block w-full border p-2.5 text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="nationality"
                    value={nationality}
                    type="text"
                    placeholder="Khmer"
                  />
                  {errors.nationality && touched.nationality ? (
                    <div className="text-red-600">{errors.nationality}</div>
                  ) : null}
                </div>

                <div></div>

                {/* address */}
                <div className="mb-6">
                  <label
                    // for="large-input"
                    className="block mb-2 font-medium text-sm laptop:text-md desktop:text-lg dark:text-black"
                  >
                    Address
                  </label>

                  <Field
                    className="block w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 bg-gray-50 sm:text-md dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="address"
                    // value={address}
                    type="text"
                    placeholder="No.12, St 2004, Khan sansok, Phnom Penh"
                  />
                  {errors.address && touched.address ? (
                    <div className="text-red-600">{errors.address}</div>
                  ) : null}
                </div>

                <div></div>

                {/* summary */}
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

                <div></div>

                {/* component */}
                <EditExperienceComponent />

                <EditEducationComponent />

                <EditLicensesComponent />

                <EditSkillsComponent />

                <EditLanguageComponent />

                <EditSectionComponent />

                <div className="">
                  <div className="laptop:ml-auto">
                    <button
                      className="px-12 py-2 text-sm laptop:text-md desktop:text-lg text-white bg-transparent border rounded-md hover:border-transparent"
                      style={styles}
                      // onClick={() => navigate("/sidebar/cvTemplate")}
                      type="submit"
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
              </Form>
            </>
          )}
        </Formik>
      </div>
    </>
  );
}

const styles = {
  backgroundColor: colors.content,
  // logoSize: myStyles.logoSize
};
