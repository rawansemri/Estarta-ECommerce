import * as AUTH_CONSTANTS from "./constants";
import magic from "../../lib/magic-sdk";

export function Login(email) {
  return async (dispatch) => {
    dispatch({
      type: AUTH_CONSTANTS.AUTH_LOADING,
    });
    try {
      const res = await magic.auth.loginWithMagicLink({ email });
      if (res) {
        const Token = await magic.user.getIdToken();
        const userMetaData = await magic.user.getMetadata();
        localStorage.setItem("token", Token);
        localStorage.setItem("user", JSON.stringify(userMetaData));
        dispatch({
          type: AUTH_CONSTANTS.AUTH_SUCCESS,
          payload: { Token, userMetaData },
        });
        return true;
      }
    } catch (error) {
      dispatch({
        type: AUTH_CONSTANTS.AUTH_ERROR,
        payload: error,
      });
      return false;
    }
  };
}

export function Logout() {
  return async (dispatch) => {
    dispatch({
      type: AUTH_CONSTANTS.AUTH_LOADING,
    });
    try {
      const res = await magic.user.logout();
      if (res) {
        localStorage.clear();
        dispatch({
          type: AUTH_CONSTANTS.CLEAR,
        });
        return true;
      }
    } catch (error) {
      dispatch({
        type: AUTH_CONSTANTS.AUTH_ERROR,
        payload: error,
      });
      return false;
    }
  };
}

export function validateToken() {
  return async (dispatch) => {
    // const localStorageToken = !!localStorage.getItem("token");

    dispatch({
      type: AUTH_CONSTANTS.AUTH_LOADING,
    });
    try {
      await magic.user.getIdToken();
      dispatch({ type: AUTH_CONSTANTS.RESET_LOADING });
    } catch (error) {
      localStorage.clear();
      dispatch({
        type: AUTH_CONSTANTS.CLEAR,
      });
      return false;
    }
  };
}
