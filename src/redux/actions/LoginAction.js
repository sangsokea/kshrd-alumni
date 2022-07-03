import { api } from "../../api";
import { fetchIsAucthenticated } from "./IsAuthenticationAction";

import { CUSTOM_ERROR, CUSTOM_SUCCESSFUL } from "../../commons/notify/Notify";

const password = "@kshrdalumni@10generation";

//  encrypt token section
export const encryptToken = (token) => {
  localStorage.setItem(process.env.REACT_APP_SECRET_WORD, token);
};

export let decryptToken = () => {
  const encryptedString = localStorage.getItem(
    process.env.REACT_APP_SECRET_WORD,
  );
  return encryptedString;
};

//  set isAuth section
const verifyAuthentication = (accessToken) => (dispatch) => {
  accessToken && encryptToken(accessToken);
};

// action type
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

// action

export const fetchLogin = (email, password) => (dispatch) => {
  console.log("--> FetchLogin");
  dispatch(fetchLoginRequest());
  api
    .post(
      "/authentications/login",
      {
        email,
        password,
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      },
    )
    .then((res) => {
      console.log(`--> fetch login`);
      console.log(res);
      if (!res?.data?.payload.error) {
        dispatch(fetchLoginSuccess(res?.data?.payload));
        verifyAuthentication(res?.data?.payload.accessToken);
        res?.data?.message && CUSTOM_SUCCESSFUL(res?.data?.message);
        res?.data?.message && dispatch(fetchIsAucthenticated(true));
      } else {
        let message = res?.response?.data?.error ?? "Unknow error!";
        dispatch(fetchLoginFailure(message));
        dispatch(fetchIsAucthenticated(false));

        CUSTOM_ERROR(message);
      }
    })
    .catch((err) => {
      let message = err?.response?.data?.error ?? "Unknow error!";
      console.log(`fetch login error`);
      console.log(err);
      dispatch(fetchLoginFailure(message));
      dispatch(fetchIsAucthenticated(false));
      CUSTOM_ERROR(message);
    });
};

const fetchLoginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

const fetchLoginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

const fetchLoginFailure = (err) => {
  return {
    type: LOGIN_FAILURE,
    payload: err,
  };
};
