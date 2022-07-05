export const EXPERIENCE = "EXPERIENCE";

export const fetchExperience = (data) => {
  return {
    type: EXPERIENCE,
    payload: data,
  };
};
