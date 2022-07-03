export const LICENSES = "LICENSES";

export const fetchLicense = (data) => {
    return {
      type: LICENSES,
      payload: data,
    };
  };