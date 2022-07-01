import { api } from "../../api";
import { fetchIsAucthenticated } from "./IsAuthenticationAction";
import StringCrypto from "string-crypto";
import { CUSTOM_SUCCESSFUL } from "../../commons/notify/Notify";

const stringToProtect =
  "What is the largest (rational) number n such that there are positive integers p, q, r such that 1 - 1/p - 1/q - 1/r = 1/n?";

const password = "@kshrdalumni@10generation";

const { encryptString, decryptString } = new StringCrypto();

//  encrypt token section
export const encryptToken = (token) => {
  let encryptedString = encryptString(token, password);
  console.log("Encrypted String:", encryptedString);
  localStorage.setItem(process.env.REACT_APP_SECRET_WORD, encryptedString);
};

export let decryptToken = () => {
  const encryptedString = localStorage.getItem(
    process.env.REACT_APP_SECRET_WORD,
  );
  encryptedString && JSON.parse(encryptedString)
    ? console.log("Decrypted String:", decryptString(encryptedString, password))
    : console.log(
        "Decrypted String:",
        decryptString(encryptedString, password),
      );
};

//  set isAuth section
const verifyAuthentication = (accessToken) => (dispatch) => {
  accessToken && encryptToken(accessToken);
  accessToken && dispatch(fetchIsAucthenticated(true));
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
      } else {
        dispatch(fetchLoginFailure(res?.data?.payload.error));
        dispatch(fetchIsAucthenticated(false));
      }
    })
    .catch((err) => {
      let message = err?.response?.data?.error ?? "Unknow error!";
      console.log(`fetch login error`);
      console.log(err);
      dispatch(fetchLoginFailure(message));
      dispatch(fetchIsAucthenticated(false));
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
