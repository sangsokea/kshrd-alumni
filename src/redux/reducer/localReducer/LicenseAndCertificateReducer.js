import { LICENSES } from "../../actions/localAction/LicenseAndCertificateAction";

const initialState = "";
export default function (state = initialState, action) {
  if (action.type === LICENSES) {
    return action.payload;
  } else {
    return state;
  }
}
