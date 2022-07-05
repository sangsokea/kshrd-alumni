export const EDITOR_COMPONENT = "EDITOR_COMPONENT";

export const fetchEditorComponent = (data) => {
  return {
    type: EDITOR_COMPONENT,
    payload: data,
  };
};