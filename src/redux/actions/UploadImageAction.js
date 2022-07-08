import { api } from "../../api";
import { CUSTOM_ERROR, CUSTOM_SUCCESSFUL } from "../../commons/notify/Notify";
import { decryptToken } from "./LoginAction";
import CryptoJS from "crypto-js";

// action type
export const UPLOAD_IMAGE_SUCCESS = "UPLOAD_IMAGE_SUCCESS";
export const UPLOAD_IMAGE_REQUEST = "UPLOAD_IMAGE_REQUEST";
export const UPLOAD_IMAGE_FAILURE = "UPLOAD_IMAGE_FAILURE";


export const decryptTokenSecond = () => {
  const encryptedString = localStorage.getItem("accessToken");
  let bytes = encryptedString ? CryptoJS.AES.decrypt(
    encryptedString,
    process.env.REACT_APP_SECRET_WORD,
  ) : "";
  return  bytes.toString(CryptoJS.enc.Utf8);
  }
const token = decryptToken()? decryptToken() : decryptTokenSecond();
// action
export const fetchUploadImage = (file, type) => (dispatch) => {
  console.log("file in Action");
  const formData = new FormData();
  formData.append("file", file);
  console.log(formData.get('file'));
  console.log("--> FetchUploadImage");
  token && dispatch(fetchUploadImageRequest());
  api
    .post(
      "/files/single",
      {
        file,
      },
      {
        headers: {
          Authorization: "Bearer " + token ?? decryptTokenSecond(),
          Accept: "*",
          "Content-Type": "multipart/form-data",
        },
      },
    )
    .then((res) => {
      console.log(`--> fetch upload image`);
      console.log(res);
      if (!res?.data?.payload.error) {
        dispatch(fetchUploadImageSuccess(res?.data?.payload, type));
        CUSTOM_SUCCESSFUL("Uploaded successfully")
      } else {
        dispatch(fetchUploadImageFailure(res?.data?.payload.error));
      }
    })
    .catch((err) => {
      let message = err?.response?.data?.error ?? err?.message;
      console.log(`fetch upload image error`);
      console.log(err);
      CUSTOM_ERROR(message)
      dispatch(fetchUploadImageFailure(message));
    });
};

const fetchUploadImageRequest = () => {
  return {
    type: UPLOAD_IMAGE_REQUEST,
  };
};

const fetchUploadImageSuccess = (data ,target) => {
  return {
    type: UPLOAD_IMAGE_SUCCESS,
    payload: data,
    target: target
  };
};

const fetchUploadImageFailure = (err) => {
  return {
    type: UPLOAD_IMAGE_FAILURE,
    payload: err,
  };
};
