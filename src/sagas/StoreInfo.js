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

function* updateStoreDetail(request) {
    var result;
    try {
        // Apply axios to update store info:
        //
        // axios.post(url, {form: request.payload})
        // .then(response => result = response.data)
        // .catch(e => {console.log(e)})

        result = request.payload // update store info state in reducer
        yield delay(2000);
        yield put({ type: "STORE_INFO_UPDATE_SUCCEEDED", payload: result });
    }
    catch (e) {
        yield put({ type: "STORE_INFO_UPDATE_FAILED", message: e.message });
    }
}

function* StoreInfo() {
    yield takeLatest("STORE_INFO_FETCH_REQUESTED", fetchStoreDetail);
    yield takeLatest("STORE_INFO_UPDATE_REQUESTED", updateStoreDetail);
}

export default StoreInfo;