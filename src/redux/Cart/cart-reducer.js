import cartTypes from './cart-types';

const INITIAL_STATE = {
  cart: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartTypes.ADD_TO_CART_START:
      return {
        ...state,
      };
    default:
      return state;
  }
};
