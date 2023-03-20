import * as CART_CONSTANTS from "./constants";

const initState = {
  cartItems: [],
};

function cartReducer(state = initState, action) {
  switch (action.type) {
    case CART_CONSTANTS.ADD_TO_CART:
      const FoundItem = state.cartItems?.find(
        (item) => item.id === action.payload.id
      );

      if (FoundItem) {
        const Edited = state.cartItems.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });

        return {
          cartItems: Edited,
        };
      } else {
        return {
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }

    case CART_CONSTANTS.REMOVE_FROM_CART:
      const Edited = state.cartItems.map((item) => {
        if (item?.id === action.payload.id) {
          if (item?.quantity !== 1) {
            return { ...item, quantity: item?.quantity - 1 };
          }
        } else {
          return item;
        }
      });

      return {
        cartItems: Edited.filter(Boolean),
      };

    default:
      return state;
  }
}

export default cartReducer;
