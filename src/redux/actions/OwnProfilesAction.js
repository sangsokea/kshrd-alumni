import { api } from "../../api";
import { decryptToken } from "./LoginAction";

// action type
export const OWN_PROFILES_SUCCESS = "OWN_PROFILES_SUCCESS";
export const OWN_PROFILES_REQUEST = "OWN_PROFILES_REQUEST";
export const OWN_PROFILES_FAILURE = "OWN_PROFILES_FAILURE";

const token = decryptToken();

// action
export const fetchOwnProfiles = () => (dispatch) => {
  console.log("--> FetchOwnProfile");

  dispatch(fetchOwnProfilesRequest());
  api
    .get(
      "/profiles/ownProfiles",

      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    )
    .then((res) => {
      console.log(`--> fetch experience`);
      console.log(res);
      if (!res?.data?.payload.error) {
        dispatch(fetchOwnProfilesSuccess(res?.data?.payload));
      } else {
        dispatch(fetchOwnProfilesFailure(res?.data?.payload.error));
      }
    })
    .catch((err) => {
      let message = err?.response?.data?.error ?? "Unknown error!";
      console.log(`fetch experience error`);
      console.log(err);
      dispatch(fetchOwnProfilesFailure(message));
    });
};

const fetchOwnProfilesRequest = () => {
  return {
    type: OWN_PROFILES_REQUEST,
  };
};

const fetchOwnProfilesSuccess = (data) => {
  return {
    type: OWN_PROFILES_SUCCESS,
    payload: data,
  };
};

const fetchOwnProfilesFailure = (err) => {
  return {
    type: OWN_PROFILES_FAILURE,
    payload: err,
  };
};
