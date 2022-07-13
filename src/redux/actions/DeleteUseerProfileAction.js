import { api } from "../../api";
import { CUSTOM_ERROR, CUSTOM_SUCCESSFUL } from "../../commons/notify/Notify";
import { myHistory } from "../../Router/History";
import { decryptToken } from "./LoginAction";
import { fetchOwnProfiles } from "./OwnProfilesAction";
import { decryptTokenSecond } from "./UploadImageAction";

// action type
export const DELETE_USER_PROFILE_SUCCESS = "DELETE_USER_PROFILE_SUCCESS";
export const DELETE_USER_PROFILE_REQUEST = "DELETE_USER_PROFILE_REQUEST";
export const DELETE_USER_PROFILE_FAILURE = "DELETE_USER_PROFILE_FAILURE";

// action

export const fetchDeleteUserProfile = (uuid) => (dispatch) => {
  const token = decryptToken();

  console.log("--> FetchDeleteUserProfile");
  dispatch(fetchDeleteUserProfileRequest());
  api
    .delete(
      `/profiles/delete-user-profile-by-uuid?uuid=${uuid}`,

      {
        headers: {
          Authorization: `Bearer ${token ? token : decryptToken()}`,
        },
      },
    )
    .then((res) => {
      CUSTOM_SUCCESSFUL("Deleted Successfully");
      localStorage.setItem("currentIndex", 0);
      localStorage.removeItem("ownProfile");
      dispatch(fetchOwnProfiles());
    })
    .catch((err) => {
      let message = err?.response?.data?.error ?? err?.message;
      console.log(`fetch login error`);
      console.log(err);
      CUSTOM_ERROR(message);
      dispatch(fetchDeleteUserProfileFailure(message));
    });
};

const fetchDeleteUserProfileRequest = () => {
  return {
    type: DELETE_USER_PROFILE_REQUEST,
  };
};

const fetchDeleteUserProfileSuccess = (data) => {
  return {
    type: DELETE_USER_PROFILE_SUCCESS,
    payload: data,
  };
};

const fetchDeleteUserProfileFailure = (err) => {
  return {
    type: DELETE_USER_PROFILE_FAILURE,
    payload: err,
  };
};
