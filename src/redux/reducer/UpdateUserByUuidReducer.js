import {
    UPDATE_USER_BY_UUID_SUCCESS,
    UPDATE_USER_BY_UUID_REQUEST,
    UPDATE_USER_BY_UUID_FAILURE,
  } from "../actions/UpdateUserByUuidAction";
  
  const initialState = {
    loading: false,
    items: "",
    error: "",
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case UPDATE_USER_BY_UUID_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case UPDATE_USER_BY_UUID_SUCCESS:
        return {
          loading: false,
          items: action.payload,
          error: "",
        };
  
      case UPDATE_USER_BY_UUID_FAILURE:
        return {
          loading: false,
          items: "",
          error: action.payload,
        };
  
      default:
        return state;
    }
  }
  