import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { colors } from "../../commons/colors/colors";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { fetchEmail } from "../../redux/actions/EmailAction";
import { fetchRegister } from "../../redux/actions/RegisterAction";
import { useFormik } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { fetchIsAucthenticated } from "../../redux/actions/IsAuthenticationAction";

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

  // custom validation
  const validate = (values) => {
    const errors = {};
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
      email: "",
    },
    validate,
    onSubmit: ({ email }) => {
      //   console.log(values);
      console.log(data);
      //   alert(JSON.stringify(values, null, 2));
      // dispatch(fetchLogin(email, password));
      // dispatch(fetchIsAucthenticated(true));
      navigate("/confirm");
    },
  });

  // console.log();
  // useEffect(() => {
  //   data.items
  //     ? navigate("/confirm", { state: { data: data?.items ?? null } })
  //     : navigate("/register");
  // }, [data]);
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

            <div className="mt-6 text-center">
              <p className="text-xl">Sign Up</p>
              <p className="mt-8">Continue to Gmail</p>
              <h1 className="pt-16 pb-2 border-b border-b-black">
                <div className="row">
                  <div className="grid grid-cols-3">
                    <svg
                      className="h-auto text-black w-7"
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
                        className="w-full px-3 py-1 text-center text-gray-700 focus:outline-none bg-slate-50"
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        placeholder="Email"
                      />
                    </div>
                  </div>
                </div>
              </h1>
              <button
                style={styles}
                className="inline-flex content-center justify-between px-10 py-2 mt-16 text-white rounded-md"
                type="submit"
              >
                Next{" "}
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
                    <circle cx="12" cy="12" r="9" />{" "}
                    <line x1="16" y1="12" x2="8" y2="12" />{" "}
                    <line x1="16" y1="12" x2="12" y2="16" />{" "}
                    <line x1="16" y1="12" x2="12" y2="8" />
                  </svg>
                </span>
              </button>
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
