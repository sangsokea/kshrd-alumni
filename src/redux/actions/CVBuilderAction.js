import { api } from "../../api";
import {
  CUSTOM_ERROR,
  CUSTOM_SUCCESSFUL,
  SUCCESS_CREATED,
} from "../../commons/notify/Notify";
import axios from "axios";
import { decryptToken } from "./LoginAction";
import { myHistory } from "../../Router/History";
import { decryptTokenSecond } from "./UploadImageAction";

// action type
export const CV_BUILDER_SUCCESS = "CV_BUILDER_SUCCESS";
export const CV_BUILDER_REQUEST = "CV_BUILDER_REQUEST";
export const CV_BUILDER_FAILURE = "CV_BUILDER_FAILURE";


// action

export const fetchCVBuilder = (requestBody, isPublic) => (dispatch) => {
  console.log("--> FetchCVBuilder");

  dispatch(fetchCVBuilderRequest());
  api
    .post(
      "/profiles",
      {
        profileDetails: requestBody,
        public: isPublic,
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + decryptToken() ?? decryptTokenSecond(),
        },
      },
    )
    .then((res) => {
      dispatch(fetchCVBuilderSuccess('Created successfully'))
      CUSTOM_SUCCESSFUL("Created successfully");
      localStorage.setItem("view", JSON.stringify(requestBody.profileDetails));
      // localStorage.setItem('currentUuid',)
      myHistory.replace("/sidebar/aboutMe", {
        state: {
          fromViewAlumni: true,
        },
      })
    })
    .catch((err) => {
      let message = typeof err.response !== "undefined" ? err.response.data.message??err.response.data.console.error : err.message?? err;
      console.log(`fetch cvBuilder error`);
      console.log(err);
      CUSTOM_ERROR(message);
      dispatch(fetchCVBuilderFailure(message));
      
    });
};

const fetchCVBuilderRequest = () => {
  return {
    type: CV_BUILDER_REQUEST,
  };
};

const fetchCVBuilderSuccess = (data) => {
  return {
    type: CV_BUILDER_SUCCESS,
    payload: data,
  };
};

const fetchCVBuilderFailure = (err) => {
  return {
    type: CV_BUILDER_FAILURE,
    payload: err,
  };
};
