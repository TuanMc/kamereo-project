// For scalable purpose:
// This page will content list of redux sagas

import { fork } from 'redux-saga/effects';
import StoreInfo from './StoreInfo';

export default function* rootSaga() {
    yield [
        fork(StoreInfo),
    ];
}