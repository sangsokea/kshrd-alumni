import React from "react";
import { useNavigate } from "react-router-dom";
import { colors } from "../../commons/colors/colors";

export default function ResetPasswordPage() {
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

            <div class="text-center mt-6">
              <p class="text-xl">Reset Password</p>
              <p class="mt-8">
                Enter the email associated with your account and we'll send 6
                digits to your email to reset your password.
              </p>
              <h1 class="border-b border-b-black pb-2 pt-16">
                <div class="row">
                  <div class="grid grid-cols-3">
                    <svg
                      class="h-auto w-7 text-black"
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
                        class="w-full py-1 px-3 text-gray-700 focus:outline-none bg-slate-50 text-center"
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