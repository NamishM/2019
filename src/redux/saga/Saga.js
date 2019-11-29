import {
  getItemDetailsAPI
} from '../api/API';
import { call, put, takeEvery, all } from 'redux-saga/effects';
import * as actions from '../actions/Actions';
import * as types from '../constants/ActionTypes';

export function* getItemListing() {
  const result = yield call(getItemDetailsAPI);
  if (result.state === 'success') {
    yield put(actions.onItemsRequestSuccess(result.data.record));
  } else {
    yield put(actions.onItemsRequestFailure('Failure in API'));
  }
}

export function* watchForItemsRequest() {
  yield takeEvery(types.ITEMS_REQUESTED, getItemListing);
}

export function* rootSaga() {
	yield all([
    watchForItemsRequest(),
	]);
}
