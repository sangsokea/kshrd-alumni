import { api } from "../../api";
import { decryptToken } from "./LoginAction";
import { myHistory } from "../../Router/History";
import { CUSTOM_ERROR, CUSTOM_SUCCESSFUL, SUCCESS_CREATED } from "../../commons/notify/Notify";

// action type
export const GET_USER_PROFILE_BY_ID_SUCCESS = "GET_USER_PROFILE_BY_ID_SUCCESS";
export const GET_USER_PROFILE_BY_ID_REQUEST = "GET_USER_PROFILE_BY_ID_REQUEST";
export const GET_USER_PROFILE_BY_ID_FAILURE = "GET_USER_PROFILE_BY_ID_FAILURE";

// action

const token = decryptToken()

export const fetchGetUserProfileById = (authUserId,limit,page) => (dispatch) => {
  console.log("--> FetchGetUserProfileById");
  dispatch(fetchGetUserProfileByIdRequest());
  console.log(authUserId)
  api
    .get(
      `/admin/${authUserId}?limit=${limit}&page=${page}`,
      {
        headers: { 
          Authorization: `Bearer ${token}`
        }
      }
    )
    .then((res) => {
      console.log(`--> fetch get user profile by id`);
      console.log(res);
      if (!res?.data?.payload.error) {
        dispatch(fetchGetUserProfileByIdSuccess(res?.data?.payload));
        SUCCESS_CREATED("Date successfully");
        myHistory.replace(`/admin/view/${authUserId}?limit=${limit}&page=${page}`)
      } else {
        let message = res?.response?.data?.error ?? "Unknow error!";
        dispatch(fetchGetUserProfileByIdFailure(message));
      }
    })
    .catch((err) => {
      let message = err?.response?.data?.error ?? "Unknow error!";
      console.log(`fetch login error`);
      console.log(err);
      dispatch(fetchGetUserProfileByIdFailure(message));
      CUSTOM_ERROR(message);
    });
};

const fetchGetUserProfileByIdRequest = () => {
  return {
    type: GET_USER_PROFILE_BY_ID_REQUEST,
  };
};

const fetchGetUserProfileByIdSuccess = (data) => {
  return {
    type: GET_USER_PROFILE_BY_ID_SUCCESS,
    payload: data,
  };
};

const fetchGetUserProfileByIdFailure = (err) => {
  return {
    type: GET_USER_PROFILE_BY_ID_FAILURE,
    payload: err,
  };
};
