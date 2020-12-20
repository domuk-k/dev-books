import { all } from 'redux-saga/effects';
import booksSaga from '../modules/book/saga/saga';
import authSaga from '../modules/auth/saga/saga';

export default function* rootSaga() {
  yield all([booksSaga(), authSaga()]);
}
