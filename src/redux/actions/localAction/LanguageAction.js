export const LANGUAGE = "LANGUAGE";

export const fetchLanguage = (data) => {
  return {
    type: LANGUAGE,
    payload: data,
  };
};
