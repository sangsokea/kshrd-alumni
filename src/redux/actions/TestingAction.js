import { api } from "../../api";

// action type
export const Testing_SUCCESS = "Testing_SUCCESS";
export const Testing_REQUEST = "Testing_REQUEST";
export const Testing_FAILURE = "Testing_FAILURE";

// action

export const fetchTesting = () => (dispatch) => {
  console.log("--> FetchTesting");

  dispatch(fetchTestingRequest());
  api
    .get(
      "/endpoin",
      {
        
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYW5nc29rZWExMDlAZ21haWwuY29tIiwiaWF0IjoxNjU1NzIwODYwLCJleHAiOjE2NTgzNTA2NjB9.YBAA5fqZdpUx0XTmwliKZR16IiD0Eak7S105STIeS2jOEdAkemgE4G5BDl4soSeLX9Y3j07quzxUbWcA-E_U7w",
        },
      },
    )
    .then((res) => {
      console.log(`--> fetch regiter`);
      console.log(res);
      if (!res?.data?.payload.error) {
        dispatch(fetchTestingSuccess(res?.data?.payload));
      } else {
        dispatch(fetchTestingFailure(res?.data?.payload.error));
      }
    })
    .catch((err) => {
      let message = err?.response?.data?.error ?? "Unknow error!";
      console.log(`fetch Testing error`);
      console.log(err);
      dispatch(fetchTestingFailure(message));
    });
};

const fetchTestingRequest = () => {
  return {
    type: Testing_REQUEST,
  };
};

const fetchTestingSuccess = (data) => {
  return {
    type: Testing_SUCCESS,
    payload: data,
  };
};

const fetchTestingFailure = (err) => {
  return {
    type: Testing_FAILURE,
    payload: err,
  };
};
