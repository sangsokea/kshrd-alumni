import { api } from "../../api";
import { CUSTOM_ERROR, CUSTOM_SUCCESSFUL } from "../../commons/notify/Notify";
import { myHistory } from "../../Router/History";
import { fetchUser } from "./GetUserAction";
import { decryptToken } from "./LoginAction";
import { decryptTokenSecond } from "./UploadImageAction";

// action type
export const CHANGE_USER_PROFILE_SUCCESS = "CHANGE_USER_PROFILE_SUCCESS";
export const CHANGE_USER_PROFILE_REQUEST = "CHANGE_USER_PROFILE_REQUEST";
export const CHANGE_USER_PROFILE_FAILURE = "CHANGE_USER_PROFILE_FAILURE";

// action

export const fetchChangeUserProfile = (imageUrl) => (dispatch) => {
  console.log("--> FetchChangeUserProfile");
  dispatch(fetchChangeUserProfileRequest());
  api
    .put(
      `/profiles/user/profile?imageUrl=${imageUrl}`,
      {},

      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + decryptToken() ?? decryptTokenSecond(),
        },
      },
    )
    .then((res) => {
      console.log(res);
      let payload = res?.data?.payload;
      let error = res?.data?.error;
      payload && dispatch(fetchChangeUserProfileSuccess(payload));
      payload && CUSTOM_SUCCESSFUL("Successfully Change profile image");
      if (payload) {
        dispatch(fetchUser());
      } else {
        error && CUSTOM_ERROR(error ?? "Unknown");
      }
    })
    .catch((err) => {
      let message = err?.response?.data?.error ?? err?.message ?? err?.message;
      console.log(err);
      CUSTOM_ERROR(message ?? "Unknown");
      dispatch(fetchChangeUserProfileFailure(message));
    });
};

const fetchChangeUserProfileRequest = () => {
  return {
    type: CHANGE_USER_PROFILE_REQUEST,
  };
};

const fetchChangeUserProfileSuccess = (data) => {
  return {
    type: CHANGE_USER_PROFILE_SUCCESS,
    payload: data,
  };
};

const fetchChangeUserProfileFailure = (err) => {
  return {
    type: CHANGE_USER_PROFILE_FAILURE,
    payload: err,
  };
};
