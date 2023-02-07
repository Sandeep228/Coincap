import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { reducers } from "../reducers/index.js";
import rootSaga from "../saga/RootSaga.js";
const SagaMiddleWare = createSagaMiddleware();
const Store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(SagaMiddleWare))
);
SagaMiddleWare.run(rootSaga);

export default Store;
