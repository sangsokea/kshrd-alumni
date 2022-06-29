export const PORTFOLIO_CHANGE = "PORTFOLIO_CHANGE";

export const fetchPortfolioPage = (data) => {
    return {
      type: PORTFOLIO_CHANGE,
      payload: data,
    };
  };