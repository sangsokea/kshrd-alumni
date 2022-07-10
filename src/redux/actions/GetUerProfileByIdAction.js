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
      const longeur = res.data.length;
      console.log(longeur);
      if (res?.data?.payload) {
        dispatch(fetchGetUserProfileByIdSuccess(res?.data?.payload));
        const longeur = res.length
        SUCCESS_CREATED(res.data.message);
        setTimeout(()=>{
          myHistory.replace('/admin/view')
        },100)
      } else {
        let message = res?.response?.data?.error ?? res.message;
        dispatch(fetchGetUserProfileByIdFailure(message));
      }
    })
    .catch((err) => {
      let message = err?.response?.data?.error ?? err.message;
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
