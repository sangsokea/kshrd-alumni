import { api } from "../../api";

// action type
export const UPLOAD_IMAGE_SUCCESS = "UPLOAD_IMAGE_SUCCESS";
export const UPLOAD_IMAGE_REQUEST = "UPLOAD_IMAGE_REQUEST";
export const UPLOAD_IMAGE_FAILURE = "UPLOAD_IMAGE_FAILURE";

const token =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJibGFjay5tb25zdGVyLm1ha2VyQGdtYWlsLmNvbSIsImlhdCI6MTY1NjgyOTYyNSwiZXhwIjoxNjU5NDU5NDI1fQ.hrszo7Cb8m-8-D_UxrCe4jy2jME12Dk1z9fJpgBw4u1sm0Do-leAt6g9i-VJmgKh_Vx3CdmuUtWXaZnL5s_kRw";

// action
export const fetchUploadImage = (file) => (dispatch) => {
  console.log("--> FetchUploadImage");
  dispatch(fetchUploadImageRequest());
  api
    .post(
      "/files/single",
      {
        file,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
          Accept: "*",
          "Content-Type": "multipart/form-data",
        },
      }
    )
    .then((res) => {
      console.log(`--> fetch upload image`);
      console.log(res);
      if (!res?.data?.payload.error) {
        dispatch(fetchUploadImageSuccess(res?.data?.payload.url));
      } else {
        dispatch(fetchUploadImageFailure(res?.data?.payload.error));
      }
    })
    .catch((err) => {
      let message = err?.response?.data?.error ?? "Unknown error!";
      console.log(`fetch upload image error`);
      console.log(err);
      dispatch(fetchUploadImageFailure(message));
    });
};

const fetchUploadImageRequest = () => {
  return {
    type: UPLOAD_IMAGE_REQUEST,
  };
};

const fetchUploadImageSuccess = (data) => {
  return {
    type: UPLOAD_IMAGE_SUCCESS,
    payload: data,
  };
};

const fetchUploadImageFailure = (err) => {
  return {
    type: UPLOAD_IMAGE_FAILURE,
    payload: err,
  };
};
