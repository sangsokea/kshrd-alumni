import { api } from "../../api";
import { SUCCESS_CREATED } from "../../commons/notify/Notify";
import axios from "axios";

// action type
export const CV_BUILDER_SUCCESS = "CV_BUILDER_SUCCESS";
export const CV_BUILDER_REQUEST = "CV_BUILDER_REQUEST";
export const CV_BUILDER_FAILURE = "CV_BUILDER_FAILURE";

const token =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJibGFjay5tb25zdGVyLm1ha2VyQGdtYWlsLmNvbSIsImlhdCI6MTY1NjgyOTYyNSwiZXhwIjoxNjU5NDU5NDI1fQ.hrszo7Cb8m-8-D_UxrCe4jy2jME12Dk1z9fJpgBw4u1sm0Do-leAt6g9i-VJmgKh_Vx3CdmuUtWXaZnL5s_kRw";

// action

const headers = {
  "Authorization": "Bearer " + token,
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

export const fetchCVBuilder = (requestBody, isPublic) => (dispatch) => {
  console.log("--> FetchCVBuilder");
  console.log(requestBody);
  dispatch(fetchCVBuilderRequest());
  requestBody
    ? fetch(process.env.REACT_APP_BASE_URL + "/profiles", {
        method: "post",

        headers: headers,
        body: JSON.stringify({
          profileDetails: requestBody,
          public: true,
        }),
      })
        .then((res) => res.json()).then(result => console.log(result))
        .catch((err) => {
          // let message = err?.response?.data?.error ?? "Unknow error!";
          // console.log(`fetch cvbuilder error`);
          // console.log(err);
          // dispatch(fetchCVBuilderFailure(message));
          console.log('error')
          console.log(err);
        })
    : alert("request body empty at post profile");
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
