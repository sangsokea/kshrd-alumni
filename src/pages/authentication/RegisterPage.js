import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { colors } from "../../commons/colors";

export default function RegisterPage() {
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
              <p class="text-xl">Sign up</p>
              <p class="mt-8">Continue to Gmail</p>
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
            </div>

            <div class="mt-6">
              <a href="#" class="text-blue-800 underline underline-offset-1">
                Forgot password?
              </a>
            </div>

            <div class="relative">
              <div class="absolute bottom-0 right-2 top-12">
                <button
                  style={styles}
                  class="text-white py-1 px-8 rounded-md inline-flex justify-between content-center"
                  onClick={() => navigate("/confirm")}
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
