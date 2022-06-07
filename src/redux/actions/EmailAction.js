import { api } from "../../api";

// action type
export const EMAIL_SUCCESS = "EMAIL_SUCCESS";
export const EMAIL_REQUEST = "EMAIL_REQUEST";
export const EMAIL_FAILURE = "EMAIL_FAILURE";

// action

export const fetchEmail = (email) => (dispatch) => {
  console.log("--> FetchEmail");
  dispatch(fetchEmailRequest());
  api
    .get("/account/send-email?email=" + email)
    .then((res) => {
      console.log("send-email response");
      console.log(res);
      dispatch(fetchEmailSuccess(res?.data?.payload));
    })
    .catch((err) => {
      let message = err?.response?.data?.error ?? "Unknow error!";
      console.log(`fetch send-email error`);
      console.log(err);
      dispatch(fetchEmailFailure(message));
    });
};

const fetchEmailRequest = () => {
  return {
    type: EMAIL_REQUEST,
  };
};

const fetchEmailSuccess = (data) => {
  return {
    type: EMAIL_SUCCESS,
    payload: data,
  };
};

const fetchEmailFailure = (err) => {
  return {
    type: EMAIL_FAILURE,
    payload: err,
  };
};
