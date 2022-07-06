export const SKILL = "SKILL";

export const fetchSkill = (data) => {
  return {
    type: SKILL,
    payload: data,
  };
};
