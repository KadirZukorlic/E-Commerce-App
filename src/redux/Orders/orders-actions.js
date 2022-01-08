import ordersTypes from './orders-types';

export const saveOrderHistory = (order) => ({
  type: ordersTypes.SAVE_ORDER_HISTORY_START,
  payload: order,
});

export const getUserOrderHistory = (uid) => ({
  type: ordersTypes.GET_USER_ORDER_HISTORY,
  payload: uid,
});

export const setUserOrderHistory = (history) => ({
  type: ordersTypes.SET_USER_ORDER_HISTORY,
  payload: history,
});

export const getOrderDetailsStart = (orderID) => ({
  type: ordersTypes.GET_ORDER_DETAILS_START,
  payload: orderID,
});

export const setOrderDetails = (order) => ({
  type: ordersTypes.SET_ORDER_DETAILS,
  payload: order,
});

export const getAllOrdersStart = () => ({
  type: ordersTypes.GET_ALL_ORDERS_START,
});

export const setAllOrders = (allOrders) => ({
  type: ordersTypes.SET_ALL_ORDERS,
  payload: allOrders
})