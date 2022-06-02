import React from "react";
import { colors } from "../../commons/colors";

export default function LoginPage() {
  return (
    <div class="w-full max-w-xs container mx-auto">
      <div
        style={styles}
        class=" p-6 text-xl text-white rounded-br-3xl justify-center"
      >
        <h1 style={{ textTransform: "uppercase" }} class="text-lg">
          welcome <br></br>to kshrd alumni
        </h1>
      </div>
      <p class="text-xl mt-6">Sign in</p>
      <div class="text-center mt-6">
        <h1 class="border-b-2 border-b-black pb-3 pt-8">
          <div class="row">
            <div class="grid grid-cols-3">
              <svg
                class="h-8 w-8 text-black"
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
                <circle cx="12" cy="7" r="4" />{" "}
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              </svg>
              <p>Username</p>
            </div>
          </div>
        </h1>
        <h1 class="border-b-2 border-b-black pb-3 pt-8">
          <div class="row">
            <div class="grid grid-cols-3">
              <svg
                class="h-8 w-8 text-black"
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
                <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
              </svg>
              <p>Pasword</p>
            </div>
          </div>
        </h1>
        <button class="bg-blue-500 text-white py-1 px-8 rounded-md inline-flex justify-between content-center mt-16">
          Sign in{" "}
          <span>
            <svg
              class="h-8 w-8 text-white pl-2"
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
          <a href="#">Forgot password?</a>
        </div>
      </div>

      {/* <div class="col-md-3">
        <svg width="100" height="100">
          <circle cx="50%" cy="50%" r="10" fill="white" />
        </svg>
      </div> */}
    </div>
  );
}

const styles = {
  backgroundColor: colors.content,
};
