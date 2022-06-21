export const IS_AUTHENTICATED = 'IS_AUTHENTICATED';

export const isAucthenticated = isAuth => {
  return {
    type: IS_AUTHENTICATED,
    payload: isAuth,
  };
};