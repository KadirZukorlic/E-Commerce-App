import ordersTypes from './orders-types';
import { takeLatest, put, all, call } from 'redux-saga/effects';
import { handleSaveOrder, handleGetUserOrderHistory, handleGetOrderDetails, handleGetAllOrders } from './orders-helpers';
import { auth } from '../../firebase/utils';
import { setUserOrderHistory, setOrderDetails, setAllOrders } from './orders-actions'


export function* getUserOrderHistory({payload}) {
  try {
      const history = yield handleGetUserOrderHistory(payload)
    yield put(
      setUserOrderHistory(history)
    );

  } catch (err) {
    console.log(err)
  }
}


export function* onGetUserOrderHistoryStart() {
  yield takeLatest(ordersTypes.GET_USER_ORDER_HISTORY, getUserOrderHistory)
}



export function* saveOrder({ payload }) {
  try {
    const timestamp = new Date();
    
    yield handleSaveOrder({
      ...payload,
      orderUserID: auth.currentUser.uid,
      createdDate: timestamp,
    });

    // yield put(
      // clearCart() //create action and put it after saving order to cart after saving order in db
    // )
  } catch (err) {
    // console.log(err)
  }
}

export function* onSaveOrderHistoryStart() {
  yield takeLatest(ordersTypes.SAVE_ORDER_HISTORY_START, saveOrder);
}

export function* getOrderDetails({ payload }) {
  try {
 
    const order = yield handleGetOrderDetails(payload);

    yield put(
      setOrderDetails(order)
      )

  } catch (err) {
    // console.log(err)
  }
}

export function* onGetOrderDetailsStart() {
  yield takeLatest(ordersTypes.GET_ORDER_DETAILS_START, getOrderDetails)
}

export function* getAllOrders() {
  try {

    const orders = yield handleGetAllOrders()

    yield put(
      setAllOrders(orders)
    )

  } catch (err) {
    console.log(err)
  }
}

export function* onGetAllOrdersStart() {
  yield takeLatest(ordersTypes.GET_ALL_ORDERS_START, getAllOrders)
}

export default function* ordersSagas() {
  yield all([
    call(onSaveOrderHistoryStart),
    call(onGetUserOrderHistoryStart),
    call(onGetOrderDetailsStart),
    call(onGetAllOrdersStart),
  ]);
}
