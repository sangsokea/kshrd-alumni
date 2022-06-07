import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { colors } from "../../commons/colors/colors";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { fetchEmail } from "../../redux/actions/EmailAction";
import { fetchRegister } from "../../redux/actions/RegisterAction";
import { useFormik } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function RegisterPage() {
  const data = useSelector((state) => state?.email, shallowEqual);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const classes = useStyles();
  {
    console.log(
      `items ${data.items}, loading ${data.loading}, error ${data.error}`,
    );
  }

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
      // alert(JSON.stringify(values, null, 2));
      values.email
        ? dispatch(fetchEmail(values.email))
        : console.log("NO email entered");
    },
  });

  console.log();
  useEffect(() => {
    data.items ? navigate("/confirm") : navigate("/register");
  }, [data]);
  return (
    <body className="h-screen bg-slate-50">
      {data.loading ? (
        <div className={classes.root} style={{ marginTop: "10px" }}>
          <LinearProgress color="secondary" />
        </div>
      ) : (
        ""
      )}
      <h1>{data?.items?.email}</h1>
      <form
        onSubmit={formik.handleSubmit}
        className="flex justify-center items-center w-full"
      >
        <section className="text-gray-600 body-font font-maven">
          <div className="w-full max-w-xl container mx-auto">
            <div className="row mt-24">
              <div
                style={styles}
                className="p-6 text-xl text-white rounded-br-3xl justify-center"
              >
                <h1 style={{ textTransform: "uppercase" }} className="text-2xl">
                  welcome <br></br>to{" "}
                  <span className="font-bold">kshrd alumni</span>
                </h1>
              </div>
            </div>

            <div className="text-center mt-6">
              <p className="text-xl">Sign up</p>
              <p className="mt-8">Continue to Gmail</p>
              <h1 className="border-b border-b-black pb-2 pt-16">
                <div className="row">
                  <div className="grid grid-cols-3">
                    <svg
                      className="h-auto w-7 text-black"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="1"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <polyline points="3 9 12 15 21 9 12 3 3 9" />{" "}
                      <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />{" "}
                      <line x1="3" y1="19" x2="9" y2="13" />{" "}
                      <line x1="15" y1="13" x2="21" y2="19" />
                    </svg>
                    <div>
                      <input
                        className="w-full py-1 px-3 text-gray-700 focus:outline-none bg-slate-50 text-center"
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                      />
                    </div>
                  </div>
                </div>
              </h1>
            </div>

            <div className="mt-6">
              <a
                href="#"
                className="text-blue-800 underline underline-offset-1"
              >
                Forgot password?
              </a>
            </div>

            <div class="relative">
              <div class="absolute bottom-0 right-2 top-12">
                <button
                  style={styles}
                  class="text-white py-1 px-8 rounded-md inline-flex justify-between content-center"
                  type="submit"
                >
                  Next{" "}
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
                      <circle cx="12" cy="12" r="9" />{" "}
                      <line x1="16" y1="12" x2="8" y2="12" />{" "}
                      <line x1="16" y1="12" x2="12" y2="16" />{" "}
                      <line x1="16" y1="12" x2="12" y2="8" />
                    </svg>
                  </span>
                </button>
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

// const backgroundBody = {
//   backgroundColor: colors.
// }
