import React, { useState } from "react";
import { colors } from "../commons/colors/colors";
import sample_image from "../commons/images/sample image.jpg";
import { fetchUploadImage } from "../redux/actions/UploadImageAction";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchChangeUserProfile } from "../redux/actions/ChangeUserProfileAction";
import Swal from "sweetalert2";
import { CUSTOM_ERROR, CUSTOM_WARNING } from "../commons/notify/Notify";
import { fetchforgotPassword } from "../redux/actions/ForgetPasswordAction";
import { fetchChangeUsername } from "../redux/actions/ChangeUserNameAction";

export default function AccountSettingPage() {
  const inputFile = React.useRef(null);
  const submitUsernameRef = React.useRef(null);
  const submitPassRef = React.useRef(null);
  const [changePassword, setChangePassword] = useState(false);
  const data = useSelector((state) => state?.email, shallowEqual);

  const [image, setImage] = useState(sample_image);
  const [imageUrl, setImageUrl] = useState("");
  const dispatch = useDispatch();
  const uploadImage = useSelector((state) => state?.uploadImage, shallowEqual);
  const [toggle, setToggle] = useState(false);
  const [isChangePass, setisChangePass] = useState(false);
  const [isChangeUsername, setisChangeUsername] = useState(true);
  const [isChangeProfile, setisChangeProfile] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [conFirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    password: "",
    conFirmPassword: "",
    username: "",
  });

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
        navigate("/");
      }
    });
  };

  const onClickEyes = () => {
    setToggle(!toggle);
  };

  const handleSubmit = () => {
    if (isChangeProfile) {
      if (!imageUrl) {
        CUSTOM_WARNING("There is no url image");
      } else
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
            imageUrl && dispatch(fetchChangeUserProfile(imageUrl));
          }
        });
    }
    if (isChangePass) {
      let localPassword = "";
      let localConfirmPassword = "";
      if (!password) {
        CUSTOM_WARNING("Required password");
      } else if (password.length < 6) {
        CUSTOM_WARNING("Must be 6 characters or more");
      } else if (password.length > 20) {
        CUSTOM_WARNING("Must be 20 characters or less");
      } else {
        localPassword = password;
      }

      if (!conFirmPassword) {
        CUSTOM_WARNING("Required confirm password");
      } else if (conFirmPassword.length < 6) {
        CUSTOM_WARNING("Must be 6 characters or more");
      } else if (conFirmPassword.length > 20) {
        CUSTOM_WARNING("Must be 20 characters or less");
      } else {
        localConfirmPassword = conFirmPassword;
      }

      if (localConfirmPassword && localPassword) {
        if (localConfirmPassword === localPassword) {
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
              let localEmail = localStorage.getItem("email");
              let email = data?.items?.email;
              email
                ? dispatch(fetchforgotPassword(email, password, false))
                : dispatch(fetchforgotPassword(localEmail, password, false));
            }
          });
        } else {
          CUSTOM_ERROR("Code not match");
        }
      }
    }
    if (isChangeUsername) {
      if (!username) {
        CUSTOM_WARNING("Required username");
      } else if (!/^[a-z A-Z]{3,}$/i.test(username)) {
        CUSTOM_WARNING(
          "Must not contain any special charactor, number and more than 3 charactor",
        );
      } else if (username.length > 30) {
        CUSTOM_WARNING("Must be 30 characters or less");
      } else {
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
            dispatch(fetchChangeUsername(username));
          }
        });
      }
    }
  };

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    console.log("e.target.files[0] " + e.target.files[0]);
    // console.log(URL.createObjectURL(e.target.files[0]));
    // setImageUrl(URL.createObjectURL(e.target.files[0]));

    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    console.log("FormData : ", formData.get("file"));
    console.log(formData);
    dispatch(fetchUploadImage(e.target.files[0], "account"));
    // formData && setformData(formData)
    // api.post("/files/single", formData).then((res) => console.log(res));
  };

  React.useEffect(() => {
    let reduxImage = uploadImage?.items?.account?.fileUrl;
    let images = localStorage.getItem("images");
    let localImage = JSON.parse(images);

    if (localImage) {
      let finalImage = localImage?.account?.fileUrl;
      console.log("reduxImage: " + reduxImage);
      console.log("localImage: " + finalImage);
      setImageUrl(reduxImage ?? finalImage);
    }
  }, [uploadImage, imageUrl, window.localStorage.onChange]);

  return (
    <>
      <div className="laptop:ml-0 h-full mb-10 pl-10 pt-10 pr-10 rounded-tr-lg rounded-br-lg body-font font-maven bg-slate-100 w-full">
        <div className="ml-5 mt-0 flex flex-wrap justify-between">
          <div className="laptop:mt-10 laptop:mb-20 mb-5 text-lg laptop:text-xl desktop:text-4xl font-bold order-2 flex-1 laptop:mx-10">
            <p className="pt-10 " style={textStyle}>
              ACCOUNT SETTING
            </p>

            <div className="mt-5 laptop:mt-20 flex flex-col justify-between h-1/3 ">
              <button
                onClick={() => {
                  setisChangePass(false);
                  setisChangeProfile(false);
                  setisChangeUsername(true);
                }}
                type="button"
                class={
                  !isChangeUsername
                    ? "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800 active:bg-blue-800 focus:bg-blue-800 focus:text-white"
                    : "animate-bounce text-white bg-blue-800 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800 active:bg-blue-800 focus:bg-blue-800 focus:text-white"
                }
              >
                Change Username
              </button>
              <button
                onClick={() => {
                  setisChangePass(true);
                  setisChangeProfile(false);
                  setisChangeUsername(false);
                }}
                type="button"
                class={
                  !isChangePass
                    ? "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800 active:bg-blue-800 focus:bg-blue-800 focus:text-white"
                    : "animate-bounce text-white bg-blue-800 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800 active:bg-blue-800 focus:bg-blue-800 focus:text-white"
                }
              >
                Change Password
              </button>
              <button
                onClick={() => {
                  setisChangePass(false);
                  setisChangeProfile(true);
                  setisChangeUsername(false);
                }}
                type="button"
                class={
                  !isChangeProfile
                    ? "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800 active:bg-blue-800 focus:bg-blue-800 focus:text-white"
                    : "animate-bounce text-white bg-blue-800 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800 active:bg-blue-800 focus:bg-blue-800 focus:text-white"
                }
              >
                Change Profile
              </button>
            </div>
          </div>
        </div>
        {/* form */}
        {isChangePass && (
          <form
            id="form1"
            ref={submitPassRef}
            // onSubmit={validate.handleSubmit}
            className="flex items-center justify-center w-full"
          >
            <section className="text-gray-600 body-font font-maven">
              <div className="container w-full max-w-xl mx-auto">
                <p className="mt-6 text-xl text-center">Change Password</p>

                <div className="mt-6 text-center">
                  {/* new password */}
                  <h1 className="pt-8 border-b border-b-black">
                    <div className="row">
                      <div className="grid grid-cols-3">
                        <svg
                          className="w-8 h-auto text-black"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="1"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          {" "}
                          <path stroke="none" d="M0 0h24v24H0z" />{" "}
                          <rect x="5" y="11" width="14" height="10" rx="2" />{" "}
                          <circle cx="12" cy="16" r="1" />{" "}
                          <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
                        </svg>
                        <div>
                          <input
                            className="w-full px-3 py-2 leading-tight text-center text-gray-700 focus:outline-none focus:shadow-outline bg-slate-50"
                            id="password"
                            type={!toggle ? "password" : "text"}
                            name="password"
                            placeholder="Password"
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                            value={password}
                          />
                        </div>

                        {/* eye toggle */}
                        <button
                          type="button"
                          className="flex justify-end"
                          onClick={() => onClickEyes()}
                        >
                          {!toggle ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="justify-end w-8 h-auto text-black"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              stroke-width="1"
                              stroke="currentColor"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="justify-end w-8 h-auto text-black"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              stroke-width="1"
                              stroke="currentColor"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>
                  </h1>

                  {/* confirm password */}
                  <h1 className="pt-8 border-b border-b-black">
                    <div className="row">
                      <div className="grid grid-cols-3">
                        <svg
                          className="w-8 h-auto text-black"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="1"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          {" "}
                          <path stroke="none" d="M0 0h24v24H0z" />{" "}
                          <rect x="5" y="11" width="14" height="10" rx="2" />{" "}
                          <circle cx="12" cy="16" r="1" />{" "}
                          <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
                        </svg>
                        <div>
                          <input
                            className="w-full px-3 py-2 leading-tight text-center text-gray-700 focus:outline-none focus:shadow-outline bg-slate-50"
                            id="confirmPassword"
                            type={!toggle ? "password" : "text"}
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            onChange={(e) => {
                              setConfirmPassword(e.target.value);
                            }}
                            value={conFirmPassword}
                          />
                        </div>

                        {/* eye toggle */}
                        <button
                          type="button"
                          className="flex justify-end"
                          onClick={() => onClickEyes()}
                        >
                          {!toggle ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="justify-end w-8 h-auto text-black"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              stroke-width="1"
                              stroke="currentColor"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="justify-end w-8 h-auto text-black"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              stroke-width="1"
                              stroke="currentColor"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>
                  </h1>
                </div>
              </div>
            </section>
          </form>
        )}

        {isChangeUsername && (
          <form
            ref={submitUsernameRef}
            // onSubmit={validate1.handleSubmit}
            className="flex items-center justify-center w-full"
          >
            <section className="text-gray-600 body-font font-maven">
              <div className="container w-full max-w-xl mx-auto">
                <p className="mt-6 text-xl text-center">Change Username</p>
                <div className="mt-6 text-center">
                  <h1 className="pt-8 border-b border-b-black">
                    <div className="row">
                      <div className="grid grid-cols-3">
                        <svg
                          className="w-8 h-auto text-black"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="1"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          {" "}
                          <path stroke="none" d="M0 0h24v24H0z" />{" "}
                          <circle cx="12" cy="7" r="4" />{" "}
                          <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                        </svg>
                        <div>
                          <input
                            className="w-full px-3 py-2 leading-tight text-center text-gray-700 focus:outline-none focus:shadow-outline bg-slate-50"
                            id="username"
                            name="username"
                            type="username"
                            onChange={(e) => {
                              setUsername(e.target.value);
                            }}
                            value={username}
                            placeholder="Username"
                          />
                        </div>

                        {/* </form> */}
                      </div>
                    </div>
                  </h1>
                </div>
              </div>
            </section>
          </form>
        )}

        {isChangeProfile && (
          <div>
            <h1 className="text-2xl font-bold text-center my-5">
              Account Profile
            </h1>
            <div className="w-auto laptop:mt-10 laptop:mb-20 order-1 flex justify-center">
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
                  upload image
                </label>
                {!imageUrl && (
                  <label class="rounded-2xl  cursor-pointer opacity- absolute inset-0 z-10 flex justify-center items-center text-3xl bg-gray-600 bg-opacity-75 text-white font-semibold">
                    upload image
                  </label>
                )}
              </div>
            </div>
          </div>
        )}

        {/* button */}
        <div className="flex flex-row laptop:justify-end laptop:mt-25 mt-10 ml-5">
          <div className="">
            <button
              onClick={handleSubmit}
              className="mb-10 laptop:mb-0 laptop:ml-72 px-12 py-2 text-sm laptop:text-md desktop:text-lg text-white bg-transparent border rounded-md hover:border-transparent"
              style={styles}
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="px-10 py-2 mt-5 laptop:mt-10 ml-3 text-sm laptop:text-md desktop:text-lg text-blue-600 bg-transparent border rounded-md hover:border-transparent"
            >
              Back
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

const textStyle = {
  color: colors.content,
};
