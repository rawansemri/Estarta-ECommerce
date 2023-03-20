import * as AUTH_CONSTANTS from "./constants";

const initState = {
  isAuth: !!localStorage.getItem('token') || false,
  token: null,
  loading: false,
  user: JSON.parse(localStorage.getItem('user')) || {},
  error: null,
};

function authReducer(state = initState, action) {
  switch (action.type) {
    case AUTH_CONSTANTS.AUTH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case AUTH_CONSTANTS.AUTH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case AUTH_CONSTANTS.AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
        user: action.payload.userMetaData,
        token: action.payload.Token,
      };
    case AUTH_CONSTANTS.CLEAR:
      return {
        token: "",
        isAuth: false,
        user: {},
        loading: false,
        error: null,
      };
    case AUTH_CONSTANTS.RESET_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

export default authReducer;