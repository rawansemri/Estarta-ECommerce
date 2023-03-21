import * as CART_CONSTANTS from "./constants";

const initState = {
  cartItems: [],
};

export default function cartReducer(state = initState, action) {
  switch (action.type) {
    case CART_CONSTANTS.ADD_TO_CART:
      const itemToAdd = action.payload;
      const updatedCartItems = state.cartItems.map((item) => {
        if (item.id === itemToAdd.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });

      if (updatedCartItems.some((item) => item.id === itemToAdd.id)) {
        return { ...state, cartItems: updatedCartItems };
      } else {
        return { ...state, cartItems: [...state.cartItems, { ...itemToAdd, quantity: 1 }] };
      }

    case CART_CONSTANTS.REMOVE_FROM_CART:
      const itemToRemove = action.payload;
      const updatedCartItem = state.cartItems.map((item) => {
        if (item.id === itemToRemove.id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });

      return { ...state, cartItems: updatedCartItem.filter((item) => item.quantity > 0) };

    default:
      return state;
  }
}
