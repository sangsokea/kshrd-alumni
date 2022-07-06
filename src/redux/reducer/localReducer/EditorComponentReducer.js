import { EDITOR_COMPONENT } from "../../actions/localAction/EditorComponentAction"; 

const initialState = "";
export default function (state = initialState, action) {
  if (action.type === EDITOR_COMPONENT) {
    return action.payload;
  } else {
    return state;
  }
}
