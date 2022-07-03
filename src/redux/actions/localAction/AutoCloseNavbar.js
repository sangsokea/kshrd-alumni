export const AUTO_CLOSE_NAVBAR = "AUTO_CLOSE_NAVBAR";

export const fetchAutoClosedNavbarResponsive = (data) => {
    return {
      type: AUTO_CLOSE_NAVBAR,
      payload: data,
    };
  };