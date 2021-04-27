import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
// import thunk from 'redux-thunk';
import reducer from './reducer';
import TodoSagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?  
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
);

// 1.store是唯一的
// 2.只有store能改变自己的内容：reducer将新数据返回给store，store自己对自己更新
// 3.Reducer必须是个纯函数：给一个固定的输入就会有一个固定的输出，且不会有任何副作用
const store = createStore(
  reducer,
  enhancer
);

sagaMiddleware.run(TodoSagas);

export default store;
