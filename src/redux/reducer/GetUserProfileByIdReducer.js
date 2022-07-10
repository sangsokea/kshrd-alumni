import {
    GET_USER_PROFILE_BY_ID_SUCCESS,
    GET_USER_PROFILE_BY_ID_REQUEST,
    GET_USER_PROFILE_BY_ID_FAILURE,
  } from "../actions/GetUerProfileByIdAction";
  
  const initialState = {
    loading: false,
    items: "",
    error: "",
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case GET_USER_PROFILE_BY_ID_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case GET_USER_PROFILE_BY_ID_SUCCESS:
        return {
          loading: false,
          items: action.payload,
          error: "",
        };
  
      case GET_USER_PROFILE_BY_ID_FAILURE:
        return {
          loading: false,
          items: "",
          error: action.payload,
        };
  
      default:
        return state;
    }
  }
  