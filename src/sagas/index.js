import { all } from 'redux-saga/effects';
import userPageSagas from '../userPage/sagas';
import userListSagas from '../userList/sagas';

export default function* rootSaga() {
    yield all ([
        userPageSagas(),
        userListSagas()
    ])
}