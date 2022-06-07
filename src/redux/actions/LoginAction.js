import { api } from "../../api";

// action type
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

// action

export const fetchLogin = (email, username, password) => (dispatch) => {
  console.log("--> FetchLogin");
  dispatch(fetchLoginRequest());
  api
    .post(
      "/authentication/register",
      {
        email,
        username,
        password
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      },
    )
    .then((res) => {
      console.log(`--> fetch regiter ${res}`);
      if (!res?.data?.payload.error) {
        dispatch(fetchLoginSuccess(res?.data?.payload));
      } else {
        dispatch(fetchLoginFailure(res?.data?.payload.error));
      }
    })
    .catch((err) => {
      let message = err?.response?.data?.error ?? "Unknow error!";
      console.log(`fetch register error`);
      console.log(err);
      dispatch(fetchLoginFailure(message));
    });
};

const fetchLoginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

const fetchLoginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

const fetchLoginFailure = (err) => {
  return {
    type: LOGIN_FAILURE,
    payload: err,
  };
};
