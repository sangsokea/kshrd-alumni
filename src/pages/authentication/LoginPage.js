import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { colors } from "../../commons/colors/colors";
import { useFormik } from "formik";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { fetchRegister } from "../../redux/actions/RegisterAction";
import { LinearProgress, makeStyles } from "@material-ui/core";
import { fetchLogin } from "../../redux/actions/LoginAction";
import { fetchIsAucthenticated } from "../../redux/actions/IsAuthenticationAction";
import { CUSTOM_ERROR } from "../../commons/notify/Notify";

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
  const isAuth = useSelector((state) => state?.isAuth, shallowEqual);

  const [toggle, setToggle] = useState(false);

  const dispatch = useDispatch();

  const classNamees = useStyles();

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
      dispatch(fetchLogin(email, password));
    },
  });

  useEffect(() => {
    isAuth && navigate("/");
  }, [isAuth]);

  React.useEffect(() => {
    data?.error && CUSTOM_ERROR(data.error);
  }, [data]);

  const onClickEyes = () => {
    setToggle(!toggle);
  };

  return (
    <body className="h-screen bg-slate-50">
      {data.loading ? (
        <div className={classNamees.root} style={{ marginTop: "10px" }}>
          <LinearProgress color="secondary" />
        </div>
      ) : (
        ""
      )}
      <form
        onSubmit={formik.handleSubmit}
        className="flex items-center justify-center w-full"
      >
        <section className="text-gray-600 body-font font-maven">
          <div className="container w-full max-w-xl mx-auto">
            <div className="mt-24 row">
              <div
                style={styles}
                className="justify-center p-6 text-xl text-white rounded-br-3xl"
              >
                <h1 style={{ textTransform: "uppercase" }} className="text-2xl">
                  welcome <br></br>to{" "}
                  <span className="font-bold">kshrd alumni</span>
                </h1>
              </div>
            </div>
            <p className="mt-6 text-xl text-center">Log In</p>
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
                <div className="text-red-600 text-[11px]">
                  {formik.errors.email}
                </div>
              ) : null}
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
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
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
              {/* error message */}
              {formik.errors.password ? (
                <div className="text-red-600 text-[11px]">
                  {formik.errors.password}
                </div>
              ) : null}
              <button
                type="submit"
                style={styles}
                className="inline-flex content-center justify-between px-10 py-2 mt-16 text-white rounded-md"
              >
                Log In{" "}
                <span>
                  <svg
                    className="w-8 h-auto pl-2 text-white"
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

              <div className="mt-6">
                <div className="mt-6">
                  <a
                    onClick={() => navigate("/reset")}
                    className="text-blue-800 underline cursor-pointer underline-1"
                  >
                    Forgot password?
                  </a>

                  <p className="mt-5">
                    Not registered yet?{" "}
                    <span>
                      <a
                        className="text-blue-800 underline cursor-pointer underline-1"
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
