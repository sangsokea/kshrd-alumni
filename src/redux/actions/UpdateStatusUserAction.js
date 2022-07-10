import { api } from "../../api";
import { decryptToken } from "./LoginAction";

// action type
export const UPDATE_STATUS_USER_SUCCESS = "UPDATE_STATUS_USER_SUCCESS";
export const UPDATE_STATUS_USER_REQUEST = "UPDATE_STATUS_USER_REQUEST";
export const UPDATE_STATUS_USER_FAILURE = "UPDATE_STATUS_USER_FAILURE";

// action

const token = decryptToken()

export const fetchUpdateStatusUser = (id,status) => (dispatch) => {
  alert(status)
  console.log("Auth ID : ", id)
  console.log("Status : ", status)
  console.log(token)
  console.log("--> FetchUpdateStatusUser");
  dispatch(fetchUpdateStatusUserRequest());
  api
    .put(
      `/admin/user/${id}/${status}`,{},
      {
        headers: { 
          Authorization: `Bearer ${token}`
        }
      }
    )
    .then((res) => {
      console.log(`--> fetch upadte status`);
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
