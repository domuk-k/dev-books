import { AnyAction, applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import rootReducer, { CombinedState } from './modules';
import { History } from 'history';
import { Reducer } from 'react';
import { BookActionTypes } from './modules/book/types';

export default function configureStore(history: History): any {
  const store = createStore(
    rootReducer(history),
    composeWithDevTools(applyMiddleware(routerMiddleware(history)))
  );

  return store;
}
