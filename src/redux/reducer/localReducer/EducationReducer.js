import { EDUCATION } from "../../actions/localAction/EducationAction";

const initialState = "";
export default function (state = initialState, action) {
  if (action.type === EDUCATION) {
    return action.payload;
  } else {
    return state;
  }
}
