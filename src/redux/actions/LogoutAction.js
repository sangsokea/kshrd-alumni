import { CUSTOM_SUCCESSFUL } from "../../commons/notify/Notify";
import { myHistory } from "../../Router/History";
import { fetchIsAucthenticated } from "./IsAuthenticationAction";

// action type
export const LOG_OUT = "LOG_OUT";

export const fetchLogout = () => (dispatch) => {
  dispatch(fetchIsAucthenticated(false));
  CUSTOM_SUCCESSFUL("Log out successfully");
  logout();
};

const logout = () => {
  localStorage.clear();
  localStorage.setItem("isAuth", false);

  myHistory.replace("/");
  window.location.reload();
  return {
    type: LOG_OUT,
  };
};
