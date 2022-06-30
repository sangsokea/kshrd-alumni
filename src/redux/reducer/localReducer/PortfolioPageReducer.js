import { PORTFOLIO_CHANGE } from "../../actions/localAction/PortfolioPageAction"
  
const initialState = false;
  export default function (state= initialState , action) {
    if(action.type === PORTFOLIO_CHANGE) {
        return action.payload
    }else{
        return state
    }
  }
  