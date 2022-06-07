import {
    EMAIL_SUCCESS,
    EMAIL_REQUEST,
    EMAIL_FAILURE,
  } from "../actions/EmailAction";
  
  const initialState = {
    loading: false,
    items: "",
    error: "",
  };
  
  export default function (state = initialState, action) {
    console.log("Action " + action);
    switch (action.type) {
      case EMAIL_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case EMAIL_SUCCESS:
        return {
          loading: false,
          items: action.payload,
          error: "",
        };
  
      case EMAIL_FAILURE:
        return {
          loading: false,
          items: "",
          error: action.payload,
        };
  
      default:
        return state;
    }
  }
  