import { api } from "../../api";

// action type
export const GET_USER_PROFILE_SUCCESS = "GET_USER_PROFILE_SUCCESS";
export const GET_USER_PROFILE_REQUEST = "GET_USER_PROFILE_REQUEST";
export const GET_USER_PROFILE_FAILURE = "GET_USER_PROFILE_FAILURE";

// action

const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYW5nc29rZWExMDlAZ21haWwuY29tIiwiaWF0IjoxNjU2OTM2NTMwLCJleHAiOjE2NTk1NjYzMzB9.YLX-9gDDsgwGwcmLI-V23ViEX1FAoFvTdIzSOsvtBvZH_QWAO5tC32MJmmjFj6jz9nP2Cyw3x0dssZGHlmemNw'

export const fetchGetUserProfile = (limit, page) => (dispatch) => {
  console.log("--> FetchGetUserProfile");
  dispatch(fetchGetUserProfileRequest());
  api
    .get(
      `/admin/users/profiles?limit=${limit}&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => {
      console.log(`--> fetch access token`);
      console.log(res);
      if (!res?.data?.payload.error) {
        dispatch(fetchGetUserProfileSuccess(res?.data?.payload));
      } else {
        let message = res?.response?.data?.error ?? "Unknow error!";
        dispatch(fetchGetUserProfileFailure(message));
      }
    })
    .catch((err) => {
      let message = err?.response?.data?.error ?? "Unknow error!";
      console.log(`fetch login error`);
      console.log(err);
      dispatch(fetchGetUserProfileFailure(message));
    });
};

const fetchGetUserProfileRequest = () => {
  return {
    type: GET_USER_PROFILE_REQUEST,
  };
};

const fetchGetUserProfileSuccess = (data) => {
  return {
    type: GET_USER_PROFILE_SUCCESS,
    payload: data,
  };
};

const fetchGetUserProfileFailure = (err) => {
  return {
    type: GET_USER_PROFILE_FAILURE,
    payload: err,
  };
};
