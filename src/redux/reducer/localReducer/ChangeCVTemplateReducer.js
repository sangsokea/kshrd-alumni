import { CHANGE_CV_TEMPLATE } from "../../actions/localAction/ChangeCVTemplateAction";

const initialState = false;
export default function (state = initialState, action) {
  if (action.type === CHANGE_CV_TEMPLATE) {
    return action.payload;
  } else {
    return state;
  }
}
