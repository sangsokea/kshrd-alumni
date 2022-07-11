import { api } from "../../api";
import { decryptToken } from "./LoginAction";
import { decryptTokenSecond } from "./UploadImageAction";

// action type
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_FAILURE = "GET_USER_FAILURE";


// action
export const fetchUser = () => (dispatch) => {
  console.log("--> FetchOwnProfile");

  dispatch(fetchUserRequest());
  api
    .get(
      "/profiles/user",

      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + decryptToken() ?? decryptTokenSecond(),
        },
      }
    )
    .then((res) => {
      console.log(res);
      let payload = res?.data?.payload
      if (payload) {
        dispatch(fetchUserSuccess(res?.data?.payload));
        localStorage.setItem('user', JSON.stringify(payload))
      } else {
        dispatch(fetchUserFailure(res?.data?.error));
      }
    })
    .catch((err) => {
      let message = err?.response?.data?.error ?? err.message;
      console.log(`fetch user error`);
      console.log(err);
      dispatch(fetchUserFailure(message));
    });
};

const fetchUserRequest = () => {
  return {
    type: GET_USER_REQUEST,
  };
};

const fetchUserSuccess = (data) => {
  return {
    type: GET_USER_SUCCESS,
    payload: data,
  };
};

const fetchUserFailure = (err) => {
  return {
    type: GET_USER_FAILURE,
    payload: err,
  };
};
