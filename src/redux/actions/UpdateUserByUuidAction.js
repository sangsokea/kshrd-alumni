import { api } from "../../api";
import { CUSTOM_SUCCESSFUL } from "../../commons/notify/Notify";
import { myHistory } from "../../Router/History";
import { decryptToken } from "./LoginAction";

// action type
export const UPDATE_USER_BY_UUID_SUCCESS = "UPDATE_USER_BY_UUID_SUCCESS";
export const UPDATE_USER_BY_UUID_REQUEST = "UPDATE_USER_BY_UUID_REQUEST";
export const UPDATE_USER_BY_UUID_FAILURE = "UPDATE_USER_BY_UUID_FAILURE";

// action

const token = decryptToken()

export const fetchUpdateUserByUuid = (requestBody, isPublic, uuid) => (dispatch) => {
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
      let payload = res?.data?.payload;
      let message = res?.data?.message;
      if (payload) {
        dispatch(fetchUpdateUserByUuidSuccess(payload));
        CUSTOM_SUCCESSFUL(message)
        myHistory.replace('/sidebar/CvTemplate')
      } else {
        let errmessage = res?.response?.data?.error ?? res?.message;
        dispatch(fetchUpdateUserByUuidFailure(errmessage));
      }
    })
    .catch((err) => {
      let message = err?.response?.data?.error ?? err?.message;
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
