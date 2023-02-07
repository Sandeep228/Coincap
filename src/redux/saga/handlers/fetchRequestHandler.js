import { call, put, takeLatest } from "redux-saga/effects";

import fetchDataRequest from "../requests/fetchDataRequest";

function* handleFetchData() {
  try {
    const data = yield call(fetchDataRequest);
    yield put({ type: "GET_DATA_SUCCESS", payload: data });
  } catch (error) {
    yield put({ type: "FETCH_REQUEST_ERROR", payload: error.message });
  }
}

function* WatcherSaga() {
  yield takeLatest("FETCH_DATA_REQUEST", handleFetchData);
}
export default WatcherSaga;
