import {
    UPDATE_STATUS_USER_SUCCESS,
    UPDATE_STATUS_USER_REQUEST,
    UPDATE_STATUS_USER_FAILURE,
  } from "../actions/UpdateStatusUserAction";
  
  const initialState = {
    loading: false,
    items: "",
    error: "",
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case UPDATE_STATUS_USER_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case UPDATE_STATUS_USER_SUCCESS:
        return {
          loading: false,
          items: action.payload,
          error: "",
        };
  
      case UPDATE_STATUS_USER_FAILURE:
        return {
          loading: false,
          items: "",
          error: action.payload,
        };
  
      default:
        return state;
    }
  }
  