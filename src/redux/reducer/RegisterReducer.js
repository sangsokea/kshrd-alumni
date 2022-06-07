import {
  REGISTER_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_FAILURE,
} from "../actions/RegisterAction";

const initialState = {
  loading: false,
  items: "",
  error: "",
};

export default function (state = initialState, action) {
  console.log("Action " + action);
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        loading: false,
        items: action.payload,
        error: "",
      };

    case REGISTER_FAILURE:
      return {
        loading: false,
        items: "",
        error: action.payload,
      };

    default:
      return state;
  }
}
