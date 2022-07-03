import { api } from "../../api";
import { CUSTOM_ERROR, CUSTOM_SUCCESSFUL } from "../../commons/notify/Notify";

// action type
export const EMAIL_SUCCESS = "EMAIL_SUCCESS";
export const EMAIL_REQUEST = "EMAIL_REQUEST";
export const EMAIL_FAILURE = "EMAIL_FAILURE";

// action

export const fetchEmail = (email) => (dispatch) => {
  console.log("--> FetchEmail");
  dispatch(fetchEmailRequest());
  api
    .get("/accounts/send-email?email=" + email)
    .then((res) => {
      console.log("send-email response");
      console.log(res);
      let payload = res?.data?.payload
      let error = res?.data?.error
      let code = res?.data?.payload?.verifyCode
      payload && dispatch(fetchEmailSuccess(payload));
      payload && CUSTOM_SUCCESSFUL("Verify code has been sent to " + email)
      error && CUSTOM_ERROR(error?? "Unknown")
      code && localStorage.setItem("verifycode", code)
    })
    .catch((err) => {
      let message = err?.response?.data?.error ?? "Unknow error!";
      console.log(`fetch send-email error`);
      console.log(err);
      CUSTOM_ERROR(message?? "Unknown")
      dispatch(fetchEmailFailure(message));
    });
};

const fetchEmailRequest = () => {
  return {
    type: EMAIL_REQUEST,
  };
};

const fetchEmailSuccess = (data) => {
  return {
    type: EMAIL_SUCCESS,
    payload: data,
  };
};

const fetchEmailFailure = (err) => {
  return {
    type: EMAIL_FAILURE,
    payload: err,
  };
};
