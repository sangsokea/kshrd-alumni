import React from "react";
import { useNavigate } from "react-router-dom";
import { colors } from "../../commons/colors/colors";

export default function CreateNewPasswordPage() {
  const navigate = useNavigate();
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
            <p className="mt-6 text-xl text-center">Create new password</p>
            <p className="mt-8 text-center">
              Your new password must be different from previous used password.
            </p>
            <div className="mt-6 text-center">
              <h1 className="pt-8 border-b border-b-black">
                <div className="row">
                  <div className="grid grid-cols-3">
                    <svg
                      className="w-8 h-8 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                        d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                      />
                    </svg>

                    <div>
                      <input
                        className="w-full px-3 py-2 leading-tight text-center text-gray-700 focus:outline-none focus:shadow-outline bg-slate-50"
                        id="username"
                        type="text"
                        placeholder="Password"
                      />
                    </div>
                    {/* </form> */}
                  </div>
                </div>
              </h1>
              <h1 className="pt-8 border-b border-b-black">
                <div className="row">
                  <div className="grid grid-cols-3">
                    <svg
                      className="w-8 h-8 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                        d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                      />
                    </svg>

                    <div>
                      <input
                        className="w-full px-3 py-2 leading-tight text-center text-gray-700 focus:outline-none focus:shadow-outline bg-slate-50"
                        id="password"
                        type="password"
                        placeholder="Confirm password"
                      />
                    </div>
                  </div>
                </div>
              </h1>
              <button
                style={styles}
                className="inline-flex content-center justify-between px-8 py-1 mt-16 text-white rounded-md"
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
