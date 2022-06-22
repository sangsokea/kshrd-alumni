import {IS_AUTHENTICATED} from '../actions/IsAuthenticationAction';
const isAuthenticated = false;

export default function (state = isAuthenticated, action) {
  if (action.type === IS_AUTHENTICATED) return action.payload;
  else return state;
}
