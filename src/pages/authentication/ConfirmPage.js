import React from "react";
import { useNavigate } from "react-router-dom";
import { colors } from "../../commons/colors";

export default function ConfirmPage() {
  const navigate = useNavigate();
  return (
    <div>
      <div class="w-full max-w-xs container mx-auto">
        <div
          style={styles}
          class=" p-6 text-xl text-white rounded-br-3xl justify-center"
        >
          <h1 style={{ textTransform: "uppercase" }} class="text-lg">
            welcome <br></br>to kshrd alumni
          </h1>
        </div>
        <div class="text-center mt-6 ">
          <svg
            class="h-8 w-8 text-black"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />{" "}
            <polyline points="22,6 12,13 2,6" />
          </svg>
          <p class="mt-8">
            Enter the 6 digit codes we sent you via email to continue
          </p>
          <div class="grid grid-cols-6 gap-4">
            <p class="border-b-2 border-b-black pb-3 pt-8"></p>
            <p class="border-b-2 border-b-black pb-3 pt-4"></p>
            <p class="border-b-2 border-b-black pb-3 pt-4"></p>
            <p class="border-b-2 border-b-black pb-3 pt-4"></p>
            <p class="border-b-2 border-b-black pb-3 pt-4"></p>
            <p class="border-b-2 border-b-black pb-3 pt-4"></p>
          </div>
          <p class="text-blue-500 mt-6">code expires in 00:56</p>
          <button class="bg-blue-500 text-white py-1 px-8 rounded-md inline-flex justify-between content-center mt-6" onClick={() => navigate("/login")}>
            CONTINUE{" "}
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
                <circle cx="12" cy="12" r="9" />{" "}
                <line x1="16" y1="12" x2="8" y2="12" />{" "}
                <line x1="16" y1="12" x2="12" y2="16" />{" "}
                <line x1="16" y1="12" x2="12" y2="8" />
              </svg>
            </span>
          </button>
          <p class="mt-8">
            Didn't get the code? <a href="#">Resend code</a>
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  backgroundColor: colors.content,
};
