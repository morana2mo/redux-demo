import {
	createStore,
	applyMiddleware,
	compose
} from 'redux';
//import { devToolsEnhancer } from 'redux-devtools-extension';
// import invariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import reducer from '../reducers';

//applyMiddleware来自redux可以包装store的dispatch

//thunk作用是使action创建函数可以返回一个function代替一个action对象

let store;
if (!(window.__REDUX_DEVTOOLS_EXTENSION__ || window.__REDUX_DEVTOOLS_EXTENSION__)) {
	store = createStore(
		reducer,
		applyMiddleware(thunk)
	);
} else {
	store = createStore(
		reducer,
		compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) //插件调试，未安装会报错
	);
}
// //热替换选项
// if (module.hot) {
// 	module.hot.accept('../reducers', () => {
// 		let nextReducer = require('../reducers')
// 		store.replaceReducer(nextReducer)
// 	})
// }

export default store