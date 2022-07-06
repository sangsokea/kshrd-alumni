export const EDUCATION = "EDUCATION";

export const fetchEducation = (data) => {
  return {
    type: EDUCATION,
    payload: data,
  };
};
