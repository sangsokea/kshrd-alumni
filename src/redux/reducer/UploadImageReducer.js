import {
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_REQUEST,
  UPLOAD_IMAGE_FAILURE,
} from "../actions/UploadImageAction";

const initialState = {
  loading: false,
  items: {
    licence: "",
    profile: "",
    account: "",
    cover: "",
  },
  error: "",
  target: "",
};

export default function (state = initialState, action) {
  const oldImageStorage = JSON.parse(localStorage.getItem('images'))

  let oldItems = oldImageStorage ?? state.items

  switch (action.type) {
    case UPLOAD_IMAGE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPLOAD_IMAGE_SUCCESS:
      if (action.target === "profile") {
        localStorage.setItem(
          "images",
          JSON.stringify({
            ...oldItems,
            profile: action.payload,
          }),
        );
        return {
          loading: false,
          items: {
            ...oldItems,
            profile: action.payload,
            
          },
          error: "",
          target: action.target,
        };
      }
      if (action.target === "licence") {
        localStorage.setItem(
          "images",
          JSON.stringify({
            ...oldItems,
            licence: action.payload,
          }),
        );
        return {
          loading: false,
          items: {
            ...oldItems,
            licence: action.payload,
            
          },
          error: "",
          target: action.target,
        };
      }
      if (action.target === "account") {
        localStorage.setItem(
          "images",
          JSON.stringify({
            ...oldItems,
            account: action.payload,
          }),
        );
        return {
          loading: false,
          items: {
            ...oldItems,
            account: action.payload,
            
          },
          error: "",
          target: action.target,
        };
      }
      if (action.target === "cover") {
        localStorage.setItem(
          "images",
          JSON.stringify({
            ...oldItems,
            cover: action.payload,
          }),
        );
        return {
          loading: false,
          items: {
            ...oldItems,
            cover: action.payload,
          },
          error: "",
          target: action.target,
        };
      }

    case UPLOAD_IMAGE_FAILURE:
      return {
        loading: false,
        items: {
         ...oldItems
        },
        error: action.payload,
        target: "",
      };

    default:
      return state;
  }
}
