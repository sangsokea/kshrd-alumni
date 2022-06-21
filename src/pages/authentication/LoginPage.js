import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { colors } from "../../commons/colors/colors";
import { useFormik } from "formik";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { fetchRegister } from "../../redux/actions/RegisterAction";
import { LinearProgress, makeStyles } from "@material-ui/core";
import { fetchLogin } from "../../redux/actions/LoginAction";
import { fetchIsAucthenticated } from "../../redux/actions/IsAuthenticationAction";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function LoginPage() {
  const navigate = useNavigate();
  const data = useSelector((state) => state?.email, shallowEqual);

  const [toggle, setToggle] = useState(false);

  const dispatch = useDispatch();

  const classes = useStyles();

  // custom validation
  const validate = (values) => {
    const errors = {};
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 6) {
      errors.password = "Must be 6 characters or more";
    } else if (values.password.length > 20) {
      errors.password = "Must be 20 characters or less";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    validate,
    onSubmit: ({ email, password }) => {
      //   console.log(values);
      console.log(data);
      //   alert(JSON.stringify(values, null, 2));
      // dispatch(fetchLogin(email, password));
      dispatch(fetchIsAucthenticated(true));
      navigate("/");
    },
  });

  const onClickEyes = () => {
    setToggle(!toggle);
  };

  return (
    <body class="h-screen bg-slate-50">
      {data.loading ? (
        <div className={classes.root} style={{ marginTop: "10px" }}>
          <LinearProgress color="secondary" />
        </div>
      ) : (
        ""
      )}
      <form
        onSubmit={formik.handleSubmit}
        class="flex justify-center items-center w-full"
      >
        <section class="text-gray-600 body-font font-maven">
          <div class="w-full max-w-xl container mx-auto">
            <div class="row mt-24">
              <div
                style={styles}
                class="p-6 text-xl text-white rounded-br-3xl justify-center"
              >
                <h1 style={{ textTransform: "uppercase" }} class="text-2xl">
                  welcome <br></br>to{" "}
                  <span class="font-bold">kshrd alumni</span>
                </h1>
              </div>
            </div>
            <p class="text-xl mt-6 text-center">Log In</p>
            <div class="text-center mt-6">
              <h1 class="border-b border-b-black pt-8">
                <div class="row">
                  <div class="grid grid-cols-3">
                    <svg
                      class="h-auto w-8 text-black"
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
                        class="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-50 text-center"
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        placeholder="Email"
                        onBlur={formik.handleBlur}
                      />
                    </div>

                    {/* </form> */}
                  </div>
                </div>
              </h1>
              {/* error message */}
              {formik.errors.email ? (
                <div class="text-red-600 text-[11px]">
                  {formik.errors.email}
                </div>
              ) : null}
              <h1 class="border-b border-b-black pt-8">
                <div class="row">
                  <div class="grid grid-cols-3">
                    <svg
                      class="h-auto w-8 text-black"
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
                        class="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-50 text-center"
                        id="password"
                        type={!toggle ? "password" : "text"}
                        name="password"
                        placeholder="Password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                      />
                    </div>

                    {/* eye toggle */}
                    <button
                      type="button"
                      class="flex justify-end"
                      onClick={() => onClickEyes()}
                    >
                      {!toggle ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-auto w-8 text-black justify-end"
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
                          class="h-auto w-8 text-black justify-end"
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
              {/* error message */}
              {formik.errors.password ? (
                <div class="text-red-600 text-[11px]">
                  {formik.errors.password}
                </div>
              ) : null}
              <button
                type="submit"
                style={styles}
                class="text-white py-1 px-8 rounded-md inline-flex justify-between content-center mt-16"
              >
                Log In{" "}
                <span>
                  <svg
                    class="h-auto w-8 text-white pl-2"
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
                    <rect x="5" y="11" width="14" height="10" rx="2" />{" "}
                    <circle cx="12" cy="16" r="1" />{" "}
                    <path d="M8 11v-5a4 4 0 0 1 8 0" />
                  </svg>
                </span>
              </button>

              <div class="mt-6">
                <div class="mt-6">
                  <a
                    onClick={() => navigate("/reset")}
                    class="text-blue-800 underline underline-1 cursor-pointer"
                  >
                    Forgot password?
                  </a>

                  <p class="mt-5">
                    Not registered yet?{" "}
                    <span>
                      <a
                        class="text-blue-800 underline underline-1 cursor-pointer"
                        onClick={() => navigate("/register")}
                      >
                        Create an Account
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </body>
  );
}

const styles = {
  backgroundColor: colors.content,
};
