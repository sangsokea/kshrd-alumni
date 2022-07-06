import {
    LOGIN_SUCCESS,
    LOGIN_REQUEST,
    LOGIN_FAILURE,
  } from "../actions/LoginAction";

  import { LOG_OUT } from "../actions/LogoutAction";
  
  const initialState = {
    loading: false,
    items: "",
    error: "",
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case LOGIN_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case LOGIN_SUCCESS:
        return {
          loading: false,
          items: action.payload,
          error: "",
        };
  
      case LOGIN_FAILURE:
        return {
          loading: false,
          items: "",
          error: action.payload,
        };

        case LOG_OUT: 
        return state
  
      default:
        return state;
    }
  }
  