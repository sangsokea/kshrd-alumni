import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { colors } from "../../commons/colors";
import OtpInput from "react-otp-input";
// import OTPInput from "otp-input-react";

export default function ConfirmPage() {
  const navigate = useNavigate();

  const [inputSecretCode, setInputSecretCode] = useState("");

  return (
    <body class="h-screen bg-slate-50">
      <form class="flex justify-center items-center w-full">
        <section class="text-gray-600 body-font font-maven">
          <div class="w-full max-w-xl container mx-auto ">
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
              <div>
                <svg
                  class="h-auto w-8 text-black flex items-center p-auto m-auto"
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
              </div>

              <p class="mt-4">
                Enter the 6 digit codes we sent you via email to continue
              </p>
              <div class="grid grid-cols-6 gap-4">
                <div class="border-b-2 border-b-black pb-1 pt-5 flex items-center">
                  <OtpInput
                    value={inputSecretCode}
                    onChange={setInputSecretCode}
                    OTPLength={6}
                    otpType="number"
                    disabled={false}
                    numInputs={6}
                    separator={<span style={{ width: "40px" }}></span>}
                    inputStyle={{
                      border: "1px solid transparent",
                      borderRadius: "8px",
                      width: "40px",
                      height: "40px",
                      fontSize: "24px",
                      color: "#000",
                      // fontWeight: "500",
                      caretColor: "blue",
                      marginLeft: "19px",
                      backgroundColor: "rgb(248 250 252)",
                    }}
                  />
                </div>
                <div class="border-b-2 border-b-black pb-1 pt-3"></div>
                <div class="border-b-2 border-b-black pb-1 pt-3"></div>
                <div class="border-b-2 border-b-black pb-1 pt-3"></div>
                <div class="border-b-2 border-b-black pb-1 pt-3"></div>
                <div class="border-b-2 border-b-black pb-1 pt-3"></div>
              </div>
              <p class="text-blue-800 mt-6">code expires in 00:56</p>
              <button
                style={styles}
                class="text-white py-1 px-8 rounded-md inline-flex justify-between content-center mt-6"
                onClick={() => navigate("/login")}
              >
                Continue{" "}
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
              <p class="mt-8">
                Didn't get the code?{" "}
                <a href="#" class="text-blue-800 underline underline-offset-1">
                  Resend code
                </a>
              </p>
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
