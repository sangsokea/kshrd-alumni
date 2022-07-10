import { api } from "../../api";

// action type
export const GET_AUTH_USER_PROFILE_SUCCESS = "GET_AUTH_USER_PROFILE_SUCCESS";
export const GET_AUTH_USER_PROFILE_REQUEST = "GET_AUTH_USER_PROFILE_REQUEST";
export const GET_AUTH_USER_PROFILE_FAILURE = "GET_AUTH_USER_PROFILE_FAILURE";

// action

const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYW5nc29rZWExMDlAZ21haWwuY29tIiwiaWF0IjoxNjU2OTM2NTMwLCJleHAiOjE2NTk1NjYzMzB9.YLX-9gDDsgwGwcmLI-V23ViEX1FAoFvTdIzSOsvtBvZH_QWAO5tC32MJmmjFj6jz9nP2Cyw3x0dssZGHlmemNw'

export const fetchGetAuthUserProfile = (limit, page) => (dispatch) => {
  console.log("--> FetchGetAuthUserProfile");
  dispatch(fetchGetAuthUserProfileRequest());
  api
    .get(
      `/admin/users?limit=${limit}&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => {
      console.log(`--> fetch GetAuthUserProfile`);
      console.log(res);
      if (!res?.data?.payload.error) {
        dispatch(fetchGetAuthUserProfileSuccess(res?.data?.payload));
      } else {
        let message = res?.response?.data?.error ?? "Unknow error!";
        dispatch(fetchGetAuthUserProfileFailure(message));
      }
    })
    .catch((err) => {
      let message = err?.response?.data?.error ?? "Unknow error!";
      console.log(`fetch login error`);
      console.log(err);
      dispatch(fetchGetAuthUserProfileFailure(message));
    });
};

const fetchGetAuthUserProfileRequest = () => {
  return {
    type: GET_AUTH_USER_PROFILE_REQUEST,
  };
};

const fetchGetAuthUserProfileSuccess = (data) => {
  return {
    type: GET_AUTH_USER_PROFILE_SUCCESS,
    payload: data,
  };
};

const fetchGetAuthUserProfileFailure = (err) => {
  return {
    type: GET_AUTH_USER_PROFILE_FAILURE,
    payload: err,
  };
};
