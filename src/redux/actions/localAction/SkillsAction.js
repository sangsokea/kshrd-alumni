export const SKILLS = "SKILLS";

export const fetchSkills = (data) => {
  return {
    type: SKILLS,
    payload: data,
  };
};
