import ordersTypes from './orders-types';
import { takeLatest, put, all, call } from 'redux-saga/effects';
import { handleSaveOrder } from './orders-helpers';
import { auth } from '../../firebase/utils';

export function* saveOrder({ payload }) {
  const timestamp = new Date();
  try {
    yield handleSaveOrder({
      ...payload,
      orderUserID: auth.currentUser.uid,
      createdDate: timestamp,
    });
  } catch (err) {
    // console.log(err)
  }
}

export function* onSaveOrderHistoryStart() {
  yield takeLatest(ordersTypes.SAVE_ORDER_HISTORY_START, saveOrder);
}

export default function* ordersSagas() {
  yield all([call(onSaveOrderHistoryStart)]);
}
