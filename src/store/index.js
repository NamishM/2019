import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../redux/reducer/appCombined';
import { rootSaga } from '../redux/saga/Saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { responsiveStoreEnhancer } from 'redux-responsive';

export default () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducer,
    compose(
      responsiveStoreEnhancer,
      composeWithDevTools(
        applyMiddleware(sagaMiddleware),
      )
    ),
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
