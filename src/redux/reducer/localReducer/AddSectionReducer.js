import { ADD_SECTION } from "../../actions/localAction/AddSectionAction";

const initialState = "";
export default function (state = initialState, action) {
  if (action.type === ADD_SECTION) {
    return action.payload;
  } else {
    return state;
  }
}
