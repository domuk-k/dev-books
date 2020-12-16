import { call, put, takeLatest } from 'redux-saga/effects';
import BookService from '../../../../services/Book';
import {
  addBooksSuccess,
  deleteBooksSuccess,
  fail,
  getBooksSuccess,
  start,
  updateBooksSuccess,
} from '../actions';
import { BookInfo } from '../types';
import {
  START_GET_BOOK,
  START_ADD_BOOK,
  START_UPDATE_BOOK,
  START_DELETE_BOOK,
} from './actions';

export const startGetBooks = () => ({
  type: START_GET_BOOK,
});

export const startAddBook = (payload: BookInfo) => ({
  type: START_ADD_BOOK,
  payload: payload,
});

export const startUpdateBook = (payload: Partial<BookInfo>) => ({
  type: START_UPDATE_BOOK,
  payload: payload,
});

export const startDeleteBook = (payload: Partial<BookInfo>) => ({
  type: START_DELETE_BOOK,
  payload: payload,
});

function* startGetBooksSaga() {
  try {
    yield put(start());
    const books = yield call(BookService.get);
    yield put(getBooksSuccess(books));
  } catch (error) {
    yield put(fail(error));
  }
}

function* startAddBooksSaga() {
  try {
    yield put(start());
    const book = yield call(BookService.add);
    yield put(addBooksSuccess(book));
  } catch (error) {
    yield put(fail(error));
  }
}

function* startUpdateBooksSaga() {
  try {
    yield put(start());
    const books = yield call(BookService.get);
    yield put(updateBooksSuccess(books));
  } catch (error) {
    yield put(fail(error));
  }
}

function* startDeleteBooksSaga() {
  try {
    yield call(BookService.remove);
    yield put(deleteBooksSuccess());
  } catch (error) {
    yield put(fail());
  }
}

export default function* booksSaga() {
  yield takeLatest(START_GET_BOOK, startGetBooksSaga);
  yield takeLatest(START_ADD_BOOK, startAddBooksSaga);
  yield takeLatest(START_UPDATE_BOOK, startUpdateBooksSaga);
  yield takeLatest(START_DELETE_BOOK, startDeleteBooksSaga);
}
