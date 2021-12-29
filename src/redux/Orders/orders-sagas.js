import ordersTypes from './orders-types';
import { takeLatest, put, all, call } from 'redux-saga/effects';
import { handleSaveOrder, handleGetUserOrderHistory } from './orders-helpers';
import { auth } from '../../firebase/utils';
import { setUserOrderHistory } from './orders-actions'


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
  const timestamp = new Date();
  try {
    yield handleSaveOrder({
      ...payload,
      orderUserID: auth.currentUser.uid,
      createdDate: timestamp,
    });

    // yield put(
      // clearCart() //create after this action to clear cart after saving order in db
    // )
  } catch (err) {
    // console.log(err)
  }
}

export function* onSaveOrderHistoryStart() {
  yield takeLatest(ordersTypes.SAVE_ORDER_HISTORY_START, saveOrder);
}

export default function* ordersSagas() {
  yield all([
    call(onSaveOrderHistoryStart),
    call(onGetUserOrderHistoryStart),
  ]);
}
