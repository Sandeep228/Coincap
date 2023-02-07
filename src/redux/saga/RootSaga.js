import { spawn } from "redux-saga/effects";

import WatcherSaga from "./handlers/fetchRequestHandler";

function* rootSaga() {
  yield spawn(WatcherSaga);
}
export default rootSaga;
