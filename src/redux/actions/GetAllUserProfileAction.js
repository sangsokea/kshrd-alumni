import { api } from "../../api";
import { decryptToken } from "./LoginAction";
import { myHistory } from "../../Router/History";
import { CUSTOM_ERROR, CUSTOM_SUCCESSFUL, SUCCESS_CREATED } from "../../commons/notify/Notify";

// action type
export const GET_ALL_USER_PROFILE_SUCCESS = "GET_ALL_USER_PROFILE_SUCCESS";
export const GET_ALL_USER_PROFILE_REQUEST = "GET_ALL_USER_PROFILE_REQUEST";
export const GET_ALL_USER_PROFILE_FAILURE = "GET_ALL_USER_PROFILE_FAILURE";

// action



export const fetchGetAllUserProfle = (limit,page) => (dispatch) => {
  const token = decryptToken()
  console.log("--> FetchGetAllUserProfle");
  dispatch(fetchGetAllUserProfleRequest());
  api
    .get(
      `/admin/users/info?limit=${limit}&page=${page}`,
      {
        headers: { 
          Authorization: `Bearer ${token? token : decryptToken()}`
        }
      }
    )
    .then((res) => {
      console.log(`--> fetch get all user profile`);
      console.log(res);
      let payload = res?.data?.payload
      if (payload) {
        dispatch(fetchGetAllUserProfleSuccess(payload));
        localStorage.setItem('userInfo', JSON.stringify(payload))
        // SUCCESS_CREATED("Date successfully");
        myHistory.replace('/admin/home')
      } else {
        let message = res?.response?.data?.error ?? "Unknow error!";
        dispatch(fetchGetAllUserProfleFailure(message));
      }
    })
    .catch((err) => {
      let message = err?.response?.data?.error ?? err?.message;
      console.log(`fetch login error`);
      console.log(err);
      dispatch(fetchGetAllUserProfleFailure(message));
      CUSTOM_ERROR(message);
    });
};

const fetchGetAllUserProfleRequest = () => {
  return {
    type: GET_ALL_USER_PROFILE_REQUEST,
  };
};

const fetchGetAllUserProfleSuccess = (data) => {
  return {
    type: GET_ALL_USER_PROFILE_SUCCESS,
    payload: data,
  };
};

const fetchGetAllUserProfleFailure = (err) => {
  return {
    type: GET_ALL_USER_PROFILE_FAILURE,
    payload: err,
  };
};
