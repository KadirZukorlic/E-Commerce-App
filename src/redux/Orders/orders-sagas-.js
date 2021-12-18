import ordersTypes from "./orders-types";
import {takeLatest, put, all, call} from 'redux-saga/effects';

export function* saveOrder({ payload }) {


}

export function* onSaveOrderHistoryStart() {
    yield takeLatest(ordersTypes.SAVE_ORDER_HISTORY_START, saveOrder())
}

export default function* ordersSagas() {
    yield all([
        call(onSaveOrderHistoryStart)
    ])
}