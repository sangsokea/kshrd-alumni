import { api } from "../../api";
import { fetchIsAucthenticated } from "./IsAuthenticationAction";
import CryptoJS from "crypto-js";
import { CUSTOM_ERROR, CUSTOM_SUCCESSFUL } from "../../commons/notify/Notify";

// action type
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

//  encrypt token section
export const encryptToken = (token) => {
  let ciphertext = CryptoJS.AES.encrypt(
    token,
    process.env.REACT_APP_SECRET_WORD,
  ).toString();
 
  ciphertext && localStorage.setItem("accessToken", ciphertext);
};

// Decrypt
export const decryptToken = () => {
  const encryptedString = localStorage.getItem("accessToken");
  let bytes = CryptoJS.AES.decrypt(
    encryptedString,
    process.env.REACT_APP_SECRET_WORD,
  );
  let originalText = bytes.toString(CryptoJS.enc.Utf8);
  console.log("Decrypted :" + originalText);
  return originalText;
};

//  set isAuth section
const verifyAuthentication = (accessToken) => {
  accessToken && encryptToken(accessToken); 
};


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
      // data get from api
      let token = res?.data?.payload.accessToken;
      let paylod = res?.data?.payload;
      let error = res?.data?.payload.error
      let message =res?.data?.message

      // login handle
      if (!error) {
        dispatch(fetchLoginSuccess(paylod));

        token &&
          verifyAuthentication(token);
        message && CUSTOM_SUCCESSFUL(message);
        token && dispatch(fetchIsAucthenticated(true));
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
