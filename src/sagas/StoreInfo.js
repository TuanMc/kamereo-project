import { takeLatest, put, delay } from "redux-saga/effects";

function* fetchStoreDetail() {
    try {
        const data = require("../storeInfo.json");
        yield delay(2000);
        yield put({ type: "STORE_INFO_FETCH_SUCCEEDED", payload: data });
    }
    catch (e) {
        yield put({ type: "STORE_INFO_FETCH_FAILED", message: e.message });
    }
}

function* StoreInfo() {
    yield takeLatest("STORE_INFO_FETCH_REQUESTED", fetchStoreDetail);
}

export default StoreInfo;