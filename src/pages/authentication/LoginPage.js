import React from "react";
import { colors } from "../../commons/colors/colors";

export default function LoginPage() {
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
            <p class="text-xl mt-6 text-center">Sign in</p>
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
                        id="username"
                        type="text"
                        placeholder="Username"
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
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                </div>
              </h1>
              <button
                style={styles}
                class="text-white py-1 px-8 rounded-md inline-flex justify-between content-center mt-16"
              >
                Sign in{" "}
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
                <a href="#" class="text-blue-800 underline underline-1">
                  Forgot password?
                </a>
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
