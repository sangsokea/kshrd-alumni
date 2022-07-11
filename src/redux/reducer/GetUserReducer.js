import {
    GET_USER_SUCCESS,
    GET_USER_REQUEST,
    GET_USER_FAILURE,
  } from "../actions/GetUserAction";
  
  const initialState = {
    loading: false,
    items: "",
    error: "",
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case GET_USER_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case GET_USER_SUCCESS:
        return {
          loading: false,
          items: action.payload,
          error: "",
        };
  
      case GET_USER_FAILURE:
        return {
          loading: false,
          items: "",
          error: action.payload,
        };
  
      default:
        return state;
    }
  }
  