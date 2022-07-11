import { api } from "../../api";
import { CUSTOM_ERROR, CUSTOM_SUCCESSFUL } from "../../commons/notify/Notify";
import { myHistory } from "../../Router/History";
import { fetchUser } from "./GetUserAction";
import { decryptToken } from "./LoginAction";
import { decryptTokenSecond } from "./UploadImageAction";

// action type
export const CHANGE_USERNAME_SUCCESS = "CHANGE_USERNAME_SUCCESS";
export const CHANGE_USERNAME_REQUEST = "CHANGE_USERNAME_REQUEST";
export const CHANGE_USERNAME_FAILURE = "CHANGE_USERNAME_FAILURE";

// action

export const fetchChangeUsername = (username) => (dispatch) => {
  console.log("--> FetchChangeUsername");
  dispatch(fetchChangeUsernameRequest());
  api
    .put(
      `/profiles/user/username?username=${username}`,
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
      payload && dispatch(fetchChangeUsernameSuccess(payload));
      payload && CUSTOM_SUCCESSFUL("Successfully Change Username");
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
      dispatch(fetchChangeUsernameFailure(message));
    });
};

const fetchChangeUsernameRequest = () => {
  return {
    type: CHANGE_USERNAME_REQUEST,
  };
};

const fetchChangeUsernameSuccess = (data) => {
  return {
    type: CHANGE_USERNAME_SUCCESS,
    payload: data,
  };
};

const fetchChangeUsernameFailure = (err) => {
  return {
    type: CHANGE_USERNAME_FAILURE,
    payload: err,
  };
};
