import { api } from "../../api";

// action type
export const CV_BUILDER_SUCCESS = "CV_BUILDER_SUCCESS";
export const CV_BUILDER_REQUEST = "CV_BUILDER_REQUEST";
export const CV_BUILDER_FAILURE = "CV_BUILDER_FAILURE";

const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYW5nc29rZWExMDlAZ21haWwuY29tIiwiaWF0IjoxNjU2NzA2MjU2LCJleHAiOjE2NTkzMzYwNTZ9.jQMzrbHK6BcYi0TG-Cu16KxRI3GZmdJzRr6YsmVWsh1h3tFDbWCY8F2xf4oPZM-Ac8Kt9qJydD9nejPCtAkewg'

// action

export const fetchCVBuilder = (requestBody, isPublic) => (dispatch) => {
  console.log("--> FetchCVBuilder");
  dispatch(fetchCVBuilderRequest());
 requestBody? api
    .post(
      "/profiles",
      {
        profileDetails: requestBody,
        public: isPublic 
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Authorization" : `Bearer ${token}`
        },
      },
    )
    .then((res) => {
      console.log(`--> fetch cvbuilder`);
      console.log(res);
      if (!res?.data?.payload.error) {
        dispatch(fetchCVBuilderSuccess(res?.data?.payload));
      } else {
        dispatch(fetchCVBuilderFailure(res?.data?.payload.error));
      }
    })
    .catch((err) => {
      let message = err?.response?.data?.error ?? "Unknow error!";
      console.log(`fetch cvbuilder error`);
      console.log(err);
      dispatch(fetchCVBuilderFailure(message));
    }) : alert("request body empty at post profile");
};

const fetchCVBuilderRequest = () => {
  return {
    type: CV_BUILDER_REQUEST,
  };
};

const fetchCVBuilderSuccess = (data) => {
  return {
    type: CV_BUILDER_SUCCESS,
    payload: data,
  };
};

const fetchCVBuilderFailure = (err) => {
  return {
    type: CV_BUILDER_FAILURE,
    payload: err,
  };
};
