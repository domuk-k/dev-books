import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from './modules';
import { History } from 'history';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './middleware/saga';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(history: History): any {
  const store = createStore(
    rootReducer(history),
    composeWithDevTools(
      applyMiddleware(routerMiddleware(history), sagaMiddleware)
    )
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
