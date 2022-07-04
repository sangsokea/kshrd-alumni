import React from "react";
import { useNavigate } from "react-router-dom";
import { colors } from "../../commons/colors/colors";
import { useFormik } from "formik";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { fetchEmail } from "../../redux/actions/EmailAction";

export default function ResetPasswordPage() {
  const navigate = useNavigate();
  const data = useSelector((state) => state?.email, shallowEqual);
  const dispatch = useDispatch()
  
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
      email && dispatch(fetchEmail(email));
      email && localStorage.setItem('email', email)
    },
  });

  return (
    <body className="h-screen bg-slate-50">
      <form className="flex items-center justify-center w-full">
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
              <p className="text-xl">Reset Password</p>
              <p className="mt-8">
                Enter the email associated with your account and we'll send 6
                digits to your email to reset your password.
              </p>
              <h1 className="pt-16 pb-2 border-b border-b-black">
                <div className="row">
                  <div className="grid grid-cols-3">
                    <svg
                      className="h-auto text-black w-7"
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
                      <polyline points="3 9 12 15 21 9 12 3 3 9" />{" "}
                      <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />{" "}
                      <line x1="3" y1="19" x2="9" y2="13" />{" "}
                      <line x1="15" y1="13" x2="21" y2="19" />
                    </svg>
                    <div>
                      <input
                        className="w-full px-3 py-1 text-center text-gray-700 focus:outline-none bg-slate-50"
                        id="email"
                        type="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                </div>
              </h1>
              <button
                style={styles}
                className="inline-flex content-center justify-between px-10 py-2 mt-16 text-white rounded-md"
                onClick={() => navigate("/createNewPassword")}
              >
                Reset Password{" "}
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
