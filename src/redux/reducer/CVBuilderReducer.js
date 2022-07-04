import {
    CV_BUILDER_SUCCESS,
    CV_BUILDER_REQUEST,
    CV_BUILDER_FAILURE,
  } from "../actions/CVBuilderAction";
  
  const initialState = {
    loading: false,
    items: "",
    error: "",
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case CV_BUILDER_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case CV_BUILDER_SUCCESS:
        return {
          loading: false,
          items: action.payload,
          error: "",
        };
  
      case CV_BUILDER_FAILURE:
        return {
          loading: false,
          items: "",
          error: action.payload,
        };
  
      default:
        return state;
    }
  }
  