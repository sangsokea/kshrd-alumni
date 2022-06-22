export const IS_AUTHENTICATED = 'IS_AUTHENTICATED';

export const fetchIsAucthenticated = isAuth => {
  return {
    type: IS_AUTHENTICATED,
    payload: isAuth,
  };
};