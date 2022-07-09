import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { colors } from "../../commons/colors/colors";
import OtpInput from "react-otp-input";
import Countdown from "react-countdown";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
// import OTPInput from "otp-input-react";
import { ToastContainer, toast } from "react-toastify";
import { fetchEmail } from "../../redux/actions/EmailAction";
import { CUSTOM_ERROR } from "../../commons/notify/Notify";
import { LoadingLinePrimary } from "../../components/LoadingLine";

const Completionist = () => <span>Code is expired!</span>;
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    );
  }
};
const getLocalStorageValue = (s) => localStorage.getItem(s);

export default function ConfirmPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { loading, items } = useSelector((state) => state?.email, shallowEqual);

  const [inputSecretCode, setInputSecretCode] = useState("");
  const [resendCode, setResendCode] = useState();
  const [code, setCode] = useState(localStorage.getItem("verifycode"));
  const [showMessage, setShowMessage] = useState(false);
  const [isForgetPassword, setIsForgetPassword] = useState(false)
  const [isExpired, setisExpired] = useState();
  const [data, setData] = useState(
    { date: Date.now(), delay: 60000 }, //60 seconds
  );

  const wantedDelay = 60000; //60 s

  console.log("comfirm code " + code);

  useEffect(() => {
    const savedDate = getLocalStorageValue("end_date");
    const isForgetPassword =  localStorage.getItem('isForgetPassword')
    isForgetPassword && setIsForgetPassword(isForgetPassword)
    if (savedDate != null && !isNaN(savedDate)) {
      const currentTime = Date.now();
      const delta = parseInt(savedDate, 10) - currentTime;

      //Do you reach the end?
      if (delta > wantedDelay) {
        //Yes we clear uour saved end date
        if (localStorage.getItem("end_date").length > 0)
          localStorage.removeItem("end_date");
      } else {
        //No update the end date
        setData({ date: currentTime, delay: delta });
      }
    }
  }, []);

  // method

  // --> validate code between input and code from api
  const onValidateCode = (e) => {
    console.log(e);
    console.log(code);
    console.log(inputSecretCode);
    console.log(showMessage);
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();

    if (code == inputSecretCode) {
      if (localStorage.getItem("end_date") != null)
        localStorage.removeItem("end_date");

      localStorage.removeItem("verifycode");
      setCode(0);
      localStorage.setItem("confirmCode", true);
     isForgetPassword?navigate('/createNewPassword') : navigate("/formRegister");
    } else {
      toast.error("Code Incorrect !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  // --> validate code between input and code from api

  const onResendCode = () => {
    const email = localStorage.getItem("email");
    email && isExpired && dispatch(fetchEmail(email));
  };

  useEffect(() => {
    isExpired && window.location.reload();
  }, [items]);

  useEffect(() => {
    const oldData = location.state?.data?.verifyCode;
    console.log(`====> /ConfirmPage: data from registerPage`);
    console.log(location.state?.data);
    setCode(localStorage.getItem("verifycode"));
  }, [navigate, items]);

  return (
    <body className="h-screen bg-slate-50">
      <ToastContainer />
      {loading && <LoadingLinePrimary />}
      <form
        onSubmit={(e) => onValidateCode(e)}
        stopPropagation
        className="flex items-center justify-center w-full"
      >
        <section className="text-gray-600 body-font font-maven">
          <div className="container w-full max-w-xl mx-auto ">
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
              <div>
                <svg
                  className="flex items-center w-8 h-auto m-auto text-black p-auto"
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

              <p className="mt-4">
                Enter the 6 digit codes we sent you via email to continue
              </p>
              <div className="grid grid-cols-6 gap-4">
                <div className="flex items-center pt-5 pb-1 border-b-2 border-b-black">
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
                <div className="pt-3 pb-1 border-b-2 border-b-black"></div>
                <div className="pt-3 pb-1 border-b-2 border-b-black"></div>
                <div className="pt-3 pb-1 border-b-2 border-b-black"></div>
                <div className="pt-3 pb-1 border-b-2 border-b-black"></div>
                <div className="pt-3 pb-1 border-b-2 border-b-black"></div>
              </div>
              <p className="mt-6 text-blue-800">
                <div>
                  {!isExpired && "Code will be expire in "}
                  <Countdown
                    date={data.date + data.delay}
                    renderer={renderer}
                    onStart={(delta) => {
                      //Save the end date
                      setisExpired(false);
                      if (localStorage.getItem("end_date") == null)
                        localStorage.setItem(
                          "end_date",
                          JSON.stringify(data.date + data.delay),
                        );
                    }}
                    onComplete={() => {
                      if (localStorage.getItem("end_date") != null)
                        localStorage.removeItem("end_date");

                      localStorage.removeItem("verifycode");
                      setCode(0);
                      setisExpired(true);
                    }}
                  />
                </div>
              </p>
              <button
                style={styles}
                className="inline-flex content-center justify-between px-10 py-2 mt-16 text-white rounded-md"
                type="submit"
              >
                Continue{" "}
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
              <p className="mt-8">
                Didn't get the code?{" "}
                <button
                  type="button"
                  onClick={() => onResendCode()}
                  className="text-blue-800 underline underline-offset-1"
                >
                  Resend code
                </button>
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
