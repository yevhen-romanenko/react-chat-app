import axios from 'axios';
import api from "../shared/config/api";

import { call, put , takeEvery, all } from "redux-saga/effects";
import { UPDATE_MESSAGE, FETCH_MESSAGES } from "./actionTypes";

export function* fetchMessages() {
    try {
        const messages = yield call (axios.get, `${api.url}/message`);
        yield put({
            type: 'FETCH_MESSAGES_SUCCESS',
            payload: {messages: messages.data} 
        })
    } catch (error) {
        console.log('fetchUsers error: ', error.message)
    }
}

function* watchFetchMessages() {
    yield takeEvery(FETCH_MESSAGES, fetchMessages)
}

export function* updateMessage(action) {
	const id = action.payload.id;
	const updatedMessage = { ...action.payload.data };
	
	try {
		yield call(axios.put, `${api.url}/message/${id}`, updatedMessage);
		yield put({ type: FETCH_MESSAGES });
	} catch (error) {
		console.log('updateMessage error:', error.message);
	}
}

function* watchUpdateMessage() {
	yield takeEvery(UPDATE_MESSAGE, updateMessage)
}

export default function* userMessagesSagas() {
    yield all([
        watchFetchMessages(),
        watchUpdateMessage()
    ])

};