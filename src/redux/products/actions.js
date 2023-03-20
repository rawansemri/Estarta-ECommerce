import * as PRODUCTS_CONSTANTS from "./constants";

export function FetchProducts() {
  return async (dispatch) => {
    dispatch({
      type: PRODUCTS_CONSTANTS.PRODUCTS_LOADING,
    });
    try {
      const res = await fetch(
        `https://run.mocky.io/v3/ebee18cb-838a-440f-bf61-e406587748a2`
      );
      const Data = await res.json();
      dispatch({
        type: PRODUCTS_CONSTANTS.FETCH_PRODUCTS_SUCCESS,
        payload: Data,
      });
    } catch (error) {
      dispatch({ type: PRODUCTS_CONSTANTS.PRODUCTS_ERROR, payload: error });
    }
  };
}
