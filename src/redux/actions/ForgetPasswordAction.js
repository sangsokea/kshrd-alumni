import { api } from "../../api";
import { CUSTOM_ERROR, CUSTOM_SUCCESSFUL } from "../../commons/notify/Notify";
import { fetchLogin } from "./LoginAction";

// action type
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_FAILURE = "FORGOT_PASSWORD_FAILURE";

// action

export const fetchforgotPassword = (email, password, isLogin = true) => (dispatch) => {
  console.log("--> FetchforgotPassword");
  dispatch(fetchforgotPasswordRequest());
  api
    .put(
      `/authentications/password?password=${password}&email=${email}`,
      {
        
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      },
    )
    .then((res) => {
      console.log(`--> fetch regiter`);
      console.log(res);
      if (!res?.data?.payload?.error) {
        dispatch(fetchforgotPasswordSuccess(res?.data?.payload));
       isLogin && dispatch(fetchLogin(email, password))
       !isLogin && CUSTOM_SUCCESSFUL(res.data.message)
      } else {
        dispatch(fetchforgotPasswordFailure(res?.data?.payload.error));
      }
    })
    .catch((err) => {
      let message = err?.response?.data?.error ?? err?.message;
      CUSTOM_ERROR(message)
      console.log(`fetch register error`);
      console.log(err);
      dispatch(fetchforgotPasswordFailure(message));
    });
};

const fetchforgotPasswordRequest = () => {
  return {
    type: FORGOT_PASSWORD_REQUEST,
  };
};

const fetchforgotPasswordSuccess = (data) => {
  return {
    type: FORGOT_PASSWORD_SUCCESS,
    payload: data,
  };
};

const fetchforgotPasswordFailure = (err) => {
  return {
    type: FORGOT_PASSWORD_FAILURE,
    payload: err,
  };
};
