import { SKILLS } from "../../actions/localAction/SkillsAction";

const initialState = "";
export default function (state = initialState, action) {
  if (action.type === SKILLS) {
    return action.payload;
  } else {
    return state;
  }
}
