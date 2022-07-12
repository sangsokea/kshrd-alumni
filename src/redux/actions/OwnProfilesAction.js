import { api } from "../../api";
import { decryptToken } from "./LoginAction";
import { decryptTokenSecond } from "./UploadImageAction";

// action type
export const OWN_PROFILES_SUCCESS = "OWN_PROFILES_SUCCESS";
export const OWN_PROFILES_REQUEST = "OWN_PROFILES_REQUEST";
export const OWN_PROFILES_FAILURE = "OWN_PROFILES_FAILURE";


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
          Authorization: "Bearer " + decryptToken() ?? decryptTokenSecond(),
        },
      }
    )
    .then((res) => {
      console.log(`--> fetch experience`);
      console.log(res);
      let payload = res?.data?.payload
      if (payload) {
        dispatch(fetchOwnProfilesSuccess(res?.data?.payload));
        payload?.length > 0 && localStorage.setItem("ownProfile", JSON.stringify(payload?.at(-1)));
        let sortPayload = payload.sort((a,b)=>(a.id > b.id)? 1: (b.id > a.id)? -1: 0)
        payload?.length > 0 && localStorage.setItem("ownProfiles", JSON.stringify(sortPayload));
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
