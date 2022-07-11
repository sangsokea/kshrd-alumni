import { api } from "../../api";
import { CUSTOM_ERROR, CUSTOM_SUCCESSFUL } from "../../commons/notify/Notify";
import { myHistory } from "../../Router/History";
import { decryptToken } from "./LoginAction";
import { fetchOwnProfiles } from "./OwnProfilesAction";
import { decryptTokenSecond } from "./UploadImageAction";

// action type
export const CHANGE_TEMPLATE_SUCCESS = "CHANGE_TEMPLATE_SUCCESS";
export const CHANGE_TEMPLATE_REQUEST = "CHANGE_TEMPLATE_REQUEST";
export const CHANGE_TEMPLATE_FAILURE = "CHANGE_TEMPLATE_FAILURE";

// action

export const fetchChangeTemplate = (uuid, templateId) => (dispatch) => {
  console.log("--> FetchChangeTemplate");
  let type = 'CV_ALUMNI'
  if(templateId === 2){
    type = 'CV_HRD'
  }
  dispatch(fetchChangeTemplateRequest());
  api
    .put(
      `/profiles/template/${uuid}?type=${type}`,
      {},

      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + decryptToken() ?? decryptTokenSecond(),
        },
      },
    )
    .then((res) => {
      console.log(res);
      let payload = res?.data?.payload;
      let error = res?.data?.error;
      payload && dispatch(fetchChangeTemplateSuccess(payload));
      payload && CUSTOM_SUCCESSFUL(res?.data?.message);
      if (payload) {
        dispatch(fetchOwnProfiles());
      } else {
        error && CUSTOM_ERROR(error ?? "Unknown");
      }
    })
    .catch((err) => {
      let message = err?.response?.data?.error ?? err?.message ?? err?.message;
      console.log(err);
      CUSTOM_ERROR(message ?? "Unknown");
      dispatch(fetchChangeTemplateFailure(message));
    });
};

const fetchChangeTemplateRequest = () => {
  return {
    type: CHANGE_TEMPLATE_REQUEST,
  };
};

const fetchChangeTemplateSuccess = (data) => {
  return {
    type: CHANGE_TEMPLATE_SUCCESS,
    payload: data,
  };
};

const fetchChangeTemplateFailure = (err) => {
  return {
    type: CHANGE_TEMPLATE_FAILURE,
    payload: err,
  };
};
