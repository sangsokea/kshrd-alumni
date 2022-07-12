import { api } from "../../api";
import { myHistory } from "../../Router/History";
import { decryptToken } from "./LoginAction";

// action type
export const UPDATE_USER_BY_UUID_SUCCESS = "UPDATE_USER_BY_UUID_SUCCESS";
export const UPDATE_USER_BY_UUID_REQUEST = "UPDATE_USER_BY_UUID_REQUEST";
export const UPDATE_USER_BY_UUID_FAILURE = "UPDATE_USER_BY_UUID_FAILURE";

// action

const token = decryptToken()

export const fetchUpdateUserByUuid = (requestBody, isPublic, uuid) => (dispatch) => {
  alert(uuid)
  console.log("Auth uuid : ", uuid)
  console.log("--> FetchUpdateUserByUuid");
  dispatch(fetchUpdateUserByUuidRequest());
  api
    .put(
      `/profiles/${uuid}`,
      {
        profileDetails: requestBody,
        public: isPublic,
      },
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
        dispatch(fetchUpdateUserByUuidSuccess(res?.data?.payload));
        myHistory.replace('/sidebar/editNewCV')
      } else {
        let message = res?.response?.data?.error ?? "Unknow error!";
        dispatch(fetchUpdateUserByUuidFailure(message));
      }
    })
    .catch((err) => {
      let message = err?.response?.data?.error ?? "Unknow error!";
      console.log(`fetch login error`);
      console.log(err);
      dispatch(fetchUpdateUserByUuidFailure(message));
    });
};

const fetchUpdateUserByUuidRequest = () => {
  return {
    type: UPDATE_USER_BY_UUID_REQUEST,
  };
};

const fetchUpdateUserByUuidSuccess = (data) => {
  return {
    type: UPDATE_USER_BY_UUID_SUCCESS,
    payload: data,
  };
};

const fetchUpdateUserByUuidFailure = (err) => {
  return {
    type: UPDATE_USER_BY_UUID_FAILURE,
    payload: err,
  };
};
