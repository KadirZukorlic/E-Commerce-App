import ordersTypes from './orders-types';

const INITIAL_STATE = {
  orderHistory: [],
  order: {},
};

const ordersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ordersTypes.SET_USER_ORDER_HISTORY:
      return {
        ...state,
        orderHistory: action.payload,
      };
    case ordersTypes.GET_USER_ORDER_HISTORY:
      return {
        ...state,
        order: action.payload,
      };

    default:
      return state;
  }
};

export default ordersReducer;