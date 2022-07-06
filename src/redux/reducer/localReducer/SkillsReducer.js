import { SKILL } from "../../actions/localAction/SkillsAction";

const initialState = "";
export default function (state = initialState, action) {
  if (action.type === SKILL) {
    return action.payload;
  } else {
    return state;
  }
}
