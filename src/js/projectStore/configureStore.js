import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/index';
import rootSage from '../sagas/index'
//createSagaMiddleware 创建一个 Redux 中间件，将 Sagas 与 Redux Store 建立连接
const configureStore = preloadedState => {
	const sagaMiddleware = createSagaMiddleware()
	const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(sagaMiddleware, createLogger())
      // applyMiddleware 是redux的原生方法，它将所有中间件组成一个数组，依次执行。
    )
  )
  //动态执行 saga。用于 applyMiddleware 阶段之后执行 Sagas。
  sagaMiddleware.run(rootSage);
  // store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END);
  return store;
}
const store = configureStore();
export default store
 
