import { EXPERIENCE } from "../../actions/localAction/ExperienceAction"
  
const initialState = '';
  export default function (state= initialState , action) {
    if(action.type === EXPERIENCE) {
        return action.payload
    }else{
        return state
    }
  }
  