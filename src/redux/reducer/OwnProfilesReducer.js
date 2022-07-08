import {
    OWN_PROFILES_SUCCESS,
    OWN_PROFILES_REQUEST,
    OWN_PROFILES_FAILURE,
  } from "../actions/OwnProfilesAction";
  
  const initialState = {
    loading: false,
    items: "",
    error: "",
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case OWN_PROFILES_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case OWN_PROFILES_SUCCESS:
        return {
          loading: false,
          items: action.payload,
          error: "",
        };
  
      case OWN_PROFILES_FAILURE:
        return {
          loading: false,
          items: "",
          error: action.payload,
        };
  
      default:
        return state;
    }
  }
  