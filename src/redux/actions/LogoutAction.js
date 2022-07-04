import { CUSTOM_SUCCESSFUL } from "../../commons/notify/Notify";
import { fetchIsAucthenticated } from "./IsAuthenticationAction";

// action type
export const LOG_OUT = "LOG_OUT";

export const fetchLogout = () => dispatch => {
    dispatch(fetchIsAucthenticated(false))
    localStorage.setItem('isAuth', false)
    localStorage.removeItem('accessToken')
    CUSTOM_SUCCESSFUL("Log out successfully")
    logout()
}

const logout = () => {
  localStorage.removeItem('username')
  localStorage.removeItem('email')
    return {
      type: LOG_OUT,
    };
  };
  
  