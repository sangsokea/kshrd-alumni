import { api } from "../../api";

// action type
export const UPDATE_STATUS_USER_SUCCESS = "UPDATE_STATUS_USER_SUCCESS";
export const UPDATE_STATUS_USER_REQUEST = "UPDATE_STATUS_USER_REQUEST";
export const UPDATE_STATUS_USER_FAILURE = "UPDATE_STATUS_USER_FAILURE";

// action

const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYW5nc29rZWExMDlAZ21haWwuY29tIiwiaWF0IjoxNjU2OTM2NTMwLCJleHAiOjE2NTk1NjYzMzB9.YLX-9gDDsgwGwcmLI-V23ViEX1FAoFvTdIzSOsvtBvZH_QWAO5tC32MJmmjFj6jz9nP2Cyw3x0dssZGHlmemNw'

export const fetchUpdateStatusUser = (status, id) => (dispatch) => {
  console.log("--> FetchUpdateStatusUser");
  dispatch(fetchUpdateStatusUserRequest());
  api
    .get(
      `/admin/user/${id}?${status}`,
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
        dispatch(fetchUpdateStatusUserSuccess(res?.data?.payload));
      } else {
        let message = res?.response?.data?.error ?? "Unknow error!";
        dispatch(fetchUpdateStatusUserFailure(message));
      }
    })
    .catch((err) => {
      let message = err?.response?.data?.error ?? "Unknow error!";
      console.log(`fetch login error`);
      console.log(err);
      dispatch(fetchUpdateStatusUserFailure(message));
    });
};

const fetchUpdateStatusUserRequest = () => {
  return {
    type: UPDATE_STATUS_USER_REQUEST,
  };
};

const fetchUpdateStatusUserSuccess = (data) => {
  return {
    type: UPDATE_STATUS_USER_SUCCESS,
    payload: data,
  };
};

const fetchUpdateStatusUserFailure = (err) => {
  return {
    type: UPDATE_STATUS_USER_FAILURE,
    payload: err,
  };
};
