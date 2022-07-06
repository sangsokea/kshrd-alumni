export const ADD_SECTION = "ADD_SECTION";

export const fetchAddSection = (data) => {
  return {
    type: ADD_SECTION,
    payload: data,
  };
};
