import {
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_REQUEST,
  GET_USER_PROFILE_FAILURE,
} from "../actions/GetUserProfileAction";

const initialState = {
  loading: false,
  items: "",
  error: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USER_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_PROFILE_SUCCESS:
      return {
        loading: false,
        items: action.payload,
        error: "",
      };

    case GET_USER_PROFILE_FAILURE:
      return {
        loading: false,
        items: "",
        error: action.payload,
      };

    default:
      return state;
  }
}
