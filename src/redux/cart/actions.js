import * as CART_CONSTANTS from "./constants";

export function addToCart (product){
    return async (dispatch) => {
        dispatch({
          type: CART_CONSTANTS.ADD_TO_CART,
          payload: product,
        });
      };
};

export function removeFromCart(product){
    return async (dispatch) => {
        dispatch({
          type: CART_CONSTANTS.REMOVE_FROM_CART,
          payload: product,
        });
      };
}
