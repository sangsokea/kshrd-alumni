export const ABOUT_ME_CHANGE = "ABOUT_ME_CHANGE";

export const fetchAboutMePage = (data) => {
    return {
      type: ABOUT_ME_CHANGE,
      payload: data,
    };
  };