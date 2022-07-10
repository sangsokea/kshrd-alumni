import { LANGUAGE } from "../../actions/localAction/LanguageAction";

const initialState = "";
export default function (state = initialState, action) {
  if (action.type === LANGUAGE) {
    return action.payload;
  } else {
    return state;
  }
}
