import { toast } from "react-toastify";
const notify = () => {
  toast("Default Notification !");

  toast.success("Success Notification !", {
    position: toast.POSITION.TOP_CENTER,
  });

  toast.error("Error Notification !", {
    position: toast.POSITION.TOP_LEFT,
  });

  toast.warn("Warning Notification !", {
    position: toast.POSITION.BOTTOM_LEFT,
  });

  toast.info("Info Notification !", {
    position: toast.POSITION.BOTTOM_CENTER,
  });

  toast("Custom Style Notification with css class!", {
    position: toast.POSITION.BOTTOM_RIGHT,
    className: "foo-bar",
  });
};

// success
export const SUCCESS_CREATED = (message) =>
  toast.success(message ? message : "Successfully created!", {
    position: toast.POSITION.TOP_CENTER,
  });

export const SUCCESS_UPDATED = (message) =>
  toast.success(message ? message : "Successfully updated!", {
    position: toast.POSITION.TOP_CENTER,
  });

export const SUCCESS_DELETED = (message) =>
  toast.success(message ? message : "Successfully deleted!", {
    position: toast.POSITION.TOP_CENTER,
  });

//   error
export const ERROR_CREATED = (message) =>
  toast.error(message ? message : "Error create!", {
    position: toast.POSITION.TOP_CENTER,
  });

export const ERROR_UPDATED = (message) =>
  toast.error(message ? message : "Error update!", {
    position: toast.POSITION.TOP_CENTER,
  });

export const ERROR_DELETED = (message) =>
  toast.error(message ? message : "Error delete!", {
    position: toast.POSITION.TOP_CENTER,
  });

export const CUSTOM_WARNING = (message) => {
  toast.warn(message, {
    position: toast.POSITION.TOP_LEFT,
  });
}