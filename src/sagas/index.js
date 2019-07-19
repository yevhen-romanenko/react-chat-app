import { all } from 'redux-saga/effects';
import userPageSagas from '../userPage/sagas';
import userListSagas from '../userList/sagas';
import userMessagesSagas from '../chat/sagas';
import messageEditorSagas from '../messageEditor/sagas';

export default function* rootSaga() {
    yield all ([
        userPageSagas(),
        userListSagas(),
        userMessagesSagas(),
        messageEditorSagas()
    ])
}