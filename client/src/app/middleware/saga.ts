import { all } from 'redux-saga/effects';
import booksSaga from '../modules/book/saga/saga';

export default function* rootSaga() {
  yield all([booksSaga()]);
}
