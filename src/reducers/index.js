// For scalable purpose:
// This page will content list of redux reducers

import {combineReducers} from 'redux';
import StoreInfo from './StoreInfo';

export default combineReducers({
    storeInfo: StoreInfo
});