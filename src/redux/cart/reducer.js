import * as CART_CONSTANTS from "./constants";

const initState = {
  products: [],
  loading: false,
  error: null,
};
function cartReducer(state = initState, action) {
  switch (action.type) {
    case CART_CONSTANTS.CART_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CART_CONSTANTS.CART_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CART_CONSTANTS.FETCH_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    default:
      return state;
  }
}


export default cartReducer;
