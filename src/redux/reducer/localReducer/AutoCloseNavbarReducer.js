import { AUTO_CLOSE_NAVBAR } from "../../actions/localAction/AutoCloseNavbar"
  
const initialState = false;
  export default function (state= initialState , action) {
    if(action.type === AUTO_CLOSE_NAVBAR) {
        return action.payload
    }else{
        return state
    }
  }
  