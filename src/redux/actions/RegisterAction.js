import { api } from "../../api";

// action type
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

// action

export const fetchRegister = (email, username, password) => (dispatch) => {
  console.log("--> FetchRegister");
  dispatch(fetchRegisterRequest());
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
        dispatch(fetchRegisterSuccess(res?.data?.payload));
      } else {
        dispatch(fetchRegisterFailure(res?.data?.payload.error));
      }
    })
    .catch((err) => {
      let message = err?.response?.data?.error ?? "Unknow error!";
      console.log(`fetch register error`);
      console.log(err);
      dispatch(fetchRegisterFailure(message));
    });
};

const fetchRegisterRequest = () => {
  return {
    type: REGISTER_REQUEST,
  };
};

const fetchRegisterSuccess = (data) => {
  return {
    type: REGISTER_SUCCESS,
    payload: data,
  };
};

const fetchRegisterFailure = (err) => {
  return {
    type: REGISTER_FAILURE,
    payload: err,
  };
};
