import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from "redux-saga";
import reducers from '../reducers'
import StoreInfo from "../sagas/StoreInfo";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(StoreInfo);

export default store