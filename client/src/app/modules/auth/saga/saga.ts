import { call, put, takeLatest } from 'redux-saga/effects';
import { AuthInfo } from '../types';
import {
  START_AUTH,
  START_EMAIL_CHECK,
  START_LOGIN,
  START_LOGOUT,
} from './action';
import service from '../../../../services';
import {
  authFail,
  authStart,
  authSuccess,
  emailCheckError,
  emailCheckFail,
  emailCheckStart,
  emailCheckSuccess,
  loginSuccess as SignInSuccess,
  logout,
} from '../actions';
import { push } from 'connected-react-router';
import { startGetBooks } from '../../book/saga/saga';

export const startAuth = () => ({
  type: START_AUTH,
});

export const startEmailCheck = (payload: Partial<AuthInfo>) => ({
  type: START_EMAIL_CHECK,
  payload,
});

export const startLogin = (payload: Partial<AuthInfo>) => ({
  type: START_LOGIN,
  payload,
});

export const startLogout = (payload: unknown) => ({
  type: START_LOGOUT,
  payload,
});

function* startAuthSaga() {
  try {
    yield put(authStart());
    const token = yield call(service.storage.get, 'jwt');
    const { user } = yield call(service.user.auth, token);
    yield put(startGetBooks());
    yield put(authSuccess(user));
  } catch (error) {
    yield put(authFail(error));
  }
}

function* startSignInSaga(action: ReturnType<typeof startLogin>) {
  try {
    yield put(authStart());
    const result = yield call(service.user.login, action.payload);
    yield call(service.storage.set, 'jwt', result.user.token);
    if (result.loginResult) yield put(SignInSuccess(result.user));
    else yield put(authFail(result));
  } catch (error) {
    yield put(authFail(error));
  }
}

function* startEmailCheckSaga(action: ReturnType<typeof startEmailCheck>) {
  try {
    yield put(emailCheckStart());
    const { data } = yield call(service.user.checkEmail, action.payload);
    if (data.result) yield put(emailCheckSuccess());
    else yield put(emailCheckFail());
  } catch (e) {
    yield put(emailCheckError());
  }
}

function* startSignOutSaga(action: ReturnType<typeof logout>) {
  try {
    const res = yield call(service.user.logout, action.payload);
    if (res.success) {
      yield put(logout());
      yield put(push('/signin'));
    }
    if (res.error) throw new Error(res.error);
  } catch (error) {
    yield put(authFail(error));
  }
}

export default function* booksSaga() {
  yield takeLatest(START_AUTH, startAuthSaga);
  yield takeLatest(START_LOGIN, startSignInSaga);
  yield takeLatest(START_EMAIL_CHECK, startEmailCheckSaga);
  yield takeLatest(START_LOGOUT, startSignOutSaga);
}
