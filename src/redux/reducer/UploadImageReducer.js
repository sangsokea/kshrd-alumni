import {
    UPLOAD_IMAGE_SUCCESS,
    UPLOAD_IMAGE_REQUEST,
    UPLOAD_IMAGE_FAILURE,
  } from "../actions/UploadImageAction";
  
  const initialState = {
    loading: false,
    items: "",
    error: "",
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case UPLOAD_IMAGE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case UPLOAD_IMAGE_SUCCESS:
        return {
          loading: false,
          items: action.payload,
          error: "",
        };
  
      case UPLOAD_IMAGE_FAILURE:
        return {
          loading: false,
          items: "",
          error: action.payload,
        };
  
      default:
        return state;
    }
  }
  