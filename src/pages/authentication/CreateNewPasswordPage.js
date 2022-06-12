import React from "react";
import { useNavigate } from "react-router-dom";
import { colors } from "../../commons/colors/colors";

export default function CreateNewPasswordPage() {
  const navigate = useNavigate();
  return (
    <body class="h-screen bg-slate-50">
      <form class="flex justify-center items-center w-full">
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
            <p class="text-xl mt-6 text-center">Create new password</p>
            <p className="mt-8 text-center">
              Your new password must be different from previous used password.
            </p>
            <div class="text-center mt-6">
              <h1 class="border-b border-b-black pt-8">
                <div class="row">
                  <div class="grid grid-cols-3">
                    <svg
                      class="h-8 w-8 text-black"
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
                        class="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-50 text-center"
                        id="username"
                        type="text"
                        placeholder="Password"
                      />
                    </div>
                    {/* </form> */}
                  </div>
                </div>
              </h1>
              <h1 class="border-b border-b-black pt-8">
                <div class="row">
                  <div class="grid grid-cols-3">
                    <svg
                      class="h-8 w-8 text-black"
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
                        class="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-50 text-center"
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
                class="text-white py-1 px-8 rounded-md inline-flex justify-between content-center mt-16"
                onClick={() => navigate("/createNewPassword")}
              >
                Reset Password{" "}
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
