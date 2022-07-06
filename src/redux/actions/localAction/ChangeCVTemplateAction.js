export const CHANGE_CV_TEMPLATE = "CHANGE_CV_TEMPLATE";

export const fetchChangeCVTemplate = (data) => {
  return {
    type: CHANGE_CV_TEMPLATE,
    payload: data,
  };
};
