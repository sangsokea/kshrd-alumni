import { ABOUT_ME_CHANGE } from "../../actions/localAction/AboutMePageAction";

const initialState = false;
export default function (state = initialState, action) {
  if (action.type === ABOUT_ME_CHANGE) {
    return action.payload;
  } else {
    return state;
  }
}
