import { api } from "../../api";
import { CUSTOM_ERROR, CUSTOM_SUCCESSFUL } from "../../commons/notify/Notify";
import { myHistory } from "../../Router/History";
import { decryptToken } from "./LoginAction";
import { fetchOwnProfiles } from "./OwnProfilesAction";

// action type
export const UPDATE_USER_BY_UUID_SUCCESS = "UPDATE_USER_BY_UUID_SUCCESS";
export const UPDATE_USER_BY_UUID_REQUEST = "UPDATE_USER_BY_UUID_REQUEST";
export const UPDATE_USER_BY_UUID_FAILURE = "UPDATE_USER_BY_UUID_FAILURE";

// action



export const fetchUpdateUserByUuid =
  (requestBody, isPublic, uuid) => (dispatch) => {
    const token = decryptToken();
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
            Authorization: `Bearer ${token ? token : decryptToken()}`,
          },
        },
      )
      .then((res) => {
        console.log(`--> fetch upadte status`);
        console.log(res);
        let payload = res?.data?.payload;
        let message = res?.data?.message;
        if (payload) {
          dispatch(fetchUpdateUserByUuidSuccess(payload));
          CUSTOM_SUCCESSFUL(message);
          localStorage.setItem("view", JSON.stringify(payload?.profileDetails));
          localStorage.setItem("currentUuid", payload?.uuid);
          localStorage.setItem('ownProfile', JSON.stringify(payload))
          dispatch(fetchOwnProfiles());
          myHistory.replace("/sidebar/aboutMe", {
            state: {
              fromViewAlumni: false,
            },
          });
        } else {
          let errmessage = res?.response?.data?.error ?? res?.message;
          dispatch(fetchUpdateUserByUuidFailure(errmessage));
        }
      })
      .catch((err) => {
        let message = err?.response?.data?.error ?? err?.message;
        console.log(`fetch login error`);
        console.log(err);
        CUSTOM_ERROR(message)
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
